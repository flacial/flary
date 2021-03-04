(this.webpackJsonpwordsapiproject=this.webpackJsonpwordsapiproject||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},157:function(e,t){},198:function(e,t,n){"use strict";n.r(t);var c,o,a,r,l,s,i,j,d,b,u=n(0),h=n.n(u),O=n(105),x=n.n(O),f=(n(131),n(3)),p=(n(132),n(11)),m=n(25),g=n(74),y=n.n(g),w=n(75),S=n.n(w),v=n(106),k=function(){var e=Object(v.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://wordsapiprojectserver.herokuapp.com/thesaurus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:t})});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=n(19),F=n(108),B=n(23),W=n.n(B),P=n(43),T=n(214),z=n(123),E=n(215),M=n(216),L=n(217),N=n(225),_=n(31),D=n(2),R=W.a.h1(c||(c=Object(C.a)(["\n    italic\n    font-serif\n    text-3xl\n    font-bold\n    inline-block\n"]))),A=Object(P.a)(R),I=F.a.div(o||(o=Object(C.a)(["\nborder-radius: 29px;\ntext-align: left;\nwidth: auto;\nheight: auto;\npadding-left: 20px;\npadding-right: 20px;\npadding-top: 15px;\npadding-bottom: 20px;\nword-spacing: 0;\n"]))),H=Object(P.a)(I),J=W.a.div(a||(a=Object(C.a)(["\n    mt-1\n"]))),K=W.a.h1(r||(r=Object(C.a)(["\n    text-5xl\n    font-serif\n    font-bold\n    inline-block\n"]))),V=Object(P.a)(K),q=W.a.span(l||(l=Object(C.a)(["\n    text-xl\n    font-bold\n    font-serif\n"]))),G=Object(P.a)(q),Q=W.a.h2(s||(s=Object(C.a)(["\n    font-bold\n    text-2xl\n    mt-3\n"]))),U=Object(P.a)(Q),X=W.a.div(i||(i=Object(C.a)(["\n    mt-2\n    relative pl-6\n"]))),Y=W.a.span(j||(j=Object(C.a)(["\n    text-xl\n    block\n"]))),Z=Object(P.a)(Y),$=W.a.span(d||(d=Object(C.a)(["\n    text-gray-700\n    text-xl\n"]))),ee=Object(P.a)($),te=function(e){var t=e.Link,n=e.BackButtonClick,c=e.ReturnedWord,o=e.PartOfSpeech,a=e.ShortDef,r=e.ReactHtmlParser,l=e.WordExample,s=e.getPathName,i=e.WordsLoaded,j=e.Syns,d=e.Ants,b=Object(p.h)();Object(u.useEffect)((function(){s(b.pathname)}));var h=Object(P.a)(t),O=Object(z.c)("#edf2f7","rgba(255, 255, 255, 0.08)"),x=Object(z.c)("#252d3d","#edf2f7"),f=Object(z.c)("gray.700","#edf2f7"),m=Object(z.c)("#2563EB","#db8b02"),g=Object(z.c)("#3B82F6","orange"),y=Object(z.c)("#3B82F6","orange.300"),w=Object(z.c)({background:"gray.200"},{background:"gray.700"}),S=Object(z.c)("linear(to-l, gray.200, white)"),v=Object(z.c)("0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6","0px 0px 11px #1c1c1c, -10px -10px 0px orange"),k=Object(z.c)("#3B82F6","orange.200"),C=Object(z.c)("gray.700","orange.500"),F=Object(z.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"}),B=Object(E.a)("(max-width: 440px)");return Object(D.jsxs)(u.Fragment,{children:[c.length?Object(D.jsx)(M.a,{zIndex:"overlay",className:"fixed top-0",left:[null,"32",null],children:Object(D.jsx)(h,{_focus:F,bg:O,color:x,_hover:w,onClick:n,className:"\n  py-2\n  px-4\n  rounded-xl\n  shadow-xl\n  inline-block\n  focus:outline-none\n  focus:border\n  focus:ring-2 focus:ring-blue-500\n  transition duration-500 ease-in-out\n  m-4\n",to:"/",children:"Back to search"})}):Object(D.jsx)(D.Fragment,{}),Object(D.jsxs)(H,{boxShadow:v,bgGradient:S,m:B&&"5",ml:[null,"9em",null],mr:[null,"9em",null],marginTop:["6",null,null],children:[Object(D.jsx)(A,{color:g,children:"Thesaurus"}),i?Object(D.jsxs)(_.a.TransitionFade,{children:[Object(D.jsxs)(J,{children:[Object(D.jsx)(V,{color:f,children:c}),Object(D.jsx)(G,{color:g,children:o})]}),Object(D.jsxs)(U,{color:m,children:["Synonyms & Antonyms of ",Object(D.jsx)("em",{children:c})]}),Object(D.jsxs)(X,{children:[Object(D.jsx)(ee,{color:f,children:a}),Object(D.jsxs)(Z,{color:y,children:[" ",Object(D.jsx)("strong",{children:"//"})," ",r(l)]}),Object(D.jsxs)(L.a,{mb:"1",mt:"2",fontSize:"2xl",fontFamily:"sans-serif",color:m,children:["Synonyms for ",Object(D.jsx)(P.a.span,{fontStyle:"italic",children:c})]}),Object(D.jsx)(M.a,{w:["100%","70%",null],children:Object(D.jsx)(T.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:y,children:function(){var e=[];return void 0!==j&&(e=j.map((function(e,t){return void 0===j[t+1]?Object(D.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e)},e):Object(D.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e,",\xa0")},e)}))),e}()})}),void 0!==d?Object(D.jsxs)("div",{children:[Object(D.jsxs)(L.a,{mb:"1",mt:"4",fontSize:"2xl",fontFamily:"sans-serif",color:m,children:["Antonyms for ",Object(D.jsx)(P.a.span,{fontStyle:"italic",children:c})]}),Object(D.jsx)(M.a,{w:["100%","70%",null],children:Object(D.jsx)(T.b,{fontFamily:"sans",fontSize:"lg",ml:"0",color:y,children:function(){var e=[];return void 0!==d&&(e=d.map((function(e,t){return void 0===d[t+1]?Object(D.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e)},e):Object(D.jsx)(T.a,{listStyleType:"none",display:"inline-block",children:"".concat(e,",\xa0")},e)}))),e}()})})]}):Object(D.jsx)(D.Fragment,{})]})]}):Object(D.jsx)(_.a.TransitionFade,{children:Object(D.jsx)(N.a,{mt:"4",mb:"3",noOfLines:11,spacing:"4",startColor:k,endColor:C})})]})]})},ne=n(228),ce=n(113),oe=n(119),ae=n(10),re=n(224),le=n(219),se=n(227),ie=n(229),je=n(220),de=W.a.div(b||(b=Object(C.a)(["\n   text-center\n   mt-40\n   sm:mt-0\n   md2:mt-38\n   lg:mt-32\n"]))),be=function(e){var t,n=e.WordFindType,c=e.onEnterKeyPress,o=e.WordFind,a=e.isOpen,r=e.getInputValue,l=e.getButtonClick,s=e.Link,i=e.getPathName,j=Object(E.a)("(max-width: 420px)"),d=Object(f.a)(j,1)[0],b=Object(p.h)(),h=Object(P.a)(s),O=Object(ne.a)(),x=(O.isOpen,O.onOpen,O.onClose,Object(z.c)("#3B82F6","orange")),m=Object(z.c)({color:"#3B82F6"},{color:"orange"}),g=Object(z.c)("#edf2f7","gray.800"),y=Object(z.c)("#3B82F6","#ffa500"),w=Object(z.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"});return Object(u.useEffect)((function(){i(b.pathname)})),Object(D.jsxs)(de,{children:[Object(D.jsxs)(M.a,{display:"flex",alignContent:"center",justifyContent:"center",mt:["12",null,"15","0","32"],mb:["5",null,"12"],children:[Object(D.jsxs)(L.a,{fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:["Words to be",d?"\xa0":" thesaurused"]}),Object(D.jsxs)(re.a,{placement:"auto-end",display:"inline-block",children:[Object(D.jsx)(re.g,{children:d?Object(D.jsx)(L.a,{textDecoration:"underline wavy ".concat(x),_hover:[null,null,m],cursor:"pointer",fontFamily:"Playfair Display",fontSize:["3xl","5xl","6xl"],whiteSpace:"nowrap",children:"thesaurused"}):Object(D.jsx)(le.a,(t={variant:"ghost",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:w,ml:"2"},Object(ae.a)(t,"outline","none"),Object(ae.a)(t,"size","sm"),Object(ae.a)(t,"icon",Object(D.jsx)(je.a,{w:"5",h:"5"})),t))}),Object(D.jsxs)(re.e,{outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},_focus:w,background:g,children:[Object(D.jsx)(re.b,{}),Object(D.jsx)(re.d,{}),Object(D.jsx)(re.f,{fontFamily:"Playfair Display",fontSize:["xl"],fontWeight:"bold",children:"Thesaurus"}),Object(D.jsx)(re.c,{children:"A thesaurus (plural thesauri or thesauruses) or synonym dictionary is a reference work for finding synonyms and sometimes antonyms of words. "})]})]})]}),Object(D.jsxs)(M.a,{display:{sm:"flex",md:"flex"},justifyContent:[null,"center",null],children:[Object(D.jsxs)(M.a,{children:[Object(D.jsx)(se.a,{focusBorderColor:y,onKeyPress:c,variant:"filled",w:["16rem","xs",null],rounded:"xl",mr:[null,null,"2rem"],onChange:r,placeholder:"Type your word"}),o&&Object(D.jsx)(ie.a,{in:a,children:Object(D.jsxs)(M.a,{mt:"1",display:"flex",justifyContent:["center","flex-start",null],transition:"ease",children:[Object(D.jsx)(P.a.svg,{mt:"1",ml:[null,"4",null],outline:"none",stroke:"currentColor",fill:"red.400",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(D.jsx)("path",{d:"M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})}),Object(D.jsx)(P.a.span,{ml:"1",mb:["-1",0,0],color:"red.400",children:"no response"===n?"Word not found! (Misspelled)":"no input"===n?"Input is empty, type a word!":"The word is not in the thesaurus!"})]})})]}),Object(D.jsx)(M.a,{ml:[0,5,0],mt:[5,1,0],children:Object(D.jsx)(h,{_hover:{background:"gray.200"},_focus:w,color:d?g:"gray.800",bgColor:d?x:"gray.100",fontWeight:"semibold",onClick:l,className:"\npy-1\npx-3\nrounded-xl\nshadow-2xl\ninline-block\nmd:py-1\nmd:h-8\nmd:mt-1\nmd:px-4\nfocus:outline-none\nfocus:ring-2 focus:ring-blue-400\nhover:bg-gray-200\ntransition duration-200 ease-in-out\n",to:"/thesaurus",children:"Search"})})]})]})};var ue=function(e){var t=e.ThesaurusPageComponent,n=Object(oe.a)(e,["ThesaurusPageComponent"]),c=Object(p.h)();return Object(D.jsxs)(p.d,{location:c,children:[Object(D.jsx)(p.b,{exact:!0,path:"/",children:Object(D.jsx)(be,Object(ce.a)({},n))}),Object(D.jsx)(p.b,{exact:!0,path:"/thesaurus",children:Object(D.jsx)(_.a.TransitionFade,{children:t()})})]},c.key)},he=function(){var e=Object(u.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(u.useState)(""),a=Object(f.a)(o,2),r=a[0],l=a[1],s=Object(u.useState)(""),i=Object(f.a)(s,2),j=i[0],d=i[1],b=Object(u.useState)(""),h=Object(f.a)(b,2),O=h[0],x=h[1],g=Object(u.useState)(""),w=Object(f.a)(g,2),S=w[0],v=w[1],C=Object(u.useState)(!1),F=Object(f.a)(C,2),B=F[0],W=F[1],P=Object(u.useState)(""),T=Object(f.a)(P,2),z=T[0],E=T[1],M=Object(ne.a)(),L=M.isOpen,N=M.onOpen,R=Object(u.useState)(!1),A=Object(f.a)(R,2),I=A[0],H=A[1],J=Object(u.useState)(""),K=Object(f.a)(J,2),V=K[0],q=K[1],G=Object(u.useState)(!1),Q=Object(f.a)(G,2),U=Q[0],X=Q[1],Y=Object(u.useState)([]),Z=Object(f.a)(Y,2),$=Z[0],ee=Z[1],ce=Object(u.useState)([]),oe=Object(f.a)(ce,2),ae=oe[0],re=oe[1];Object(u.useEffect)((function(){"/thesaurus"===z&&""===j?X(!1):"/thesaurus"===z&&""!==j&&X(!0)}));var le=Object(p.g)(),se=function(){""===n?(H(!0),q("no input"),N()):(k(n).then((function(e){return je(e)})),H(!1),q(""))},ie=function(){c(""),l(""),x(""),d(""),v("")},je=function(e){try{e[0].hwi?function(e,t){try{var n,c,o,a,r=e[t],s=r.fl,i=r.hwi.hw,j=r.shortdef,b=Object(f.a)(r.def,1)[0].sseq,u=r.meta.syns,h=r.meta.ants,O=(null!==(n=null===(c=b[0][0][1].dt)||void 0===c||null===(o=c[1])||void 0===o||null===(a=o[1])||void 0===a?void 0:a[0].t)&&void 0!==n?n:b[0][0][1].dt[0][1]).replace("{it}","<em>").replace("{/it}","</em>");re(h[0]),ee(u[0]),l(i),x(s),d(j[0]),v(O)}catch(p){console.log(p)}}(e,0):(W(!0),H(!0),q("no response"),N())}catch(t){W(!0),H(!0),N()}},de=function(e){E(e)};return Object(u.useEffect)((function(){"/"===z&&j.length&&ie()}),[z]),Object(D.jsx)(ue,{ThesaurusPageComponent:function(){var e;return e=n.length?r.length?Object(D.jsx)(_.a.TransitionFade,{children:Object(D.jsx)(te,{Ants:ae,Syns:$,WordsLoaded:U,Word:n,Link:m.b,BackButtonClick:ie,ReturnedWord:r,PartOfSpeech:O,ShortDef:j,ReactHtmlParser:y.a,WordExample:S,getPathName:de})}):B?Object(D.jsx)(p.a,{to:"/"}):Object(D.jsx)(_.a.TransitionFade,{children:Object(D.jsx)(te,{Ants:ae,Syns:$,WordsLoaded:U,Word:n,Link:m.b,BackButtonClick:ie,ReturnedWord:r,PartOfSpeech:O,ShortDef:j,ReactHtmlParser:y.a,WordExample:S,getPathName:de})}):Object(D.jsx)(p.a,{to:"/"}),Object(u.useEffect)((function(){B&&(c(""),W(!1))}),[B]),e},WordFindType:V,onEnterKeyPress:function(e){13===e.which&&(se(),le.push("/thesaurus"))},WordFind:I,isOpen:L,getInputValue:function(e){c(e.target.value)},getButtonClick:function(){se()},Link:m.b,getPathName:de})},Oe=n(226),xe=n(223),fe=n(118),pe=n(221),me=function(){var e=Object(z.b)(),t=e.colorMode,n=e.toggleColorMode,c=Object(z.c)({boxShadow:"0 0 0 3px #3B82F6"},{boxShadow:"0 0 0 3px orange"});return Object(D.jsx)(M.a,{className:"backdrop-blur",zIndex:"overlay",display:"flex",position:"sticky",top:"0",justifyContent:"flex-end",h:"70px",w:"full",borderRadius:"0 0 20px 20px",children:Object(D.jsx)(fe.a,{_focus:c,focusBorderColor:c,boxShadow:"lg",outline:"none",outlineColor:"initial",style:{outlineStyle:"none"},m:"4",mr:[null,"40",null],rounded:"xl",onClick:n,children:"light"===t?Object(D.jsx)(pe.a,{}):Object(D.jsx)(P.a.svg,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(D.jsx)("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})})})},ge=n(222),ye=Object(ge.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});x.a.render(Object(D.jsx)(h.a.StrictMode,{children:Object(D.jsx)(Oe.a,{children:Object(D.jsxs)(m.a,{basename:"/wordsapiproject",children:[Object(D.jsx)(xe.a,{initialColorMode:ye.config.initialColorMode}),Object(D.jsx)(me,{}),Object(D.jsx)(he,{})]})})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.6d5a4a1a.chunk.js.map