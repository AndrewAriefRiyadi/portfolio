<script setup>
</script>

<template>
    <div class="flex flex-col justify-center text-center gap-2">
        <p class=" text-4xl font-unbounded mb-4 ">TECH STACK</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <div class="badge badge-outline bg-[#4F5D95]/20 text-[#4F5D95]">PHP</div>
            <div class="badge badge-outline bg-[#F05340]/20 text-[#F05340]">Laravel</div>
            <div class="badge badge-outline bg-[#563D7C]/20 text-[#563D7C]">Blade</div>
            <div class="badge badge-outline bg-[#F7DF1E]/20 text-[#F7DF1E]">JavaScript</div>
            <div class="badge badge-outline bg-[#3178C6]/20 text-[#3178C6]">TypeScript</div>
            <div class="badge badge-outline bg-[#42B883]/20 text-[#42B883]">Vue.js</div>
            <div class="badge badge-outline bg-[#00DC82]/20 text-[#00DC82]">NuxtJS</div>
            <div class="badge badge-outline bg-[#E0234E]/20 text-[#E0234E]">NestJS</div>
            <div class="badge badge-outline bg-[#00ADD8]/20 text-[#00ADD8]">Go (Golang)</div>
            <div class="badge badge-outline bg-[#E34F26]/20 text-[#E34F26]">HTML</div>
            <div class="badge badge-outline bg-[#1572B6]/20 text-[#1572B6]">CSS</div>
            <div class="badge badge-outline bg-[#336791]/20 text-[#336791]">SQL</div>
            <div class="badge badge-outline bg-[#3776AB]/20 text-[#3776AB]">Python</div>
            <div class="badge badge-outline bg-[#092E20]/20 text-[#092E20]">Django</div>
            <div class="badge badge-outline bg-[#009688]/20 text-[#009688]">FastAPI</div>
        </div>

        <!-- Container auto scroll -->
        <div class="relative w-full overflow-hidden">
            <div class="flex items-center gap-10 animate-scroll">
                <!-- logo list -->

                <!-- PHP -->
                <img src="https://www.php.net/images/logos/new-php-logo.svg" class="w-20" />

                <!-- Laravel -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" class="w-16" />

                <!-- JavaScript -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="w-14" />

                <!-- TypeScript -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" class="w-14" />

                <!-- Vue.js -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="w-14" />

                <!-- NuxtJS -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" class="w-16" />

                <!-- NestJS -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" class="w-16" />

                <!-- Go -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" class="w-20" />

                <!-- HTML -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    class="w-14" />

                <!-- CSS -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    class="w-12" />

                <!-- SQL (MySQL) -->
                <img src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" class="w-24" />

                <!-- Python -->
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp"
                    class="w-14" />

                <!-- Django -->
                <img src="https://static.djangoproject.com/img/logos/django-logo-negative.svg" class="w-20" />

                <!-- FastAPI -->
                <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" class="w-20" />

                <!-- Tailwind -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" class="w-16" />

                <!-- Duplicate for infinite loop -->
                <img src="https://www.php.net/images/logos/new-php-logo.svg" class="w-20" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="w-14" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" class="w-14" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="w-14" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" class="w-20" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    class="w-14" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    class="w-12" />
                <img src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" class="w-24" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp"
                    class="w-14" />
                <img src="https://static.djangoproject.com/img/logos/django-logo-negative.svg" class="w-20" />
                <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" class="w-20" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" class="w-16" />



            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    display: flex;
    animation: scroll 10s linear infinite;
    /* ubah 20s jadi lebih kecil kalau mau lebih cepat */
}
</style>
