import{_ as i,c as a,j as s,a as e,a4 as t,o as n}from"./chunks/framework.DpC1ZpOZ.js";const l="/assets/insertion-sort.DHREo0JS.gif",ts=JSON.parse('{"title":"Sorting Algorithms","description":"Sorting Algorithms","frontmatter":{"title":"Sorting Algorithms","description":"Sorting Algorithms","lastmod":"2024-09-06T00:00:00.000Z"},"headers":[],"relativePath":"Concepts/Data-Structures_and_Algorithms/Algorithms/Sorting_Algorithms.md","filePath":"Concepts/Data-Structures_and_Algorithms/Algorithms/Sorting_Algorithms.md","lastUpdated":1710098843000}'),o={name:"Concepts/Data-Structures_and_Algorithms/Algorithms/Sorting_Algorithms.md"},r=s("h1",{id:"sorting-algorithms",tabindex:"-1"},[e("Sorting Algorithms "),s("a",{class:"header-anchor",href:"#sorting-algorithms","aria-label":'Permalink to "Sorting Algorithms"'},"​")],-1),p=s("p",null,"Here is how we formally define the sorting problem:",-1),d=s("strong",null,"Input",-1),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},m=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),g=[m],k=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"n")])],-1),T={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.007ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6633 1000","aria-hidden":"true"},Q=t("",1),B=[Q],y=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{stretchy:"false"},"("),s("mi",null,"a"),s("mn",null,"1"),s("mo",null,","),s("mi",null,"a"),s("mn",null,"2"),s("mo",null,","),s("mo",null,"."),s("mo",null,"."),s("mo",null,"."),s("mo",null,","),s("mi",null,"a"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),F=s("strong",null,"Output",-1),f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.89ex",height:"2.283ex",role:"img",focusable:"false",viewBox:"0 -759 7465.4 1009","aria-hidden":"true"},x=t("",1),w=[x],D=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"a"),s("mo",{"data-mjx-alternate":"1"},"′")]),s("mn",null,"1"),s("mo",null,","),s("msup",null,[s("mi",null,"a"),s("mo",{"data-mjx-alternate":"1"},"′")]),s("mn",null,"2"),s("mo",null,","),s("mo",null,"."),s("mo",null,"."),s("mo",null,"."),s("mo",null,","),s("msup",null,[s("mi",null,"a"),s("mo",{"data-mjx-alternate":"1"},"′")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"25.187ex",height:"1.903ex",role:"img",focusable:"false",viewBox:"0 -759 11132.5 841","aria-hidden":"true"},A=t("",1),S=[A],M=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msup",null,[s("mi",null,"a"),s("mo",{"data-mjx-alternate":"1"},"′")]),s("mn",null,"1"),s("mo",null,"<="),s("msup",null,[s("mi",null,"a"),s("mo",{"data-mjx-alternate":"1"},"′")]),s("mn",null,"2"),s("mo",null,"<="),s("mo",null,"."),s("mo",null,"."),s("mo",null,"."),s("mo",null,"<="),s("msup",null,[s("mi",null,"a"),s("mo",{"data-mjx-alternate":"1"},"′")]),s("mi",null,"n")])],-1),C=t("",35),I=t("",2),q=s("p",null,"Average-Case Scenario:",-1),L=s("li",null,[s("p",null,[s("strong",null,"Input"),e(": The input array is in a random order")])],-1),H=s("li",null,[s("p",null,[s("strong",null,"Time Complexity"),e(": "),s("code",null,"O(n^2)")])],-1),O=s("p",null,[s("strong",null,"Explanation"),e(":")],-1),j=s("li",null,"On average, each element in the array is compared and potentially swapped with about half of the elements before it.",-1),V=s("li",null,"Specifically, for each element, about half of the previous elements are expected to be larger and need to be shifted to make room for the new element.",-1),Z=s("code",null,"n",-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.654ex",height:"3.006ex",role:"img",focusable:"false",viewBox:"0 -983.7 1173 1328.7","aria-hidden":"true"},N=t("",1),R=[N],z=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mfrac",null,[s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mn",null,"4")])])],-1),Y=s("code",null,"O(n^2)",-1),W=t("",57);function G(J,$,U,K,X,ss){return n(),a("div",null,[r,p,s("ul",null,[s("li",null,[d,e(": A sequence of "),s("mjx-container",h,[(n(),a("svg",c,g)),k]),e(" numbers "),s("mjx-container",T,[(n(),a("svg",u,B)),y])]),s("li",null,[F,e(": A permutation (reordering) "),s("mjx-container",f,[(n(),a("svg",b,w)),D]),e(" of the input sequence such that "),s("mjx-container",v,[(n(),a("svg",_,S)),M])])]),C,s("ol",null,[I,s("li",null,[q,s("ul",null,[L,H,s("li",null,[O,s("ul",null,[j,V,s("li",null,[e("Since this happens for each of the "),Z,e(" elements, the total number of comparisons and shifts sums to about "),s("mjx-container",P,[(n(),a("svg",E,R)),z]),e(", which still results in a quadratic time complexity, "),Y])])])])])]),W])}const as=i(o,[["render",G]]);export{ts as __pageData,as as default};