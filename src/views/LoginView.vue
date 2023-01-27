<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="loginForm" status-icon :rules="rules" label-width="120px" class="loginForm">
            <h1>后台管理系统</h1>
            <el-form-item label="账号：" prop="userName">
                <el-input v-model="loginForm.userName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="loginForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="sub-btn" @click="submitForm()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import {initData} from '../types/login'

export default defineComponent({
    setup() {
        const data = reactive(new initData())
        const rules ={
            userName: [
                {require: true, message: '请输入账户名', trigger: 'blur'},
                {min: 3, max: 10, message: '账户名长度为3-10位!', trigger: 'blur'}
            ],
            password: [
                {require: true, message: '请输入密码', trigger: 'blur'},
                {min: 3, max: 10, message: '账户名长度为3-10位!', trigger: 'blur'}
            ]
        }
        data.loginForm.userName = '1'
        const submitForm = ()=>{
            console.log(666);
            
        }
        return {
            rules,
            submitForm,
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/导入测试背景图.jpg") ;
    background-size:cover;
    box-sizing: border-box;
    padding-top: 200px;
    .loginForm{
        width: 400px;
        padding: 20px;
        background-color: white;
        border-radius: 20px;
        margin: 0 auto;
        .sub-btn{
            width: 100%;
        }
        h1{
            text-align: center;
            margin: 20px 0;
        }
    }
}
</style>
