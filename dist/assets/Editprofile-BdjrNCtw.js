import{u as C,g as S,a as k,r,j as e,p as E,b as F,k as L}from"./index-Deeox68m.js";const D=()=>{const t=C(a=>{var s;return(s=a==null?void 0:a.auth)==null?void 0:s.user}),l=S(),h=k(),[y,o]=r.useState(!1),[j,n]=r.useState((t==null?void 0:t.profilePicture)||""),[c,v]=r.useState(void 0),[i,d]=r.useState((t==null?void 0:t.fullName)||""),[u,p]=r.useState((t==null?void 0:t.occupation)||""),[g,f]=r.useState((t==null?void 0:t.website)||""),[x,m]=r.useState((t==null?void 0:t.adderess)||""),N=a=>{var b;const s=(b=a.target.files)==null?void 0:b[0];v(s),s&&n(URL.createObjectURL(s))},w=()=>{n(""),d(""),p(""),f(""),m(""),l("/profile")},P=async()=>{o(!0);const a=new FormData;a.append("fullName",i),a.append("occupation",u),a.append("website",g),a.append("address",x),c?a.append("profilePicture",c):a.append("profileUrl",(t==null?void 0:t.profilePicture)||"");try{console.log(a,"59 data");const s=await F.post("/auth/updateprofile",a);console.log(s),h(L(s.data.user)),l("/profile")}catch(s){console.error("Error updating profile:",s)}finally{o(!1)}};return e.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-center text-gray-800",children:"Edit Profile"}),e.jsxs("div",{className:"flex flex-col items-center mb-6",children:[e.jsx("label",{htmlFor:"profilePic",className:"cursor-pointer",children:e.jsx("img",{src:j||"https://via.placeholder.com/100",alt:"Profile",className:"w-24 h-24 rounded-full object-cover border-2 border-gray-300"})}),e.jsx("input",{type:"file",id:"profilePic",accept:"image/*",className:"hidden",onChange:N}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Edit picture"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-600 mb-1",children:"Name"}),e.jsx("input",{type:"text",value:i,onChange:a=>d(a.target.value),className:"w-full p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-600 mb-1",children:"Occupation"}),e.jsx("input",{type:"text",value:u,onChange:a=>p(a.target.value),className:"w-full p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-600 mb-1",children:"Website"}),e.jsx("input",{type:"url",value:g,onChange:a=>f(a.target.value),className:"w-full p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-600 mb-1",children:"Address"}),e.jsx("input",{type:"text",value:x,onChange:a=>m(a.target.value),className:"w-full p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"})]})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6",children:[e.jsx("button",{type:"button",onClick:w,className:"px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-200",children:"Cancel"}),e.jsx("button",{onClick:P,className:"px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600",children:y?e.jsx(E,{className:"animate-spin text-white"}):"Save"})]})]})})};export{D as default};
