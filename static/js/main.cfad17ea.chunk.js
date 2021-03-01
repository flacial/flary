(this.webpackJsonpwordsapiproject=this.webpackJsonpwordsapiproject||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},144:function(e,t){},185:function(e,t,n){"use strict";n.r(t);var c,r,a,o,s,l,i,j,d,u,b=n(0),h=n.n(b),x=n(96),O=n.n(x),p=(n(118),n(4)),f=(n(119),n(10)),m=n(24),g=n(97),w=n.n(g),y=n(65),v=n.n(y),k=n(98),C=function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://wordsapiprojectserver.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=n(16),P=n(100),B=n(21),W=n.n(B),E=n(111),T=n(187),F=n(199),M=n(2),N=W.a.h1(c||(c=Object(S.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),z=Object(E.a)(N),I=P.a.div(r||(r=Object(S.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 5px;\npadding-bottom: 5px;\nword-spacing: 0;\n"]))),L=Object(E.a)(I),D=W.a.div(a||(a=Object(S.a)(["\n    mt-5\n"]))),R=W.a.h1(o||(o=Object(S.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),J=Object(E.a)(R),K=W.a.span(s||(s=Object(S.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),A=Object(E.a)(K),H=W.a.h2(l||(l=Object(S.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),V=Object(E.a)(H),q=W.a.div(i||(i=Object(S.a)(["\n    mt-2\n    relative pl-6\n"]))),G=W.a.span(j||(j=Object(S.a)(["\n    text-xl\n    block\n"]))),_=Object(E.a)(G),Q=W.a.span(d||(d=Object(S.a)(["\n    text-gray-700\n    text-xl\n"]))),U=Object(E.a)(Q),X=function(e){var t=e.Link,n=e.BackButtonClick,c=e.ReturnedWord,r=e.PartOfSpeech,a=e.ShortDef,o=e.ReactHtmlParser,s=e.WordExample,l=e.getPathName,i=Object(f.h)();Object(b.useEffect)((function(){l(i.pathname)}));var j=Object(E.a)(t),d=Object(T.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),u=Object(T.c)("#252d3d","#edf2f7"),h=Object(T.c)("gray.700","#edf2f7"),x=Object(T.c)("#2563EB","#db8b02"),O=Object(T.c)("#3B82F6","orange"),p=Object(T.c)({background:"gray.200"},{background:"gray.700"}),m=Object(T.c)("linear(to-l, gray.200, white)"),g=Object(T.c)("2px 2px 12px #37413f, -10px -10px 0px #3B82F6","2px 2px 12px #37413f, -10px -10px 0px orange");return Object(M.jsxs)(b.Fragment,{children:[Object(M.jsx)(F.a,{className:"absolute top-0",children:Object(M.jsx)(j,{bg:d,color:u,_hover:p,onClick:n,className:"\npy-2\npx-4\nrounded-xl\nshadow-xl\ninline-block\nfocus:outline-none\nfocus:border\nfocus:ring-2 focus:ring-blue-500\ntransition duration-500 ease-in-out\nm-4\n",to:"/",children:"Back to search"})}),Object(M.jsxs)(L,{boxShadow:g,bgGradient:m,m:["1em","3em",null],marginTop:["20",null,null],children:[Object(M.jsx)(z,{color:O,children:"Thesaurus"}),Object(M.jsxs)(D,{children:[Object(M.jsx)(J,{color:h,children:c}),Object(M.jsx)(A,{color:O,children:r})]}),Object(M.jsxs)(V,{color:x,children:["Synonyms & Antonyms of ",Object(M.jsx)("em",{children:c})]}),Object(M.jsxs)(q,{children:[Object(M.jsx)(E.a.span,{color:h,className:"font-bold text-xl absolute left-0 top-0",children:"1"}),Object(M.jsx)(U,{color:h,children:a}),Object(M.jsxs)(_,{color:O,children:[" ",Object(M.jsx)("strong",{children:"//"})," ",o(s)," "]})]})]})]})},Y=function(){return Object(M.jsx)(F.a,{display:"flex",justifyContent:"center",children:Object(M.jsx)("svg",{className:"animate-spin mt-40 md:mt-50 lg:mt-56",stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"5em",width:"5em",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("path",{d:"M340.896,58.488C303.18,20.771,253.033,0,199.694,0C146.353,0,96.207,20.771,58.491,58.488 C20.772,96.206,0,146.354,0,199.693c0,53.342,20.772,103.489,58.491,141.206c37.716,37.717,87.863,58.488,141.203,58.488 c53.337,0,103.486-20.771,141.203-58.488c37.719-37.718,58.49-87.865,58.49-141.206C399.387,146.355,378.615,96.207,340.896,58.488 z M199.694,77.457c67.402,0,122.236,54.835,122.236,122.236s-54.834,122.236-122.236,122.236S77.457,267.094,77.457,199.693 S132.292,77.457,199.694,77.457z M328.061,328.062c-34.289,34.287-79.877,53.17-128.367,53.17 c-48.491,0-94.079-18.883-128.367-53.17c-34.289-34.287-53.173-79.877-53.173-128.37h41.148 c0,77.411,62.979,140.391,140.392,140.391c77.412,0,140.39-62.979,140.39-140.391c0-77.412-62.979-140.391-140.39-140.391 c-4.594,0-9.134,0.229-13.615,0.662v-41.31c4.508-0.332,9.049-0.5,13.615-0.5c48.49,0,94.078,18.883,128.367,53.171 c34.289,34.289,53.172,79.878,53.172,128.368C381.232,248.186,362.35,293.775,328.061,328.062z"})})})},Z=n(207),$=n(57),ee=n(103),te=n(109),ne=n(200),ce=n(204),re=n(203),ae=W.a.div(u||(u=Object(S.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-38\n   lg:mt-32\n"]))),oe=function(e){var t=e.WordFindType,n=e.onEnterKeyPress,c=e.WordFind,r=e.isOpen,a=e.getInputValue,o=e.getButtonClick,s=e.Link,l=e.getPathName,i=Object(f.h)(),j=Object(E.a)(s);return Object(b.useEffect)((function(){l(i.pathname)})),Object(M.jsxs)(ae,{children:[Object(M.jsx)(ne.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],mt:["12",null,"15","0","32"],mb:["5",null,"12"],whiteSpace:"nowrap",children:"Words to be thesaurused"}),Object(M.jsxs)(F.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(M.jsxs)(F.a,{children:[Object(M.jsx)(ce.a,{onKeyPress:n,variant:"filled",w:["16rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:a,placeholder:"Type your word"}),c&&Object(M.jsx)(re.a,{in:r,children:Object(M.jsxs)(F.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(M.jsx)(E.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(M.jsx)(E.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===t?"Word not found!":"no input"===t?"Input is empty, type a word!":"API Side Error or a bug"})]})})]}),Object(M.jsx)(F.a,{ml:[0,5,0],mt:[5,1,0],children:Object(M.jsx)(j,{onClick:o,className:"\nbg-gray-100\ntext-gray-800\npy-1\npx-3\nrounded-xl\nshadow-2xl\ninline-block\nmd:py-1\nmd:h-8\nmd:mt-1\nmd:px-4\nfocus:outline-none\nfocus:ring-2 focus:ring-blue-400\nhover:bg-gray-200\ntransition duration-200 ease-in-out\n",to:"/thesaurus",children:"Search"})})]})]})};var se=function(e){var t=e.ThesaurusPageComponent,n=Object(te.a)(e,["ThesaurusPageComponent"]),c=Object(f.h)();return Object(M.jsxs)(f.d,{location:c,children:[Object(M.jsx)(f.b,{exact:!0,path:"/",children:Object(M.jsx)(oe,Object(ee.a)({},n))}),Object(M.jsx)(f.b,{exact:!0,path:"/thesaurus",children:Object(M.jsx)($.a.TransitionFade,{children:t()})})]},c.key)},le=function(){var e=Object(b.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(b.useState)(""),a=Object(p.a)(r,2),o=a[0],s=a[1],l=Object(b.useState)(""),i=Object(p.a)(l,2),j=i[0],d=i[1],u=Object(b.useState)(""),h=Object(p.a)(u,2),x=h[0],O=h[1],g=Object(b.useState)(""),y=Object(p.a)(g,2),v=y[0],k=y[1],S=Object(b.useState)(!1),P=Object(p.a)(S,2),B=P[0],W=P[1],E=Object(b.useState)(""),T=Object(p.a)(E,2),F=T[0],N=T[1],z=Object(Z.a)(),I=z.isOpen,L=z.onOpen,D=Object(b.useState)(!1),R=Object(p.a)(D,2),J=R[0],K=R[1],A=Object(b.useState)(""),H=Object(p.a)(A,2),V=H[0],q=H[1],G=Object(f.g)(),_=function(){""===n?(K(!0),q("no input"),L()):(C(n).then((function(e){return U(e)})),K(!1),q(""))},Q=function(){c(""),s(""),O(""),d(""),k("")},U=function(e){try{e.length>=1?function(e,t){var n=e[t],c=n.fl,r=n.hwi.hw,a=n.shortdef,o=Object(p.a)(n.def,1)[0].sseq[0][0][1].dt[1][1][0].t.replace("{it}","<em>").replace("{/it}","</em>");s(r),O(c),d(a[0]),k(o)}(e,0):e[0]||(W(!0),K(!0),q("no response"),L())}catch(t){W(!0),K(!0),L()}},ee=function(e){N(e)};return Object(b.useEffect)((function(){"/"===F&&j.length&&Q()}),[F]),Object(M.jsx)(se,{ThesaurusPageComponent:function(){var e;return e=n.length?o.length?Object(M.jsx)($.a.TransitionFade,{children:Object(M.jsx)(X,{Word:n,Link:m.b,BackButtonClick:Q,ReturnedWord:o,PartOfSpeech:x,ShortDef:j,ReactHtmlParser:w.a,WordExample:v,getPathName:ee})}):B?Object(M.jsx)(f.a,{to:"/"}):Object(M.jsx)(Y,{}):Object(M.jsx)(f.a,{to:"/"}),Object(b.useEffect)((function(){J&&"/"!==F&&(K(!1),q(""))}),[J]),Object(b.useEffect)((function(){B&&(c(""),W(!1))}),[B]),e},WordFindType:V,onEnterKeyPress:function(e){13===e.which&&(_(),G.push("/thesaurus"))},WordFind:J,isOpen:I,getInputValue:function(e){c(e.target.value)},getButtonClick:function(){_()},Link:m.b,getPathName:ee})},ie=n(201),je=n(206),de=n(202),ue=n(205),be=function(){var e=Object(T.b)(),t=e.colorMode,n=e.toggleColorMode;return Object(M.jsx)(F.a,{display:"flex",justifyContent:"flex-end",children:Object(M.jsx)(ue.a,{boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",rounded:"xl",onClick:n,children:"light"===t?Object(M.jsx)(E.a.svg,{outline:"none",stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("path",{d:"m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"})}):Object(M.jsx)(E.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("path",{d:"M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"})})})})},he=Object(ie.a)({fonts:{heading:"Playfair Display",body:"Open Sans"}});O.a.render(Object(M.jsx)(h.a.StrictMode,{children:Object(M.jsx)(je.a,{children:Object(M.jsxs)(m.a,{basename:"/wordsapiproject",children:[Object(M.jsx)(de.a,{theme:he}),Object(M.jsx)(be,{}),Object(M.jsx)(le,{})]})})}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.cfad17ea.chunk.js.map