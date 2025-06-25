<template>
    <div ref="cardRef"
    class="relative w-full max-w-sm p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-400">
        <img :src="image"
        :alt="title"
        class="w-full h-64 object-cover rounded-xl bg-gray-300 p-2"/>
        <h3 class="text-lg md:text-2xl mt-4 font-semibold text-gray-800">{{title}}</h3>
        <p class="text-sm text-gray-500 mt-1">{{ description }}</p>
            <a href=""
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex items-center gap-2 text-sm font-medium transition group bg-gray-300 px-4 py-3 rounded-xl place-items-center">
                View Project
                <ChevronRightIcon class=" w-5 h-5  transition-transform duration-300 transform group-hover:translate-x-1"/>
            </a>
    </div>
</template>
<script setup>
    import {onMounted, ref} from  'vue'; // Added ref here
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';
    import {ChevronRightIcon} from '@heroicons/vue/24/outline'

    gsap.registerPlugin(ScrollTrigger);
    const props = defineProps({
        image: String,
        title: String,
        description: String,
        link: String
    });

    const cardRef = ref(null);

    onMounted(() => {
        // Ensure cardRef.value is available before using it
        if (cardRef.value) {
            gsap.from(cardRef.value, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.value,
                    start: 'top 90%',
                }
            });
        }
    });
</script>