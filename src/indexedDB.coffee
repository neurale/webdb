class _indexedDB
  db: null

  constructor: (name, schema, version=1, callback) ->
    throw "IndexedDB not supported" if not window.indexedDB
    openRequest = indexedDB.open(dbName, version)
    openRequest.onsuccess = (e) =>
      @db = e.target.result
      for table in schema
        @db.createObjectStore table if not @db.objectStoreNames.contains table

      callback.call callback

    openRequest.onerror = (e) ->
      throw "Error opening database"


  select: (options) -> ""
  insert: (table, data, callback) ->
    if _typeOf(data) is "object"
      @execute table, data, "add", callback

  update: (options) -> ""
  delete: (options) -> ""
  drop: (options) -> ""
  execute: (table, data, operation, callback) ->
    store = @db.transaction([table],"readwrite").objectStore(table)
    request = store[operation] data, 1
    request.onerror = (e) ->
      callback.call callback, e, null

    request.onsuccess = (result) ->
      callback.call callback, null, result

  _typeOf = (obj) ->
    Object::.toString.call(obj).match(/[a-zA-Z] ([a-zA-Z]+)/)[1].toLowerCase()

WebDB.indexedDB = _indexedDB