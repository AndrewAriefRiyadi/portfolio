<script setup>
import Contacts from './Contacts.vue';
import Educations from './educations.vue';
import Experiences from './Experiences.vue';
import Projects from './Projects.vue';
import Tech_stack from './tech_stack.vue';
</script>

<template>
  <nav class="fixed top-4 right-4 flex gap-4 bg-white/80 px-4 py-2 rounded-lg shadow z-50">
    <a href="#tech_stack">Tech</a>
    <a href="#educations">Edu</a>
    <a href="#experiences">Exp</a>
    <a href="#projects">Projects</a>
    <a href="#contacts">Contact</a>
  </nav>

  <div class=" mx-8 my-16 md:mx-32 font-mono flex flex-col gap-10">
    <div class=" flex flex-col justify-center items-center text-center gap-2">
      <p class=" text-2xl">Hey, I'm <span class=" text-primary">Andrew Arief Riyadi</span></p>
      <p class=" text-md">people call me <span class=" text-primary ">andru / endru / andrew</span></p>
      <p class=" text-sm text-primary">Full-Stack Developer & Game Developer</p>
      <img src="/pas_foto.png" class=" max-w-32"></img>
      <a href="https://drive.google.com/file/d/1yjQN8hn0XkHYDk70JRGaubEsWyjDz1ec/view?usp=drive_link" target="_blank" data-tip="Download CV"
        class=" tooltip tooltip-bottom py-1 px-8 rounded bg-wood text-white w-fit block  shadow-xl/30 shadow-orange-950 hover:bg-primary hover:text-black hover:shadow-primary transition">CV</a>
    </div>
    <Tech_stack id="tech_stack" />
    <Educations id="educations" />
    <Experiences id="experiences" />
    <Projects id="projects" />
    <Contacts id="contacts" />

  </div>
  <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © 2025 - All right reserved by Andrew Arief Riyadi</p>
    </aside>
  </footer>
</template>
