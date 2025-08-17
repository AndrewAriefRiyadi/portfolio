<script setup>
import Card from './card.vue';

var heading1_1 = 'Fullstack Web Development Intern'
var heading2_1 = 'PT. Pupuk Kalimantan Timur | October 2023 - April 2024'
var link_1 = 'https://www.pupukkaltim.com/id/home'
var detail_1 = "Interned as a Backend Developer, built a centralized Laravel-based system for SIMPER/SIOPAR and sticker requests with role - based access, integrated written tests for applicants, and conducted testing and presentations for internal feedback and validation."

var heading1_2 = 'Fullstack Web Development Intern'
var heading2_2 = 'University of Balikpapan | July - December 2024'
var link_2 = 'https://uniba-bpn.ac.id/'
var detail_2 = "Developed a Laravel and Blade-based web app for postgraduate admissions with online registration,document upload, notifications, and admin dashboard";

</script>

<template>
    <div class="flex flex-col justify-center items-center text-center">
        <p class="text-3xl tracking-[50%] font-bold mb-4 text-accent">
            EXPERIENCES
        </p>

        <div class="flex w-full h-full gap-2 ">
            <div class=" w-0.5 bg-orange-900"></div>
            <div class=" flex flex-col gap-2 w-full self-center ">
                <Card :heading1="heading1_1" :heading2="heading2_1" :link="link_1" :detail="detail_1"></Card>
                <Card :heading1="heading1_2" :heading2="heading2_2" :link="link_2" :detail="detail_2"></Card>
            </div>

        </div>
    </div>
</template>
