"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[573],{573:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(439),a=r(861),c=r(687),s=r.n(c),i=r(243),o=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat("https://api.themoviedb.org/","3/movie/").concat(t,"/credits"),{params:{api_key:"5f2a66e63fa9a8139a0b7e8b9aba27ca",language:"en-US"}});case 3:return r=e.sent,e.next=6,r.data;case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),u=o,p=r(184),l=function(e){var t=e.creditsCast;return(0,p.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"path"}),(0,p.jsx)("p",{children:n}),(0,p.jsxs)("p",{children:["Character: ",a]})]},t)}))})},h=r(791),f=r(689),d=function(){var e=(0,f.UO)().movieId,t=(0,h.useState)({}),r=(0,n.Z)(t,2),a=r[0],c=r[1],s=a.cast;return(0,h.useEffect)((function(){e&&u(e).then((function(e){c(e||{})})).catch((function(e){return console.error(e)}))}),[e]),(0,p.jsx)("div",{children:s&&(0,p.jsx)(l,{creditsCast:s})})}}}]);
//# sourceMappingURL=573.415afb31.chunk.js.map