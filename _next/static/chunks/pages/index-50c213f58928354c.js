(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},9383:function(n,r,t){"use strict";t.d(r,{Z:function(){return l}});var e=t(5893),i=t(5675),s=t.n(i),o=t(1664),u=t.n(o);t(7294);var c=function(n){var r=n.result;return(0,e.jsx)("div",{className:"group cursor-pointer p-2",children:(0,e.jsx)(u(),{href:"/movies/".concat(r.id),children:(0,e.jsxs)("a",{children:[(0,e.jsx)(s(),{src:"".concat("https://image.tmdb.org/t/p/original/").concat(r.backdrop_path),layout:"responsive",width:1920,height:1080,className:"group-hover:scale-110 transition-all duration-300 rounded-lg"}),(0,e.jsxs)("div",{className:"py-2",children:[(0,e.jsx)("p",{className:"truncate max-w-md",children:r.overview}),(0,e.jsx)("h2",{className:"text-xl font-bold mt-1",children:r.title||r.original_name})]})]})})})},a=t(7794),l=function(n){var r=n.results;return(0,e.jsx)(a.Z,{enterAnimation:"fade",className:"px-1 sm:px-3 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 ",children:null===r||void 0===r?void 0:r.map((function(n){return(0,e.jsx)(c,{result:n},n.id)}))})}},3678:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var e=t(7568),i=t(655),s=t(5893),o=(t(9008),t(1433),t(6410),t(9383)),u=t(3861);function c(n){var r=n.results;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{results:r})})}c.getInitialProps=function(){var n=(0,e.Z)((function(n){var r,t,e;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return console.log(n.query,"moviecontext"),e=null===n||void 0===n||null===(r=n.query)||void 0===r?void 0:r.genre,[4,fetch("https://api.themoviedb.org/3".concat((null===(t=u.Z[e])||void 0===t?void 0:t.url)||u.Z.fetchTrending.url)).then((function(n){return n.json()}))];case 1:return[2,{results:i.sent().results}]}}))}));return function(r){return n.apply(this,arguments)}}()}},function(n){n.O(0,[456,774,888,179],(function(){return r=5557,n(n.s=r);var r}));var r=n.O();_N_E=r}]);