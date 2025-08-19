<script setup>
const props = defineProps({
    'image': String,
    'category': String,
    'title': String,
    'description': String,
    'link': String,
});
</script>

<template>
    <div
        class="card bg-base-100 border border-accent w-full hover:shadow-md shadow-primary/30 transform hover:scale-102 transition">
        <figure class="px-5 pt-5">
            <img :src="image" :alt="category" class="rounded w-64 h-40 object-cover shadow-lg" />
        </figure>
        <div class="card-body items-center text-center shadow-xl">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="card-actions">
                <a :href="link" class="btn btn-primary hover:shadow-md hover:shadow-primary/50 transition" target="_blank"
                    rel="noopener noreferrer">Visit</a>
            </div>
        </div>
    </div>
</template>