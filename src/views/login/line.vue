<template>
    <div class="ele-body">111</div>
</template>
  
<script>
export default {
    name: "SysLine",

    methods: {
    },
    mounted() {
        console.log(this.$route.query);
        
        this.$http.get(`/line/callback?code=` + this.$route.query.code + '&state=' + this.$route.query.state).then(res => {
                console.log(res);
                
                const data = res.data.data;
                const code = res.data.code;
                const message = res.data.message;

                this.loading = false;
                if (code === 200) {
                    if (data.token_type && data.access_token) {
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.$store.dispatch('user/setToken', data.token_type + ' ' + data.access_token).then(() => {
                            // this.$router.push(this.$route.query.from || '/').catch(() => { });
                        });
                    }else{
                        this.$message({
                            type: 'success',
                            message: '绑定成功'
                        });
                    }

                } else {
                    this.$message.error(message);
                }
            }).catch(e => {
                this.$message.error(e.message);
            });
    },
}
</script>
  
<style scoped>

</style>