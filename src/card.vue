<script setup>
import { AcademicCapIcon, BuildingOffice2Icon } from '@heroicons/vue/24/solid'
const props = defineProps({
    'heading1': String,
    'heading2': String,
    'detail': String,
    'link': String,
});

</script>

<template>
    <div class="bg-orange-900/40 w-full rounded-xl flex justify-between gap-10 py-4 px-6 text-white transition items-center transform hover:scale-102 hover:shadow-lg hover:shadow-primary/80 ">
        <div class=" flex flex-col justify-center text-start h-full w-fit">
            <p class=" text-xl"> {{ heading1 }}</p>
            <p class=" text-sm text-white/75">{{ heading2 }}</p>
            <p v-if="detail" class=" text-xs text-orange-950">{{ detail }}</p>
        </div>
        <div class="flex w-fit items-center h-full justify-center text-center ">
            <a :href="link" target="_blank" rel="noopener noreferrer">
                <AcademicCapIcon v-if="detail == null" class="w-8 h-8 text-white  hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-primary rounded p-1 transition" />
                <BuildingOffice2Icon v-if="detail != null" class="w-8 h-8 text-white  hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-primary rounded p-1 transition" />
            </a>
        </div>

    </div>
</template>