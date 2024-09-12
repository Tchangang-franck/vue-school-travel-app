<template>
    <div class="home">
        <h1> All Destinations</h1>
        <button @click="AddDynamicRoute"> Add Dynamic Route</button>
        <RouterLink to="/dynamic"> visit Dynamic link </RouterLink>

        <div class="destinations">
            <RouterLink v-for="destination in destinations" :key="destination.id"
                :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" alt="destination.name">
            </RouterLink>
        </div>
    </div>
</template>

<script>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            destinations: sourceData.destinations

        }
    },
    methods: {
        AddDynamicRoute() {
            this.$router.addRoute({
                name: 'dynamic',
                path: '/dynamic',
                component: () => import('@/views/Login.vue')

            }
            )
        }
    }
}
</script>

<style scoped>
h1 {
    font-style: oblique;
}
</style>