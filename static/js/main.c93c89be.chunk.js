(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(32),i=n.n(s),u=n(10),o=n(21),l=n(6),j=n(8),d=n.n(j),b=n(16),p=n(24);n(41),n(51),n(52);p.a.initializeApp({apiKey:"AIzaSyAk8SfWqgoaiUmuF4JB1-s36MM1gQALOsA",authDomain:"nwitter-fe053.firebaseapp.com",projectId:"nwitter-fe053",storageBucket:"nwitter-fe053.appspot.com",messagingSenderId:"199933952511",appId:"1:199933952511:web:32b1ce26abd5de7bdee7ca"});var f=p.a,O=p.a.auth(),h=p.a.firestore(),m=p.a.storage(),x=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(""),p=Object(u.a)(j,2),f=p[0],h=p[1],m=Object(c.useState)(!0),x=Object(u.a)(m,2),g=x[0],v=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},w=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),h(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(a.jsx)("input",{type:"submit",value:g?"Sign Up":"Sign In",className:"authInput authSubmit"}),f&&Object(a.jsx)("span",{className:"authError",children:f})]}),Object(a.jsx)("span",{onClick:function(){v((function(e){return!e}))},className:"authSwitch",children:g?"Sign In":"Sign Up"})]})},g=n(12),v=n(23),y=function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(g.a,{icon:v.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(g.a,{icon:v.a})]})]})]})},w=n(34),N=n(19),S=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(t.contents),j=Object(u.a)(l,2),p=j[0],f=j[1],O=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=7;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,m.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},v=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({contents:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsx)(a.Fragment,{children:n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(a.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:p,onChange:function(e){var t=e.target.value;f(t)},required:!0,autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.contents}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl,alt:""}),n&&Object(a.jsxs)("div",{className:"nweet__actions",children:[Object(a.jsx)("span",{onClick:O,children:Object(a.jsx)(g.a,{icon:N.d})}),Object(a.jsx)("span",{onClick:x,children:Object(a.jsx)(g.a,{icon:N.a})})]})]})})},k=n(54),I=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(u.a)(o,2),j=l[0],p=l[1],f=function(){var e=Object(b.a)(d.a.mark((function e(n){var a,c,r,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===j){e.next=12;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(j,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={contents:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,h.collection("nweets").add(u);case 15:i(""),O();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){document.getElementById("imgInput").value=null,p("")};return Object(a.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(g.a,{icon:N.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),Object(a.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:j,alt:"",style:{backgroundImage:j}}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:O,children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(g.a,{icon:N.c})]})]})]})},F=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(u.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(I,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},U=function(e){var t=e.userObj,n=e.refreshUser,r=e.clearUser,s=Object(l.f)(),i=Object(c.useState)(t.displayName),o=Object(u.a)(i,2),j=o[0],p=o[1],f=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","desc").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){f()}),[]);var m=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===j){e.next=5;break}return e.next=4,t.updateProfile({displayName:j});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:m,className:"profileForm",children:[Object(a.jsx)("input",{type:"text",placeholder:"Display Name",onChange:function(e){var t=e.target.value;p(t)},value:j,autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),r(),s.push("/")},children:"Log Out"})]})},A=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(g.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},C=function(e){var t=e.isLoggendIn,n=e.userObj,c=e.refreshUser,r=e.clearUser;return Object(a.jsxs)(o.a,{children:[t&&Object(a.jsx)(A,{userObj:n}),Object(a.jsx)(l.c,{children:t?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(F,{userObj:n})}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",children:Object(a.jsx)(U,{userObj:n,refreshUser:c,clearUser:r})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{})})})})]})};var B=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){O.onAuthStateChanged((function(e){e&&l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(C,{isLoggendIn:Boolean(o),userObj:o,refreshUser:function(){var e=O.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},clearUser:function(){l(null)}}):"Loading..."})};n(49);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c93c89be.chunk.js.map