(this["webpackJsonpmy-todo-list"]=this["webpackJsonpmy-todo-list"]||[]).push([[0],{54:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(13),o=s.n(c),r=s(21),l=(s(54),s(11)),i=s(4);var d=function(){return Object(i.jsx)(l.a,{lg:{span:6,offset:3},sm:{span:10,offset:1},children:Object(i.jsx)("h1",{children:"Simple Todo List"})})},j=s(46),b=s(71),f=s(38),u=s(47),O=s(40),m=s(20);var p=function(e){var t=e.todos,s=e.setTodos,n=e.setFilterStatus,c=e.filterStatus,o=Object(a.useState)(""),d=Object(r.a)(o,2),p=d[0],x=d[1];return Object(i.jsxs)(f.a,{children:[Object(i.jsx)(l.a,{lg:10,xs:12,children:Object(i.jsx)(u.a,{placeholder:"Enter some task...","aria-label":"Enter some task...","aria-describedby":"basic-addon2",value:p,onChange:function(e){x(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&""!==p&&(s([].concat(Object(j.a)(t),[{text:p,isCompleted:!1,id:Object(b.a)()}])),x(""))},className:"formInput"})}),Object(i.jsx)(l.a,{lg:{span:2,offset:0},xs:{span:6,offset:3},children:Object(i.jsxs)(O.a,{as:f.a.Append,variant:"info",title:c,id:"input-group-dropdown-2",onSelect:function(e){n(e)},className:"formDropdown",children:[Object(i.jsx)(m.a.Item,{eventKey:"All",children:Object(i.jsx)("span",{children:"All"})}),Object(i.jsx)(m.a.Item,{eventKey:"Completed",children:Object(i.jsx)("span",{children:"Completed"})}),Object(i.jsx)(m.a.Item,{eventKey:"Uncompleted",children:Object(i.jsx)("span",{children:"Uncompleted"})})]})})]})},x=s(39),h=s(18),v=s(43),g=s(45),C=s(49),S=s(70);var k=function(e){var t=e.text,s=e.isCompleted,a=e.isCompletedHandler,n=e.isDeletedHandler;return Object(i.jsxs)(C.a,{children:[Object(i.jsx)(l.a,{lg:10,xs:12,children:Object(i.jsx)(g.a,{variant:"dark",className:"todoItem ".concat(s?"completed":""),children:t})}),Object(i.jsx)(l.a,{lg:{span:1,offset:0},xs:{span:3,offset:3},className:"checkboxDiv",children:Object(i.jsx)(v.a,{type:"checkbox",variant:"success",checked:s,value:"check",onChange:a,className:"todoCheckbox"})}),Object(i.jsx)(l.a,{lg:{span:1,offset:0},xs:{span:3,offset:0},children:Object(i.jsx)(h.a,{variant:"danger",onClick:n,className:"todoDelete",children:Object(i.jsx)(S.a,{})})})]})},N=s(48);var y=function(e){var t=e.todos,s=e.setTodos,a=e.filteredTodos;return Object(i.jsx)(N.a,{children:a.map((function(e){return Object(i.jsx)(k,{text:e.text,isCompleted:e.isCompleted,isCompletedHandler:function(){return a=e.id,void s(t.map((function(e){return e.id!==a?e:Object(x.a)(Object(x.a)({},e),{},{isCompleted:!e.isCompleted})})));var a},isDeletedHandler:function(){return a=e.id,void s(t.filter((function(e){return e.id!==a})));var a}},e.id)}))})},I=s(44),T=s(36);var E=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)("All"),o=Object(r.a)(c,2),l=o[0],j=o[1],b=Object(a.useState)([]),f=Object(r.a)(b,2),u=f[0],O=f[1];return Object(a.useEffect)((function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));n(e)}}),[]),Object(a.useEffect)((function(){switch(l){case"Completed":O(s.filter((function(e){return!0===e.isCompleted})));break;case"Uncompleted":O(s.filter((function(e){return!1===e.isCompleted})));break;default:O(s)}localStorage.setItem("todos",JSON.stringify(s))}),[l,s]),Object(i.jsxs)(I.a,{children:[Object(i.jsx)(T.a,{className:"headingContainer",children:Object(i.jsx)(d,{})}),Object(i.jsx)(T.a,{className:"formContainer",children:Object(i.jsx)(p,{todos:s,setTodos:n,setFilterStatus:j,filterStatus:l})}),u.length>0?Object(i.jsx)(T.a,{className:"todoListContainer",children:Object(i.jsx)(y,{todos:s,setTodos:n,filteredTodos:u})}):Object(i.jsxs)("h4",{className:"noTodos",children:["There are no todos for filter:"," ",Object(i.jsx)("span",{className:"noTodosFilter",children:l})]})]})};s(61);o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.e854e26a.chunk.js.map