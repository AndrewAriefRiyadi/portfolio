<script setup>
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class=" flex flex-col gap-8 items-center">
        <p class=" font-unbounded text-4xl w-full text-left">PROJECTS</p>
        <!-- Cards -->
        <ProjectCard image="/ChatApp.png" title="ChatApp"
            description="A realtime web chat app." :tags="['Laravel', 'Blade' , 'Livewire', 'MySQL', 'Tailwind','PHP', 'Laravel Echo']" link="Cooking" />
        <ProjectCard image="/PMB_Pasca.png" title="Registration App"
            description="A web app for managing student registration." :tags="['Laravel', 'Blade', 'MySQL', 'Tailwind','PHP']" link="https://pmb-pasca.uniba-bpn.ac.id/" />
        <ProjectCard image="/Dormage.jpg" title="Kos Management App"
            description="A mobile app for managing kos." :tags="['Flutter', 'Laravel', 'MySQL', 'Tailwind','PHP']" />
        <ProjectCard image="/SIMPER.png" title="Registration SIM App"
            description="A web app for managing Driver License for a company." :tags="['Laravel', 'Blade', 'MySQL', 'Tailwind','PHP']" />
        <ProjectCard image="/WLGT.png" title="Wizards Legacy : Grand Tower"
            description="A retro game about wizards. Inspired by Fix it Felix. Won the Best Mechanic Award in Joints Game Jam 2024." :tags="['Godot', 'GDScript']" link="https://itsandru.itch.io/wizard-legacy-grand-tower" />
        <ProjectCard image="/NaghPunk.png" title="NaghPunk"
            description="A strategy game set in a cyberpunk world. Inspired by Final Fantasy Tactics." :tags="['Godot', 'GDScript']" link="https://itsandru.itch.io/naghpunk-demo" />
    </div>
</template>