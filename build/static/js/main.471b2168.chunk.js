(this.webpackJsonpmaluleke=this.webpackJsonpmaluleke||[]).push([[0],{199:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(84),r=c.n(s),j=(c(95),c(2)),l=c(3),i=c(8),b=c(9),o=c(47),d=c(10),h=c(90),u=(c(35),c(28)),O=c(0),x=["label"],m=function(e){var t=e.label,c=Object(h.a)(e,x),n=Object(u.d)(c),a=Object(d.a)(n,2),s=a[0];a[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{children:t}),Object(O.jsx)("input",Object(o.a)(Object(o.a)(Object(o.a)({},s),c),{},{autoComplete:"off"})),Object(O.jsx)(u.a,{name:s.name})]})},p=c(12),g=c(24),v=function(e){var t=e.AdderUser,c=Object(n.useState)(""),a=Object(d.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(""),l=Object(d.a)(j,2),i=l[0],b=l[1],o=Object(n.useState)(),h=Object(d.a)(o,2),u=h[0],x=h[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),g=p[0],v=p[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)("div",{className:"login-box",children:[Object(O.jsx)("h2",{children:"Register Student"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,i,u,g)},children:[Object(O.jsx)("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)},placeholder:"Enter your name",autoFocus:!0}),Object(O.jsx)("input",{type:"text",value:i,onChange:function(e){return b(e.target.value)},placeholder:"Enter your surname"}),Object(O.jsx)("input",{type:"number",value:u,onChange:function(e){return x(e.target.value)},placeholder:"Enter your age"}),Object(O.jsx)("input",{type:"text",value:g,onChange:function(e){return v(e.target.value)},placeholder:"Enter your location"}),Object(O.jsx)("button",{type:"submit",children:" add user"})]})]})})})},f=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)(v,{AdderUser:function(e,t,n,s){a([].concat(Object(p.a)(c),[{uid:c.length,_name:e,_surname:t,_age:n,_location:s}]))}}),Object(O.jsx)("div",{className:"login-box1",children:c.map((function(e){return Object(O.jsxs)("p",{children:[e._age,", ",e._location]})}))})]})})},N=c(25),y=c(5),E=c.p+"static/media/IMG.8ae040be.jpg",k=function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"left_side",children:Object(O.jsxs)("div",{className:" profileText",children:[Object(O.jsx)("div",{className:"imgBx",children:Object(O.jsx)("img",{src:E,alt:"logo"})}),Object(O.jsxs)("h2",{children:["LOVERS MALULEKE ",Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"WEB DEVELOPER"})]})]})}),Object(O.jsx)("div",{className:"rigth_side"})]})},A=function(){return Object(O.jsxs)("div",{className:"box-area",children:[Object(O.jsx)("div",{className:"banner-area",children:Object(O.jsx)("h2",{children:"PROFILE "})}),Object(O.jsx)("div",{className:"content-area",children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("h2",{children:"Profile "}),Object(O.jsx)("p",{children:"Phone   :015-232-2342"}),Object(O.jsx)("p",{children:"Mobile :076-723-2342"}),Object(O.jsx)("p",{children:"Mail :Malulekelovers@gmail.com"}),Object(O.jsx)("p",{children:"Address :Home 2000 :Ga-Kgapane :0838"})]})})]})},S=function(e){Object(i.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={lists:[{name:"mpho",surname:"maake",location:"2g",age:35},{name:"lovers",surname:"maluleke",location:"Los",age:17},{name:"love",surname:"malu",location:"Seshego",age:25},{name:"lula",surname:"uleke",location:"Kgapane",age:15}]},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"box-area",children:[Object(O.jsx)("div",{className:"banner-area",children:Object(O.jsx)("h2",{children:"Users "})}),Object(O.jsx)("div",{className:"content-area",children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("h1",{children:"Users"}),Object(O.jsxs)("dev",{className:"box-1",children:[Object(O.jsxs)("dev",{className:"inner-box",children:[Object(O.jsx)("h4",{children:"Names"}),Object(O.jsx)("ul",{children:this.state.lists.map((function(e){return Object(O.jsxs)("li",{children:[" ",e.name," "]})}))})]}),Object(O.jsxs)("dev",{className:"inner-box",children:[Object(O.jsx)("h4",{children:"Surnames"}),Object(O.jsx)("ul",{children:this.state.lists.map((function(e){return Object(O.jsxs)("li",{children:[" ",e.surname," "]})}))})]}),Object(O.jsxs)("dev",{className:"inner-box",children:[Object(O.jsx)("h4",{children:"Location"}),Object(O.jsx)("ul",{children:this.state.lists.map((function(e){return Object(O.jsxs)("li",{children:[" ",e.location," "]})}))})]}),Object(O.jsxs)("dev",{className:"inner-box",children:[Object(O.jsx)("h4",{children:"Age"}),Object(O.jsx)("ul",{children:this.state.lists.map((function(e){return Object(O.jsxs)("li",{children:[" ",e.age," "]})}))})]}),Object(O.jsxs)("dev",{className:"inner-box",children:[Object(O.jsx)("h4",{children:"Access"}),Object(O.jsx)("ul",{children:this.state.lists.map((function(t){return Object(O.jsxs)("li",{children:[" ",e.validaAge(t.age)," "]})}))})]})]})]})})]})}},{key:"validaAge",value:function(e){return e>18?"allowed":"daind "}}]),c}(n.Component),L=function(){g.a({name:g.b().required("Provide nme"),suraname:g.b().required("fill"),location:g.b().required("gjjjjj"),age:g.b().required("kkk")});return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.c,{initialVaues:{name:"",suraname:"",location:"",age:""},children:function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.b,{children:Object(O.jsxs)("div",{className:"login-box",children:[Object(O.jsx)("h2",{children:"Register Student"}),Object(O.jsx)(m,{label:"Name",name:"name",type:"text",placeholder:"Enter your name"}),Object(O.jsx)(m,{label:"Surname",name:"surname",type:"text",placeholder:"Enter your surname"}),Object(O.jsx)(m,{label:"Location",name:"location",type:"text",placeholder:"Enter your location"}),Object(O.jsx)(m,{label:"Age",name:"age",type:"number",placeholder:"Enter your age"}),Object(O.jsx)("button",{type:"submit",children:"get data"})]})})})}})})},F=function(){return Object(O.jsxs)(N.a,{children:[Object(O.jsx)("div",{className:"box-area",children:Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("h1",{children:"Lovers"})}),Object(O.jsx)("nav",{className:"navigator",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(N.b,{to:"/Landing",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(N.b,{to:"/Profile",children:"Profile"})}),Object(O.jsx)("li",{children:Object(O.jsx)(N.b,{to:"/About",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)(N.b,{to:"/Users",children:"Users"})}),Object(O.jsx)("li",{children:Object(O.jsx)(N.b,{to:"/Register",children:"Register Form"})})]})})]})})}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{path:"/Profile",children:Object(O.jsx)(A,{})}),Object(O.jsx)(y.a,{path:"/About",children:Object(O.jsx)(k,{})}),Object(O.jsx)(y.a,{path:"/Users",children:Object(O.jsx)(S,{})}),Object(O.jsx)(y.a,{path:"/Landing",children:Object(O.jsx)(f,{})}),Object(O.jsx)(y.a,{path:"/Register",children:Object(O.jsx)(L,{})})]})]})},C=function(e){Object(i.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(O.jsx)(F,{})}}]),c}(n.Component),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,200)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),P()},35:function(e,t,c){},95:function(e,t,c){}},[[199,1,2]]]);
//# sourceMappingURL=main.471b2168.chunk.js.map