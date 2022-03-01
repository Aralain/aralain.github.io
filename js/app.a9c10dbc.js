(()=>{"use strict";var e={6231:(e,t,a)=>{var o=a(8880),l=a(9592),r=a(3673);function n(e,t,a,o,l,n){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}const s=(0,r.aZ)({name:"App"});var u=a(4260);const i=(0,u.Z)(s,[["render",n]]),c=i;var d=a(7083),p=a(9582);a(71);function m(e,t,a,o,l,n){const s=(0,r.up)("router-view"),u=(0,r.up)("q-page-container"),i=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(i,{view:"lHh Lpr lff"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"row justify-around items-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1})])),_:1})}var v=a(1959);const w=[{title:"Home",caption:"Home",icon:"home",to:"/"},{title:"Generator",caption:"Prompt Generator",icon:"school",to:"/generator"}],f=(0,r.aZ)({name:"MainLayout",setup(){return{linksList:w,tab:(0,v.iH)("generator")}}});var g=a(3066),S=a(3812),h=a(9570),b=a(7547),j=a(2770),y=a(2652),U=a(7518),k=a.n(U);const q=(0,u.Z)(f,[["render",m]]),V=q;k()(f,"components",{QLayout:g.Z,QHeader:S.Z,QToolbar:h.Z,QTabs:b.Z,QRouteTab:j.Z,QPageContainer:y.Z});a(2100);var W=a(2323),Z=a(8825),_=a(5429),D=a.n(_);class Q{constructor(e){D()(this,"name",void 0),D()(this,"rowsDone",void 0),D()(this,"rowsTotal",void 0),D()(this,"repeat",void 0),D()(this,"patternStarts",void 0),D()(this,"id",void 0),D()(this,"notes",void 0),D()(this,"lastUpdated",void 0),void 0===e&&(e={}),this.name=e.name||"",this.rowsDone=e.rowsDone||0,this.rowsTotal=e.rowsTotal||0,this.repeat=e.repeat||0,this.patternStarts=(e.patternStarts<1?1:e.patternStarts)||1,this.id=e.id||0,this.notes=e.notes||"",this.lastUpdated=e.lastUpdated?new Date(e.lastUpdated):new Date}setId(e){this.id=e}reset(){this.name="",this.rowsDone=0,this.rowsTotal=0,this.repeat=0,this.patternStarts=0,this.id=0,this.notes=""}setValues(e){e&&(this.name=e.name||"",this.rowsDone=e.rowsDone||0,this.rowsTotal=e.rowsTotal||0,this.repeat=e.repeat||0,this.patternStarts=e.patternStarts||0,this.id=e.id||0,this.notes=e.notes||"",this.lastUpdated=new Date(e.lastUpdated)||new Date)}}const I={props:["projects","addProject"],emits:["view-project","delete-project"],setup(e,{emit:t}){return(t,a)=>{const l=(0,r.up)("q-item-label"),n=(0,r.up)("q-item-section"),s=(0,r.up)("q-icon"),u=(0,r.up)("q-item"),i=(0,r.up)("q-list");return e.addProject?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(i,{key:0,dense:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.projects,(e=>((0,r.wg)(),(0,r.j4)(u,{key:e.id,clickable:"",onClick:a=>t.$emit("view-project",e.id)},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{avatar:""},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,W.zw)(e.name),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(n,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{overline:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,W.zw)(e.lastUpdated.toLocaleString()),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(n,{side:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{name:"mdi-delete",onClick:(0,o.iM)((a=>t.$emit("delete-project",e.id)),["stop"])},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}))}}};var C=a(7011),O=a(3414),T=a(2035),H=a(2350),P=a(4554);const x=I,N=x;k()(I,"components",{QList:C.Z,QItem:O.Z,QItemSection:T.Z,QItemLabel:H.Z,QIcon:P.Z});const A={key:0,class:"row"},Y=(0,r.Uk)("Delete All Projects"),B=(0,r.Uk)("Add Project"),L={class:"row"},J={key:0,class:"row"},M={class:"row"},E={props:{projects:Array,createFirst:Boolean},emits:["reload-projects"],setup(e,{emit:t}){const a=e,o=(0,Z.Z)();let l=(0,v.iH)(new Q),n=(0,v.iH)(!1),s=(0,v.iH)(!1),u=(0,v.iH)(!1);a.createFirst&&(s.value=!0);const i=()=>{let e=a.projects;u.value?e[l.value.id]=l.value:(l.value.setId(e.length+1),e.push(l.value)),localStorage.setItem("projects",JSON.stringify(e)),l.value.reset(),s.value=!1,t("reload-projects")},c=e=>{o.dialog({title:"Delete Project?",message:`Are you sure you want to delete ${a.projects[e].name}? This can't be undone.`,ok:{color:"primary",label:"Yes",flat:!0},cancel:{color:"secondary",label:"No",flat:!0}}).onOk((()=>{const o=e||l.value.id;let r=a.projects;r.splice(o,1),localStorage.setItem("projects",JSON.stringify(r)),t("reload-projects")})),u.value=!1,l.value.reset(),s.value=!1},d=()=>{u.value&&c(),l.value.reset(),s.value=!1},p=()=>{l.value.reset(),s.value=!1,u.value=!1},m=e=>{l.value=new Q(a.projects[e]),l.value.repeat&&(n.value=!0),u.value=!0,s.value=!0},w=()=>{o.dialog({title:"Confirm Delete All?",message:"Are you sure you want to delete all your projects? This can't be undone. You can export them in the App Settings tab first to re-add later.",ok:{color:"primary",label:"Yes",flat:!0},cancel:{color:"secondary",label:"No",flat:!0}}).onOk((()=>{localStorage.removeItem("projects"),t("reload-projects")}))};return(t,a)=>{const o=(0,r.up)("q-btn"),f=(0,r.up)("q-space"),g=(0,r.up)("q-input"),S=(0,r.up)("q-toggle"),h=(0,r.up)("q-form"),b=(0,r.up)("q-card-section"),j=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(j,{square:"",flat:"",style:{width:"500px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,v.SU)(N),{projects:e.projects,"add-project":(0,v.SU)(s),onViewProject:m,onDeleteProject:c},null,8,["projects","add-project"]),(0,v.SU)(s)?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",A,[(0,r.Wm)(o,{onClick:a[0]||(a[0]=e=>w())},{default:(0,r.w5)((()=>[Y])),_:1}),(0,r.Wm)(f),(0,r.Wm)(o,{onClick:a[1]||(a[1]=e=>(0,v.dq)(s)?s.value=!0:s=!0),color:"primary"},{default:(0,r.w5)((()=>[B])),_:1})])),(0,v.SU)(s)?((0,r.wg)(),(0,r.j4)(h,{key:1,autofocus:"",onSubmit:i,onReset:d,class:"q-gutter-md"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{filled:"",clearable:"",modelValue:(0,v.SU)(l).name,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,v.SU)(l).name=e),label:"Project Name",hint:"Project & Tab name"},null,8,["modelValue"]),(0,r._)("div",L,[(0,r.Wm)(g,{filled:"",type:"number",modelValue:(0,v.SU)(l).rowsDone,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,v.SU)(l).rowsDone=e),label:"Rows Done",class:"col q-mr-xs"},null,8,["modelValue"]),(0,r.Wm)(g,{filled:"",type:"number",modelValue:(0,v.SU)(l).rowsTotal,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,v.SU)(l).rowsTotal=e),label:"Rows Needed",class:"col q-ml-xs",hint:"Enter 0 for infinite counting"},null,8,["modelValue"])]),(0,r.Wm)(S,{modelValue:(0,v.SU)(n),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,v.dq)(n)?n.value=e:n=e),label:"Pattern has repeat?"},null,8,["modelValue"]),(0,v.SU)(n)?((0,r.wg)(),(0,r.iD)("div",J,[(0,r.Wm)(g,{filled:"",type:"number",modelValue:(0,v.SU)(l).repeat,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,v.SU)(l).repeat=e),label:"Repeats every X rows",class:"col q-mr-xs"},null,8,["modelValue"]),(0,r.Wm)(g,{filled:"",type:"number",modelValue:(0,v.SU)(l).patternStarts,"onUpdate:modelValue":a[7]||(a[7]=e=>(0,v.SU)(l).patternStarts=e),label:"Pattern starts on row",hint:"Can use for number of setup rows before repeat",class:"col q-ml-xs"},null,8,["modelValue"])])):(0,r.kq)("",!0),(0,r._)("div",M,[(0,r.Wm)(o,{label:((0,v.SU)(u)?"Save":"Create")+" Project",type:"submit",color:"primary"},null,8,["label"]),(0,r.Wm)(o,{label:(0,v.SU)(u)?"Delete":"Reset",type:"reset",color:"grey",flat:"",class:"q-ml-sm"},null,8,["label"]),(0,r.Wm)(f),(0,r.Wm)(o,{label:"Cancel",color:"secondary",flat:"",onClick:a[8]||(a[8]=e=>p())})])])),_:1})):(0,r.kq)("",!0)])),_:1})])),_:1})}}};var R=a(151),K=a(5589),F=a(8240),z=a(2025),$=a(8689),G=a(4842),X=a(8886);const ee=E,te=ee;k()(E,"components",{QCard:R.Z,QCardSection:K.Z,QBtn:F.Z,QSpace:z.Z,QForm:$.Z,QInput:G.Z,QToggle:X.Z});const ae={class:"row"},oe=(0,r.Uk)("Import"),le={emits:["reload-projects","reload-keys"],setup(e,{emit:t}){const a=(0,Z.Z)(),o=["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],l=(0,v.iH)(!1);localStorage.getItem("lightMode")&&(l.value=JSON.parse(localStorage.getItem("lightMode")));const n=()=>{a.dark.toggle(),localStorage.setItem("lightMode",JSON.stringify(l.value))};let s={};localStorage.getItem("keys")&&(s=JSON.parse(localStorage.getItem("keys")));const u=(0,v.iH)(s.inc||"Space"),i=(0,v.iH)(s.dec||"ArrowDown");(0,r.YP)([u,i],(()=>{const e={inc:u.value,dec:i.value};localStorage.setItem("keys",JSON.stringify(e)),t("reload-keys")}));let c=(0,v.iH)(!1),d=(0,v.iH)("");const p=()=>{c.value&&(d.value=localStorage.getItem("projects"))};let m=(0,v.iH)(!1),w=(0,v.iH)("");const f=()=>{try{let e=JSON.parse(w.value),a=[];for(let t=0;t<e.length;t++){const o=new Q(e[t]);a.push(o)}localStorage.setItem("projects",JSON.stringify(a)),t("reload-projects")}catch(e){a.dialog({title:"Error",message:"Your import string is in the wrong format. Your projects were not loaded.",ok:{color:"primary",label:"OK",flat:!0}})}finally{w.value="",m.value=!1}};return(e,t)=>{const a=(0,r.up)("q-toggle"),s=(0,r.up)("q-select"),g=(0,r.up)("q-input"),S=(0,r.up)("q-space"),h=(0,r.up)("q-btn"),b=(0,r.up)("q-card-section"),j=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(j,{square:"",flat:"",style:{width:"500px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(a,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),onClick:t[1]||(t[1]=e=>n()),label:"Light Mode","left-label":""},null,8,["modelValue"]),(0,r.Wm)(s,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e),options:o,label:"Increment Key"},null,8,["modelValue"]),(0,r.Wm)(s,{modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e),options:o,label:"Decrement Key"},null,8,["modelValue"]),(0,r.Wm)(a,{modelValue:(0,v.SU)(c),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,v.dq)(c)?c.value=e:c=e),onClick:t[5]||(t[5]=e=>p()),label:"Export Projects as String","left-label":""},null,8,["modelValue"]),(0,v.SU)(c)?((0,r.wg)(),(0,r.j4)(g,{key:0,type:"textarea",filled:"",modelValue:(0,v.SU)(d),"onUpdate:modelValue":t[6]||(t[6]=e=>(0,v.dq)(d)?d.value=e:d=e)},null,8,["modelValue"])):(0,r.kq)("",!0),(0,r.Wm)(a,{modelValue:(0,v.SU)(m),"onUpdate:modelValue":t[7]||(t[7]=e=>(0,v.dq)(m)?m.value=e:m=e),label:"Import Projects as String","left-label":""},null,8,["modelValue"]),(0,v.SU)(m)?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,v.SU)(m)?((0,r.wg)(),(0,r.j4)(g,{key:0,type:"textarea",filled:"",modelValue:(0,v.SU)(w),"onUpdate:modelValue":t[8]||(t[8]=e=>(0,v.dq)(w)?w.value=e:w=e)},null,8,["modelValue"])):(0,r.kq)("",!0),(0,r._)("div",ae,[(0,r.Wm)(S),(0,r.Wm)(h,{onClick:t[9]||(t[9]=e=>f()),color:"primary"},{default:(0,r.w5)((()=>[oe])),_:1})])],64)):(0,r.kq)("",!0)])),_:1})])),_:1})}}};var re=a(5439);const ne=le,se=ne;k()(le,"components",{QCard:R.Z,QCardSection:K.Z,QToggle:X.Z,QSelect:re.Z,QInput:G.Z,QSpace:z.Z,QBtn:F.Z});const ue={class:"row justify-center items-center"},ie={class:"col-4 text-h3"},ce={class:"col-2"},de={key:0},pe={class:"vertical-bottom"},me={class:"row"},ve={props:["project"],emits:["increment","decrement"],setup(e,{emit:t}){const a=e,o=(0,r.Fl)((()=>Math.floor((a.project.rowsDone-a.project.patternStarts)/a.project.repeat))),l=(0,r.Fl)((()=>{const e=a.project.rowsDone-(a.project.patternStarts-1)-o.value*a.project.repeat;return e<0?0:e}));return(t,a)=>{const n=(0,r.up)("q-btn"),s=(0,r.up)("q-space"),u=(0,r.up)("q-card-section");return(0,r.wg)(),(0,r.j4)(u,{class:"col"},{default:(0,r.w5)((()=>[(0,r._)("div",ue,[(0,r._)("div",ie,(0,W.zw)(e.project.rowsDone),1),(0,r._)("div",ce,[(0,r.Wm)(n,{color:"primary",fab:"",icon:"mdi-plus",class:"q-ma-xs",onClick:a[0]||(a[0]=e=>t.$emit("increment"))}),(0,r.Wm)(n,{color:"primary",fab:"",class:"q-ma-xs",icon:"mdi-minus",onClick:a[1]||(a[1]=e=>t.$emit("decrement"))})])]),e.project.repeat?((0,r.wg)(),(0,r.iD)("div",de,[(0,r._)("span",pe,"x "+(0,W.zw)((0,v.SU)(o))+" +",1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(parseInt((0,v.SU)(l)),(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"repeat-dot done vertical-bottom"})))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(parseInt(e.project.repeat-(0,v.SU)(l)),(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"repeat-dot notdone vertical-bottom"})))),128))])):(0,r.kq)("",!0),(0,r.Uk)(" of "+(0,W.zw)(e.project.rowsTotal)+" Total Rows ",1),(0,r._)("div",me,[(0,r.Wm)(s),(0,r.Uk)(" "+(0,W.zw)(e.project.lastUpdated.toLocaleString()),1)])])),_:1})}}},we=ve,fe=we;k()(ve,"components",{QCardSection:K.Z,QBtn:F.Z,QSpace:z.Z});const ge={class:"row justify-center"},Se={class:"row justify-center",style:{"text-align":"center"}},he=(0,r.Uk)(" Text "),be={setup(e){const t=(0,Z.Z)();let a=(0,v.iH)(!0),o=(0,v.iH)("mdi-arrow-expand-left"),l=(0,v.iH)(!1),n=(0,v.iH)("settings"),s=(0,v.iH)(0),u=(0,v.iH)(!1),i=(0,v.iH)([]);const c=()=>{i.value=[];try{if(localStorage.getItem("projects")){let e=JSON.parse(localStorage.getItem("projects"));for(let t=0;t<e.length;t++){let a=new Q(e[t]);a.setId(t),i.value.push(a)}}i.value[0]?s.value=i.value[0].id:(u.value=!0,l.value=!0,n.value="project")}catch(e){t.dialog({title:"Error",message:"Something happened when loading your projects. Your projects have been cleared out.",ok:{color:"primary",label:"OK",flat:!0}}),localStorage.removeItem("projects")}};c();const d=()=>{i.value[s.value].lastUpdated=new Date,i.value[s.value].rowsDone++,g()},p=()=>{i.value[s.value].lastUpdated=new Date,i.value[s.value].rowsDone--,g()};let m={};const w=()=>{localStorage.getItem("keys")&&(m=JSON.parse(localStorage.getItem("keys")))};w(),document.onkeyup=e=>{if("BODY"===e.target.tagName){if(e.code===m.inc||"Space"===e.code)return void d();if(e.code===m.dec||"ArrowDown"===e.code)return void p()}};const f=()=>{a.value=!a.value,a.value?o.value="mdi-arrow-expand-left":o.value="mdi-arrow-expand-right"},g=()=>{localStorage.setItem("projects",JSON.stringify(i.value))};if(localStorage.getItem("lightMode")){const e=JSON.parse(localStorage.getItem("lightMode"));!0===e&&t.dark.set(!1)}return(e,t)=>{const m=(0,r.up)("q-tab"),S=(0,r.up)("q-tabs"),h=(0,r.up)("q-space"),b=(0,r.up)("q-btn"),j=(0,r.up)("q-toolbar"),y=(0,r.up)("q-separator"),U=(0,r.up)("q-input"),k=(0,r.up)("q-expansion-item"),q=(0,r.up)("q-card-section"),V=(0,r.up)("q-tab-panel"),Z=(0,r.up)("q-tab-panels"),_=(0,r.up)("q-card"),D=(0,r.up)("q-dialog"),Q=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(Q,{style:{width:"80%"}},{default:(0,r.w5)((()=>[(0,r._)("div",ge,[(0,r.Wm)(_,{flat:"",class:"col"},{default:(0,r.w5)((()=>[(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r.Wm)(S,{shrink:"",modelValue:(0,v.SU)(s),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,v.dq)(s)?s.value=e:s=e)},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,v.SU)(i),(e=>((0,r.wg)(),(0,r.j4)(m,{key:e.id,name:e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,W.zw)(e.name),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(h),(0,r.Wm)(b,{flat:"",round:"",dense:"",icon:"mdi-cog-outline",onClick:t[1]||(t[1]=e=>(0,v.dq)(l)?l.value=!(0,v.SU)(l):l=!(0,v.SU)(l))}),(0,r.Wm)(b,{flat:"",round:"",dense:"",icon:(0,v.SU)(o),onClick:t[2]||(t[2]=e=>f())},null,8,["icon"])])),_:1}),(0,r.Wm)(Z,{modelValue:(0,v.SU)(s),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,v.dq)(s)?s.value=e:s=e),animated:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,v.SU)(i),(e=>((0,r.wg)(),(0,r.j4)(V,{key:e.id,name:e.id},{default:(0,r.w5)((()=>[(0,r._)("div",Se,[(0,r.Wm)((0,v.SU)(fe),{project:e,onIncrement:d,onDecrement:p},null,8,["project"]),(0,v.SU)(a)?((0,r.wg)(),(0,r.j4)(y,{key:0,vertical:""})):(0,r.kq)("",!0),(0,v.SU)(a)?((0,r.wg)(),(0,r.j4)(q,{key:1,class:"col-6"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,{dense:"",label:"Notes"},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{modelValue:e.notes,"onUpdate:modelValue":t=>e.notes=t,type:"textarea",filled:"",label:"Notes",onBlur:t[3]||(t[3]=e=>g()),hint:"Saves when your cursor exits the field","hide-hint":""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,r.Wm)(k,{dense:"",label:"Stitches"},{default:(0,r.w5)((()=>[he])),_:1})])),_:2},1024)):(0,r.kq)("",!0)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:1})]),(0,r.Wm)(D,{modelValue:(0,v.SU)(l),"onUpdate:modelValue":t[8]||(t[8]=e=>(0,v.dq)(l)?l.value=e:l=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r.Wm)(S,{modelValue:(0,v.SU)(n),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,v.dq)(n)?n.value=e:n=e),"active-color":"primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{label:"App Settings",name:"settings"}),(0,r.Wm)(m,{label:"Projects",name:"project"})])),_:1},8,["modelValue"]),(0,r.Wm)(h),(0,r.Wm)(b,{flat:"",round:"",dense:"",icon:"mdi-close",onClick:t[6]||(t[6]=e=>(0,v.dq)(l)?l.value=!1:l=!1),ref:"settingsBtn"},null,512)])),_:1}),(0,r.Wm)(Z,{modelValue:(0,v.SU)(n),"onUpdate:modelValue":t[7]||(t[7]=e=>(0,v.dq)(n)?n.value=e:n=e),animated:""},{default:(0,r.w5)((()=>[(0,r.Wm)(V,{name:"settings"},{default:(0,r.w5)((()=>[(0,r.Wm)(se,{onReloadProjects:c,onReloadKeys:w})])),_:1}),(0,r.Wm)(V,{name:"project"},{default:(0,r.w5)((()=>[(0,r.Wm)(te,{projects:(0,v.SU)(i),createFirst:(0,v.SU)(u),onReloadProjects:c},null,8,["projects","createFirst"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1})}}};var je=a(4379),ye=a(8408),Ue=a(5906),ke=a(6602),qe=a(5869),Ve=a(4615),We=a(5926);const Ze=be,_e=Ze;k()(be,"components",{QPage:je.Z,QCard:R.Z,QToolbar:h.Z,QTabs:b.Z,QTab:ye.Z,QSpace:z.Z,QBtn:F.Z,QTabPanels:Ue.Z,QTabPanel:ke.Z,QSeparator:qe.Z,QCardSection:K.Z,QExpansionItem:Ve.Z,QInput:G.Z,QDialog:We.Z});const De=[{path:"/counter",component:V,children:[{path:"",component:_e}]},{path:"/:catchAll(.*)*",component:()=>a.e(762).then(a.bind(a,8762))}],Qe=De,Ie=(0,d.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:Qe,history:e("")});return t}));async function Ce(e,t){const a="function"===typeof Ie?await Ie({}):Ie,o=e(c);return o.use(l.Z,t),{app:o,router:a}}var Oe=a(921),Te=a(821);const He={config:{dark:!0,loadingBar:{color:"blue",position:"bottom",size:"10px"}},plugins:{LoadingBar:Oe.Z,Dialog:Te.Z}};async function Pe({app:e,router:t}){e.use(t),e.mount("#q-app")}Ce(o.ri,He).then(Pe)}},t={};function a(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.m=e,(()=>{var e=[];a.O=(t,o,l,r)=>{if(!o){var n=1/0;for(c=0;c<e.length;c++){for(var[o,l,r]=e[c],s=!0,u=0;u<o.length;u++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](o[u])))?o.splice(u--,1):(s=!1,r<n&&(n=r));if(s){e.splice(c--,1);var i=l();void 0!==i&&(t=i)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+".3e684656.js"})(),(()=>{a.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"9f27d1e5",736:"80996056"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project2:";a.l=(o,l,r,n)=>{if(e[o])e[o].push(l);else{var s,u;if(void 0!==r)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[l];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(m);var l=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e={143:0};a.f.j=(t,o)=>{var l=a.o(e,t)?e[t]:void 0;if(0!==l)if(l)o.push(l[2]);else{var r=new Promise(((a,o)=>l=e[t]=[a,o]));o.push(l[2]=r);var n=a.p+a.u(t),s=new Error,u=o=>{if(a.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var r=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",s.name="ChunkLoadError",s.type=r,s.request=n,l[1](s)}};a.l(n,u,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var l,r,[n,s,u]=o,i=0;if(n.some((t=>0!==e[t]))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(u)var c=u(a)}for(t&&t(o);i<n.length;i++)r=n[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=self["webpackChunkquasar_project2"]=self["webpackChunkquasar_project2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(6231)));o=a.O(o)})();