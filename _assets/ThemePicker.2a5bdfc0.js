let e=document.createElement("style");e.innerHTML=".vben-setting-theme-picker{display:flex;flex-wrap:wrap;margin:16px 0;justify-content:space-around}.vben-setting-theme-picker__item{width:20px;height:20px;cursor:pointer;border:1px solid #ddd;border-radius:2px}.vben-setting-theme-picker__item svg{display:none}.vben-setting-theme-picker__item--active{border:1px solid #31a5fe}.vben-setting-theme-picker__item--active svg{display:inline-block;margin:0 0 3px 3px;font-size:12px;fill:#fff!important}",document.head.appendChild(e);import{a as t,au as i,i as n,o as r,j as s,ad as a,aH as p,k as o}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./index.44fa6ce0.js";import{C as l}from"./CheckOutlined.94f308ef.js";import"./SettingOutlined.43ab4768.js";import"./index.abf33e7c.js";import"./useHeaderSetting.1ae12495.js";import{b as d}from"./index.67fc1421.js";var c=t({name:"ThemePicker",components:{CheckOutlined:l},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&d(e.event,t)}}}});c.render=function(e,t,i,l,d,c){const m=n("CheckOutlined");return r(),s("div",{class:e.prefixCls},[(r(!0),s(a,null,p(e.colorList||[],(t=>(r(),s("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[o(m)],14,["onClick"])))),128))],2)};export default c;