"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[813],{722:function(n,e,r){r.d(e,{a:function(){return c}});var t,i=r(168),c=r(444).ZP.ul(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n"])))},883:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,i,c,s,o,a,l=r(439),d=r(861),u=r(687),p=r.n(u),h=r(243),x={baseURL:"https://api.themoviedb.org/",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTZkZmVjNWY0Yjg2YzcwZGEzYTg5NjY5NDI2OTIxOSIsInN1YiI6IjY0NmIxYzk3MzNhMzc2MDBlNjdiNjdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.soetT_SCyteJCJ0Ce-svzkrEAEk0bSxMGfT7ftm-M1M")}},f=function(){var n=(0,d.Z)(p().mark((function n(e){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.Z.get("3/movie/".concat(e,"?language=en-US"),x);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),j=f,v=r(87),g=r(722),m=r(184),b=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:(0,m.jsx)("b",{children:"Additional information"})}),(0,m.jsxs)(g.a,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(v.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(v.rU,{to:"reviews",children:"Reviews"})})]})]})},Z=r(168),k=r(444),I=(0,k.ZP)(v.OL)(t||(t=(0,Z.Z)(["\n  display: inline-block;\n  text-decoration: none;\n"]))),w=k.ZP.button(i||(i=(0,Z.Z)(["\n  color: #fff;\n  cursor: pointer;\n  background-color: #20bcc6;\n  border: none;\n  border-radius: 20px;\n  margin: 5px 0;\n\n  padding: 8px 16px;\n  font-size: 16px;\n  display: inline-block;\n\n  &:hover {\n    background-color: #1aa3a9;\n  }\n"]))),y=function(n){var e=n.backLink;return(0,m.jsx)(I,{to:e.current,children:(0,m.jsx)(w,{type:"button",children:"Go back"})})},z=k.ZP.ul(c||(c=(0,Z.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),J=function(n){var e=n.genres;return(0,m.jsx)(z,{children:e.map((function(n){var e=n.id,r=n.name;return(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:r})},e)}))})},N=function(n){var e=n.poster_path;return(0,m.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"})},O=r(791),_=r(689),C=k.ZP.section(s||(s=(0,Z.Z)(["\n  display: flex;\n"]))),U=k.ZP.div(o||(o=(0,Z.Z)(["\n  margin-left: 20px;\n"]))),Y=k.ZP.section(a||(a=(0,Z.Z)([""]))),P=function(){var n,e,r=(0,_.UO)().movieId,t=(0,O.useState)({}),i=(0,l.Z)(t,2),c=i[0],s=i[1],o=(0,_.TH)(),a=(0,O.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),d=c.poster_path,u=c.title,p=c.genres,h=c.overview,x=c.vote_average;return(0,O.useEffect)((function(){r&&j(r).then((function(n){s(n||{})})).catch((function(n){return console.error(n)}))}),[r]),(0,m.jsxs)("div",{children:[(0,m.jsx)(y,{backLink:a}),(0,m.jsxs)(C,{children:[d&&(0,m.jsx)(N,{poster_path:d}),(0,m.jsxs)(U,{children:[u&&(0,m.jsx)("h1",{children:u}),x&&(0,m.jsxs)("p",{children:["User score: ",(10*x).toFixed(0),"%"]}),(0,m.jsx)("h2",{children:"Overview"}),h&&(0,m.jsx)("p",{children:h}),(0,m.jsx)("h2",{children:"Genres"}),p&&(0,m.jsx)(J,{genres:p})]})]}),(0,m.jsxs)(Y,{children:[(0,m.jsx)(b,{}),(0,m.jsx)(O.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading subpage..."}),children:(0,m.jsx)(_.j3,{})})]})]})}}}]);
//# sourceMappingURL=813.1065abf3.chunk.js.map