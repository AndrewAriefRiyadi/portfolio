<script setup>
const props = defineProps({
    image: String,
    category: String,
    title: String,
    description: String,
    link: String,
    tags: Array, // ← daftar teknologi: ['Laravel', 'Vue.js', 'Tailwind', ...]
});

// Mapping warna setiap teknologi
const techColors = {
    PHP: "#4F5D95",
    Laravel: "#F05340",
    Blade: "#563D7C",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    "Vue.js": "#42B883",
    NuxtJS: "#00DC82",
    NestJS: "#E0234E",
    "Go (Golang)": "#00ADD8",
    HTML: "#E34F26",
    CSS: "#1572B6",
    SQL: "#336791",
    Python: "#3776AB",
    Django: "#092E20",
    FastAPI: "#009688",
};
</script>

<template>
    <div
        class="card bg-base-100 border border-accent w-full hover:shadow-md shadow-primary/30 transform hover:scale-102 transition">
        <figure class="px-5 pt-5">
            <img :src="image" :alt="category" class="rounded w-64 h-40 object-cover shadow-lg" />
        </figure>

        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>

            <!-- 🔹 Badge Tech Stack -->
            <div class="flex flex-wrap justify-center gap-2 mt-3">
                <div v-for="(tag, i) in tags" :key="i" class="badge badge-outline" :style="{
                    backgroundColor: techColors[tag] + '20', // 20 = opacity
                    color: techColors[tag],
                    borderColor: techColors[tag],
                }">
                    {{ tag }}
                </div>
            </div>

            <div class="card-actions mt-4">
                <a :href="link" class="btn btn-primary hover:shadow-md hover:shadow-primary/50 transition"
                    target="_blank" rel="noopener noreferrer">
                    Visit
                </a>
            </div>
        </div>
    </div>
</template>
