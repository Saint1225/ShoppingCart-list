(this["webpackJsonpshopping-cart-list"]=this["webpackJsonpshopping-cart-list"]||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),l=(a(8),a(1)),c=(a(9),a(0));var i=e=>{const t="card "+e.className;return Object(c.jsx)("div",{className:t,children:e.children})};a(11);var r=e=>Object(c.jsx)("div",{className:"expenses-filter",children:Object(c.jsxs)("div",{className:"expenses-filter__control",children:[Object(c.jsx)("label",{children:"Filter by year"}),Object(c.jsxs)("select",{value:e.selected,onChange:t=>{e.onSelectedYear(t.target.value)},children:[Object(c.jsx)("option",{value:"2022",children:"2022"}),Object(c.jsx)("option",{value:"2021",children:"2021"}),Object(c.jsx)("option",{value:"2020",children:"2020"}),Object(c.jsx)("option",{value:"2019",children:"2019"})]})]})});a(12),a(13);var j=e=>{const t=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear();return Object(c.jsxs)("div",{className:"expense-date",children:[Object(c.jsx)("div",{className:"expense__month",children:a}),Object(c.jsx)("div",{className:"expense__year",children:n}),Object(c.jsx)("div",{className:"expense__date",children:t})]})};a(14);var d=e=>Object(c.jsx)("li",{children:Object(c.jsxs)(i,{className:"expense-item",children:[Object(c.jsx)(j,{date:e.date}),Object(c.jsxs)("div",{className:"expense-item__description",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})});a(15);var o=e=>0===e.items.length?Object(c.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(c.jsx)("ul",{className:"expenses-list",children:e.items.map((e=>Object(c.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)))});a(16);var b=e=>{let t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(c.jsxs)("div",{className:"chart-bar",children:[Object(c.jsx)("div",{className:"chart-bar__inner",children:Object(c.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(c.jsx)("div",{className:"chart-bar__label",children:e.label})]})};a(17);var u=e=>{const t=e.datapoints.map((e=>e.value)),a=Math.max(...t);return Object(c.jsx)("div",{className:"chart",children:e.datapoints.map((e=>Object(c.jsx)(b,{value:e.value,maxValue:a,label:e.label},e.label)))})};var x=e=>{let t=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}];for(const a of e.expenses){t[a.date.getMonth()].value+=a.amount}return Object(c.jsx)(u,{datapoints:t})};var v=e=>{const[t,a]=Object(l.useState)("2019"),n=e.items.filter((e=>e.date.getFullYear().toString()===t));return Object(c.jsx)("div",{children:Object(c.jsxs)(i,{className:"expenses",children:[Object(c.jsx)(r,{selected:t,onSelectedYear:e=>{a(e)}}),Object(c.jsx)(x,{expenses:n}),Object(c.jsx)(o,{items:n})]})})};a(18);var h=e=>{const[t,a]=Object(l.useState)(""),[n,s]=Object(l.useState)(""),[i,r]=Object(l.useState)("");return Object(c.jsxs)("form",{onSubmit:l=>{l.preventDefault();const c={title:t,amount:+n,date:new Date(i),id:Math.random().toString()};e.onSaveExpenseData(c),a(""),s(""),r("")},children:[Object(c.jsxs)("div",{className:"new-expense__controls",children:[Object(c.jsxs)("div",{className:"new-expense__control",children:[Object(c.jsx)("label",{children:"Title"}),Object(c.jsx)("input",{type:"text",value:t,onChange:e=>{a(e.target.value)}})]}),Object(c.jsxs)("div",{className:"new-expense__control",children:[Object(c.jsx)("label",{children:"Amount"}),Object(c.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:n,onChange:e=>{s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"new-expense__control",children:[Object(c.jsx)("label",{children:"Date"}),Object(c.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:i,onChange:e=>{r(e.target.value)}})]})]}),Object(c.jsxs)("div",{className:"new-expense__actions",children:[Object(c.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(c.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};a(19);var m=e=>{const[t,a]=Object(l.useState)(!1);return Object(c.jsxs)("div",{className:"new-expense",children:[!t&&Object(c.jsx)("button",{onClick:()=>{a(!0)},children:"Add New Expense"}),t&&Object(c.jsx)(h,{onSaveExpenseData:t=>{e.onAddexpense(t),a(!1)},onCancel:()=>{a(!1)}})]})};const O=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var p=()=>{const[e,t]=Object(l.useState)(O);return Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{onAddexpense:a=>{t((e=>[a,...e])),console.log(e)}}),Object(c.jsx)(v,{items:e})]})};s.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2d2f5c28.chunk.js.map