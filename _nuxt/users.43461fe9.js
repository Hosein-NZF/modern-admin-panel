import{d as _,r as d,l as f,a as o,o as r,g as p,f as c,b as e,w as a,j as t,P as v,e as h,p as b,T as x,_ as g,c as y}from"./entry.8441bd46.js";const N=[{id:1,username:"user1",fullName:"John Doe",email:"user1@example.com",age:25,country:"USA"},{id:2,username:"user2",fullName:"Jane Smith",email:"user2@example.com",age:30,country:"Canada"},{id:3,username:"user3",fullName:"Alice Johnson",email:"user3@example.com",age:28,country:"UK"}],U={class:"users-container"},k={class:"d-flex justify-space-between mb-3"},w=c("h2",{class:"text-h5 mb-6"},"Users",-1),C=_({__name:"UserTable",setup(l){const n=[{title:"ID",value:"id"},{title:"Username",value:"username"},{title:"Full Name",value:"fullName"},{title:"Email",value:"email"},{title:"Age",value:"age"},{title:"Country",value:"country"},{title:"Action",value:"action",align:"end"}],s=d(!0);return f(()=>{setTimeout(()=>{s.value=!1},1e3)}),(B,I)=>{const i=o("v-btn"),u=o("v-data-table"),m=o("v-card");return r(),p("div",U,[c("div",k,[w,e(i,{flat:"",color:"primary",rounded:"xl",density:"comfortable"},{append:a(()=>[e(t(v),{size:20})]),default:a(()=>[h(" Create New ")]),_:1})]),e(m,{elevation:"10"},{default:a(()=>[e(u,{headers:n,items:t(N),sticky:"",loading:t(s),color:"primary"},{"item.action":a(()=>[e(t(b),{class:"cursor-pointer",color:"gray","stroke-width":"1.2",size:18}),e(t(x),{class:"cursor-pointer",color:"#ff2825","stroke-width":"1.2",size:18})]),bottom:a(()=>[]),_:1},8,["items","loading"])]),_:1})])}}}),T={};function A(l,n){const s=C;return r(),y(s)}const J=g(T,[["render",A]]);export{J as default};