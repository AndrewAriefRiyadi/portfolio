<script setup>
import Card_project from './card_project.vue';



</script>

<template>
    <div class="flex flex-col justify-center items-center text-center">
        <p class="text-3xl tracking-[50%] font-bold mb-4 text-accent">
            PROJECTS
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center  w-fit gap-2 ">
            <Card_project image="" category="Web" title="PMB Pascasarjana" description="Website registrasi mahasiswa baru Universitas Balikpapan" link="" ></Card_project>
            <Card_project></Card_project>
        </div>
    </div>
</template>
