(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{25:function(e,t,a){e.exports=a(41)},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),i=(a(30),a(8)),d=a(1),l=(a(31),a(3)),s=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],o=a[1],d=Object(n.useState)(!1),s=Object(l.a)(d,2),u=s[0],m=s[1],h=Object(n.useState)(!1),b=Object(l.a)(h,2),f=b[0],E=b[1],p=Object(n.useState)("shown"),O=Object(l.a)(p,2),g=O[0],j=O[1],S=Object(n.useState)("shown"),w=Object(l.a)(S,2),y=w[0],v=w[1],x=Object(n.useState)("shown"),k=Object(l.a)(x,2),W=k[0],I=k[1],z=Object(n.useState)("name"),C=Object(l.a)(z,2),B=C[0],N=C[1],A=Object(n.useState)("name"),G=Object(l.a)(A,2),K=G[0],X=G[1],_=Object(n.useState)("name "),H=Object(l.a)(_,2),J=H[0],L=H[1],M=Object(n.useState)({}),R=Object(l.a)(M,2),T=R[0],U=R[1],Y=Object(n.useState)({}),D=Object(l.a)(Y,2),P=D[0],Q=D[1],q=Object(n.useState)({}),F=Object(l.a)(q,2),V=F[0],Z=F[1];Object(n.useEffect)((function(){e.db.collection("solutions").doc("Waldo").get().then((function(e){U({person:e.data().person,xStart:e.data().xStart,yStart:e.data().yStart,xEnd:e.data().xEnd,yEnd:e.data().yEnd})})).catch((function(e){console.log("Error getting document:",e)})),e.db.collection("solutions").doc("Odlaw").get().then((function(e){Q({person:e.data().person,xStart:e.data().xStart,yStart:e.data().yStart,xEnd:e.data().xEnd,yEnd:e.data().yEnd})})).catch((function(e){console.log("Error getting document:",e)})),e.db.collection("solutions").doc("Wizard").get().then((function(e){Z({person:e.data().person,xStart:e.data().xStart,yStart:e.data().yStart,xEnd:e.data().xEnd,yEnd:e.data().yEnd})})).catch((function(e){console.log("Error getting document:",e)}))}),[]);var $=Object(n.useState)({left:-100,top:-100}),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(0),ce=Object(l.a)(ne,2),re=ce[0],oe=ce[1],ie=function(e){var t=document.getElementById("picture").getBoundingClientRect();return{x:e.clientX-t.x,y:e.clientY-t.y}},de=function(e){if(te.left+21>e.xStart&&te.left+21<e.xEnd&&te.top+21>e.yStart&&te.top+21<e.yEnd){switch(e.person){case"Waldo":o(!0),j("hidden"),N("name linethrough");break;case"Odlaw":m(!0),v("hidden"),X("name linethrough");break;case"Wizard":E(!0),I("hidden"),L("name linethrough")}ae({left:-100,top:-100})}},le=function(){j("shown"),v("shown"),I("shown"),N("name"),X("name"),L("name"),o(!1),m(!1),E(!1),ae({left:-100,top:-100}),oe(0)};return Object(n.useEffect)((function(){var e=setInterval((function(){oe((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[re]),Object(n.useEffect)((function(){if(r&&u&&f){var t=re;alert("You found everyone in "+t+" seconds!");var a=prompt("Enter your name to record your score: ","Anonymous");e.db.collection("highscores").add({name:a,score:t}),le()}}),[r,u,f,re]),c.a.createElement("div",{id:"app"},c.a.createElement("h1",null,"Where's:"),c.a.createElement("h1",{id:"names"},c.a.createElement("div",{className:B,id:"waldo-title"},"Waldo")," ",c.a.createElement("div",{className:K,id:"odlaw-title"},"Odlaw")," ",c.a.createElement("div",{className:J,id:"wizard-title"},"Wizard")),c.a.createElement("div",{id:"frame"},c.a.createElement("div",{id:"search-box-frame",style:te},c.a.createElement("div",{id:"search-box"}),c.a.createElement("button",{id:"waldo-button",className:g,onClick:function(){return de(T)}},"Waldo"),c.a.createElement("button",{id:"odlaw-button",className:y,onClick:function(){return de(P)}},"Odlaw"),c.a.createElement("button",{id:"wizard-button",className:W,onClick:function(){return de(V)}},"Wizard")),c.a.createElement("img",{id:"picture",onClick:function(e){return function(e){var t=ie(e);ae({left:t.x-21,top:t.y-21})}(e)},src:"./waldo.jpg",alt:"Where's Waldo?"})),c.a.createElement("h2",{onClick:function(){return le()}},"Start Again"),c.a.createElement(i.b,{to:"/highscores"},c.a.createElement("h2",null,"High Scores")))},u=(a(36),a(37)),m=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],o=a[1],d=[];return Object(n.useEffect)((function(){e.db.collection("highscores").get().then((function(e){e.forEach((function(e){d.push({name:e.data().name,score:e.data().score})})),d.sort((function(e,t){return e.score-t.score})),o(d)}))}),[]),c.a.createElement("div",{id:"highscores"},c.a.createElement("h2",{id:"highscorestitle"},"High Scores"),r.slice(0,9).map((function(e){return c.a.createElement("div",{key:u(),className:"highscore"},e.name," ",e.score)})),c.a.createElement(i.b,{to:"/"},c.a.createElement("h2",{id:"gobacklink"},"Go Back")))},h=a(16);a(38);h.initializeApp({apiKey:"AIzaSyCUQbXThIGnWzKA4Iz_noI_gMB0TK_xiW4",authDomain:"wheres-waldo-2710e.firebaseapp.com",databaseURL:"https://wheres-waldo-2710e.firebaseio.com",projectId:"wheres-waldo-2710e",storageBucket:"wheres-waldo-2710e.appspot.com",messagingSenderId:"434710063892",appId:"1:434710063892:web:787688c00d6fead860f001",measurementId:"G-C5E8XGBPL1"});var b=h.firestore(),f=function(){return c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement(d.a,{exact:!0,path:"/",render:function(){return c.a.createElement(s,{db:b})}}),c.a.createElement(d.a,{exact:!0,path:"/highscores",render:function(){return c.a.createElement(m,{db:b})}})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.306bb083.chunk.js.map