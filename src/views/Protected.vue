<template>
    <div class="container">
        <p>Greetings {{ username }}</p>
        <div class="content">
            <button @click="logout" class="btn">Log Out</button><span id="invoices"></span>
            <RouterLink :to="{ name: 'invoices' }">
                <button class="btn">Invoices</button>
            </RouterLink>
        </div>

    </div>
</template>
<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            username: window.user
        }
    }
    ,
    methods: {
        logout() {
            window.user = null
            this.$router.push({ name: 'home' })
        }

    }
}

</script>

<style scoped>
#invoices {

    margin-right: 30px;
}

.content {
    margin-top: 90px;
    padding: 4px;
    display: flex;
}
</style>