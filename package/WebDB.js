/* WebDB v0.1.0 - 1/15/2014
   http://
   Copyright (c) 2014  - Licensed  */
(function(){var a;a=window.WebDB={};a.init=function(b,c,d,e,f){var g,h;if(d==null){d=5242880}h=a.webSQL;g=a.indexedDB;if(window.openDatabase){a=h}else if(window.indexedDB){a=g}if(!window.openDatabase&&!window.indexedDB){throw"HTML5 Databases not supported"}a.webSQL=h;a.indexedDB=g;return a.init(b,c,d,e,f)}}).call(this);(function(){WebDB.indexedDB=function(){var a,b,c,d,e,f,g,h;h=null;c=function(a,b,c,d,e){if(c==null){c=5242880}return""};f=function(a){return""};d=function(a){return""};g=function(a){return""};e=function(a){return""};a=function(a){return""};b=function(a,b){return""};return{init:c,select:f,insert:d,update:g,remove:e,drop:a,execute:b}}()}).call(this);(function(){WebDB.webSQL=function(){var a,b,c,d,e,f,g,h;h=null;c=function(a,c,d,e,f){var g,i,j,k,l;if(d==null){d=5242880}if(!window.openDatabase){throw"WebSQL not supported"}h=openDatabase(a,c,"",d);l=0;k=[];for(j in e){i="CREATE TABLE IF NOT EXISTS "+j+" (";for(g in e[j]){i+=""+g+" "+e[j][g]+","}i=i.substring(0,i.length-1);i+=")";l++;k.push(b(i,function(){tables--;if(tables===0){return f.call(f)}}))}return k};f=function(a){return""};d=function(a){return""};g=function(a){return""};e=function(a){return""};a=function(a){return""};b=function(a,b){if(!h){throw"Database not initializated"}else{return h.transaction(function(c){return c.executeSql(a,b)})}};return{init:c,select:f,insert:d,update:g,remove:e,drop:a,execute:b}}()}).call(this);