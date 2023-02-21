(function(){"use strict";var t={3805:function(t,e,a){var n=a(9242),r=a(3396);function s(t,e,a,n,s,o){const i=(0,r.up)("NavigationBar"),l=(0,r.up)("Header"),d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(l,{title:"API interface"}),(0,r.Wm)(d)],64)}var o=a(7139);const i=t=>((0,r.dD)("data-v-181a395d"),t=t(),(0,r.Cn)(),t),l={class:"navbar navbar-expand-lg navbar-light bg-light"},d={class:"container-fluid"},c=i((()=>(0,r._)("a",{class:"navbar-brand",id:"navbar-title",href:"https://github.com/3782291211/django-api-project"},"Automatrix API",-1))),u=i((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),p={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav me-auto mb-2 mb-lg-0"},h={class:"nav-item"},w={class:"nav-item"},g={class:"nav-item"},b={class:"nav-item"},_={class:"nav-item"},f={class:"nav-item dropdown"},y=["disabled"],v={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},k={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function D(t,e,a,n,s,i){const D=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",l,[(0,r._)("div",d,[c,u,(0,r._)("div",p,[(0,r._)("ul",m,[(0,r._)("li",h,[(0,r.Wm)(D,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",w,[(0,r.Wm)(D,{class:"nav-link","aria-current":"page",to:"/patterns"},{default:(0,r.w5)((()=>[(0,r.Uk)("Patterns")])),_:1})]),(0,r._)("li",g,[(0,r.Wm)(D,{class:"nav-link","aria-current":"page",to:"/users"},{default:(0,r.w5)((()=>[(0,r.Uk)("Users")])),_:1})]),(0,r._)("li",b,[(0,r.Wm)(D,{class:"nav-link","aria-current":"page",to:"/patterns/new"},{default:(0,r.w5)((()=>[(0,r.Uk)("Add new pattern")])),_:1})]),(0,r._)("li",_,[(0,r.Wm)(D,{class:"nav-link","aria-current":"page",to:"/users/new"},{default:(0,r.w5)((()=>[(0,r.Uk)("Add new user")])),_:1})]),(0,r._)("li",f,[s.error?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("a",{key:0,disabled:s.loading||s.error,class:(0,o.C_)([s.loading?"grey":"","nav-link dropdown-toggle"]),id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[s.loading?((0,r.wg)(),(0,r.iD)("span",v)):(0,r.kq)("",!0),(0,r.Uk)(" "+(0,o.zw)(s.loading?" Patterns by user (loading)":"Patterns by user"),1)],10,y)),(0,r._)("ul",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.users,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t._id},[(0,r.Wm)(D,{class:"dropdown-item","aria-current":"page",to:{path:`/users/${t.username}/patterns`}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.username),1)])),_:2},1032,["to"])])))),128))])])])])])])}var U={name:"NavigationBar",data(){return{users:[],loading:!0,error:!1}},methods:{async fetchUsers(){this.error=!1,this.loading=!0;const t=await fetch("https://automatrixapi.pythonanywhere.com/api/users");if(t.ok){const{users:e}=await t.json();return e}if(!1===t.ok){const{msg:e}=await t.json();this.error=e}}},async mounted(){this.users=await this.fetchUsers(),this.loading=!1}},P=a(89);const x=(0,P.Z)(U,[["render",D],["__scopeId","data-v-181a395d"]]);var T=x;function j(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("h1",null,(0,o.zw)(a.title),1)])}var C={name:"Header",props:{title:{type:String,default:"Hello"}}};const S=(0,P.Z)(C,[["render",j],["__scopeId","data-v-5af8e178"]]);var q=S,z={name:"App",components:{Header:q,NavigationBar:T},compatConfig:{MODE:3}};const O=(0,P.Z)(z,[["render",s]]);var H=O,N=(a(2166),a(2483));const E={key:0},W=(0,r._)("div",{class:"spinner-border text-info",role:"status"},null,-1),A=(0,r._)("p",{class:"loading"},"Loading...",-1),$=[W,A],I={key:0,class:"grid"},Y={key:1,class:"alert alert-danger",role:"alert"};function B(t,e,a,n,s,i){const l=(0,r.up)("Pattern");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h2",null,"Patterns by "+(0,o.zw)(a.username),1),s.loading?((0,r.wg)(),(0,r.iD)("div",E,$)):(0,r.kq)("",!0),(0,r._)("section",null,[s.error?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",I,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.patterns,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t._id},[(0,r.Wm)(l,{pattern:t},null,8,["pattern"])])))),128))]))]),s.error?((0,r.wg)(),(0,r.iD)("div",Y,(0,o.zw)(s.error),1)):(0,r.kq)("",!0),(0,r._)("button",{onClick:e[0]||(e[0]=()=>t.$router.go(-1)),type:"button",class:"btn btn-warning"},"Go back")],64)}const Z=t=>((0,r.dD)("data-v-6e621e28"),t=t(),(0,r.Cn)(),t),M={class:"card"},V={class:"card-body"},G={class:"button-group"},L=["disabled"],K={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},J={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},F={class:"card-title"},Q={class:"card-subtitle mb-2 text-muted"},R={class:"card-text"},X=Z((()=>(0,r._)("span",null,"Pattern id:",-1))),tt={class:"card-text --hide-overflow"},et=Z((()=>(0,r._)("span",null,"Pattern body:",-1))),at={class:"card-text"},nt=Z((()=>(0,r._)("span",null,"Created at:",-1))),rt={key:0,class:"error-msg"};function st(t,e,a,s,i,l){return(0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("div",V,[(0,r._)("div",G,[(0,r._)("form",{onSubmit:e[1]||(e[1]=(0,n.iM)(((...t)=>l.onSubmit&&l.onSubmit(...t)),["prevent"])),class:"d-flex"},[(0,r.wy)((0,r._)("input",{class:"form-control me-2",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.newPatternName=t),placeholder:"New pattern name","aria-label":"Update"},null,512),[[n.nr,i.newPatternName]]),(0,r._)("button",{disabled:!i.newPatternName,class:"btn btn-outline-success",type:"submit"},[i.loadingUpdate?((0,r.wg)(),(0,r.iD)("span",K)):(0,r.kq)("",!0),(0,r.Uk)((0,o.zw)(i.loadingUpdate?null:"Update"),1)],8,L)],32),(0,r._)("button",{onClick:e[2]||(e[2]=(...t)=>l.deletePattern&&l.deletePattern(...t)),id:"delete-pattern",class:"btn btn-danger",type:"button"},[i.loadingDelete?((0,r.wg)(),(0,r.iD)("span",J)):(0,r.kq)("",!0),(0,r.Uk)(" "+(0,o.zw)(i.loadingDelete?"Deleting...":"Delete"),1)])]),(0,r._)("h5",F,'"'+(0,o.zw)(a.pattern.pattern_name)+'"',1),(0,r._)("h6",Q,"by "+(0,o.zw)(a.pattern.username),1),(0,r._)("p",R,[X,(0,r.Uk)(" "+(0,o.zw)(a.pattern._id),1)]),(0,r._)("p",tt,[et,(0,r.Uk)(" "+(0,o.zw)(a.pattern.pattern_body),1)]),(0,r._)("p",at,[nt,(0,r.Uk)(" "+(0,o.zw)(a.pattern.created_at),1)]),i.error?((0,r.wg)(),(0,r.iD)("p",rt,(0,o.zw)(i.error),1)):(0,r.kq)("",!0)])])}a(7658);var ot={name:"Pattern",props:{pattern:Object},data(){return{newPatternName:"",loadingDelete:!1,loadingUpdate:!1,error:!1}},methods:{async deletePattern(){this.error=!1,this.loadingDelete=!0;const t=await fetch(`https://automatrixapi.pythonanywhere.com/api/patterns/${this.pattern._id}`,{method:"DELETE"});if(this.loadingDelete=!1,t.ok)this.$router.push({path:"/deleted",query:{type:"pattern"}});else{const{msg:e}=await t.json();this.error=e}},async onSubmit(){this.error=!1,this.loadingUpdate=!0;const t=await fetch(`https://automatrixapi.pythonanywhere.com/api/patterns/${this.pattern._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern_name:this.newPatternName})});if(this.loadingUpdate=!1,t.ok){const{updated_pattern:e}=await t.json();this.pattern.pattern_name=e.pattern_name}else{const{msg:e}=await t.json();this.error=e}}}};const it=(0,P.Z)(ot,[["render",st],["__scopeId","data-v-6e621e28"]]);var lt=it,dt={name:"PatternsByUsername",props:{username:String},data(){return{patterns:[],error:!1,loading:!0}},methods:{async fetchPatternsByUsername(){this.loading=!0;const t=await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this.username}/patterns`);if(t.ok){const{patterns:e}=await t.json();return this.loading=!1,e}{const{msg:e}=await t.json();this.loading=!1,this.error=e}}},async created(){this.patterns=await this.fetchPatternsByUsername(),this.$watch((()=>this.$route.params),(async(t,e)=>{this.error=!1,this.patterns=await this.fetchPatternsByUsername()}))}};const ct=(0,P.Z)(dt,[["render",B]]);var ut=ct;const pt=t=>((0,r.dD)("data-v-e928bf4a"),t=t(),(0,r.Cn)(),t),mt=pt((()=>(0,r._)("div",{class:"glass"},[(0,r._)("h2",null,"Welcome!"),(0,r._)("p",{id:"home-intro"},'This application provides an interactive front end interface for one of my back end API projects. To see the Github repository for that project, click on the "Automatrix API" link on the far left of the navigation bar.')],-1))),ht={key:0},wt=pt((()=>(0,r._)("div",{class:"spinner-border text-info",role:"status"},null,-1))),gt=pt((()=>(0,r._)("p",{class:"loading"},"Loading...",-1))),bt=[wt,gt],_t={class:"list-group"},ft={class:"list-group-item list-group-item-action","aria-current":"true"},yt={class:"d-flex w-100 justify-content-between"},vt={class:"mb-1"},kt={class:"mb-1"},Dt={key:0};function Ut(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[mt,s.loading?((0,r.wg)(),(0,r.iD)("div",ht,bt)):(0,r.kq)("",!0),(0,r._)("section",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.endpoints,(t=>((0,r.wg)(),(0,r.iD)("div",_t,[(0,r._)("div",ft,[(0,r._)("div",yt,[(0,r._)("h5",vt,(0,o.zw)(t.name),1)]),(0,r._)("p",kt,(0,o.zw)(t.description),1),t.example_request?((0,r.wg)(),(0,r.iD)("small",Dt,"Example request: "+(0,o.zw)(t.example_request),1)):(0,r.kq)("",!0)])])))),256))]),s.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:e[0]||(e[0]=(...t)=>i.scrollToTop&&i.scrollToTop(...t)),class:"btn btn-warning back-to-top"},"Back to top"))],64)}var Pt={name:"Home",data(){return{endpoints:[],loading:!1}},methods:{async fetchEndpoints(){this.loading=!0;const t=await fetch("https://automatrixapi.pythonanywhere.com"),{endpoints:e}=await t.json();return e},scrollToTop(){window.scrollTo(0,0)}},async created(){this.endpoints=await this.fetchEndpoints(),this.loading=!1}};const xt=(0,P.Z)(Pt,[["render",Ut],["__scopeId","data-v-e928bf4a"]]);var Tt=xt;const jt=t=>((0,r.dD)("data-v-abeaa438"),t=t(),(0,r.Cn)(),t),Ct=jt((()=>(0,r._)("h2",null,"Patterns",-1))),St={key:0},qt=jt((()=>(0,r._)("div",{class:"spinner-border text-info",role:"status"},null,-1))),zt=jt((()=>(0,r._)("p",{class:"loading"},"Loading...",-1))),Ot=[qt,zt],Ht={key:0,type:"button",class:"btn btn-warning"},Nt={class:"grid"};function Et(t,e,a,n,s,o){const i=(0,r.up)("router-link"),l=(0,r.up)("Pattern");return(0,r.wg)(),(0,r.iD)(r.HY,null,[Ct,s.loading?((0,r.wg)(),(0,r.iD)("div",St,Ot)):(0,r.kq)("",!0),(0,r.Wm)(i,{to:"/patterns/new"},{default:(0,r.w5)((()=>[s.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",Ht,"Add new pattern"))])),_:1}),(0,r._)("section",null,[(0,r._)("div",Nt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.patterns,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t._pattern_name},[(0,r.Wm)(l,{pattern:t},null,8,["pattern"])])))),128))])]),s.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:e[0]||(e[0]=(...t)=>o.scrollToTop&&o.scrollToTop(...t)),class:"btn btn-warning back-to-top"},"Back to top"))],64)}var Wt={name:"Patterns",components:{Pattern:lt},data(){return{patterns:[],loading:!0}},methods:{async fetchPatterns(){this.loading=!0;const t=await fetch("https://automatrixapi.pythonanywhere.com/api/patterns"),{patterns:e}=await t.json();return this.loading=!1,e},scrollToTop(){window.scrollTo(0,0)}},async created(){this.patterns=await this.fetchPatterns(),this.loading=!1}};const At=(0,P.Z)(Wt,[["render",Et],["__scopeId","data-v-abeaa438"]]);var $t=At;const It=t=>((0,r.dD)("data-v-d31d9a36"),t=t(),(0,r.Cn)(),t),Yt=It((()=>(0,r._)("h2",null,"Users",-1))),Bt={key:0},Zt=It((()=>(0,r._)("div",{class:"spinner-border text-info",role:"status"},null,-1))),Mt=It((()=>(0,r._)("p",{class:"loading"},"Loading...",-1))),Vt=[Zt,Mt],Gt={key:0,type:"button",class:"btn btn-warning"},Lt={class:"grid"};function Kt(t,e,a,n,s,o){const i=(0,r.up)("router-link"),l=(0,r.up)("User");return(0,r.wg)(),(0,r.iD)(r.HY,null,[Yt,s.loading?((0,r.wg)(),(0,r.iD)("div",Bt,Vt)):(0,r.kq)("",!0),(0,r.Wm)(i,{to:"/users/new"},{default:(0,r.w5)((()=>[s.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",Gt,"Add new user"))])),_:1}),(0,r._)("section",null,[(0,r._)("div",Lt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.users,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t._id},[(0,r.Wm)(l,{user:t},null,8,["user"])])))),128))])]),s.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:e[0]||(e[0]=(...t)=>o.scrollToTop&&o.scrollToTop(...t)),class:"btn btn-warning back-to-top"},"Back to top"))],64)}const Jt=t=>((0,r.dD)("data-v-def8a1ca"),t=t(),(0,r.Cn)(),t),Ft={class:"card"},Qt={class:"card-body","data-toggle":"tooltip",title:"Click to see all paterns by this user"},Rt={class:"btn-group",role:"group","aria-label":"Button group with nested dropdown"},Xt=Jt((()=>(0,r._)("button",{type:"button",class:"btn btn-info"},"Patterns",-1))),te={class:"btn-group",role:"group"},ee=Jt((()=>(0,r._)("button",{id:"btnGroupDrop1",type:"button",class:"btn btn-primary dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"}," Options ",-1))),ae={class:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},ne={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},re={class:"card-title"},se={class:"card-subtitle mb-2 text-muted"},oe={class:"card-text"},ie=Jt((()=>(0,r._)("span",null,"User id:",-1))),le={class:"card-text --hide-overflow"},de=Jt((()=>(0,r._)("span",null,"Email:",-1))),ce={class:"card-text --hide-overflow"},ue=Jt((()=>(0,r._)("span",null,"Avatar url:",-1))),pe={key:0,class:"error-msg"};function me(t,e,a,n,s,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Ft,[(0,r._)("div",Qt,[(0,r._)("div",Rt,[(0,r.Wm)(l,{to:{path:`/users/${a.user.username}/patterns`}},{default:(0,r.w5)((()=>[Xt])),_:1},8,["to"]),(0,r._)("div",te,[ee,(0,r._)("ul",ae,[(0,r._)("li",null,[(0,r.Wm)(l,{class:"dropdown-item",to:{path:`/users/${a.user._id}`}},{default:(0,r.w5)((()=>[(0,r.Uk)("Update details")])),_:1},8,["to"])]),(0,r._)("li",null,[(0,r._)("a",{class:"dropdown-item btn-danger",onClick:e[0]||(e[0]=(...t)=>i.deleteUser&&i.deleteUser(...t))},[s.loading?((0,r.wg)(),(0,r.iD)("span",ne)):(0,r.kq)("",!0),(0,r.Uk)((0,o.zw)(s.loading?"Deleting...":"Delete"),1)])])])])]),(0,r._)("h5",re,(0,o.zw)(a.user.account_owner),1),(0,r._)("h6",se,(0,o.zw)(a.user.username),1),(0,r._)("p",oe,[ie,(0,r.Uk)(" "+(0,o.zw)(a.user._id),1)]),(0,r._)("p",le,[de,(0,r.Uk)(" "+(0,o.zw)(a.user.email),1)]),(0,r._)("p",ce,[ue,(0,r.Uk)(" "+(0,o.zw)(a.user.avatar_url),1)]),s.error?((0,r.wg)(),(0,r.iD)("p",pe,(0,o.zw)(s.error),1)):(0,r.kq)("",!0)])])}var he={name:"User",props:{user:Object},data(){return{loading:!1,error:!1}},methods:{async deleteUser(){this.error=!1,this.loading=!0;const t=await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this.user._id}`,{method:"DELETE"});if(this.loading=!1,t.ok)this.$router.push({path:"/deleted",query:{type:"user"}});else{const{msg:e}=await t.json();this.error=e,console.log(e)}}}};const we=(0,P.Z)(he,[["render",me],["__scopeId","data-v-def8a1ca"]]);var ge=we,be={name:"Users",components:{User:ge},data(){return{users:[],loading:!1}},methods:{async fetchUsers(){this.loading=!0;const t=await fetch("https://automatrixapi.pythonanywhere.com/api/users"),{users:e}=await t.json();return this.loading=!1,e},scrollToTop(){window.scrollTo(0,0)}},async created(){this.users=await this.fetchUsers(),this.loading=!1}};const _e=(0,P.Z)(be,[["render",Kt],["__scopeId","data-v-d31d9a36"]]);var fe=_e;const ye=t=>((0,r.dD)("data-v-d5af4b62"),t=t(),(0,r.Cn)(),t),ve=ye((()=>(0,r._)("h2",null,"Page not found.",-1))),ke=ye((()=>(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-exclamation-circle-fill",viewBox:"0 0 16 16"},[(0,r._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})],-1)));function De(t,e){return(0,r.wg)(),(0,r.iD)(r.HY,null,[ve,ke],64)}const Ue={},Pe=(0,P.Z)(Ue,[["render",De],["__scopeId","data-v-d5af4b62"]]);var xe=Pe;const Te=t=>((0,r.dD)("data-v-273d8edc"),t=t(),(0,r.Cn)(),t),je=Te((()=>(0,r._)("h2",null,"Add a new pattern",-1))),Ce={class:"mb-3"},Se=Te((()=>(0,r._)("label",{for:"username",class:"form-label"},"Username",-1))),qe={class:"mb-3"},ze=Te((()=>(0,r._)("label",{for:"pattern_name",class:"form-label"},"Pattern name",-1))),Oe={class:"mb-3"},He=Te((()=>(0,r._)("label",{for:"pattern_body",class:"form-label"},"Pattern Body",-1))),Ne=Te((()=>(0,r._)("div",{class:"form-text"},"This needs to be in a specific format. Visit the patterns page to take a look.",-1))),Ee=Te((()=>(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1))),We={key:0,class:"alert alert-danger",role:"alert"},Ae={key:1,class:"alert alert-success",role:"alert"},$e=Te((()=>(0,r._)("p",null,"Your new pattern has been successfully added.",-1)));function Ie(t,e,a,s,i,l){const d=(0,r.up)("Pattern");return(0,r.wg)(),(0,r.iD)(r.HY,null,[je,(0,r._)("button",{onClick:e[0]||(e[0]=()=>t.$router.go(-1)),type:"button",class:"btn btn-warning"},"Go back"),(0,r._)("form",{onSubmit:e[4]||(e[4]=(0,n.iM)(((...t)=>l.onSubmit&&l.onSubmit(...t)),["prevent"]))},[(0,r._)("div",Ce,[Se,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.username=t),type:"text",class:"form-control",id:"username",placeholder:"Enter username"},null,512),[[n.nr,i.username]])]),(0,r._)("div",qe,[ze,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.pattern_name=t),type:"text",class:"form-control",id:"pattern_name",placeholder:"Enter pattern name"},null,512),[[n.nr,i.pattern_name]])]),(0,r._)("div",Oe,[He,(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.pattern_body=t),type:"text",class:"form-control",id:"pattern_body",placeholder:"e.g. 1011111111 0000010011 1111100000 1110100000 1011110111 1010001111 1111111111 0011100000 1111111100 0001010000"},null,512),[[n.nr,i.pattern_body]]),Ne]),Ee],32),i.error?((0,r.wg)(),(0,r.iD)("div",We,(0,o.zw)(i.error),1)):(0,r.kq)("",!0),i.success?((0,r.wg)(),(0,r.iD)("div",Ae,[$e,(0,r.Wm)(d,{pattern:i.newPattern},null,8,["pattern"])])):(0,r.kq)("",!0)],64)}var Ye={name:"NewPattern",data(){return{newPattern:[],username:"",pattern_name:"",pattern_body:"",error:!1,success:!1,loading:!1}},methods:{async onSubmit(){this.success=!1,this.username&&this.pattern_name&&this.pattern_body?/^(\d+\s)+\d+$/.test(this.pattern_body)?this.newPattern=await this.postNewPattern():this.error="Incorrect pattern body format. Please try again.":this.error="Please ensure that you complete all fields."},async postNewPattern(){this.success=!1,this.error=!1;const t=await fetch("https://automatrixapi.pythonanywhere.com/api/patterns",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,pattern_name:this.pattern_name,pattern_body:this.pattern_body})});if(t.ok){const{pattern:e}=await t.json();return this.success=!0,e}{const{msg:e}=await t.json();this.loading=!1,this.error=e}}}};const Be=(0,P.Z)(Ye,[["render",Ie],["__scopeId","data-v-273d8edc"]]);var Ze=Be;const Me=t=>((0,r.dD)("data-v-57b5476d"),t=t(),(0,r.Cn)(),t),Ve={key:0},Ge={key:1},Le={key:0,class:"form-instruction"},Ke={key:0},Je={key:1,class:"form-instruction"},Fe=Me((()=>(0,r._)("span",null,"all",-1))),Qe={class:"mb-3"},Re=Me((()=>(0,r._)("label",{for:"account_owner",class:"form-label"},"Account owner",-1))),Xe={key:2,class:"mb-3"},ta=Me((()=>(0,r._)("label",{for:"username",class:"form-label"},"Username",-1))),ea={class:"mb-3"},aa=Me((()=>(0,r._)("label",{for:"email",class:"form-label"},"Email",-1))),na={class:"mb-3"},ra=Me((()=>(0,r._)("label",{for:"avatar_url",class:"form-label"},"Avatar url",-1))),sa=Me((()=>(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1))),oa={key:2,class:"alert alert-danger",role:"alert"},ia={key:3,class:"alert alert-success",role:"alert"},la={class:"success-conf"};function da(t,e,a,s,i,l){const d=(0,r.up)("User");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a._id?((0,r.wg)(),(0,r.iD)("h2",Ve,"Update user details")):((0,r.wg)(),(0,r.iD)("h2",Ge,"Add new user")),(0,r._)("button",{onClick:e[0]||(e[0]=()=>t.$router.go(-1)),type:"button",class:"btn btn-warning"},"Go back"),(0,r._)("form",{onSubmit:e[5]||(e[5]=(0,n.iM)(((...t)=>l.onSubmit&&l.onSubmit(...t)),["prevent"]))},[a._id?((0,r.wg)(),(0,r.iD)("p",Le,[(0,r.Uk)("Update one or more of this user's details. "),a._id?((0,r.wg)(),(0,r.iD)("span",Ke,"(User id: "+(0,o.zw)(a._id)+")",1)):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("p",Je,[(0,r.Uk)("To add a new user, make sure you fill in "),Fe,(0,r.Uk)(" of the fields below.")])),(0,r._)("div",Qe,[Re,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.account_owner=t),type:"text",class:"form-control",id:"account_owner",placeholder:"Enter full name"},null,512),[[n.nr,i.account_owner]])]),a._id?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",Xe,[ta,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.username=t),type:"text",class:"form-control",id:"username",placeholder:"Enter username"},null,512),[[n.nr,i.username]])])),(0,r._)("div",ea,[aa,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.email=t),type:"email",class:"form-control",id:"email",placeholder:"Enter email"},null,512),[[n.nr,i.email]])]),(0,r._)("div",na,[ra,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>i.avatar_url=t),type:"text",class:"form-control",id:"avatar_url",placeholder:"Enter avatar url"},null,512),[[n.nr,i.avatar_url]])]),sa],32),i.error?((0,r.wg)(),(0,r.iD)("div",oa,(0,o.zw)(i.error),1)):(0,r.kq)("",!0),i.success?((0,r.wg)(),(0,r.iD)("div",ia,[(0,r._)("p",la,(0,o.zw)(a._id?"User details have been successfully updated":"New user has been successfully added."),1),(0,r.Wm)(d,{user:i.user},null,8,["user"])])):(0,r.kq)("",!0)],64)}var ca={name:"NewUser",props:{_id:String},data(){return{user:[],username:"",account_owner:"",email:"",avatar_url:"",error:!1,success:!1,loading:!1}},methods:{async onSubmit(){this.success=!1;const t=!this.username||!this.account_owner||!this.email||!this.avatar_url,e=!this.username&&!this.account_owner&&!this.email&&!this.avatar_url;!this._id&&t?this.error="Please ensure that you complete all fields.":this._id&&e?this.error="Please ensure that you fill in at least 1 field.":this._id?this._id&&(this.user=await this.updateUser()):this.user=await this.postNewUser()},async postNewUser(){this.success=!1,this.error=!1;const t=await fetch("https://automatrixapi.pythonanywhere.com/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,account_owner:this.account_owner,email:this.email,avatar_url:this.avatar_url})});if(t.ok){const{user:e}=await t.json();return this.success=!0,e}{const{msg:e}=await t.json();this.loading=!1,this.error=e}},async updateUser(){this.success=!1,this.error=!1;const t=[["username",this.username],["account_owner",this.account_owner],["email",this.email],["avatar_url",this.avatar_url]],e={};t.forEach((([t,a])=>a?e[t]=a:null));const a=await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(a.ok){const{updated_user:t}=await a.json();return this.success=!0,t}{const{msg:t}=await a.json();this.loading=!1,this.error=t}}}};const ua=(0,P.Z)(ca,[["render",da],["__scopeId","data-v-57b5476d"]]);var pa=ua;function ma(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h3",null,"Successfully deleted "+(0,o.zw)(this.$route.query.type)+".",1),(0,r._)("button",{onClick:e[0]||(e[0]=()=>t.$router.go(-1)),type:"button",class:"btn btn-warning"},"Go back")],64)}var ha={name:"DeleteConfirmation"};const wa=(0,P.Z)(ha,[["render",ma],["__scopeId","data-v-e2f89272"]]);var ga=wa;const ba=[{path:"/",name:"Home",component:Tt},{path:"/patterns",name:"patterns",component:$t},{path:"/users",name:"users",component:fe},{path:"/users/:_id",name:"single user",component:pa,props:!0},{path:"/users/:username/patterns",name:"userPatterns",component:ut,props:!0},{path:"/patterns/new",name:"new pattern",component:Ze},{path:"/users/new",name:"new user",component:pa},{path:"/deleted",name:"deleted",component:ga},{path:"/:pathMatch(.*)*",name:"NotFound",component:xe}],_a=(0,N.p7)({history:(0,N.PO)("/vue-api-interface/"),routes:ba});var fa=_a;const ya=(0,n.ri)(H);ya.component("Pattern",lt),ya.component("User",ge),ya.use(fa).mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,s){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],s=t[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){t.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,o=n[0],i=n[1],l=n[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(e&&e(n);d<o.length;d++)s=o[d],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},n=self["webpackChunkvue_api_interface"]=self["webpackChunkvue_api_interface"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3805)}));n=a.O(n)})();
//# sourceMappingURL=app.7b034ec7.js.map