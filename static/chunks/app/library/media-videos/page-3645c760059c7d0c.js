(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{6169:(e,t,r)=>{Promise.resolve().then(r.bind(r,553))},553:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(5155),n=r(2115),i=r(4085),a=r(5565);let l=e=>{let{title:t,description:r,image:n,buttonText:l,imageHide:d,titleDesc:o}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"bg-card",children:(0,s.jsxs)("div",{className:"px-10 py-10 flex flex-col justify-between h-full",children:[(0,s.jsx)("div",{className:"flex justify-between items-center",children:(0,s.jsx)("h2",{className:"text-md font-bold text-accent ",children:t})}),!d&&n&&(0,s.jsx)(a.default,{src:n,alt:t,width:300,height:300,objectFit:"cover"}),(0,s.jsx)("p",{className:"text-accent mt-2 text-heading-5",children:o}),(0,s.jsx)("p",{className:"text-accent mt-2 min-h-[110px]",children:r}),(0,s.jsx)(i.$,{className:"mt-4 w-full",children:l})]})})})};var d=r(3899),o=r(9269);let c=()=>{let[e,t]=(0,n.useState)("General Content"),r=e=>{t(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.default,{title:"Media (Videos)"}),(0,s.jsxs)("div",{className:"flex flex-col p-4",children:[(0,s.jsx)("div",{className:"tabs-titles flex justify-center space-x-6 my-12",children:o.l3.map(t=>(0,s.jsx)("button",{onClick:()=>r(t.title),className:" cursor-pointer rounded-full px-10 py-3 ".concat(e===t.title?"font-bold bg-tabs-background text-white":"text-accent font-bold bg-tabs"),children:t.title},t.title))}),(0,s.jsx)("div",{className:"tabs-content",children:o.l3.map(t=>e===t.title&&(0,s.jsxs)("div",{className:"tab-content",children:[(0,s.jsx)("h5",{className:"text-accent text-md font-bold my-10",children:e}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:t.cardContent.map((e,t)=>(0,s.jsx)(l,{title:e.title,description:e.description,titleDesc:e.titleDesc,buttonText:e.buttonText},t))})]},t.title))})]}),(0,s.jsx)("div",{className:"bg-card h-1 w-full"})]})}},4085:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var s=r(5155),n=r(2115),i=r(1290),a=r(1027),l=r(9602);let d=(0,a.F)("inline-flex items-center justify-center rounded-lg min-w-[170px] gap-2 whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-primary bg-background shadow-sm hover:bg-primary hover:text-primary-foreground",outlineInverse:"border border-white text-white bg-transparent shadow-sm hover:bg-white hover:text-secondary-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=n.forwardRef((e,t)=>{let{className:r,variant:n,size:a,asChild:o=!1,...c}=e,u=o?i.DX:"button";return(0,s.jsx)(u,{className:(0,l.cn)(d({variant:n,size:a,className:r})),ref:t,...c})});o.displayName="Button"},5565:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var s=r(4146),n=r.n(s)},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return d},getImageProps:function(){return l}});let s=r(306),n=r(666),i=r(7970),a=s._(r(5514));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=i.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[85,899,441,517,358],()=>t(6169)),_N_E=e.O()}]);