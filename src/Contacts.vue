<script setup>


</script>

<template>
    <div class="flex flex-col justify-center items-center text-center">
        <p class="text-3xl tracking-[0%] font-bold mb-4 text-primary">
            Get In Touch With Me :)
        </p>
        <div class="flex gap-6">
            <a href="https://instagram.com/andruryd" target="_blank" class="tooltip tooltip-bottom" data-tip="@andruryd">
                <font-awesome-icon :icon="['fab', 'instagram']"
                    class="text-gray-800 text-2xl hover:text-pink-600 transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="https://github.com/AndrewAriefRiyadi" target="_blank" class="tooltip tooltip-bottom" data-tip="github.com/AndrewAriefRiyadi">
                <font-awesome-icon :icon="['fab', 'github']"
                    class="text-gray-800 text-2xl hover:text-gray-950  transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="mailto:andrewariefr@gmail.com" class="tooltip tooltip-bottom" data-tip="andrewariefr@gmail.com">
                <font-awesome-icon :icon="['fas', 'envelope']"
                    class="text-gray-800 text-2xl hover:text-accent transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="https://www.linkedin.com/in/andrew-arief-riyadi/" target="_blank" class="tooltip tooltip-bottom" data-tip="andrew-arief-riyadi">
                <font-awesome-icon :icon="['fab', 'linkedin']"
                    class="text-gray-800 text-2xl hover:text-blue-500 transition transform hover:scale-150 hover:rotate-15" />
            </a>

            <a href="https://itsandru.itch.io/" target="_blank" class="tooltip tooltip-bottom" data-tip="itsandru">
                <font-awesome-icon :icon="['fas', 'gamepad']"
                    class="text-gray-800 text-2xl hover:text-green-700 transition transform hover:scale-150 hover:rotate-15" />
            </a>
        </div>
    </div>
</template>