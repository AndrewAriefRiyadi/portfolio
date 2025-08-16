<script setup>
import Card from './card.vue';

</script>

<template>
    <div class="flex flex-col justify-center items-center text-center">
        <p class="text-3xl tracking-[50%] font-bold mb-4">
            EXPERIENCES
        </p>

        <div class="flex w-full h-fit gap-2 ">
            <div class=" h-48 w-0.5 bg-orange-900"></div>
            <div class=" flex flex-col gap-2 w-full self-center ">
                <Card  heading1="SMKN 1 Bontang" heading2="Software Engineering" link="https://smkn1bontang.sch.id/"></Card>
                <Card  heading1="Institut Teknologi Kalimantan" heading2="Informatics - GPA 3.52" link="https://itk.ac.id/"></Card>
            </div>
            
        </div>
    </div>
</template>
