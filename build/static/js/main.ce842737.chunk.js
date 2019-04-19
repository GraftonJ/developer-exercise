(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},28:function(e,t,n){e.exports=n(49)},34:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(16),o=n.n(r),c=(n(34),n(18)),m=n(5),i=n(8),u=n(12),s=n(53),d=n(51),E=n(27),p=n(50),h=n(54),f=function(e){return l.a.createElement(h.a,{variant:e.variant},l.a.createElement("p",{className:"mb-0"},e.message),l.a.createElement("hr",null),l.a.createElement(p.a,{variant:"secondary",onClick:function(){return e.setState(!1)}},"Close Alert"))},v=function(e){var t={id:null,name:"",oneTime:"",monthly:"",type:"default"},n=Object(a.useState)(t),r=Object(m.a)(n,2),o=r[0],c=r[1],h=Object(a.useState)(!1),v=Object(m.a)(h,2),y=v[0],g=v[1],b=Object(a.useState)(!1),O=Object(m.a)(b,2),j=O[0],S=O[1],T=Object(a.useState)(!1),w=Object(m.a)(T,2),x=w[0],C=w[1],N=Object(a.useState)(!1),R=Object(m.a)(N,2),D=R[0],k=R[1],A=function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)({},o,Object(i.a)({},n,a)))};return l.a.createElement("div",null,l.a.createElement("h2",null,"Add Expense or Revenue"),l.a.createElement(s.a,{onSubmit:function(n){n.preventDefault(),g(!1),S(!1),C(!1),!o.oneTime&&0!==o.oneTime||!o.monthly&&0!==o.monthly?g(!0):"default"===o.type?S(!0):""===o.name?C(!0):(e.addData(o),k(!0),setTimeout(function(){k(!1)},3e3),c(t))}},l.a.createElement(d.a,{className:"input-field"},l.a.createElement(E.a,{sm:{span:2,offset:1},className:"input-field"},l.a.createElement(s.a.Control,{as:"select",name:"type",value:o.type,onChange:A},l.a.createElement("option",{value:"default",name:"default",disabled:!1},"Select Type"),l.a.createElement("option",{value:"Revenue",name:"revenue"},"Revenue"),l.a.createElement("option",{value:"Expense",name:"expense"},"Expense"))),l.a.createElement(E.a,{sm:3,className:"input-field"},l.a.createElement(s.a.Control,{type:"text",name:"name",placeholder:"Name",value:o.name,onChange:A})),l.a.createElement(E.a,{sm:2,className:"input-field"},l.a.createElement(s.a.Control,{type:"number",name:"oneTime",placeholder:"One-Time Amount",step:"0.01",min:"0",value:o.oneTime,onChange:A})),l.a.createElement(E.a,{sm:2,className:"input-field"},l.a.createElement(s.a.Control,{type:"number",name:"monthly",placeholder:"Monthly Amount",step:"0.01",min:"0",value:o.monthly,onChange:A})),l.a.createElement(E.a,{sm:1,className:"add-form-button"},l.a.createElement(p.a,{type:"submit"},"Add"))),D&&l.a.createElement(f,{variant:"success",message:"Your entry was successfully added!",setState:k}),y&&l.a.createElement(f,{variant:"danger",message:"Make sure to enter a one-time or monthly amount. If you don't have one, enter 0",setState:g}),j&&l.a.createElement(f,{variant:"danger",message:"Make sure to select if your entry is a Revenue or an Expense.",setState:S}),x&&l.a.createElement(f,{variant:"danger",message:"Make sure to add a name to your entry.",setState:C})))},y=(n(11),function(e){var t=Object(a.useState)(e.currentData),n=Object(m.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),h=Object(m.a)(c,2),v=h[0],y=h[1],g=Object(a.useState)(!1),b=Object(m.a)(g,2),O=b[0],j=b[1],S=r.type;Object(a.useEffect)(function(){o(e.currentData)},[e]);var T=function(e){var t=e.target,n=t.name,a=t.value;o("oneTime"===n||"monthly"===n?Object(u.a)({},r,Object(i.a)({},n,parseInt(a))):Object(u.a)({},r,Object(i.a)({},n,a)))};return l.a.createElement("div",null,l.a.createElement("h2",null,"Edit ",S," Entry"),l.a.createElement(s.a,{onSubmit:function(t){t.preventDefault(),y(!1),j(!1),!r.oneTime&&0!==r.oneTime||!r.monthly&&0!==r.monthly?y(!0):""===r.name?j(!0):(y(!1),j(!1),e.updateData(r.id,r))}},l.a.createElement(d.a,{className:"input-field"},l.a.createElement(E.a,{sm:3,className:"input-field"},l.a.createElement(s.a.Label,null,"Entry Name"),l.a.createElement(s.a.Control,{type:"text",name:"name",placeholder:"Name",value:r.name,onChange:T})),l.a.createElement(E.a,{sm:2,className:"input-field"},l.a.createElement(s.a.Label,null,"One-Time Amount"),l.a.createElement(s.a.Control,{type:"number",name:"oneTime",placeholder:"One-Time Amount",step:"0.01",min:"0",value:r.oneTime,onChange:T})),l.a.createElement(E.a,{sm:2,className:"input-field"},l.a.createElement(s.a.Label,null,"Monthly Amount"),l.a.createElement(s.a.Control,{type:"number",name:"monthly",placeholder:"Monthly Amount",step:"0.01",min:"0",value:r.monthly,onChange:T}))),l.a.createElement(d.a,{className:"input-field"},l.a.createElement(p.a,{className:"edit-buttons",variant:"primary",type:"submit"},"Update ",S),l.a.createElement(p.a,{className:"edit-buttons",variant:"secondary",onClick:function(){return e.setEditingData(!1)}},"Cancel"),l.a.createElement(p.a,{variant:"danger",onClick:function(){return e.deleteData(r.id,S),void e.setEditingData(!1)},className:"edit-buttons"},"Delete ",S," Entry")),v&&l.a.createElement(f,{variant:"danger",title:"Woops! Something didn't go right!",message:"Make sure to enter a one-time or monthly amount! If you don't have one, enter $0",setState:y}),O&&l.a.createElement(f,{variant:"danger",title:"Woops! Something didn't go right!",message:"Make sure to add a name to your entry!",setState:j})))}),g=n(52);function b(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}var O=function(e,t){return b(e.toFixed(t))},j=function(e){var t=Object(a.useState)(e.revenue),n=Object(m.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(e.expense),i=Object(m.a)(c,2),u=i[0],d=i[1],p=Object(a.useState)(12),h=Object(m.a)(p,2),f=h[0],v=h[1];Object(a.useEffect)(function(){o(e.revenue),d(e.expense)},[e]);var y=r.reduce(function(e,t){return e+t.oneTime},0),b=r.reduce(function(e,t){return e+t.monthly},0),j=y+b*f,S=u.reduce(function(e,t){return e+t.oneTime},0),T=u.reduce(function(e,t){return e+t.monthly},0),w=S+T*f,x=b-T,C=j-w,N=0!==j?(C/j*100).toFixed(0):0,R=w-j===0||b-T===0?0:((S-y)/x).toFixed(1);return l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"Results"),l.a.createElement("p",null,"Select the term length in months"),l.a.createElement(E.a,{sm:{span:2,offset:0},className:"input-field"},l.a.createElement(s.a.Control,{as:"select",name:"term",value:f,onChange:function(e){var t=e.target.value;v(t)}},l.a.createElement("option",{value:"default",name:"default",disabled:!1},"Select Type"),l.a.createElement("option",{value:12,name:"12 months"},"12-months"),l.a.createElement("option",{value:24,name:"24 months"},"24-months"),l.a.createElement("option",{value:36,name:"36 moths"},"36-months"),l.a.createElement("option",{value:48,name:"48 months"},"48-months"),l.a.createElement("option",{value:60,name:"60 months"},"60-months"))),l.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,className:"totals-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"One-Time"),l.a.createElement("th",null,"Monthly"),l.a.createElement("th",null,"Total"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Revenue"),l.a.createElement("td",null,"$",O(y,2)),l.a.createElement("td",null,"$",O(b,2)),l.a.createElement("td",null,"$",O(j,2))),l.a.createElement("tr",null,l.a.createElement("td",null,"Expenses"),l.a.createElement("td",null,"$",O(S,2)),l.a.createElement("td",null,"$",O(T,2)),l.a.createElement("td",null,"$",O(w,2))),l.a.createElement("tr",null,l.a.createElement("td",null,"Contribution Profit"),l.a.createElement("td",null),l.a.createElement("td",{bgcolor:x<0&&"red"},"$",O(x,2)),l.a.createElement("td",{bgcolor:C<0&&"red"},"$",O(C,2))),l.a.createElement("tr",null,l.a.createElement("td",null,"Contribution Margin"),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",{bgcolor:N<0&&"red"},N,"%")),l.a.createElement("tr",null,l.a.createElement("td",null,"Capital ROI (monthly)"),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",{bgcolor:R<0&&"red"},R)))))},S=function(e){return l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,e.type,"s"),l.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"data-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,e.type),l.a.createElement("th",null,"One-Time"),l.a.createElement("th",null,"Monthly"),e.dataSource.length>0&&l.a.createElement("th",{align:"center",colSpan:2},l.a.createElement(p.a,{variant:"warning",onClick:"Revenue"===e.type?e.deleteAllRevenue:e.deleteAllExpenses},"Clear All ",e.type,"s")))),l.a.createElement("tbody",null,e.dataSource.length>0?e.dataSource.map(function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,t.name),l.a.createElement("td",null,"$",b(t.oneTime.toFixed(2))),l.a.createElement("td",null,"$",b(t.monthly.toFixed(2))),l.a.createElement("td",null,l.a.createElement(p.a,{variant:"danger",onClick:function(){return e.deleteData(t.id,e.type)}},"Delete")),l.a.createElement("td",null,l.a.createElement(p.a,{variant:"success",onClick:function(){return e.editDataRow(t,e.type)}},"Edit")))}):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},"No ",e.type," Data")))))},T=function(e){return l.a.createElement("div",{className:"navBar"},l.a.createElement("img",{alt:"",src:"https://veeloinc.com/wp-content/uploads/2017/04/roi.png",width:"100",height:"90",className:"d-inline-block align-center"}),l.a.createElement("h1",{className:"title"},"ROI Calculator"),l.a.createElement(p.a,{onClick:e.deleteAllRevenueAndExpenses},"Clear Data"))},w=function(){var e=Object(a.useState)([{id:1,name:"Item 1",oneTime:100,monthly:50,type:"Revenue"},{id:2,name:"Item 2",oneTime:50,monthly:25,type:"Revenue"},{id:3,name:"Item 3",oneTime:25,monthly:85,type:"Revenue"}]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([{id:1,name:"Expense 1",oneTime:500,monthly:20,type:"Expense"},{id:2,name:"Expense 2",oneTime:200,monthly:40,type:"Expense"}]),i=Object(m.a)(o,2),u=i[0],s=i[1],d=Object(a.useState)(!1),E=Object(m.a)(d,2),p=E[0],h=E[1],f=Object(a.useState)({id:null,name:"",oneTime:0,monthly:0,type:""}),g=Object(m.a)(f,2),b=g[0],O=g[1],w=function(){s([])},x=function(){r([])},C=function(e,t){"Revenue"===t?r(n.filter(function(t){return t.id!==e})):s(u.filter(function(t){return t.id!==e}))},N=function(e,t){h(!0),O("Revenue"===t?{id:e.id,name:e.name,oneTime:e.oneTime,monthly:e.monthly,type:"Revenue"}:{id:e.id,name:e.name,oneTime:e.oneTime,monthly:e.monthly,type:"Expense"})};return l.a.createElement("div",{className:"container"},l.a.createElement(T,{deleteAllRevenueAndExpenses:function(){x(),w()}}),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},p?l.a.createElement(y,{setEditingData:h,setRevenue:r,deleteData:C,currentData:b,updateData:function(e,t){h(!1),"Revenue"===t.type?r(n.map(function(n){return n.id===e?t:n})):s(u.map(function(n){return n.id===e?t:n}))}}):l.a.createElement(v,{addData:function(e){e.oneTime=parseFloat(e.oneTime),e.monthly=parseFloat(e.monthly),"Revenue"===e.type?(e.id=n.length+1,r([].concat(Object(c.a)(n),[e]))):(e.id=u.length+1,s([].concat(Object(c.a)(u),[e])))}}),l.a.createElement(S,{type:"Revenue",dataSource:n,deleteData:C,deleteAllRevenue:x,editingData:p,editDataRow:N}),l.a.createElement(S,{type:"Expense",dataSource:u,deleteData:C,deleteAllExpenses:w,editingData:p,editDataRow:N}),l.a.createElement(j,{revenue:n,expense:u}))))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.ce842737.chunk.js.map