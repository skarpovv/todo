(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(69),i=n.n(r),c=(n(100),n(101),n(163)),l=n(164),u=n(166),d=n(167),s=n(168),E=n(161),m=n(169),f=n(76),p=n.n(f),b=n(20),T=n(15),O=n(17),x={todos:localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):[],inputText:"",inputState:!1,filter:"all",editText:""},C=function(e){return{type:"TEXT_CHANGE",text:e}},g=function(e){return{type:"EDIT_TEXT_CHANGE",text:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEXT_CHANGE":return Object(O.a)({},e,{inputText:t.text});case"ADD_TODO":return localStorage["redux-store"]=JSON.stringify([].concat(Object(T.a)(e.todos),[{id:e.todos.length+e.inputText,isComplete:!1,text:e.inputText,isEdit:!1}])),Object(O.a)({},e,{todos:[].concat(Object(T.a)(e.todos),[{id:e.todos.length+e.inputText,isComplete:!1,text:e.inputText,isEdit:!1}])});case"TOGGLE_INPUT_STATE":return Object(O.a)({},e,{inputState:!e.inputState});case"TOGGLE_TODO_COMPLETE":return localStorage["redux-store"]=JSON.stringify(e.todos.map(function(e){return t.id===e.id?Object(O.a)({},e,{isComplete:!e.isComplete}):e})),Object(O.a)({},e,{todos:e.todos.map(function(e){return t.id===e.id?Object(O.a)({},e,{isComplete:!e.isComplete}):e})});case"DELETE_TODO":return localStorage["redux-store"]=JSON.stringify(e.todos.filter(function(e){return t.id!=e.id})),Object(O.a)({},e,{todos:e.todos.filter(function(e){return t.id!=e.id})});case"SET_FILTER":return Object(O.a)({},e,{filter:t.value});case"EDIT_TEXT_CHANGE":return Object(O.a)({},e,{editText:t.text});case"EDIT_TODO":return localStorage["redux-store"]=JSON.stringify(e.todos.map(function(n){return n.id===t.id?Object(O.a)({},n,{text:e.editText,isEdit:!1}):n})),Object(O.a)({},e,{todos:e.todos.map(function(n){return n.id===t.id?Object(O.a)({},n,{text:e.editText,isEdit:!1}):n})});case"SET_EDIT":return Object(O.a)({},e,{todos:e.todos.map(function(e){return e.id==t.id?Object(O.a)({},e,{isEdit:!e.isEdit}):Object(O.a)({},e,{isEdit:!1})})});case"CANCEL_EDIT":return Object(O.a)({},e,{todos:e.todos.map(function(e){return Object(O.a)({},e,{isEdit:!1})})});default:return e}},j=function(){var e=Object(b.c)(function(e){return e.home.filter}),t=Object(b.b)();return a.a.createElement(c.a,{sx:{flexGrow:1}},a.a.createElement(l.a,{position:"static",sx:{backgroundColor:"#32b87b"}},a.a.createElement(u.a,null,a.a.createElement(d.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}},a.a.createElement(p.a,null)),a.a.createElement(s.a,{variant:"h6",component:"div",sx:{flexGrow:.5}},"TO DO"),a.a.createElement(E.a,{sx:{flexGrow:1,color:"white",transition:"all ease 0.6s","& button":{color:"white",outlineColor:"white",border:"1px dotted #fff"},"& button:focus":{color:"#000"},"& button:active":{color:"#000"}},color:"primary",value:e,exclusive:!0,onChange:function(e,n){n&&t(function(e){return{type:"SET_FILTER",value:e}}(n))}},a.a.createElement(m.a,{value:"all"},"All"),a.a.createElement(m.a,{value:"current"},"Current TO DO"),a.a.createElement(m.a,{value:"completed"},"Completed")))))},v=n(158),_=n(162),y=n(157),D=n(5),S=n(165),w=n(153),k=n(154),A=n(155),G=n(156),I=Object(D.a)(S.a)(function(e){var t=e.theme;return Object(O.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.h5,{padding:t.spacing(2),textAlign:"start",color:t.palette.text.secondary})}),L=function(e){var t={textDecoration:e.isComplete?"line-through":"none",transition:"all ease 0.6s"},n={backgroundColor:e.isComplete?"#ccc":"#fff",color:e.isComplete?"#900":"black",transition:"all ease 0.6s"},o=Object(b.c)(function(e){return e.home.editText}),r=Object(b.b)();return e.isEdit?a.a.createElement(I,null,a.a.createElement(v.a,{id:"outlined-basic",onChange:function(e){r(g(e.target.value))},label:"To do ...",variant:"outlined",sx:{width:"100%",outlineColor:"#32b87b",borderColor:"#32b87b"},value:o}),a.a.createElement(_.a,{disabled:!o,onClick:function(){r({type:"EDIT_TODO",id:e.id}),r({type:"CANCEL_EDIT"})}},a.a.createElement(k.a,null)),a.a.createElement(_.a,{onClick:function(){r({type:"CANCEL_EDIT"})}},a.a.createElement(w.a,{color:"error"}))):a.a.createElement(I,{sx:n},a.a.createElement(c.a,{sx:t},e.text),a.a.createElement(_.a,{onClick:function(){r({type:"TOGGLE_TODO_COMPLETE",id:e.id})}},e.isComplete?a.a.createElement(w.a,{color:"error"}):a.a.createElement(k.a,null)),a.a.createElement(_.a,{disabled:e.isComplete,onClick:function(){r({type:"SET_EDIT",id:e.id}),r(g(e.text))}},a.a.createElement(A.a,{color:e.isComplete?"error":"primary"})),a.a.createElement(_.a,{onClick:function(){r({type:"DELETE_TODO",id:e.id})}},a.a.createElement(G.a,{color:e.isComplete?"error":"primary"})))},N={width:"70%",margin:"0 auto",border:"10px solid #fff",transition:"all ease 0.6s"},F=function(){var e=Object(b.c)(function(e){return e.home.filter}),t=function(e,t){return"all"===t?e:"current"===t?e.filter(function(e){return!1===e.isComplete}):"completed"===t?e.filter(function(e){return!0===e.isComplete}):void 0}(Object(b.c)(function(e){return e.home.todos}),e),n=Object(o.useMemo)(function(){return t.map(function(e){return a.a.createElement(L,{isEdit:e.isEdit,key:e.id,id:e.id,text:e.text,isComplete:e.isComplete})})},[t]);return a.a.createElement(c.a,{sx:N},a.a.createElement("div",null,a.a.createElement(y.a,{spacing:2},n)))},J={margin:"0 auto",width:"50%",height:"100%",backgroundColor:"white",textAlign:"center",marginTop:"20px",transition:"all ease 0.6s"},P={display:"flex",justifyContent:"space-around"},H=function(){var e=Object(b.b)(),t=Object(b.c)(function(e){return e.home.inputText}),n=Object(b.c)(function(e){return e.home.inputState});return console.log(t),a.a.createElement(c.a,{sx:J},a.a.createElement(c.a,{sx:P},a.a.createElement(v.a,{id:"outlined-basic",error:n,value:t,onChange:function(t){var n;n=t.target.value,e(C(n))},label:n?"Enter to do text":"To do ...",variant:"outlined",sx:{width:"70%",outlineColor:"#32b87b",borderColor:"#32b87b"}}),a.a.createElement(_.a,{sx:{backgroundColor:"#32b87b","&:hover":{backgroundColor:"#43c98c"}},variant:"contained",onClick:function(){!function(t){t?(e({type:"ADD_TODO"}),e(C(""))):(e({type:"TOGGLE_INPUT_STATE"}),setTimeout(function(){e({type:"TOGGLE_INPUT_STATE"})},700))}(t)}},"Add Todo")),a.a.createElement(F,null))},M=n(29),X=n(77),R=Object(M.b)({home:h}),U=Object(M.d)(R,Object(X.a)(Object(M.a)())),B=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{store:U},a.a.createElement(j,null),a.a.createElement(H,null)))},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,170)).then(function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(B,null))),z()},92:function(e,t,n){e.exports=n(116)}},[[92,1,2]]]);
//# sourceMappingURL=main.82522e3b.chunk.js.map