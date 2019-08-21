(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(t,e,n){t.exports=n(63)},63:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=n(9),u=n(8),l=n(10),s=function(t){var e=Object(a.useState)(t),n=Object(u.a)(e,2),r=n[0],c=n[1];return{value:r,setValue:c,reset:function(){return c("")},bind:{value:r,onChange:function(t){c(t.target.value)}}}},m=n(100),f=n(92),d=n(99),p=n(17);function b(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tcolor: #fff;\n\tpadding: 1rem;\n\t& > div {\n\t\twidth: 100%;\n\t\tmax-width: 300px;\n\t\tmargin: 0 1rem 1rem;\n\t}\n"]);return b=function(){return t},t}var v=function(t){var e=t.setValue,n=t.setCategory,a=t.callback,c=s(""),i=c.value,o=c.bind,u=s("movie"),l=u.value,b=u.bind;return r.a.createElement(g,{onSubmit:function(t){t.preventDefault(),""!==i&&(e(i),n(l),a(1))}},r.a.createElement(m.a,Object.assign({},o,{placeholder:"Search",autoFocus:!0,endAdornment:r.a.createElement(f.a,{position:"end"},r.a.createElement(p.c,{size:20}))})),r.a.createElement(d.a,Object.assign({native:!0},b),r.a.createElement("option",{value:"movie"},"Movies"),r.a.createElement("option",{value:"tv"},"TV Shows"),r.a.createElement("option",{value:"person"},"People")))},g=l.b.form(b()),h=n(97),j=n(96),E=n(5),O=n.n(E),w=n(93),y=n(94),x=n(95),k=n(64),_=function(t){var e=t.show,n=t.children,c=Object(a.useState)(e),i=Object(u.a)(c,2),o=i[0],l=i[1];Object(a.useEffect)(function(){e&&l(!0)},[e]);return o&&r.a.createElement("div",{style:{animation:"".concat(e?"fadeIn":"fadeOut"," .5s")},onAnimationEnd:function(){e||l(!1)}},n)};function S(){var t=Object(o.a)(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 0;\n\tpadding-top: 150%;\n\toverflow: hidden;\n\t& > div {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\t& > svg {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n"]);return S=function(){return t},t}function z(){var t=Object(o.a)(["\n\theight: 0;\n\tpadding-top: 150%;\n"]);return z=function(){return t},t}function C(){var t=Object(o.a)(["\n\tposition: absolute;\n\twidth: 100%;\n\theight: auto;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: linear-gradient(to bottom, rgba(0,0,0,0), rgb(0,0,0));\n\tcolor: #fff;\n\tpadding: 0;\n\t.card-content-inner {\n\t\tpadding: .5rem 1rem;\n\t}\n"]);return C=function(){return t},t}function I(){var t=Object(o.a)(["\n\tposition: relative;\n\tcursor: pointer;\n\t.MuiCardContent-root {\n\t\tpadding: 0;\n\t\t&:last-child {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n"]);return I=function(){return t},t}var M=function(t){var e=t.poster,n=t.title,c=(t.overview,t.id),i=t.showItem,o=Object(a.useState)(!1),l=Object(u.a)(o,2),s=l[0],m=l[1];return Object(a.useEffect)(function(){m(!0)},[]),r.a.createElement(_,{show:s},r.a.createElement(P,{onClick:function(){return i(c)}},r.a.createElement(R,null,e?r.a.createElement(N,{image:"https://image.tmdb.org/t/p/w300".concat(e),title:n}):r.a.createElement(p.b,{size:64,color:"gray"})),r.a.createElement(F,null,r.a.createElement("div",{className:"card-content-inner"},r.a.createElement(k.a,{variant:"h6",component:"h2"},n)))))},P=Object(l.b)(w.a)(I()),F=Object(l.b)(y.a)(C()),N=Object(l.b)(x.a)(z()),R=l.b.div(S());function A(){var t=Object(o.a)(["\n\twidth: 100%;\n\tfont-size: 5rem;\n\ttext-align: center;\n"]);return A=function(){return t},t}function B(){var t=Object(o.a)(["\n\tmax-width: 1365px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));\n\tgrid-gap: 2rem 1rem;\n\tpadding: 2rem;\n"]);return B=function(){return t},t}function V(){var t=Object(o.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return V=function(){return t},t}w.a.propTypes={poster:O.a.string,title:O.a.string,overview:O.a.string,children:O.a.node};var L=function(t){var e=t.results,n=t.category,c=t.showItem,i=t.isLoading,o=t.error,l=Object(a.useState)(),s=Object(u.a)(l,2),m=s[0],f=s[1],d=Object(a.useState)("relevance"),p=Object(u.a)(d,2),b=p[0],v=p[1];Object(a.useEffect)(function(){f(e)},[e]);return o?r.a.createElement("div",null,o.message):r.a.createElement(a.Fragment,null,r.a.createElement(D,null,r.a.createElement(j.a,{size:"small"},r.a.createElement(h.a,{disabled:"popularity"===b,onClick:function(){var t=[].concat(m);t.sort(function(t,e){return t.popularity-e.popularity}).reverse(),f(t),v("popularity")}},"Popularity"),r.a.createElement(h.a,{disabled:"relevance"===b,onClick:function(){f(e),v("relevance")}},"Relevance"))),i?r.a.createElement(T,null,"Loading..."):r.a.createElement(J,null,m&&m.map(function(t){return r.a.createElement(M,{showItem:c,key:t.id,id:t.id,poster:"person"===n?t.profile_path:t.poster_path,title:"movie"===n?t.title:t.name,overview:t.overview})})))},D=l.b.div(V()),J=l.b.div(B()),T=l.b.div(A());function U(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tmax-width: 600px;\n\tmargin: 0 auto 2rem;\n"]);return U=function(){return t},t}var q=function(t){var e=t.next,n=t.prev,a=t.disablePrev,c=t.disableNext;return r.a.createElement(G,null,r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:n,disabled:a},"Previous"),r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:e,disabled:c},"Next"))},G=l.b.div(U()),K=n(43);function H(){var t=Object(o.a)(["\n\tcolor: goldenrod;\n\tfont-size: 2rem;\n"]);return H=function(){return t},t}var Q=function(t){var e=t.rating,n=Object(a.useState)(),c=Object(u.a)(n,2),i=c[0],o=c[1];return Object(a.useEffect)(function(){!function(){for(var t=e/2,n=[],a=Math.floor(t),r=t%1,c=Math.floor(5-t),i=0;i<a;i++)n.push(1);r>0&&n.push(r);for(var u=0;u<c;u++)n.push(0);o(n)}()},[]),r.a.createElement(W,null,i&&i.map(function(t,e){return r.a.createElement("span",{key:e},1===t?r.a.createElement(p.d,null):t>=.5?r.a.createElement(p.f,null):(0===t||t<.5)&&r.a.createElement(p.e,null))}))},W=l.b.div(H()),X=n(23),Y=n.n(X),Z=n(33),$="a20bbe3bb74236052e316de13297dc3d",tt={loadMovies:function(){var t=Object(Z.a)(Y.a.mark(function t(e,n){var a,r;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat($,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"));case 2:return a=t.sent,r=a.ok?a:Promise.reject(a),t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),loadMoviesById:function(){var t=Object(Z.a)(Y.a.mark(function t(e,n){var a,r;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/".concat(e,"/").concat(n,"?api_key=").concat($,"&language=en-US"));case 2:return a=t.sent,r=a.ok?a:Promise.reject(a),t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},et=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var c=Object(a.useState)(null),i=Object(u.a)(c,2),o=i[0],l=i[1],s=Object(a.useState)(!1),m=Object(u.a)(s,2),f=m[0],d=m[1],p=Object(a.useState)(null),b=Object(u.a)(p,2),v=b[0],g=b[1],h=function(){var e=Object(Z.a)(Y.a.mark(function e(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(null),e.prev=1,d(!0),e.t0=l,e.next=6,tt[t].apply(tt,n);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),g(e.t2);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[1,10,13,16]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){h()},[].concat(n)),[o,f,v,h]};function nt(){var t=Object(o.a)(["\n\tfont-size: 1.5rem;\n"]);return nt=function(){return t},t}function at(){var t=Object(o.a)(["\n\tfont-size: 4rem;\n\tmargin: 0;\n\t@media screen and (max-width: 48em) {\n\t\tfont-size: 3rem;\n\t}\n"]);return at=function(){return t},t}function rt(){var t=Object(o.a)(["\n\tmin-width: 300px;\n\tmargin-right: 2rem;\n\tmargin-bottom: 2rem;\n\t@media screen and (max-width: 48em) {\n\t\tmargin: 0 auto 2rem;\n\t}\n\t& > div {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 0;\n\t\tpadding-top: 150%;\n\t}\n\timg {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"]);return rt=function(){return t},t}function ct(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tpadding: 4rem 1rem;\n\t@media screen and (max-width: 48em) {\n\t\tflex-wrap: wrap;\n\t}\n"]);return ct=function(){return t},t}var it=function(t){var e=t.currentItem,n=t.category,c=et("loadMoviesById",n,e),i=Object(u.a)(c,2),o=i[0],l=i[1];return l?r.a.createElement("div",null,l.message):r.a.createElement(a.Fragment,null,o&&r.a.createElement(ot,null,r.a.createElement(ut,null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(o.poster_path||o.profile_path),alt:""}))),r.a.createElement("div",null,r.a.createElement(lt,null,o.title||o.name),o.vote_average>0?r.a.createElement(Q,{rating:o.vote_average}):"No rating",o.genres&&r.a.createElement("div",null,"Genre: ",o.genres.map(function(t,e){return[e>0&&", ","".concat(t.name)]})),o.known_for_department&&r.a.createElement("div",null,"Known for: ",o.known_for_department),o.number_of_seasons&&r.a.createElement("div",null,o.number_of_seasons," season",o.number_of_seasons>1&&"s"),o.runtime&&r.a.createElement("div",null,"Runtime: ",o.runtime," mins"),r.a.createElement(st,null,o.overview||o.biography),o.imdb_id&&r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(o.imdb_id),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(K.a,{size:48,color:"black"})))))},ot=l.b.div(ct()),ut=l.b.div(rt()),lt=l.b.h1(at()),st=l.b.p(nt()),mt=n(98);function ft(){var t=Object(o.a)(["\n\twidth: 100%;\n\tmax-width: 1365px;\n\tmargin: 0 auto;\n\tz-index: 1;\n"]);return ft=function(){return t},t}function dt(){var t=Object(o.a)(["\n\ttext-align: center;\n\tfont-weight: 900;\n\tmargin: 0;\n\ttext-transform: uppercase;\n\tmargin-top: -3vw;\n\tcolor: rgba(0,0,0,0.25);\n\t& > h1 {\n\t\tfont-size: 13vw;\n\t\tmargin: 0;\n\t}\n"]);return dt=function(){return t},t}function pt(){var t=Object(o.a)(["\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: Roboto, Arial, sans-serif;\n\t}\n\n\t@keyframes fadeIn {\n\t\t0% { opacity: 0; }\n\t\t100% { opacity: 1; }\n\t}\n\t@keyframes fadeOut {\n\t\t0% { opacity: 1; }\n\t\t100% { opacity: 0; }\n\t}\n"]);return pt=function(){return t},t}var bt=function(){var t=Object(a.useState)("test"),e=Object(u.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("movie"),o=Object(u.a)(i,2),l=o[0],s=o[1],m=Object(a.useState)(1),f=Object(u.a)(m,2),d=f[0],b=f[1],g=Object(a.useState)(),h=Object(u.a)(g,2),j=h[0],E=h[1],O=Object(a.useState)(),w=Object(u.a)(O,2),y=w[0],x=w[1],k=Object(a.useState)(),_=Object(u.a)(k,2),S=_[0],z=_[1],C=et("loadMovies",n,d),I=Object(u.a)(C,3),M=I[0],P=I[1],F=I[2];return Object(a.useEffect)(function(){M&&E(M.total_pages)},[n,l,d]),Object(a.useEffect)(function(){x(S?"singleResult":"results")},[S]),r.a.createElement(a.Fragment,null,r.a.createElement(vt,null),r.a.createElement(gt,null,r.a.createElement("h1",null,"ReactMovieDB")),r.a.createElement(ht,null,r.a.createElement(v,{setValue:c,setCategory:s,callback:function(t){b(t),x("results")}}),"results"===y?r.a.createElement(a.Fragment,null,r.a.createElement(L,{results:M&&M.results,category:l,setPage:d,showItem:function(t){z(t),x("movie")},isLoading:P,error:F}),r.a.createElement(q,{next:function(){b(d+1)},prev:function(){b(d-1)},disablePrev:1===d&&!0,disableNext:d===j&&!0})):r.a.createElement(a.Fragment,null,r.a.createElement(mt.a,{color:"primary",onClick:function(){return x("results")}},r.a.createElement(p.a,{size:32})),r.a.createElement(it,{currentItem:S&&S,category:l}))))},vt=Object(l.a)(pt()),gt=l.b.header(dt()),ht=l.b.main(ft());i.a.render(r.a.createElement(bt,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4a511adc.chunk.js.map