import{u,g as x,j as a,H as o}from"./index-Deeox68m.js";const f=()=>{const l=u(e=>e.savedPosts.saved_Posts);console.log(l);const m=x();return a.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[a.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Saved Posts"}),a.jsx("div",{className:"grid grid-cols-3 gap-4",children:l&&l.length&&l.map(e=>{var i,r,c,s,d,n,t;return a.jsxs("div",{onClick:()=>m(`/reels/${e==null?void 0:e.postId._id}`),className:"relative aspect-square group cursor-pointer",children:[a.jsx("div",{className:"relative aspect-square group",children:["mp4","webm","mov"].includes((c=(r=(i=e==null?void 0:e.postId)==null?void 0:i.file)==null?void 0:r.fileType)==null?void 0:c.toLowerCase())?a.jsx("video",{src:(s=e.postId.file)==null?void 0:s.url,className:"w-full h-full object-cover",muted:!0}):["jpg","jpeg","png","gif","webp"].includes((n=(d=e==null?void 0:e.postId.file)==null?void 0:d.fileType)==null?void 0:n.toLowerCase())?a.jsx("img",{src:(t=e.postId.file)==null?void 0:t.url,alt:(e==null?void 0:e.postId.caption)||"Post Image",className:"w-full h-full object-cover"}):a.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gray-200 text-gray-500",children:"Unsupported Format"})}),a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:a.jsxs("div",{className:"flex gap-3 sm:gap-6 md:gap-9 text-white",children:[a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(o,{className:"w-4 h-4 sm:w-6 sm:h-6 fill-current"}),a.jsx("span",{className:"font-semibold",children:e==null?void 0:e.postId.likes})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("svg",{className:"w-4 h-4 sm:w-6 sm:h-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"})}),a.jsx("span",{className:"font-semibold",children:(e==null?void 0:e.postId.comments)||0})]})]})})]},e._id)})})]})};export{f as default};
