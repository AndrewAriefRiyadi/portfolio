<script setup>
import Tech from './tech_stack.vue';
import About from './about.vue';
import Edu from './edu.vue';
</script>

<template>
  <div class="mx-auto sm:mx-auto my-16 w-full max-w-xs sm:max-w-md font-mono flex flex-col gap-10">
    <div class=" flex flex-col justify-center items-center text-center gap-2">
      <p class=" font-unbounded text-xl">Andrew Arief Riyadi</p>
      
    </div>
    <About id="about" />
    <Tech id="tech" />
    <Edu id="edu"/>
    

  </div>
  <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © 2025 - All right reserved by Andrew Arief Riyadi</p>
    </aside>
  </footer>
</template>
