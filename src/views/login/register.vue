<template>
    <div :class="['login-wrapper', ['', 'login-form-right', 'login-form-left'][direction]]">
        <el-form ref="loginForm" :model="form" :rules="rules" class="login-form ele-bg-white" size="large"
            @keyup.enter.native="doSubmit">
            <h4>注册教师</h4>
            <el-form-item label="用户名:" prop="name">
                <el-input placeholder="请输入登录账号" v-model="form.name" prefix-icon="el-icon-user" clearable />
            </el-form-item>
            <el-form-item label="邮箱:" prop="email">
                <el-input placeholder="请输入邮箱" v-model="form.email" prefix-icon="el-icon-user" clearable />
            </el-form-item>
            <el-form-item label="新密码:" prop="password">
                <el-input v-model="form.password" placeholder="请输入新密码" show-password />
            </el-form-item>
            <el-form-item label="确认密码:" prop="password_confirmation">
                <el-input v-model="form.password_confirmation" placeholder="请再次输入新密码" show-password />
            </el-form-item>
            <div class="el-form-item">
                <el-button @click="doSubmit" :loading="loading" type="primary" size="medium">
                    {{ loading ? '注册中' : '注册' }}
                </el-button>

                <el-button @click="$router.push('/login')" type="primary" size="medium">
                    返回登录
                </el-button>
            </div>
        </el-form>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            // 登录框方向, 0居中, 1居右, 2居左
            direction: 1,
            // 加载状态
            loading: false,
            // 表单数据
            form: {
                name:'teacher',
                email: 't' + Math.round(Math.random()*100) + '@qq.com',
                password: '123456',
                password_confirmation: '123456',
            },
            // 表单验证规则
            rules: {
                // 表单验证规则
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                password_confirmation: [{ required: true, message: '请输入确认密码', trigger: 'blur' }]
            }
        };
    },
    mounted() {
        if (this.$store.state.user.token)
            this.$router.push(this.$route.query.from || '/');
    },
    methods: {
        /* 提交 */
        doSubmit() {
            this.$refs['loginForm'].validate(valid => {
                if (!valid) {
                    return false;
                }
                this.loading = true;

                this.$http.post('/auth/register', this.form).then(res => {
                    const code = res.status;
                    const data = res.data;
                    const message = res.statusText;

                    this.loading = false;
                    if (code === 200) {
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.$store.dispatch('user/setToken', data.token_type + ' ' + data.access_token).then(() => {
                            this.$router.push(this.$route.query.from || '/').catch(() => { });
                        });
                    } else {
                        this.$message.error(message);
                    }
                }).catch(e => {
                    console.log(e);
                    this.loading = false;
                    this.$message.error('注册失败');
                });
            });
        }
    }
};
</script>

<style scoped>
.login-wrapper {
    padding: 50px 20px;
    position: relative;
    box-sizing: border-box;
    background-image: url('~@/assets/bg-login.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    background-size: 100% 100%;
}

.login-wrapper:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.login-form {
    margin: 0 auto;
    width: 360px;
    max-width: 100%;
    padding: 25px 30px;
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    border-radius: 4px;
    z-index: 2;
}

.login-form-right .login-form {
    margin: 0 15% 0 auto;
}

.login-form-left .login-form {
    margin: 0 auto 0 15%;
}

.login-form h4 {
    text-align: center;
    margin: 0 0 25px 0;
}

.login-form>.el-form-item {
    margin-bottom: 25px;
}

.login-input-group {
    display: flex;
    align-items: center;
}

.login-input-group ::v-deep .el-input {
    flex: 1;
}

.login-captcha {
    height: 38px;
    width: 102px;
    margin-left: 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    text-align: center;
    cursor: pointer;
}

.login-captcha:hover {
    opacity: 0.75;
}

.login-btn {
    display: block;
    width: 100%;
}

.login-oauth-icon {
    color: #fff;
    padding: 5px;
    margin: 0 10px;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;
}

.login-copyright {
    color: #eee;
    padding-top: 20px;
    text-align: center;
    position: relative;
    z-index: 1;
}

@media screen and (min-height: 550px) {
    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: -220px;
    }

    .login-form-right .login-form,
    .login-form-left .login-form {
        left: auto;
        right: 15%;
        transform: translateX(0);
        margin: -220px 100px auto auto;
    }

    .login-form-left .login-form {
        right: auto;
        left: 15%;
    }

    .login-copyright {
        position: absolute;
        bottom: 20px;
        right: 0;
        left: 0;
    }
}

@media screen and (max-width: 768px) {

    .login-form-right .login-form,
    .login-form-left .login-form {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        margin-right: auto;
    }
}
</style>
