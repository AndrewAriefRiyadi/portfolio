<script setup>
import Tech from './tech_stack.vue';
import About from './about.vue';
import Edu from './edu.vue';
import Exp from './Exp.vue';
import Project from './Project.vue';
</script>

<template>
  <div class=" mx-auto my-16 w-full max-w-md font-mono flex flex-col  gap-10 ">
    <div class=" flex flex-col justify-center items-center text-center gap-2">
      <p class=" font-unbounded text-xl">Andrew Arief Riyadi</p>
    </div>

    <About id="about" />
    <Tech id="tech" />
    <Edu id="edu"/>
    <Exp id="exp"/>
    <Project id="Project"/>

    <div class=" flex flex-col justify-center items-center text-center gap-8">
      <p class=" font-unbounded text-4xl">Get in Touch</p>
      <div class="flex gap-6">
            <a href="https://instagram.com/andruryd" target="_blank" class="tooltip tooltip-bottom" data-tip="@andruryd">
                <font-awesome-icon :icon="['fab', 'instagram']"
                    class=" fa-3x text-white text-2xl hover:text-pink-600 transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="https://github.com/AndrewAriefRiyadi" target="_blank" class="tooltip tooltip-bottom" data-tip="github.com/AndrewAriefRiyadi">
                <font-awesome-icon :icon="['fab', 'github']"
                    class="fa-3x text-white text-2xl hover:text-gray-600  transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="mailto:andrewariefr@gmail.com" class="tooltip tooltip-bottom" data-tip="andrewariefr@gmail.com">
                <font-awesome-icon :icon="['fas', 'envelope']"
                    class="fa-3x text-white text-2xl hover:text-yellow-300 transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="https://www.linkedin.com/in/andrew-arief-riyadi/" target="_blank" class="tooltip tooltip-bottom" data-tip="andrew-arief-riyadi">
                <font-awesome-icon :icon="['fab', 'linkedin']"
                    class="fa-3x text-white text-2xl hover:text-blue-500 transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="https://itsandru.itch.io/" target="_blank" class="tooltip tooltip-bottom" data-tip="itsandru">
                <font-awesome-icon :icon="['fas', 'gamepad']"
                    class="fa-3x text-white text-2xl hover:text-emerald-300 transition transform hover:scale-150 hover:rotate-15" />
            </a>
        </div>
    </div>

  </div>
  <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © 2025 - All right reserved by Andrew Arief Riyadi</p>
    </aside>
  </footer>
</template>
