<script setup>
import Educations from './educations.vue';
import Experiences from './Experiences.vue';
import Tech_stack from './tech_stack.vue';

</script>

<template>
  <div class=" mx-8 my-16 font-mono flex flex-col gap-10">
    <div class=" flex flex-col justify-center items-center text-center gap-2">
      <p class=" text-xl">Hey, I'm <span class=" text-orange-900">Andrew Arief Riyadi</span></p>
      <p class=" text-sm">people call me <span class=" text-orange-900">andru / endru / andrew</span></p>
      <p class="text-orange-900 text-sm">Full-Stack Developer & Game Developer</p>
      <a href="#" class=" py-1 px-8 rounded bg-wood text-white w-fit block  shadow-xl/30 shadow-orange-950 hover:bg-orange-50 hover:text-black hover:shadow-orange-200 transition">CV</a>
    </div>
    <Tech_stack></Tech_stack>
    <Educations></Educations>
    <Experiences></Experiences>
  </div>
</template>

