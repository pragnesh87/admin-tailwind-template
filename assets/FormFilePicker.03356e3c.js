import{M as f,x as r,I as m,N as y,o as c,q as i,i as t,a as b,s as _,d as g,C as v,D as h}from"./index.359c5e86.js";const V={class:"flex items-stretch justify-start relative"},k={class:"inline-flex"},x=["accept"],S={key:0},N={class:"inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"},B={__name:"FormFilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:f},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(a,{emit:u}){const o=a,s=r(null),e=r(o.modelValue),d=m(()=>o.modelValue);y(d,l=>{e.value=l,l||(s.value.input.value=null)});const p=l=>{const n=l.target.files||l.dataTransfer.files;e.value=n[0],u("update:modelValue",e.value)};return(l,n)=>(c(),i("div",V,[t("label",k,[b(g,{as:"a",label:a.label,icon:a.icon,color:a.color,class:_({"rounded-r-none":e.value})},null,8,["label","icon","color","class"]),t("input",{ref_key:"root",ref:s,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:a.accept,onInput:p},null,40,x)]),e.value?(c(),i("div",S,[t("span",N,v(e.value.name),1)])):h("",!0)]))}};export{B as _};
