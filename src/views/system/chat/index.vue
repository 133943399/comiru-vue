<template>
    <div class="jwchat">
        <!-- 
        v-model	输入框中的文字	String	-	""
        taleList	会话内容	Array	-	[]
        toolConfig	工具栏配置	Object	-	{}
        width	JwChat界面框宽度	string	-	750px
        height	JwChat界面框高度	string	-	570px
        config	组件配置	Object	-	{}
        scrollType	消息自动到低	String	scroll	noroll
        showRightBox	显示右边内容	Boolean	false	true
        winBarConfig	多窗口配置
        quickList   自动匹配快捷回复
        @enter	输入框点击就发送或者回车触发的事件	输入的原始数据
        @clickTalk	点击聊天框列中的用户和昵称触发事件	当前对话数据
       -->
        <JwChat-index v-model="inputMsg" :taleList="taleList" :config="config" :showRightBox="false" scrollType="scroll"
            @enter="bindEnter" @clickTalk="talkEvent">
            <!-- 窗口右边栏 -->
            <!-- <JwChat-rightbox :config="rightConfig" @click="rightClick" /> -->
            <!-- 快捷回复 -->
            <!-- <JwChat-talk :Talelist="talk" :config="quickConfig" @event="bindTalk" /> -->
        </JwChat-index>

    </div>
</template>
   
<script>
const msgList = []
// const listData = [
//     {
//         date: "",
//         text: { text: "起床不" },
//         mine: false,
//         name: "学生",
//     },
// ];
// function getListArr(size) {
//     const listSize = listData.length;
//     if (!size) {
//         size = listSize;
//     }
//     let result = [];
//     for (let i = 0; i < size; i++) {
//         const item = listData[(Math.random() * listSize) >> 0];
//         item.id = Math.random().toString(16).substr(-6);
//         result.push(item);
//     }
//     return result;
// }
export default {
    components: {},
    data() {
        return {
            // 输入框中的文字
            inputMsg: "",
            // 会话内容
            taleList: msgList,
            // 工具栏配置
            tool: {
                // show: ['file', 'history', 'img', ['文件1', '', '美图']],
                // showEmoji: false,
                callback: this.toolEvent,
            },
            // 组件配置
            config: {
                img: "",
                name: "聊天",
                dept: "",
                callback: this.bindCover,
                historyConfig: {
                    show: true,
                    tip: "滚动到顶时候显示的提示",
                    callback: this.bindLoadHistory,
                },

            },
        };
    },
    methods: {
        // 点击聊天框列中的用户和昵称触发事件
        talkEvent(play) {
            console.log(play);
        },
        // 输入框点击就发送或者回车触发的事件
        bindEnter(e) {
            console.log(e);
            console.log(this.$store.state.user.user)

            let date = new Date
            const msg = this.inputMsg;
            if (!msg) return;
            const msgObj = {
                date: date.getFullYear() + '-'+ date.getMonth()+ '-' + date.getDate()+ ' ' + date.getHours() + ':' + date.getMinutes(),
                text: { text: msg },
                mine: true,
                name: "我",
            };
            this.$http.post('/push/message',{'msg':msg,'user_id':this.$route.query.id})
            this.taleList.push(msgObj);
        },
        // 快捷回复，组件点击选中事件
        bindTalk(play) {
            console.log("talk", play);
            const { key, value } = play;
            if (key === "navIndex" && value == "1") {
                this.talk = ["回复1", "回复2", "回复3"];
            }
            if (key === "navIndex" && value == "2") {
                this.talk = ["超级回复1", "超级回复2", "超级回复3"];
            }
            if (key === "select") {
                this.inputMsg = value;
                // this.bindEnter();
            }
            if (key === "delIndex") {
                this.talk.splice(value, 1);
            }
        },
        /**
         * @description: 点击加载更多的回调函数
         * @param {*}
         * @return {*}
         */
        bindLoadHistory() {

        },
        /**
         * @description:
         * @param {*} type 当前点击的按钮
         * @param {*} plyload 附加文件或者需要处理的数据
         * @return {*}
         */
        toolEvent(type, plyload) {
            console.log("tools", type, plyload);
        },
        bindCover(event) {
            console.log("header", event);
        },
        rightClick(type) {
            console.log("rigth", type);
        },
    },
    mounted() {
        window.Echo.channel('user_' + this.$store.state.user.user.id).listen('MessageEvent', (e) => {
            console.log(this.$store.state)
            this.taleList.push(e)
        });
    },
};
</script>
  
<style>
.jwchat {
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
