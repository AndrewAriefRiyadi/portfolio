<script setup>
import { onMounted } from 'vue'
import { annotate, annotationGroup } from 'rough-notation'

onMounted(() => {
    const $ = (t) => document.querySelector(t)
    const configUnderlineYellow = { type: 'underline', color: '#FFD54F', padding: 2 }

    const a1 = annotate($('.web'), configUnderlineYellow)
    const a2 = annotate($('.game'), configUnderlineYellow)
    const a3 = annotate($('.multiline'), { type: 'highlight', color: '#052463', animationDuration: 1500, multiline: true, iterations: 1 })
    const a4 = annotate($('.seeking'), { type: 'box', color: '#ed6464'})
    const ag = annotationGroup([a1, a2, a3, a4])
    ag.show()
})
</script>

<template>
    <div class=" flex flex-col gap-2">
        <div class="flex items-center gap-4 sm:gap-8 mb-6 ">
            <p class="text-2xl ">Hi! I'm <span class=" text-yellow-200 ">Andrew</span>, a developer based in <span
                    class=" text-red-400 italic">Indonesia</span>.</p>
            <div
                class="rounded-full overflow-hidden ring-4 ring-white shadow-lg w-xl sm:w-md aspect-square transition hover:scale-120  grayscale hover:grayscale-0">
                <img src="/Photo2.jpg" alt="Andrew Arief" class="object-cover w-full h-full" />
            </div>
        </div>
        <p class=" text-sm">
            A fresh Informatics graduate from Institut Teknologi Kalimantan with a strong passion for <span class="web">
                web </span>and<span class="game"> game </span> development. I enjoy turning ideas into
            interactive and impactful digital experiences. I’m a fast learner,
            always eager to explore new technologies, and capable of working both independently and collaboratively.
            With a
            strong sense of curiosity and dedication, I strive to write <span class=" multiline">clean, efficient, and
                reliable code</span> that brings
            ideas to life.
        </p>
        <p class=" text-sm mb-8">
            I’m currently <span class=" seeking">seeking opportunities</span> to grow as a developer and contribute to
            meaningful projects. If you’re
            looking for someone who’s motivated, adaptable, and ready to take on challenges, I’d love to be part of your
            team. Let’s build something great together!
        </p>
        <div class=" flex gap-2 text-xs">
            <a href="https://drive.google.com/file/d/1WiMQKhXXRUme79aGM_46PKewMbLYRK19/view?usp=drive_link"
                target="_blank" data-tip="📄"
                class=" tooltip tooltip-bottom sm:tooltip-left t py-1 px-8 rounded bg-wood text-black w-full block bg-white text-center transition hover:scale-105  ">View
                CV</a>
            <a href="https://www.linkedin.com/in/andrew-arief-riyadi/" target="_blank" data-tip="😎"
                class=" tooltip tooltip-bottom sm:tooltip-right tooltip-info py-1 px-8 rounded bg-wood ring-1 w-full block  text-center transition hover:scale-105">View
                Linkedin</a>
        </div>
    </div>

</template>