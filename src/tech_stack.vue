<script setup>
</script>

<template>
    <div class="flex flex-col justify-center text-center gap-2">
        <p class=" text-4xl font-unbounded mb-4 ">TECH STACK</p>

        <!-- Container auto scroll -->
        <div class="relative w-full overflow-hidden">
            <div class="flex items-center gap-10 animate-scroll">
                <!-- logo list -->
                <img src="https://www.php.net/images/logos/new-php-logo.svg" class="block w-24" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    class="block w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png"
                    class="w-24" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                    class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    class="w-12" />
                <img src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" class="w-24" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                    class="w-16" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfitrjP8RaSyij0rDzOFvzl92--bwK-uGsw&s"
                    class="w-16 rounded" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp"
                    class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                    class="w-16" />

                <!-- duplicate biar loop mulus -->
                <img src="https://www.php.net/images/logos/new-php-logo.svg" class="block w-24" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    class="block w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png"
                    class="w-24" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                    class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    class="w-12" />
                <img src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" class="w-24" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                    class="w-16" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfitrjP8RaSyij0rDzOFvzl92--bwK-uGsw&s"
                    class="w-16 rounded" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp"
                    class="w-16" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                    class="w-16" />

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
    animation: scroll 20s linear infinite;
    /* ubah 20s jadi lebih kecil kalau mau lebih cepat */
}
</style>
