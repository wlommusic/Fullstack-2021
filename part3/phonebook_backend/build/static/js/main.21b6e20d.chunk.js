(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=n(2),s=function(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},l=n(3),i=n.n(l),f="/api/persons",m=function(){return i.a.get(f).then((function(e){return e.data}))},d=function(e){return i.a.post(f,e).then((function(e){return e.data}))},p=function(e){return i.a.put("".concat(f,"/").concat(e.id),e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(f,"/").concat(e))},h=function(e){var t=e.person,n=e.persons,a=e.setPersons,c=e.setMessage;return r.a.createElement("li",{className:"person"},t.name," ",t.number," ",r.a.createElement("button",{onClick:function(){return function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name,"?"))&&(b(t.id).then((function(e){c({text:"Deleted '".concat(t.name,"'"),class:"info"})})).catch((function(e){c({text:"".concat(e.response.data.error),class:"error"})})),a(n.filter((function(t){return t.id!==e}))),setTimeout((function(){c(null)}),3e3))}(t.id)}},"Delete"))},E=function(e){var t=e.persons,n=e.filter,a=e.setPersons,c=e.setMessage;return r.a.createElement("ul",null,t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return r.a.createElement(h,{key:e.id,person:e,persons:t,setPersons:a,setMessage:c})})))},v=n(14),g=function(e){var t=e.persons,n=e.setPersons,c=e.setMessage,o=Object(a.useState)(""),s=Object(u.a)(o,2),l=s[0],i=s[1],f=Object(a.useState)(""),m=Object(u.a)(f,2),b=m[0],h=m[1],E=function(e,t){n(e),i(""),h(""),c({text:t,class:"info"}),setTimeout((function(){c(null)}),3e3)};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===l}))){var n=Object(v.a)({},t.find((function(e){return e.name===l})));window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&(n.number=b,p(n).then((function(e){E(t.filter((function(e){return e.name!==l})).concat(e),"Updated '".concat(e.name,"'"))})).catch((function(e){c({text:"".concat(e.response.data.error),class:"error"})})))}else{var a={id:t.length+1,name:l,number:b};d(a).then((function(e){E(t.concat(e),"Added '".concat(e.name,"'"))})).catch((function(e){c({text:"".concat(e.response.data.error),class:"error"})}))}}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:b,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:t.class},t.text)},j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),i=l[0],f=l[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),b=p[0],h=p[1];return Object(a.useEffect)((function(){m().then((function(e){c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:b}),r.a.createElement(s,{filter:i,setFilter:f}),r.a.createElement("h2",null,"add a new"),r.a.createElement(g,{persons:n,setPersons:c,setMessage:h}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:n,filter:i,setPersons:c,setMessage:h}))};n(37);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.21b6e20d.chunk.js.map