(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(8),r=a(2),o=a(6),c=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],u=a(0),m=function(e){var t=e.user;return t?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"userName",children:t.username}),Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{className:"userEmail",children:t.email})]}):Object(u.jsx)("div",{children:"User not found"})},h=(a(15),function(e){var t=e.todo;return Object(u.jsxs)("div",{className:"TodoInfo",children:[Object(u.jsx)("div",{className:"todoInfoTitle",children:t.title}),t.completed?"completed":"notCompleted",Object(u.jsx)(m,{user:t.user})]})}),b=function(e){var t=e.todos;return Object(u.jsx)("div",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(h,{todo:e},e.id)}))})},p=d.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))||null})})),j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),d=o[0],m=o[1],h=Object(c.useState)(p),j=Object(r.a)(h,2),g=j[0],y=j[1],v=Object(c.useState)(),f=Object(r.a)(v,2),O=f[0],x=f[1],S=Object(c.useState)(),w=Object(r.a)(S,2),k=w[0],C=w[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("div",{className:"App_item",children:[Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"title",children:" Add todo title:"}),Object(u.jsx)("input",{type:"text",name:"title",className:"inputStyle",value:d,onChange:function(e){var t="0987654321qwertyuiopasdfghjklzxcvbnm\u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u0449\u0437\u0445\u044a\u0444\u044b\u0432\u0430\u043f\u0440\u043e\u043b\u0434\u0436\u044d\u044f\u0447\u0441\u043c\u0438\u0442\u044c\u0431\u044e ",a=t.toLocaleUpperCase(),n=e.target.value[e.target.value.length-1];(t.includes(n)||a.includes(n)||0===e.target.value.length)&&m(e.target.value)}})]}),Object(u.jsx)("div",{className:"error",children:O}),Object(u.jsxs)("select",{value:a,onChange:function(e){n(e.target.value)},className:"inputStyle",children:[Object(u.jsx)("option",{children:"Chose user"}),l.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),Object(u.jsx)("div",{className:"error",children:k}),Object(u.jsx)("button",{type:"button",onClick:function(e){e.preventDefault();var t=!1;if(""===a?(C("Please choose a user"),t=!0):C(""),""===d?(x("Please enter the title"),t=!0):x(""),!t){a&&d&&(n(""),m(""));var i=Object(s.a)(g),r=l.find((function(e){return e.name===a})),o=r?r.id:0;i.push({userId:o,id:i.length,title:d,completed:!1,user:r||null}),y(i)}},className:"btn",children:"Add"})]}),Object(u.jsx)(b,{todos:g})]})]})};i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2cfa0eb6.chunk.js.map