(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports={root:"style_root__wqmKn",grey:"style_grey__26Shm"}},21:function(e,t,n){e.exports={root:"style_root__3KF15"}},22:function(e,t,n){e.exports={root:"style_root__2NkpN"}},25:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(30),n(31),n(16)),u=n(17),s=n(23),l=n(18),m=n(24),p=n(1),d=n(2),f=n(8),y=n(20),h=function(e,t,n){return Object.keys(e).map(function(a){var r;return r={},Object(d.a)(r,t,a),Object(d.a)(r,n,e[a]),r})},E=function(e,t,n){return Object(p.a)({},e,Object(d.a)({},t,n))},v=function(e,t){return Object(f.b)(e,function(e,n){return t(function(t,n){return e({type:t,payload:n})},n)})},w=function(e,t){return e.preventDefault(),t(e)},b=n(14),g={ui:{secret:"",newDomain:""},keys:{},secret:"",domainInputActive:!1},O=n(21),j=n.n(O),N=function(e){return r.a.createElement("button",Object.assign({className:j.a.root},e),e.children)};N.displayName="Button";var k=N,I=function(e){return r.a.createElement(k,Object.assign({type:"button"},e),"Logout")};I.displayName="Logout";var D=v(null,function(e){return{onClick:function(){return e("logout")}}})(I),S={logout:function(e){return window.confirm("Are you sure want to quit? You will lose all your saved passwords.")?(localStorage.removeItem("noo"),g):e}},_=n(13),A=n.n(_),x=function(e){return r.a.createElement("li",{className:A.a.root},r.a.createElement("span",null,e.name),":\xa0",r.a.createElement("span",{className:A.a.grey},e.password))},C=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Passwords"),e.domainsExist&&r.a.createElement("ul",null,e.domains.map((t=x,function(e,n){return r.a.createElement(t,Object.assign({},e,{key:n}))}))),!e.domainsExist&&r.a.createElement("p",null,"You don't have any saved passwords yet."),r.a.createElement(k,{autoFocus:!0,type:"button",onClick:e.activateDomainInput},"Add"));var t};C.displayName="DomainList";var F=v(function(e){return{domains:h(e.keys,"name","password"),domainsExist:h(e.keys,"name","password").length>0}},function(e){return{activateDomainInput:function(){return e("activateDomainInput")}}})(C),B={activateDomainInput:function(e){return E(e,"domainInputActive",!0)}},L=n(22),q=n.n(L),J=function(e){return r.a.createElement("input",Object.assign({className:q.a.root},e))};J.displayName="Input";var T=J,P=function(e){return r.a.createElement("div",Object.assign({style:{display:"flex",justifyContent:"center",margin:"24px 0"}},e),e.children)};P.displayName="Center";var Y=P,K=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"How it works?"),r.a.createElement("p",null,"Noo generates strong passwords for the websites you use. Neither the password nor the secret are sent over the internet \u2013 the whole thing happens on your device."),r.a.createElement("p",null,"If the same secret is given, the same domain names would render the same passwords, so this is how Noo syncs. You just enter your secret and the domain \u2013\xa0the given password will be the same."),r.a.createElement("p",null,"There is ",r.a.createElement("a",{href:"https://nakedsecurity.sophos.com/2012/10/04/sha-3-hash-competition-concludes-keccak/",target:"_blank",rel:"noopener noreferrer"},"no way to acquire your secret")," from the password \u2013 the algorythm is the same as used in Etherium, so you are safe here."))},M=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"The secret"),r.a.createElement("p",null,"Once you enter this, there'll be no way back."),r.a.createElement("p",null,"There is no way to restore the secret either."),r.a.createElement("form",{onSubmit:e.commit},r.a.createElement(T,{autoFocus:!0,required:!0,type:"password",placeholder:"keyboardcat",value:e.secret,onChange:e.edit}),r.a.createElement(Y,null,r.a.createElement(k,null,"Submit"))),r.a.createElement(K,null))};M.displayName="SecretInput";var X=v(function(e){return{secret:e.ui.secret}},function(e){return{edit:function(t){return e("editSecret",t.target.value)},commit:function(t){return w(t,function(){return e("commitSecret")})}}})(M),H={editSecret:function(e,t){return Object(p.a)({},e,{ui:Object(p.a)({},e.ui,{secret:t})})},commitSecret:function(e){return Object(p.a)({},e,{secret:e.ui.secret,ui:Object(p.a)({},e.ui,{secret:""})})}},R=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(k,{type:"button",onClick:e.close},"Close"),r.a.createElement("h2",null,"Add new domain"),r.a.createElement("form",{onSubmit:e.commit},r.a.createElement(T,{autoFocus:!0,required:!0,placeholder:"example.com",value:e.value,onChange:e.edit}),r.a.createElement(Y,null,r.a.createElement(k,null,"Add"))))};R.displayName="NewDomainInput";var U=v(function(e){return{value:e.ui.newDomain}},function(e){return{edit:function(t){return e("editNewDomain",t.target.value)},commit:function(t){return w(t,function(){return e("commitNewDomain")})},close:function(){return e("closeNewDomain")}}})(R),V={editNewDomain:function(e,t){return Object(p.a)({},e,{ui:Object(p.a)({},e.ui,{newDomain:t})})},commitNewDomain:function(e){return Object(p.a)({},e,{keys:Object(p.a)({},e.keys,Object(d.a)({},e.ui.newDomain,(t=e.ui.newDomain,n=e.secret,Object(y.keccak512)(t+n).slice(0,20)))),ui:Object(p.a)({},e.ui,{newDomain:""}),domainInputActive:!1});var t,n},closeNewDomain:function(e){return E(e,"domainInputActive",!1)}},z=function(e){return r.a.createElement("div",Object.assign({style:{padding:e.padding||"12px"}},e),e.children)};z.displayName="Pad";var G=z,Q=b.b.div({enter:{x:0,opacity:1,delay:150,transition:{x:{type:"spring",stiffness:1e3,damping:15},default:{duration:300}}},exit:{x:50,opacity:0,transition:{duration:150}}}),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.start()}},{key:"render",value:function(){return r.a.createElement(G,null,r.a.createElement(b.a,null,this.props.secretInputActive&&r.a.createElement(Q,{key:"SecretInput"},r.a.createElement(X,null)),this.props.domainInputActive&&r.a.createElement(Q,{key:"NewDomainInput"},r.a.createElement(U,null)),this.props.domainListActive&&r.a.createElement(Q,{key:"default"},r.a.createElement(F,null),r.a.createElement(D,null))))}}]),t}(a.Component);W.displayName="App";var Z=v(function(e){return{secretInputActive:!Boolean(e.secret),domainInputActive:Boolean(e.secret)&&e.domainInputActive,domainListActive:Boolean(e.secret)&&!e.domainInputActive,secret:e.secret}},function(e){return{start:function(){return e("start")}}})(W),$={start:function(e){return e},hydrate:function(e,t){return function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(t)?JSON.parse(t):e}},ee=n(4),te=Object(p.a)({},$,S,H,V,B,{}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.c,ae=Object(ee.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return te[n]?te[n](e,a):e},ne(Object(ee.a)(function(e){return function(t){return function(n){var a=t(n),r=e.getState(),o=localStorage.getItem("noo");return r===g&&Boolean(o)?e.dispatch({type:"hydrate",payload:o}):localStorage.setItem("noo",JSON.stringify(r)),a}}})));c.a.render(r.a.createElement(f.a,{store:ae},r.a.createElement(Z,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.726397dd.chunk.js.map