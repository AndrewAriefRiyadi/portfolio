<script setup>
const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    tags: Array,
});

// Warna tiap teknologi
const tagColors = {
    PHP: { bg: '#4F5D95', text: '#4F5D95' },
    Laravel: { bg: '#F05340', text: '#F05340' },
    Blade: { bg: '#563D7C', text: '#563D7C' },
    JavaScript: { bg: '#F7DF1E', text: '#F7DF1E' },
    TypeScript: { bg: '#3178C6', text: '#3178C6' },
    'Vue.js': { bg: '#42B883', text: '#42B883' },
    NuxtJS: { bg: '#00DC82', text: '#00DC82' },
    NestJS: { bg: '#E0234E', text: '#E0234E' },
    'Go (Golang)': { bg: '#00ADD8', text: '#00ADD8' },
    HTML: { bg: '#E34F26', text: '#E34F26' },
    CSS: { bg: '#1572B6', text: '#1572B6' },
    SQL: { bg: '#336791', text: '#336791' },
    Python: { bg: '#3776AB', text: '#3776AB' },
    Django: { bg: '#092E20', text: '#092E20' },
    FastAPI: { bg: '#009688', text: '#009688' },
    MySQL: { bg: '#4479A1', text: '#4479A1' },
    Flutter: { bg: '#02569B', text: '#02569B' },
    Tailwind: { bg: '#06B6D4', text: '#06B6D4' },
    Godot: { bg: '#478CBF', text: '#478CBF' },
    GDScript: { bg: '#355570', text: '#355570' },

    // 🌟 Tambahan baru
    Livewire: { bg: '#FB70A9', text: '#FB70A9' }, // pink lembut khas Livewire
    'Laravel Echo': { bg: '#FF2D20', text: '#FF2D20' }, // merah Laravel Echo
};

// Fungsi untuk menentukan warna badge
const getTagStyle = (tag) => {
    const color = tagColors[tag];
    if (!color) {
        return {
            backgroundColor: 'rgba(229, 231, 235, 0.5)', // gray-200
            color: '#374151', // gray-700
        };
    }

    return {
        backgroundColor: `${color.bg}20`, // 20 = transparan (hex alpha)
        color: color.text,
        boxShadow: `0 0 5px ${color.text}40`, // efek halus saat hover
    };
};
</script>

<template>
    <div class="card bg-white text-black w-full shadow-sm rounded overflow-hidden">
        <figure class="border-2 border-white max-h-48">
            <img :src="image" alt="Image" class="object-cover w-full h-48" />
        </figure>

        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ description }}</p>

            <!-- Tags -->
            <div class="card-actions justify-end flex flex-wrap gap-1">
                <div v-for="(tag, index) in tags" :key="index" class="badge badge-outline transition hover:shadow-md"
                    :style="getTagStyle(tag)">
                    {{ tag }}
                </div>
            </div>

            <!-- Link -->
            <div class="text-end my-2">
                <template v-if="link === 'Cooking'">
                    <p class="inline-flex items-center gap-1 font-semibold text-orange-600 ">
                        🍳 Cooking <span class="animate-pulse">🔥</span>
                    </p>
                </template>

                <template v-else-if="link">
                    <a :href="link" target="_blank" rel="noopener noreferrer"
                        class="bg-black text-white p-2 rounded transition hover:bg-white hover:text-black hover:border">
                        Visit
                    </a>
                </template>
            </div>
        </div>
    </div>
</template>
