"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[994],{4318:function(){},1994:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(6023),o=(a(5331),a(8736),a(213),a(5970),a(8785),a(4880)),i=(a(7128),a(1450)),s=a(6768);const l={class:"container"},d={class:"header-content"},h={class:"header-action"},r={class:"main-container"};function c(t,e,a,c,u,b){const m=(0,s.g2)("font-awesome-icon"),p=i.R7,f=o.bZ,k=n.o8,g=n.Up;return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bF)(f,null,{default:(0,s.k6)((()=>[(0,s.Lk)("div",d,[e[0]||(e[0]=(0,s.Lk)("span",{class:"title"},"用户管理",-1)),(0,s.Lk)("div",h,[(0,s.bF)(p,{disabled:b.disableTooltip,content:"返回主管理页",placement:"bottom"},{default:(0,s.k6)((()=>[(0,s.bF)(m,{icon:"home",class:"header-icon",onClick:b.handleGoHome},null,8,["onClick"])])),_:1},8,["disabled"]),(0,s.bF)(p,{disabled:b.disableTooltip,content:"返回上传页",placement:"bottom"},{default:(0,s.k6)((()=>[(0,s.bF)(m,{icon:"upload",class:"header-icon",onClick:b.handleGoUpload},null,8,["onClick"])])),_:1},8,["disabled"]),(0,s.bF)(p,{disabled:b.disableTooltip,content:"退出登录",placement:"bottom"},{default:(0,s.k6)((()=>[(0,s.bF)(m,{icon:"sign-out-alt",class:"header-icon",onClick:b.handleLogout},null,8,["onClick"])])),_:1},8,["disabled"])])])])),_:1}),(0,s.Lk)("div",r,[(0,s.bF)(g,{data:u.dealedData,style:{width:"90%"}},{default:(0,s.k6)((()=>[(0,s.bF)(k,{prop:"ip",label:"IP地址"}),(0,s.bF)(k,{prop:"count",label:"上传次数",sortable:""})])),_:1},8,["data"])])])}a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698);var u=a(782),b={name:"CustomerConfig",data(){return{tableData:[],dealedData:[]}},computed:{...(0,u.L8)(["credentials"]),disableTooltip(){return window.innerWidth<768}},methods:{async fetchWithAuth(t,e={}){this.credentials&&(e.headers={...e.headers,Authorization:`Basic ${this.credentials}`},e.credentials="include");const a=await fetch(t,e);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},dealByIP(t){let e=[],a=new Set;return t.forEach((t=>{t.metadata?.UploadIP&&a.add(t.metadata.UploadIP)})),a.forEach((a=>{let n=t.filter((t=>t.metadata?.UploadIP===a)),o=n.length;e.push({ip:a,count:o,data:n})})),e},handleGoUpload(){this.$router.push("/")},handleLogout(){this.$store.commit("setCredentials",null),this.$router.push("/adminLogin")},handleGoHome(){this.$router.push("/dashboard")}},mounted(){this.fetchWithAuth("/api/manage/check",{method:"GET"}).then((t=>t.text())).then((t=>{if("true"==t)return this.showLogoutButton=!0,this.fetchWithAuth("/api/manage/list",{method:"GET"});if("Not using basic auth."==t)return this.fetchWithAuth("/api/manage/list",{method:"GET"});throw new Error("Unauthorized")})).then((t=>t.json())).then((t=>{this.tableData=t,this.dealedData=this.dealByIP(t)})).catch((t=>{"Unauthorized"!==t.message&&this.$message.error("同步数据时出错，请检查网络连接")}))}},m=a(1241);const p=(0,m.A)(b,[["render",c]]);var f=p},8736:function(t,e,a){a(5331)},7128:function(t,e,a){a(5331),a(4318)},9104:function(t,e,a){a(5331)},5970:function(t,e,a){a(5331)},8785:function(t,e,a){a(5331)},213:function(t,e,a){a(5331),a(9104)}}]);
//# sourceMappingURL=994.e43aab88.js.map