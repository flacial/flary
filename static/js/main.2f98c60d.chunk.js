(this.webpackJsonpwordsapiproject=this.webpackJsonpwordsapiproject||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},145:function(e,t){},186:function(e,t,n){"use strict";n.r(t);var c,a,o,r,s,l,i,j,d,b,u=n(0),h=n.n(u),O=n(97),x=n.n(O),p=(n(119),n(4)),f=(n(120),n(10)),m=n(23),g=n(65),y=n.n(g),v=n(66),w=n.n(v),S=n(98),k=function(){var e=Object(S.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://wordsapiprojectserver.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=n(17),F=n(101),W=n(22),B=n.n(W),P=n(112),T=n(213),E=n(188),z=n(203),L=n(204),N=n(208),M=n(27),R=n(2),A=B.a.h1(c||(c=Object(C.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),D=Object(P.a)(A),I=F.a.div(a||(a=Object(C.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 5px;\npadding-bottom: 5px;\nword-spacing: 0;\n"]))),H=Object(P.a)(I),J=B.a.div(o||(o=Object(C.a)(["\n    mt-5\n"]))),K=B.a.h1(r||(r=Object(C.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),V=Object(P.a)(K),q=B.a.span(s||(s=Object(C.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),G=Object(P.a)(q),_=B.a.h2(l||(l=Object(C.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),Q=Object(P.a)(_),U=B.a.div(i||(i=Object(C.a)(["\n    mt-2\n    relative pl-6\n"]))),X=B.a.span(j||(j=Object(C.a)(["\n    text-xl\n    block\n"]))),Y=Object(P.a)(X),Z=B.a.span(d||(d=Object(C.a)(["\n    text-gray-700\n    text-xl\n"]))),$=Object(P.a)(Z),ee=function(e){var t=e.Link,n=e.BackButtonClick,c=e.ReturnedWord,a=e.PartOfSpeech,o=e.ShortDef,r=e.ReactHtmlParser,s=e.WordExample,l=e.getPathName,i=e.WordsLoaded,j=e.Syns,d=e.Ants,b=Object(f.h)();Object(u.useEffect)((function(){l(b.pathname)}));var h=Object(P.a)(t),O=Object(E.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),x=Object(E.c)("#252d3d","#edf2f7"),p=Object(E.c)("gray.700","#edf2f7"),m=Object(E.c)("#2563EB","#db8b02"),g=Object(E.c)("#3B82F6","orange"),y=Object(E.c)("#3B82F6","orange.300"),v=Object(E.c)({background:"gray.200"},{background:"gray.700"}),w=Object(E.c)("linear(to-l, gray.200, white)"),S=Object(E.c)("2px 2px 12px #37413f, -10px -10px 0px #3B82F6","2px 2px 12px #37413f, -10px -10px 0px orange"),k=Object(E.c)("#3B82F6","orange.200"),C=Object(E.c)("gray.700","orange.500");return Object(R.jsxs)(u.Fragment,{children:[c.length?Object(R.jsx)(z.a,{className:"absolute top-0",children:Object(R.jsx)(h,{bg:O,color:x,_hover:v,onClick:n,className:"\npy-2\npx-4\nrounded-xl\nshadow-xl\ninline-block\nfocus:outline-none\nfocus:border\nfocus:ring-2 focus:ring-blue-500\ntransition duration-500 ease-in-out\nm-4\n",to:"/",children:"Back to search"})}):Object(R.jsx)(R.Fragment,{}),Object(R.jsxs)(H,{boxShadow:S,bgGradient:w,m:["1em","3em",null],marginTop:["3",null,null],children:[Object(R.jsx)(D,{color:g,children:"Thesaurus"}),i?Object(R.jsxs)(M.a.TransitionFade,{children:[Object(R.jsxs)(J,{children:[Object(R.jsx)(V,{color:p,children:c}),Object(R.jsx)(G,{color:g,children:a})]}),Object(R.jsxs)(Q,{color:m,children:["Synonyms & Antonyms of ",Object(R.jsx)("em",{children:c})]}),Object(R.jsxs)(U,{children:[Object(R.jsx)(P.a.span,{color:p,className:"font-bold text-xl absolute left-0 top-0",children:"1"}),Object(R.jsx)($,{color:p,children:o}),Object(R.jsxs)(Y,{color:y,children:[" ",Object(R.jsx)("strong",{children:"//"})," ",r(s)]}),Object(R.jsxs)(L.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:m,children:["Synonyms for ",Object(R.jsx)(P.a.span,{fontStyle:"italic",children:c})]}),Object(R.jsx)(z.a,{w:["100%","70%",null],children:Object(R.jsx)(T.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:y,children:function(){var e=[];return void 0!==j&&(e=j.map((function(e,t){return void 0===j[t+1]?Object(R.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e)},e):Object(R.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e,",\xa0")},e)}))),e}()})}),void 0!==d?Object(R.jsxs)("div",{children:[Object(R.jsxs)(L.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:m,children:["Antonyms for ",Object(R.jsx)(P.a.span,{fontStyle:"italic",children:c})]}),Object(R.jsx)(z.a,{w:["100%","70%",null],children:Object(R.jsx)(T.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:y,children:function(){var e=[];return void 0!==d&&(e=d.map((function(e,t){return void 0===d[t+1]?Object(R.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e)},e):Object(R.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e,",\xa0")},e)}))),e}()})})]}):Object(R.jsx)(R.Fragment,{})]})]}):Object(R.jsx)(M.a.TransitionFade,{children:Object(R.jsx)(N.a,{mt:"4",mb:"3",noOfLines:11,spacing:"4",startColor:k,endColor:C})})]})]})},te=n(212),ne=n(105),ce=n(110),ae=n(209),oe=n(207),re=B.a.div(b||(b=Object(C.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-38\n   lg:mt-32\n"]))),se=function(e){var t=e.WordFindType,n=e.onEnterKeyPress,c=e.WordFind,a=e.isOpen,o=e.getInputValue,r=e.getButtonClick,s=e.Link,l=e.getPathName,i=Object(f.h)(),j=Object(P.a)(s),d=Object(E.c)("#3B82F6","orange");return Object(u.useEffect)((function(){l(i.pathname)})),Object(R.jsxs)(re,{children:[Object(R.jsxs)(L.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],mt:["12",null,"15","0","32"],mb:["5",null,"12"],whiteSpace:"nowrap",children:["Words to be ",Object(R.jsx)(P.a.span,{color:d,fontStyle:"italic",children:"thesaurused"})]}),Object(R.jsxs)(z.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(R.jsxs)(z.a,{children:[Object(R.jsx)(ae.a,{onKeyPress:n,variant:"filled",w:["16rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:o,placeholder:"Type your word"}),c&&Object(R.jsx)(oe.a,{in:a,children:Object(R.jsxs)(z.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(R.jsx)(P.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(R.jsx)(P.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===t?"Word not found!":"no input"===t?"Input is empty, type a word!":"The word not in the thesaurus!"})]})})]}),Object(R.jsx)(z.a,{ml:[0,5,0],mt:[5,1,0],children:Object(R.jsx)(j,{onClick:r,className:"\nbg-gray-100\ntext-gray-800\npy-1\npx-3\nrounded-xl\nshadow-2xl\ninline-block\nmd:py-1\nmd:h-8\nmd:mt-1\nmd:px-4\nfocus:outline-none\nfocus:ring-2 focus:ring-blue-400\nhover:bg-gray-200\ntransition duration-200 ease-in-out\n",to:"/thesaurus",children:"Search"})})]})]})};var le=function(e){var t=e.ThesaurusPageComponent,n=Object(ce.a)(e,["ThesaurusPageComponent"]),c=Object(f.h)();return Object(R.jsxs)(f.d,{location:c,children:[Object(R.jsx)(f.b,{exact:!0,path:"/",children:Object(R.jsx)(se,Object(ne.a)({},n))}),Object(R.jsx)(f.b,{exact:!0,path:"/thesaurus",children:Object(R.jsx)(M.a.TransitionFade,{children:t()})})]},c.key)},ie=function(){var e=Object(u.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)(""),o=Object(p.a)(a,2),r=o[0],s=o[1],l=Object(u.useState)(""),i=Object(p.a)(l,2),j=i[0],d=i[1],b=Object(u.useState)(""),h=Object(p.a)(b,2),O=h[0],x=h[1],g=Object(u.useState)(""),v=Object(p.a)(g,2),w=v[0],S=v[1],C=Object(u.useState)(!1),F=Object(p.a)(C,2),W=F[0],B=F[1],P=Object(u.useState)(""),T=Object(p.a)(P,2),E=T[0],z=T[1],L=Object(te.a)(),N=L.isOpen,A=L.onOpen,D=Object(u.useState)(!1),I=Object(p.a)(D,2),H=I[0],J=I[1],K=Object(u.useState)(""),V=Object(p.a)(K,2),q=V[0],G=V[1],_=Object(u.useState)(!1),Q=Object(p.a)(_,2),U=Q[0],X=Q[1],Y=Object(u.useState)([]),Z=Object(p.a)(Y,2),$=Z[0],ne=Z[1],ce=Object(u.useState)([]),ae=Object(p.a)(ce,2),oe=ae[0],re=ae[1];Object(u.useEffect)((function(){"/thesaurus"===E&&""===j?X(!1):"/thesaurus"===E&&""!==j&&X(!0)}));var se=Object(f.g)(),ie=function(){""===n?(J(!0),G("no input"),A()):(k(n).then((function(e){return de(e)})),J(!1),G(""))},je=function(){c(""),s(""),x(""),d(""),S("")},de=function(e){try{e.length>=1?function(e,t){try{var n,c,a,o,r=e[t],l=r.fl,i=r.hwi.hw,j=r.shortdef,b=Object(p.a)(r.def,1)[0].sseq,u=r.meta.syns,h=r.meta.ants,O=(null!==(n=null===(c=b[0][0][1].dt)||void 0===c||null===(a=c[1])||void 0===a||null===(o=a[1])||void 0===o?void 0:o[0].t)&&void 0!==n?n:b[0][0][1].dt[0][1]).replace("{it}","<em>").replace("{/it}","</em>");re(h[0]),ne(u[0]),s(i),x(l),d(j[0]),S(O)}catch(f){console.log(f)}}(e,0):e[0]||(B(!0),J(!0),G("no response"),A())}catch(t){B(!0),J(!0),A()}},be=function(e){z(e)};return Object(u.useEffect)((function(){"/"===E&&j.length&&je()}),[E]),Object(R.jsx)(le,{ThesaurusPageComponent:function(){var e;return e=n.length?r.length?Object(R.jsx)(M.a.TransitionFade,{children:Object(R.jsx)(ee,{Ants:oe,Syns:$,WordsLoaded:U,Word:n,Link:m.b,BackButtonClick:je,ReturnedWord:r,PartOfSpeech:O,ShortDef:j,ReactHtmlParser:y.a,WordExample:w,getPathName:be})}):W?Object(R.jsx)(f.a,{to:"/"}):Object(R.jsx)(M.a.TransitionFade,{children:Object(R.jsx)(ee,{Ants:oe,Syns:$,WordsLoaded:U,Word:n,Link:m.b,BackButtonClick:je,ReturnedWord:r,PartOfSpeech:O,ShortDef:j,ReactHtmlParser:y.a,WordExample:w,getPathName:be})}):Object(R.jsx)(f.a,{to:"/"}),Object(u.useEffect)((function(){W&&(c(""),B(!1))}),[W]),e},WordFindType:q,onEnterKeyPress:function(e){13===e.which&&(ie(),se.push("/thesaurus"))},WordFind:H,isOpen:N,getInputValue:function(e){c(e.target.value)},getButtonClick:function(){ie()},Link:m.b,getPathName:be})},je=n(205),de=n(211),be=n(206),ue=n(210),he=function(){var e=Object(E.b)(),t=e.colorMode,n=e.toggleColorMode;return Object(R.jsx)(z.a,{display:"flex",justifyContent:"flex-end",children:Object(R.jsx)(ue.a,{boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",rounded:"xl",onClick:n,children:"light"===t?Object(R.jsx)(P.a.svg,{outline:"none",stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"})}):Object(R.jsx)(P.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"})})})})},Oe=Object(je.a)({fonts:{heading:"Playfair Display",body:"Open Sans"}});x.a.render(Object(R.jsx)(h.a.StrictMode,{children:Object(R.jsx)(de.a,{children:Object(R.jsxs)(m.a,{basename:"/wordsapiproject",children:[Object(R.jsx)(be.a,{theme:Oe}),Object(R.jsx)(he,{}),Object(R.jsx)(ie,{})]})})}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.2f98c60d.chunk.js.map