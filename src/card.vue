<script setup>
import { AcademicCapIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
    'heading1': String,
    'heading2': String,
    'detail': String,
    'link': String,
});

</script>

<template>
    <div class="bg-orange-900/60 w-full rounded-xl flex justify-between py-4 px-6 text-white transition items-center">
        <div class=" flex flex-col justify-center text-start h-full w-fit">
            <p class=" text-2xl"> {{ heading1 }}</p>
            <p class=" text-md text-white/75">{{ heading2 }}</p>
        </div>
        <div class="flex w-fit items-center h-full justify-center text-center ">
            <a :href="link" target="_blank" rel="noopener noreferrer">
                <AcademicCapIcon class="w-8 h-8 text-white  hover:bg-white hover:text-orange-900 hover:shadow-lg hover:shadow-orange-800 rounded p-1 transition" />
            </a>
        </div>

    </div>
</template>