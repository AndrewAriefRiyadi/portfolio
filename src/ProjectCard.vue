<script setup>
const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    tags: Array,
});
</script>

<template>
    <div class="card bg-white text-black w-full shadow-sm rounded">
        <figure class=" border-2 border-white max-h-48">
            <img :src="image" alt="Image" class=" object-cover" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="card-actions justify-end flex flex-wrap gap-1">
                <div v-for="(tag, index) in tags" :key="index" class="badge badge-outline">
                    {{ tag }}
                </div>

            </div>
            <div v-if="link" class=" text-end my-2">
                <a :href="link" target="_blank" class="bg-black text-white p-2 rounded transition hover:bg-white hover:text-black hover:border">Visit</a>
            </div>
        </div>
    </div>
</template>
