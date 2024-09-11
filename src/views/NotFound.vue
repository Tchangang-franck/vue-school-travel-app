<template>
    <div>
        <h2>Route Not Found</h2>
        <p>
            oop we could'nt find that pages <span id="smile">:(</span> Try going <RouterLink to="/"><span
                    id="home">Home</span></RouterLink>
        </p>


    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
p {
    font-size: 24px;
}

#home {
    font-weight: 600;
}

#smile {
    font-size: xx-large;
}
</style>