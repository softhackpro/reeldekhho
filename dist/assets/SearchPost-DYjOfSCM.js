import{r as a,f as n,g as u,j as e}from"./index-Deeox68m.js";const d=c=>{const[t,p]=a.useState(c.info);console.log(t,"from search post");const[o,i]=a.useState(!1),r=n(()=>i(!0),()=>i(!1),{threshold:.6}),l=u();return a.useEffect(()=>{r.current&&(o?r.current.play():r.current.pause())},[o]),e.jsx(e.Fragment,{children:t.map(s=>e.jsxs("div",{onClick:()=>l(`/reels/${s._id}`),className:" overflow-hidden rounded-lg mb-2 relative h-fit cursor-pointer",children:[s.file.fileType==="mp4"?e.jsxs("video",{ref:r,muted:!0,autoPlay:o,loop:!0,className:"w-full h-auto object-cover",children:[e.jsx("source",{src:s.file.url,type:"video/mp4"}),"Your browser does not support the video tag."]}):e.jsx("img",{src:s.file.url,alt:"",className:"w-full h-auto object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100",children:e.jsxs("div",{className:"text-white flex space-x-4",children:[e.jsxs("span",{children:["❤️ ",t.likes]}),e.jsxs("span",{children:["💬 ",t.comments]})]})})]},s._id))})};export{d as S};
