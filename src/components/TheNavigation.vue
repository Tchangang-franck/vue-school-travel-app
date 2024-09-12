<template>
    <div id="nav">
        <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>
        <RouterLink v-for="destination in destinations" :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
            {{ destination.name }}
        </RouterLink>
        <RouterLink :to="{ name: 'protected' }">Dashboard</RouterLink>
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
    }
}
</script>

<style lang="css">
#nav .vue-school-app {
    color: orange;
    box-shadow: inset;
    border-bottom: 2px solid orange;

}
</style>