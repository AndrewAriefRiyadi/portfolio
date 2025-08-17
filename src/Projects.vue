<script setup>
import Card_project from './card_project.vue';



</script>

<template>
    <div class="flex flex-col justify-center items-center text-center">
        <p class="text-3xl tracking-[50%] font-bold mb-4 text-accent">
            PROJECTS
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2  justify-center  w-fit gap-2 ">
            <Card_project image="/PMB_Pasca.png"
                category="Web" title="PMB Pascasarjana"
                description="Website registrasi mahasiswa baru Universitas Balikpapan"
                link="https://pmb-pascasarjana.uniba-bpn.ac.id" />
            <Card_project image="/SIMPER.png"
                category="Web" title="SIMPER"
                description="Website pembuatan SIMPER/SIOPAR & Stiker untuk PKT."
                link="https://github.com/AndrewAriefRiyadi/kp_simper"/>
            <Card_project image="/Dormage.jpg"
                category="Mobile" title="Dormage"
                description="Aplikasi mobile untuk kelola kos/kontrakan."
                link="https://github.com/AndrewAriefRiyadi/PAPB"/>
            <Card_project image="/ECommerce.png"
                category="Web" title="E-Commerce"
                description="Aplikasi E-Commerce"
                link="https://github.com/AndrewAriefRiyadi/pabw"/>
        </div>
    </div>
</template>
