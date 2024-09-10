<template>
    <section class="destination">
        <h1> {{ destination.name }}</h1>
        <GoBack />
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>

    <section class="experiences">
        <h2>Top Experiences in {{ destination.name }}</h2>
        <div class="cards">
            <RouterLink v-for="experience in destination.experiences" :key="experience.slug"
                :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                <ExperienceCard :experience="experience" />
            </RouterLink>
        </div>
        <RouterView />
    </section>
</template>

<script>
import { computed } from 'vue'
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue';
import { RouterLink, RouterView } from 'vue-router';
import GoBack from '@/components/GoBack.vue';
export default {
    props: {
        id: String,
        required: true
    },
    computed: {
        destination() {
            return sourceData.destinations.find(destination => destination.id === parseInt(this.id))
        }

    },
    components: {
        ExperienceCard,
        GoBack
    }
}
</script>

<style>
#destination,
h1,
h2 {
    display: flex;
    justify-content: flex-start;
    margin-top: 90px;

}
</style>