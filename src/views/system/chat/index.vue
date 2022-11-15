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
            @enter="bindEnter">
        </JwChat-index>

    </div>
</template>
   
<script>
const msgList = []

export default {
    components: {},
    data() {
        return {
            // 输入框中的文字
            inputMsg: "",
            // 会话内容
            taleList: msgList,
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
        // 输入框点击就发送或者回车触发的事件
        bindEnter() {
            console.log("send to:" + this.$store.state.user.user.name);
            let date = new Date
            const msg = this.inputMsg;
            if (!msg) return;
            const msgObj = {
                date: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes(),
                text: { text: msg },
                mine: true,
                name: "我",
            };
            this.$http.post('/push/message', { 'msg': msg, 'user_id': this.$route.query.id })
            this.taleList.push(msgObj);
        },

    },
    mounted() {
        console.log(this.$store.state.user.user.id);
        
        window.Echo.channel('user_' + this.$store.state.user.user.id).listen('.message', (e) => {
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
