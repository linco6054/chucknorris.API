(this.webpackJsonpcodingchallenge=this.webpackJsonpcodingchallenge||[]).push([[0],{37:function(e,t,r){},38:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),s=r(13),n=r.n(s),o=(r(37),r(38),r(14)),i=r(2),l=r(8),d=r(1);var j=function(e){var t=e.error;return Object(d.jsx)("div",{className:"w-full h-screen py-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12",children:Object(d.jsxs)("div",{class:"   bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto",role:"alert",children:[Object(d.jsx)("strong",{class:"font-bold pr-4",children:"Error! "}),Object(d.jsxs)("span",{class:"block sm:inline ",children:[" ",t]}),Object(d.jsx)("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3",children:Object(d.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})})]})})},u=r.p+"static/media/spin.c3201bb9.svg";var b=function(){return Object(d.jsx)("div",{className:"h-screen w-full flex items-center justify-center",children:Object(d.jsx)("img",{className:"hover:shadow-md",src:u,alt:"spinner"})})};var x=function(e){var t=e.cat,r=Object(i.g)();return Object(d.jsx)("div",{onClick:function(){return r.push("/category/".concat(t))},className:"container bg-white h-24 w-32 flex mx-2 items-center shadow-sm hover:shadow-2xl\r justify-center rounded-md cursor-pointer mt-4 ",children:Object(d.jsx)("h1",{className:"text-indigo-800 text-lg font-normal ",children:t})})};var p=function(){var e=Object(l.c)((function(e){return null===e||void 0===e?void 0:e.categories_list})),t=e.loading,r=e.categories,c=e.error;return t?Object(d.jsx)(b,{}):c?Object(d.jsx)(j,{error:c}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center text-2xl uppercase font-bold",children:"Available categories"}),Object(d.jsx)("p",{className:"text-gray-500 text-center mt-2 font-thin",children:"Click to open a category Joke"}),Object(d.jsx)("div",{className:"container h-auto w-full overflow-hidden pl-12 lg:pl-24 pt-4 flex flex-wrap ",children:r&&r.map((function(e,t){return Object(d.jsx)(x,{cat:e},t)}))})]})},O=r(12),h=r.n(O),m=r(19),g={categories_list:{CATEGORIES_LIST_REQUEST:"CATEGORIES_LIST_REQUEST",CATEGORIES_LIST_SUCCESS:"CATEGORIES_LIST_SUCCESS",CATEGORIES_LIST_FAILED:"CATEGORIES_LIST_FAILED"},joke:{USER_JOKE_REQUEST:"USER_JOKE_REQUEST",USER_JOKE_SUCCESS:"USER_JOKE_SUCCESS",USER_JOKE_FAILED:"USER_JOKE_FAILED",USER_JOKE_RESET:"USER_JOKE_RESET"}},E=r(30),S=r.n(E).a.create({baseURL:"https://api.chucknorris.io/jokes"}),f=function(e){return S.get("random?category=".concat(e))},v=function(e){return function(){var t=Object(m.a)(h.a.mark((function t(r,c){var a,s,n,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c(),!a.categories_list.categories.includes(e)){t.next=17;break}return r({type:g.joke.USER_JOKE_RESET}),r({type:g.joke.USER_JOKE_REQUEST}),t.prev=4,t.next=7,f(e);case 7:s=t.sent,n=s.data,r({type:g.joke.USER_JOKE_SUCCESS,payload:n}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),r({type:g.joke.USER_JOKE_FAILED,payload:(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.message)?t.t0.response.data.message:t.t0.message});case 15:t.next=18;break;case 17:r({type:g.joke.USER_JOKE_FAILED,payload:"Invalid Category"});case 18:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e,r){return t.apply(this,arguments)}}()};var _=function(){return Object(d.jsxs)("div",{className:"sticky top-0 bg-gray-200 w-full h-auto py-4 px-2 ms:px-4 md:px-8 lg:px-16 xl:px-24 ",children:[Object(d.jsxs)("h1",{className:"text-blue-900",children:[Object(d.jsx)("span",{className:"text-xl",children:"Work by:"})," ",Object(d.jsx)("span",{className:"font-mono",children:"Lincoln Kantet"})," "]}),Object(d.jsxs)("p",{className:"text-base text-gray-600",children:["An application that consumes the"," ",Object(d.jsx)("a",{className:"cursor-pointer text-blue-700",href:"https://api.chucknorris.io/",children:"chucknorris.io"})," ","\xa0 API. Technologies:",Object(d.jsx)("a",{className:"cursor-pointer text-blue-700 mx-2",href:"https://reactjs.org/",children:"React"}),",",Object(d.jsx)("a",{className:"cursor-pointer text-blue-700 mx-2",href:"https://react-redux.js.org/",children:"Redux"}),",",Object(d.jsx)("a",{className:"cursor-pointer text-blue-700 mx-2",href:"https://axios-http.com/docs/intro",children:"Axios"}),"&",Object(d.jsx)("a",{className:"cursor-pointer text-blue-700 mx-2",href:"https://tailwindcss.com/docs",children:"Tailwindcss"})]})]})},y=r(31),R=r.n(y);var I=function(e){var t,r=e.joke,c=e.category;return Object(d.jsxs)("div",{className:"max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto",children:[Object(d.jsx)("div",{className:"flex justify-center md:justify-end -mt-16",children:Object(d.jsx)("img",{className:"w-20 h-20 object-cover rounded-full border-2 border-indigo-500",src:r.icon_url,alt:c})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"text-gray-800 text-2xl font-semibold uppercase ",children:["From ",c," Category"]}),Object(d.jsxs)("p",{className:"mt-2 text-gray-600",children:['"',r.value,' \ud83e\udd23\ud83d\ude02\ud83e\udd23"']})]}),Object(d.jsx)("div",{className:"px-6 pt-4 pb-2",children:null===r||void 0===r||null===(t=r.categories)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2",children:["#",e]},t)}))}),Object(d.jsxs)("div",{className:"flex justify-between items-center",children:[Object(d.jsxs)("div",{className:" justify-start mt-4",children:[Object(d.jsx)("span",{className:"text-black font-semibold",children:" Created-On:"}),Object(d.jsx)("span",{className:"text-gray-600 text-sm ml-2",children:R()(r.created_at).format("MMMM Do YYYY")})]}),Object(d.jsx)("div",{className:" justify-end mt-4",children:Object(d.jsx)("a",{href:null===r||void 0===r?void 0:r.url,className:"text-lg font-medium text-indigo-500",children:"chucknorris.io"})})]})]})};var N=function(e){var t=Object(i.h)().category,r=Object(l.b)(),a=Object(l.c)((function(e){return e.joke})),s=a.joke,n=a.loading,o=a.error,u=Object(i.g)();return console.log({category:t}),Object(c.useEffect)((function(){t&&r(v(t))}),[t,r]),t?o?Object(d.jsx)(j,{error:o}):n?Object(d.jsx)(b,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"flex justify-around mt-4",children:[Object(d.jsx)("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:function(){return u.push("/")},children:"Home"}),Object(d.jsx)("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:function(){return r(v(t))},children:"Load more..."})]}),Object(d.jsx)("div",{className:"mx-auto w-sreen h-screen ",children:Object(d.jsx)(I,{category:t,joke:s})})]}):Object(d.jsx)(i.a,{to:"/"})};var T=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){var t;return null===e||void 0===e||null===(t=e.categories_list)||void 0===t?void 0:t.categories}));return Object(c.useEffect)((function(){t||(console.log("No categories found"),e(function(){var e=Object(m.a)(h.a.mark((function e(t,r){var c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g.categories_list.CATEGORIES_LIST_REQUEST}),e.prev=1,e.next=4,S.get("/categories");case 4:c=e.sent,a=c.data,t({type:g.categories_list.CATEGORIES_LIST_SUCCESS,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:g.categories_list.CATEGORIES_LIST_FAILED,payload:e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}()))}),[t,e]),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(_,{}),Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",exact:!0,component:p}),Object(d.jsx)(i.b,{path:"/category/:category",component:N})]})]})},k=r(10),C=r(32),U=r(3),w=Object(k.b)({categories_list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.categories_list.CATEGORIES_LIST_REQUEST:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case g.categories_list.CATEGORIES_LIST_SUCCESS:return localStorage.setItem("categories",JSON.stringify(null===t||void 0===t?void 0:t.payload)),Object(U.a)(Object(U.a)({},e),{},{loading:!1,categories:t.payload});case g.categories_list.CATEGORIES_LIST_FAILED:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.payload});default:return e}},joke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.joke.USER_JOKE_RESET:return{};case g.joke.USER_JOKE_REQUEST:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case g.joke.USER_JOKE_SUCCESS:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,joke:t.payload});case g.joke.USER_JOKE_FAILED:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,error:t.payload});default:return e}}}),L={categories_list:{categories:localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):null}},A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c,J=Object(k.d)(w,L,A(Object(k.a)(C.a)));n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l.a,{store:J,children:Object(d.jsx)(T,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.aaa9b5de.chunk.js.map