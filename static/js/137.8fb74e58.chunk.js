"use strict";(self.webpackChunkformula=self.webpackChunkformula||[]).push([[137],{5137:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ie});var i,a,l=t(2791),s=t(9434),r=t(7689),o=t(3339),c=t(5908),d=t(2722),h=t(5527),x=t(9836),p=t(3382),u=t(9281),g=t(6890),m=t(4515),f=t(5855),j=t(168),v=t(6088),b=t(3994);const C=v.Z.div(i||(i=(0,j.Z)(["\n  height: 71px;\n  overflow: hidden;\n  word-wrap: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  \n"]))),w=(0,v.Z)(b.Z)(a||(a=(0,j.Z)(['\n  color: var(--darkText);\n  font-family: "Noto Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 157%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-feature-settings: "clig" off, "liga" off;\n  border: 1px solid #efeff3;\n  padding: 8px 16px;\n  .centered {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  &.title-cell:hover {\n    cursor: pointer;\n    text-decoration-line: underline;\n  }\n  &:not(:last-child) {\n    border-right: 1px solid #efeff3;\n  }\n'])));var Z=t(184);const y=[{id:"image",label:"Image",minWidth:100},{id:"title",label:"Title",minWidth:222},{id:"authors",label:"Authors",minWidth:164},{id:"description",label:"Description",minWidth:291},{id:"date",label:"Publication date",minWidth:112},{id:"URL",label:"Original URL",minWidth:87}];function S(){const e=(0,s.v9)(c.ik),n=(0,s.v9)(c.Ct),t=(0,s.v9)(c.xU),i=(0,s.v9)(c.zh),a=(0,s.v9)(c.Zp),l=(0,s.v9)(c.jC),j=(0,r.s0)(),v=(0,s.I0)(),b=e=>{const n=new URLSearchParams(window.location.search);Object.entries(e).forEach((e=>{let[t,i]=e;n.set(t,i)}));const t="".concat(window.location.pathname,"?").concat(n.toString());window.history.replaceState({},"",t)};if(t)return(0,Z.jsx)(d.a,{});return i?(0,Z.jsx)("p",{children:i.message}):(0,Z.jsxs)(h.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,Z.jsx)(u.Z,{sx:{width:"1180px",margin:"auto"},children:(0,Z.jsxs)(x.Z,{stickyHeader:!0,"aria-label":"sticky table",sx:{tableLayout:"fixed"},children:[(0,Z.jsx)(g.Z,{children:(0,Z.jsx)(f.Z,{children:y.map((e=>(0,Z.jsx)(w,{align:"left",sx:{minWidth:e.minWidth,maxWidth:e.minWidth,width:e.minWidth,backgroundColor:"#ECF0F6"},children:e.label},e.id)))})}),(0,Z.jsx)(p.Z,{children:e.map((e=>{const n=e.publishedAt,t=new Date(n).toISOString().split("T")[0];return"https://removed.com"!==e.url&&(0,Z.jsxs)(f.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,Z.jsx)(w,{children:(0,Z.jsxs)(C,{className:"centered",children:[" ",(0,Z.jsx)("img",{src:e.urlToImage,alt:e.title})]})}),(0,Z.jsx)(w,{className:"title-cell",children:(0,Z.jsx)(C,{onClick:()=>(e=>{const n=e.title.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/--+/g,"-").trim();j("/article/".concat(n),{state:{row:e}})})(e),className:"title-cell",children:e.title})}),(0,Z.jsx)(w,{children:(0,Z.jsx)(C,{children:e.author})}),(0,Z.jsx)(w,{children:(0,Z.jsx)(C,{children:e.description})}),(0,Z.jsx)(w,{children:(0,Z.jsx)(C,{className:"centered",children:t})}),(0,Z.jsx)(w,{children:(0,Z.jsx)(C,{className:"centered",children:(0,Z.jsx)("a",{href:e.url,className:"svg-link",children:(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",children:(0,Z.jsx)("path",{d:"M14.6666 6.21796H12.1666C11.7083 6.21796 11.3333 6.59296 11.3333 7.05129C11.3333 7.50962 11.7083 7.88462 12.1666 7.88462H14.6666C16.0416 7.88462 17.1666 9.00962 17.1666 10.3846C17.1666 11.7596 16.0416 12.8846 14.6666 12.8846H12.1666C11.7083 12.8846 11.3333 13.2596 11.3333 13.718C11.3333 14.1763 11.7083 14.5513 12.1666 14.5513H14.6666C16.9666 14.5513 18.8333 12.6846 18.8333 10.3846C18.8333 8.08462 16.9666 6.21796 14.6666 6.21796ZM7.16663 10.3846C7.16663 10.843 7.54163 11.218 7.99996 11.218H13C13.4583 11.218 13.8333 10.843 13.8333 10.3846C13.8333 9.92629 13.4583 9.55129 13 9.55129H7.99996C7.54163 9.55129 7.16663 9.92629 7.16663 10.3846ZM8.83329 12.8846H6.33329C4.95829 12.8846 3.83329 11.7596 3.83329 10.3846C3.83329 9.00962 4.95829 7.88462 6.33329 7.88462H8.83329C9.29163 7.88462 9.66663 7.50962 9.66663 7.05129C9.66663 6.59296 9.29163 6.21796 8.83329 6.21796H6.33329C4.03329 6.21796 2.16663 8.08462 2.16663 10.3846C2.16663 12.6846 4.03329 14.5513 6.33329 14.5513H8.83329C9.29163 14.5513 9.66663 14.1763 9.66663 13.718C9.66663 13.2596 9.29163 12.8846 8.83329 12.8846Z",fill:"black",fillOpacity:"0.54"})})})})})]},e.url)}))})]})}),(0,Z.jsx)(m.Z,{rowsPerPageOptions:[5,10,20],component:"div",count:n||0,rowsPerPage:l,page:a,onPageChange:(e,n)=>{v((0,o.YA)(n)),b({page:n+1})},onRowsPerPageChange:e=>{v((0,o.vB)(e.target.value)),v((0,o.YA)(0)),b({page:1})}})]})}var k=t(4554),P=t(4925),A=t(9891),I=t(8096),H=t(3714),z=t(4294);function W(e){let{selectType:n,values:t,onChange:i,selectedValue:a}=e;return(0,Z.jsx)(k.Z,{sx:{minWidth:250},children:(0,Z.jsxs)(I.Z,{fullWidth:!0,children:[(0,Z.jsx)(P.Z,{id:"demo-simple-select-label",children:n}),(0,Z.jsx)(H.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:n,onChange:e=>{i(e.target.value)},sx:{"& .MuiSelect-select.MuiSelect-select":{textAlign:"left"}},children:t&&t.map((e=>(0,Z.jsx)(A.Z,{value:e,children:e},e)))}),a&&(0,Z.jsx)(z.Z,{variant:"text",onClick:()=>{i("")},children:"Reset"})]})})}var N=t(7391),T=t(3466),R=t(3400),U=t(5403);const F=e=>{let{onKeyPress:n,onChange:t,value:i,handleSearch:a}=e;const[s,r]=(0,l.useState)(!1);return(0,Z.jsx)("div",{children:(0,Z.jsxs)("div",{style:{position:"relative"},children:[(0,Z.jsx)(P.Z,{htmlFor:"outlined-search",sx:{position:"absolute",left:"50px",top:s?"-6px":"14px",zIndex:1,backgroundColor:"white",padding:"0 5px",transition:"top 0.3s, font-size 0.3s",fontSize:s?"0.75rem":"1rem"},children:"Search article"}),(0,Z.jsx)(N.Z,{id:"outlined-search",type:"search",variant:"outlined",onFocus:()=>r(!0),onBlur:e=>{""===e.target.value&&r(!1)},InputProps:{startAdornment:(0,Z.jsx)(T.Z,{position:"start",children:(0,Z.jsx)(R.Z,{onClick:()=>a(i),disabled:!i,children:(0,Z.jsx)(U.Z,{})})}),sx:{"& .MuiInputBase-input":{height:"34px",width:"250px",padding:"10px 14px",textAlign:"start"},"&:hover fieldset":{borderColor:"green"}}},onKeyPress:n,onChange:t,value:i})]})})};t(2868);var L,M,B,E,O,K=t(585),V=t(7031);const Y=v.Z.div(L||(L=(0,j.Z)(["\nwidth: inherit;\n  margin-bottom: 20px;\n"]))),D=v.Z.p(M||(M=(0,j.Z)(['\n  color: #212932;\n  font-feature-settings: "clig" off, "liga" off;\n  font-family: Noto Sans;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 133.4%;\n']))),G=v.Z.div(B||(B=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),q=v.Z.div(E||(E=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n"]))),J=v.Z.div(O||(O=(0,j.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-top: 20px;\n"]))),Q=["business","entertainment","general","health","science","sports","technology"],X={ae:"United Arab Emirates",ar:"Argentina",at:"Austria",au:"Australia",be:"Belgium",bg:"Bulgaria",br:"Brazil",ca:"Canada",ch:"Switzerland",cn:"China",co:"Colombia",cu:"Cuba",cz:"Czech Republic",de:"Germany",eg:"Egypt",fr:"France",gb:"United Kingdom",gr:"Greece",hk:"Hong Kong",hu:"Hungary",id:"Indonesia",ie:"Ireland",il:"Israel",in:"India",it:"Italy",jp:"Japan",kr:"South Korea",lt:"Lithuania",lv:"Latvia",ma:"Morocco",mx:"Mexico",my:"Malaysia",ng:"Nigeria",nl:"Netherlands",no:"Norway",nz:"New Zealand",ph:"Philippines",pl:"Poland",pt:"Portugal",ro:"Romania",rs:"Serbia",ru:"Russia",sa:"Saudi Arabia",se:"Sweden",sg:"Singapore",si:"Slovenia",sk:"Slovakia",th:"Thailand",tr:"Turkey",tw:"Taiwan",ua:"Ukraine",us:"United States",ve:"Venezuela",za:"South Africa"},$=()=>{(0,s.v9)(c.jC);const[e,n]=(0,l.useState)(!1),[t,i]=(0,l.useState)(""),[a,d]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),p=(0,s.I0)(),u=(0,r.s0)(),g=()=>{const e=new URLSearchParams;e.set("query",h),u("?".concat(e.toString())),p((0,o.YA)(0)),x("")},m=(e,n)=>Object.keys(e).find((t=>e[t]===n)),f=Object.values(X);return(0,Z.jsxs)(Y,{children:[(0,Z.jsxs)(q,{children:[(0,Z.jsx)(D,{children:"Formula Top Headlines"}),(0,Z.jsxs)(G,{children:[(0,Z.jsx)(F,{onKeyPress:e=>{"Enter"===e.key&&g()},onChange:e=>{x(e.target.value)},value:h,handleSearch:()=>g()}),(0,Z.jsx)(z.Z,{onClick:()=>{n(!e)},variant:"contained",type:"button",startIcon:e?(0,Z.jsx)(V.Z,{}):(0,Z.jsx)(K.Z,{}),sx:{backgroundColor:"#ECF0F6",height:46,width:115,color:"#1A232E"},children:"Filter"})]})]}),e&&(0,Z.jsxs)(J,{children:[(0,Z.jsx)(W,{selectType:"Categories",values:Q,onChange:e=>{i(e)},selectedValue:t}),(0,Z.jsx)(W,{selectType:"Countries",values:f,onChange:e=>{d(e)},selectedValue:a}),(0,Z.jsx)(z.Z,{variant:"contained",onClick:()=>{const e=m(X,a),n=new URLSearchParams;e&&n.set("country",e),t&&n.set("category",t),p((0,o.YA)(0)),u("?".concat(n.toString()))},style:{height:"56px",width:"168px"},children:"Submit"})]})]})};var _,ee;const ne=v.Z.section(_||(_=(0,j.Z)(["\n  padding-top: 32px;\n  padding-bottom: 135px;\n"]))),te=v.Z.div(ee||(ee=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\nmargin: auto;\nwidth: 1180px;\npadding: 0;\n"]))),ie=()=>(0,Z.jsx)(ne,{children:(0,Z.jsxs)(te,{children:[(0,Z.jsx)($,{}),(0,Z.jsx)(S,{})]})})}}]);
//# sourceMappingURL=137.8fb74e58.chunk.js.map