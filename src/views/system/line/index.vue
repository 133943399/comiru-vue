<template>
    <div class="ele-body">绑定line</div>
</template>
  
<script>
export default {
    name: "SysLine",

    methods: {
    },
    mounted() {
        this.$http.get('/login/line', this.form).then(res => {
            window.location.href = res.data.url
        }).catch(e => {
            console.log(e);
            this.$message.error('网络错误');
        });
    },
}
</script>
  
<style scoped>

</style>