import{c as H,r as d,u as L,a as I,b as k,s as b,j as e,e as B,d as F,L as G,S as M,k as V}from"./index-4-6_qnaC.js";import{G as C}from"./iconBase-CinpP4O6.js";import{u as R,H as P,M as E,B as U,C as W}from"./CommentSection-B6B3YB4t.js";import{u as Z}from"./useIntersectionObserver-Dwi2r5Zb.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=H("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);function O(t){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M416 432 64 80"},child:[]},{tag:"path",attr:{d:"M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71zm8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256zm64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256z"},child:[]},{tag:"path",attr:{d:"M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256z"},child:[]}]})(t)}function q(t){return C({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.553 3.064A.75.75 0 0 1 12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.752.752 0 0 1 .808-.13ZM10.5 5.445l-4.245 3.86a.748.748 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86Zm8.218-1.223a.75.75 0 0 1 1.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 0 1-1.06-1.06 9.5 9.5 0 0 0 0-13.436.75.75 0 0 1 0-1.06Z"},child:[]},{tag:"path",attr:{d:"M16.243 7.757a.75.75 0 1 0-1.061 1.061 4.5 4.5 0 0 1 0 6.364.75.75 0 0 0 1.06 1.06 6 6 0 0 0 0-8.485Z"},child:[]}]})(t)}const Y=t=>{const[l,m]=d.useState(!0),[c,o]=d.useState(null),h=L(a=>{var s;return((s=a.post.likes.find(x=>x.id===t))==null?void 0:s.isLiked)||!1}),i=L(a=>{var s;return((s=a.post.likes.find(x=>x.id===t))==null?void 0:s.likeCount)||0}),n=I();return d.useEffect(()=>{if(!t)return;i||(async()=>{var s,x;m(!0);try{const f=await k.get(`/post/getlikes?postId=${t}`);n(b({type:"SET_LIKE",payload:{id:t,likeCount:f.data.likesCount,isLiked:f.data.isCurrUserLiked}})),console.log("hello I am aniket like ",f)}catch(f){o(((x=(s=f==null?void 0:f.response)==null?void 0:s.data)==null?void 0:x.message)||"Something went wrong")}finally{m(!1)}})()},[t,n,i]),{likeCount:i,loading:l,error:c,isLiked:h,likePost:async()=>{if(!t)return;const a=h?i-1:i+1;try{n(b({type:"SET_LIKE",payload:{id:t,likeCount:a,isLiked:!h}}));const s=await k.post(`/post/like?postId=${t}`);console.log(s)}catch{n(b({type:"SET_LIKE",payload:{id:t,likeCount:i,isLiked:h}})),o("Failed to update like status")}}}},J=()=>{const[t,l]=d.useState([]),[m,c]=d.useState(!1);return{addSavedPost:async n=>{var u,a;c(!0);try{const s=await k.post("/post/addSaved?postId="+n);console.log(s.data)}catch(s){c(!1),console.error((a=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:a.error)}},getSavedPosts:async()=>{var n,u;try{const a=await k.get("/post/getsaved");l(a.data.savedPosts)}catch(a){console.error((u=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:u.error)}},removeSavedPost:async n=>{var u,a;try{const s=await k.delete("/post/deletesaved",{data:{postId:n}});console.log(s.data.posts),c(!1)}catch(s){console.error((a=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:a.error)}},savedPosts:t,isSaved:m}};function Q(t){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}const X=t=>{const[l,m]=d.useState(null);console.log(l==null?void 0:l.lat,l==null?void 0:l.lng,"location lattitude");const[c,o]=d.useState(null),h=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(i=>{const{latitude:n,longitude:u}=i.coords;m({lat:n,lng:u}),o(null)},i=>{o(i.message||"Unable to retrieve your location.")}):o("Geolocation is not supported by this browser.")};return d.useEffect(()=>{h()},[]),e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("span",{onClick:()=>alert("check last day"),className:"flex items-center text-xs",children:[e.jsx(Q,{className:"mr-1",style:{height:"22px",width:"22px"}}),e.jsx("span",{style:{fontSize:"15px",color:"blue"},children:"1.4 km"})]})})};function ee(t){const l=new Date,m=new Date(t),c=Math.floor((l.getTime()-m.getTime())/1e3);if(c<60)return`${c}s`;const o=Math.floor(c/60);if(o<60)return`${o}m`;const h=Math.floor(o/60);if(h<24)return`${h}h`;const i=Math.floor(h/24);return i<7?`${i}d`:`${Math.floor(i/7)}w`}const te=t=>{const l=["jpg","jpeg","png","gif","bmp","webp"],m=["mp4","mov","avi","mkv","webm","flv"],c=t==null?void 0:t.toLowerCase();return l.some(o=>c.includes(o))?"image":m.some(o=>c.includes(o))?"video":"unknown"};function ie({post:t}){const l=B(),{isLoggedIn:m}=F(),[c,o]=d.useState(!0),[h,i]=d.useState(!1),{likeCount:n,isLiked:u,likePost:a}=Y(t._id),s=L(r=>r.auth.isMute),x=I(),{getComment:f,createComment:_,deleteComment:$,comments:g}=R(t._id),j=d.useRef(null),[w,y]=d.useState({addLoader:!1,removeLoader:!1});J(),d.useEffect(()=>{console.log(g)},g);const v=Z(()=>o(!0),()=>o(!1),{threshold:.6});d.useEffect(()=>{v.current&&(c?v.current.play():v.current.pause())},[c]);const N=async()=>{await a(t.id)},A=te(t.file.fileType),D=()=>{x(V(!s))},[z,S]=d.useState(!1),T=r=>{w.removeLoader||(y(p=>({...p,removeLoader:!0})),$(r),S(!1),y(p=>({...p,removeLoader:!1})))};return d.useEffect(()=>{const r=p=>{j.current&&!j.current.contains(p.target)&&i(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[]),e.jsxs("div",{className:"solveissue bg-white w-[90vw] sm:w-full dark:bg-gray-800 border dark:border-gray-700 rounded-lg mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs(G,{to:`/seller/${t.user._id}`,className:"flex items-center space-x-2",children:[e.jsx("img",{src:t.user.profilePicture,alt:t.user.fullName,className:"w-8 h-8 rounded-full object-cover"}),e.jsx("span",{className:"font-semibold dark:text-white",children:t.user.fullName})]}),e.jsx("button",{className:"dark:text-white",children:e.jsx(K,{className:"cursor-pointer"})})]}),e.jsxs("p",{className:"dark:text-white",style:{paddingLeft:"12px",paddingBottom:"8px",marginTop:"-8px"},children:[e.jsx("span",{className:"font-semibold"})," ",t.caption]}),e.jsx("div",{className:"relative",children:A==="video"?e.jsxs("div",{onClick:()=>o(!1),onDoubleClick:N,className:"relative min-w-full bg-black sm:min-w-96",children:[e.jsxs("video",{ref:v,className:"w-full max-h-[60vh]",muted:s,loop:!0,autoPlay:c,children:[e.jsx("source",{src:t.file.url,type:`video/${t.file.fileType}`}),"Your browser does not support the video tag."]}),e.jsx("div",{className:"absolute bottom-2 right-2 z-30",onClick:D,children:s?e.jsx(O,{className:"text-white text-xl"}):e.jsx(q,{className:"text-white text-xl"})})]}):e.jsx("img",{onDoubleClick:N,src:t.file.url,alt:"Post Media",className:"w-full object-cover min-h-64 max-h-[500px]"})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[m?e.jsxs(e.Fragment,{children:[" ",e.jsx("button",{onClick:N,className:"transform active:scale-125 transition-transform duration-200",children:e.jsx(P,{className:`w-6 h-6 ${u?"text-red-500 fill-current":"dark:text-white"}`})})," ",e.jsxs("span",{style:{marginLeft:"6px",fontSize:"17px"},className:" dark:text-white",children:[n," ",n>1?"Likes":"Like"]})," "]}):e.jsxs(e.Fragment,{children:[" ",e.jsx("button",{onClick:()=>l("/signup"),className:"transform active:scale-125 transition-transform duration-200",children:e.jsx(P,{className:`w-6 h-6 ${u?"text-red-500 fill-current":"dark:text-white"}`})})," ",e.jsxs("span",{className:"font-semibold dark:text-white",children:[n," ",n>1?"Likes":"Like"]})," "]}),m?e.jsxs(e.Fragment,{children:[" ",e.jsx("button",{onClick:()=>i(r=>!r),children:e.jsx(E,{className:"w-6 h-6 dark:text-white"})})," ",e.jsx("button",{children:e.jsx(M,{className:"w-6 h-6 dark:text-white"})})," "]}):e.jsxs(e.Fragment,{children:[" ",e.jsx("button",{onClick:()=>l("/signup"),children:e.jsx(E,{className:"w-6 h-6 dark:text-white"})})," ",e.jsx("button",{onClick:()=>l("/signup"),children:e.jsx(M,{className:"w-6 h-6 dark:text-white"})})]})]}),t.createdAt?e.jsx(X,{createdDate:t.createdAt}):null]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{className:"text-gray-500 dark:text-gray-400 text-sm",onClick:()=>i(r=>!r),children:"View all comments"}),e.jsx("p",{className:"text-gray-400 text-xs uppercase",children:ee(t.createdAt)})]}),h&&e.jsxs("div",{ref:j,children:[g&&g.length&&g.map(r=>e.jsxs("div",{className:"flex items-start space-x-4 mb-2",children:[e.jsx("img",{src:r.user.profilePicture,alt:r.user.fullName,className:"w-8 h-8 rounded-full object-cover"}),e.jsxs("div",{className:"flex-grow h-full items-start flex flex-col",children:[e.jsx("p",{className:"font-semibold dark:text-white",children:r.user.fullName}),e.jsx("p",{className:"dark:text-white",children:r.text})]}),e.jsxs("div",{className:"relative",children:[e.jsx(U,{className:"dark:text-white text-black text-lg cursor-pointer",onClick:()=>S(p=>p===r._id?!1:r._id)}),z===r._id&&e.jsx("div",{className:"absolute top-full right-[21px] mt-[-24px] rounded-sm",children:e.jsx("p",{className:" text-white font-semibold rounded-sm cursor-pointer text-sm p-2 bg-red-500  hover:underline",onClick:()=>T(r._id),children:w.removeLoader?"loading...":"Delete"})})]})]},r._id)),e.jsx(W,{postId:t.id,createComment:_,loader:w,setLoader:y})]})]})]})}export{ie as default};
