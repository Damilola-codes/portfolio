<template>
    <div class="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 w-[500px] max-w-3xl mx-auto border border-white/40 hover:border-white/60 hover:bg-white/30 transition-all duration-300">
        <span
        v-for="(pos, index) in boltPosition"
        :key="index"
        :class="`absolute ${pos} w-3 h-3 rounded-full`"
        :style="{backgroundColor: boltColor}">
    </span>
        <div :class="`border-6 border-y-16 shadow-xl rounded-xl overflow-hidden h-60 object-cover`"
    :style="{borderColor: borderColor}">
            <img loading="lazy" :src="imageSrc" :alt="altText" 
            class="w-full h-auto object-cover"
            />
        </div>
    </div>
</template>
<script setup>
    const boltPosition = [
        'top-3 left-2',
        'top-3 right-2',
        'bottom-3 left-2',
        'bottom-3 right-2'
    ];
    defineProps({
        imageSrc: {
            type: String,
            default: 'Project Preview',
            required: true
        },
        altText: {
            type: String,
            default: '#e5e7eb'
        },
        borderColor: {
            type: String,
            default: '#d1d5db'
        },
        boltColor: {
            type: String,
            default: '#364153'
        }
    })
</script>