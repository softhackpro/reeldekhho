import{G as y,r,u as b,g as f,j as e,w as N,x as v,y as w,L as a,z as k,A as L,D as F,E as S,t as C}from"./index-Deeox68m.js";function z(c){return y({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"},child:[]}]})(c)}const M=()=>{const c="https://admin.reeldekho.com",x="https://gdlplay.in",[o,d]=r.useState(!1),[h,u]=r.useState([]),[t,g]=r.useState([]),p=b(s=>{var l;return(l=s==null?void 0:s.auth)==null?void 0:l.user}),i=f(),n=()=>{d(!o)},m=async()=>{const s=await C.get(`${c}/post/fetchheader`);console.log(s.data,"aa rha hai header"),u(s.data.value),g(s.data.settin)};r.useEffect(()=>{m()},[]);const j=async()=>{localStorage.clear(),window.location.reload()};return e.jsxs("header",{className:"relative top-0 left-0 w-full z-50 bg-white shadow-md fixedtio",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:px-8",children:[e.jsx("div",{children:e.jsx("button",{onClick:n,className:"text-gray-800 focus:outline-none",children:e.jsx(N,{className:"text-2xl"})})}),e.jsx("div",{className:"text-center",children:e.jsx("img",{src:`${x}/public/Images/${t.rectangleLogo}`,alt:"Logo",className:"h-8 object-contain mx-auto"})}),e.jsx("div",{children:e.jsx("button",{className:"text-gray-800 focus:outline-none",children:e.jsx(v,{className:"text-2xl"})})})]}),e.jsxs("div",{className:`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${o?"translate-x-0":"-translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-4 border-b",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Menu"}),e.jsx("button",{onClick:n,className:"text-gray-800 focus:outline-none",children:e.jsx(w,{className:"text-2xl"})})]}),e.jsxs("ul",{className:"flex flex-col mt-4",children:[e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:"Home"}),p?e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:"Change Password"}),e.jsx("li",{onClick:j,className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:"Logout"}),e.jsx(a,{to:"/saved",children:e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:"Saved"})}),e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:"Delete Account"})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",onClick:()=>i("/login"),children:" Login "}),e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",onClick:()=>i("/signup"),children:" Sign-up "})]}),e.jsx(a,{to:"/faq",children:e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:"FAQ"})}),h.map((s,l)=>e.jsx(a,{to:`/page/${s.Title}`,children:e.jsx("li",{className:"py-3 px-4 hover:bg-gray-100 cursor-pointer",children:s.Title},l)}))]}),e.jsx("div",{className:"relative h-screen",children:e.jsxs("ul",{className:"absolute flex justify-center w-full space-x-4 p-4 bg-white",style:{marginBottom:"1px"},children:[e.jsx(a,{to:t.facebook,children:e.jsx("li",{children:e.jsx(k,{className:"text-xl text-blue-600 cursor-pointer"})})}),e.jsx(a,{to:t.instagram,children:e.jsx("li",{children:e.jsx(L,{className:"text-xl text-red-600 cursor-pointer"})})}),e.jsx(a,{to:t.twitter,children:e.jsx("li",{children:e.jsx(z,{className:"text-xl text-black-600 cursor-pointer"})})}),e.jsx(a,{to:t.youtube,children:e.jsx("li",{children:e.jsx(F,{className:"text-xl text-red-600 cursor-pointer"})})}),e.jsx(a,{to:t.playstore,children:e.jsx("li",{children:e.jsx(S,{className:"text-xl text-gray-800 cursor-pointer"})})})]})})]}),o&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-30",onClick:n})]})};export{M as H};
