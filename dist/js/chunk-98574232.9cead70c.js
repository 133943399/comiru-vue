(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98574232"],{"02f5":function(t,e,i){},"1c0d":function(t,e,i){"use strict";i("02f5")},"99c0":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ele-body"},[i("el-card",{attrs:{shadow:"never","body-style":"padding:0;"}},[i("div",{staticClass:"ele-cell ele-cell-align-top ele-user-message"},[i("el-menu",{attrs:{"default-active":t.active,mode:t.mode},on:{select:t.query}},[i("el-menu-item",{attrs:{index:"0"}},[i("span",[t._v("全部消息")]),t.allUnReadNum?i("el-badge",{staticClass:"ele-badge-static",attrs:{value:t.allUnReadNum}}):t._e()],1),i("el-menu-item",{attrs:{index:"1"}},[i("span",[t._v("系统通知")]),t.unReadNum1?i("el-badge",{staticClass:"ele-badge-static",attrs:{value:t.unReadNum1}}):t._e()],1),i("el-menu-item",{attrs:{index:"2"}},[i("span",[t._v("用户私信")]),t.unReadNum2?i("el-badge",{staticClass:"ele-badge-static",attrs:{value:t.unReadNum2}}):t._e()],1),i("el-menu-item",{attrs:{index:"3"}},[i("span",[t._v("代办事项")]),t.unReadNum3?i("el-badge",{staticClass:"ele-badge-static",attrs:{value:t.unReadNum3}}):t._e()],1)],1),i("div",{staticClass:"ele-cell-content"},[i("div",{staticClass:"ele-table-tool"},[i("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:t.read}},[t._v("标记已读")]),i("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:t.readAll}},[t._v("全部已读")]),i("el-button",{attrs:{size:"small",type:"danger",plain:""},on:{click:function(e){return t.remove()}}},[t._v("删除消息")])],1),i("ele-data-table",{ref:"table",attrs:{data:t.data,choose:t.choose,height:"calc(100vh - 265px)",border:!1},on:{"update:choose":function(e){t.choose=e}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.index;return[i("el-table-column",{attrs:{type:"selection",width:"45",align:"center",fixed:"left"}}),i("el-table-column",{attrs:{type:"index",index:a,width:"45",align:"center",fixed:"left","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"title",label:"标题内容","show-overflow-tooltip":"","min-width":"110"}}),i("el-table-column",{attrs:{prop:"time",label:"时间","show-overflow-tooltip":"",width:"140px",align:"center"}}),i("el-table-column",{attrs:{label:"状态",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[i("span",{class:["ele-text-danger","ele-text-info"][a.state]},[t._v(t._s(["未读","已读"][a.state]))])]}}],null,!0)}),i("el-table-column",{attrs:{label:"操作",width:"140px",align:"center",resizable:!1,fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[i("el-link",{attrs:{icon:"el-icon-view",type:"primary",underline:!1},on:{click:function(e){return t.view(a)}}},[t._v("查看")]),i("el-popconfirm",{staticClass:"ele-action",attrs:{title:"确定要删除此消息吗？"},on:{onConfirm:function(e){return t.remove(a)}}},[i("el-link",{attrs:{slot:"reference",icon:"el-icon-delete",type:"danger",underline:!1},slot:"reference"},[t._v("删除")])],1)]}}],null,!0)})]}}])})],1)],1)])],1)},n=[],l=(i("4de4"),i("4160"),i("c975"),i("a434"),i("159b"),{name:"UserMessage",data:function(){return{active:"0",data:[],choose:[],allData:[{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:0},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:0},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:0},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:0},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:1},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:1},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:1},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:1},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:1},{title:"你有两条任务待完成，不要忘了哦~",type:3,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:0},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:0},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:0},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI给你发来了一条私信",type:2,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:0},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:0},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1},{title:"ThinkPhp6+Vue+ElementUI新版本发布，欢迎体验",type:1,time:"2020-07-24 11:35",state:1}]}},computed:{mode:function(){return this.$store.state.theme.screenWidth<768?"horizontal":"vertical"},allUnReadNum:function(){return this.allData.filter((function(t){return 0===t.state})).length},unReadNum1:function(){return this.allData.filter((function(t){return 0===t.state&&1===t.type})).length},unReadNum2:function(){return this.allData.filter((function(t){return 0===t.state&&2===t.type})).length},unReadNum3:function(){return this.allData.filter((function(t){return 0===t.state&&3===t.type})).length}},mounted:function(){this.query()},methods:{query:function(t){var e=this;this.active=t||"0","0"===this.active?this.data=this.allData:this.data=this.allData.filter((function(t){return String(t.type)===e.active}))},view:function(t){console.log(t),this.$message("点击了查看")},remove:function(t){var e=this;if(t)this.data.splice(this.data.indexOf(t),1),this.$message({type:"success",message:"删除成功"});else{if(0===this.choose.length)return this.$message.error("请至少选择一条数据");this.$confirm("确定要删除选中的消息吗?","提示",{type:"warning"}).then((function(){e.choose.forEach((function(t){e.data.splice(e.data.indexOf(t),1)})),e.$message({type:"success",message:"删除成功"})})).catch((function(){return 0}))}},read:function(){var t=this;if(0===this.choose.length)return this.$message.error("请至少选择一条数据");this.choose.forEach((function(e){t.data[t.data.indexOf(e)].state=1}))},readAll:function(){this.data.forEach((function(t){t.state=1}))}}}),s=l,r=(i("1c0d"),i("2877")),u=Object(r["a"])(s,a,n,!1,null,"026fc225",null);e["default"]=u.exports}}]);