<template>
    <div class="login">
        <form @submit.prevent="login" class="form">
            <h2>Login</h2>
            <label for="username">username</label>
            <input type="text" v-model="username" name="username" class="input">
            <label for="password">Password</label>
            <input type="text" v-model="password" name="password" class="input">
            <button class="btn">Login </button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            window.user = this.username;
            const redirectpath = this.$route.query.redirect || '/protected';
            this.$router.push(redirectpath);
        }
    }

}
</script>