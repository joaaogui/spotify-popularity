(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2307dd"],{ed08:function(e,t,r){"use strict";r.r(t),r.d(t,"searchArtist",(function(){return x}));r("0481"),r("d81d"),r("fb6a"),r("4069");var n=r("6b75");function a(e){if(Array.isArray(e))return Object(n["a"])(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var u=r("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return a(e)||c(e)||Object(u["a"])(e)||i()}r("96cf");var o=r("1da1"),p=(r("99af"),r("bc3a")),f=r.n(p),l=r("4360"),d=f.a.create({baseURL:"https://api.spotify.com/v1/",headers:{Authorization:"Bearer ".concat(l["a"].state.token)}}),b=d,m=function(e){return b.get("search?q=".concat(e,"&type=artist"))},h=function(e,t){return b.get("artists/".concat(e,"/albums?offset=").concat(t,"&limit=50&include_groups=album,single"))},w=function(e){return b.get("albums/?ids=".concat(e))},v=function(e){return b.get("tracks/?ids=".concat(e))},x=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l["a"].commit("setInput",t),e.prev=1,e.next=4,m(t);case 4:return r=e.sent,e.next=7,k(r.data.artists.items[0].id);case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](1),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,n=0,e.next=5,h(t,n);case 5:a=e.sent,r.push.apply(r,s(a.data.items));case 7:if(null===a.data.next){e.next=15;break}return n+=50,e.next=11,h(t,n);case 11:a=e.sent,r.push.apply(r,s(a.data.items)),e.next=7;break;case 15:return e.next=17,y(r.map((function(e){return e.id})));case 17:e.next=22;break;case 19:throw e.prev=19,e.t0=e["catch"](1),new Error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=[],e.prev=1,n=0,a=20;case 4:if(!(a<=t.length)){e.next=13;break}return e.next=7,w(t.slice(n,a));case 7:c=e.sent,n=a+1,a+=20,r.push.apply(r,s(c.data.albums.map((function(e){return e.tracks.items})))),e.next=4;break;case 13:return e.next=15,g(r.map((function(e){return e.map((function(e){return e.id}))})).flat());case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e["catch"](1),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=[],e.prev=1,n=0,a=50;case 4:if(!(a<=t.length+50)){e.next=13;break}return e.next=7,v(t.slice(n,a));case 7:c=e.sent,n=a+1,a+=50,r.push.apply(r,s(c.data.tracks)),e.next=4;break;case 13:l["a"].commit("setTracks",r.sort((function(e,t){return e.popularity<t.popularity?1:-1}))),e.next=19;break;case 16:throw e.prev=16,e.t0=e["catch"](1),new Error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=chunk-2d2307dd.219083b2.js.map