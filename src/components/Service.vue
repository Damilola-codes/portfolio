<template>
  <section class="overflow-hidden py-12 px-4 sm:px-10 bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat h-full w-full help-section">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2">How Can I Help You?</h2>
      <p class="text-gray-600 text-sm sm:text-base mb-6">Fast solutions. Scalable code. Beautiful UI. Let's build something amazing.</p>

      <div class="flex animate-help-scroll w-max space-x-4 ">
        <div
          class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          v-for="(item, i) in services.concat(services)"
          :key="i"
        >
          <component :is="item.icon" class="w-5 h-5 text-green-600" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

// Heroicons
import { CodeBracketIcon, ArrowPathIcon, ServerStackIcon } from '@heroicons/vue/24/outline';
// Tabler Icons
import { IconBrandGithub, IconDatabase, IconFileCode, IconCpu } from '@tabler/icons-vue';


const services = [
  { label: 'Frontend Development', icon: CodeBracketIcon },
  { label: 'API Integration', icon: ServerStackIcon },
  { label: 'Performance Optimization', icon: ArrowPathIcon },
  { label: 'Version Control', icon: IconBrandGithub },
  { label: 'Database Management', icon: IconDatabase },
  { label: 'Clean Code Writing', icon: IconFileCode },
  { label: 'Scalable Architecture', icon: IconCpu },
];

// Expose services to the template (not strictly necessary in , but silences some linters)
defineExpose({ services });

onMounted(() => {
  const wrapper = document.querySelector('.animate-help-scroll');
  const scrollWidth = wrapper.scrollWidth / 2;

  gsap.to(wrapper, {
    x: `-=${scrollWidth}`,
    duration: 25,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % scrollWidth),
    },
  });
});
</script>
