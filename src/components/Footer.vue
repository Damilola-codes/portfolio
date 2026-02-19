<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { IconBrandX, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-vue';
import { SunIcon, MoonIcon, EnvelopeIcon, ArrowUpIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';

const isDark = ref(false);

// read user preference on load
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
});

function toggleDark() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
}
const showBackToTop = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 300;
}

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <footer class="py-10 px-6 sm:px-12 mt-20">
    <div class="max-w-7xl mx-auto gap-8 place-items-center text-center">

      <!-- Social -->
      <div>
        <h4 class="text-md font-medium mb-6">Connect</h4>
        <div class="flex justify-center md:justify-start space-x-6 mt-2">
          <a href="https://x.com/damilolacodes"      target="_blank"><IconBrandX class="w-5 h-5"/></a>
          <a href="https://linkedin.com/in/damilolacodes001" target="_blank"><IconBrandLinkedin class="w-5 h-5"/></a>
          <a href="mailto:damilolacodes@gmail.com"            target="_blank">
              <EnvelopeIcon class="w-5 h-5"/>
          </a>
          <a href="https://github.com/damilola-codes">
            <IconBrandGithub class="w-5 h-5"/>
          </a>
          <a href="/Damilola-Odeyemi-Frontend-CV-2026.pdf">
            <DocumentTextIcon class="w-5 h-5"/>
          </a>
        </div>
      </div>

      <!-- Dark-mode toggle -->
      <!-- <div class="flex md:justify-end justify-center items-start">
        <button @click="toggleDark"
                class="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition">
          <span class="text-sm select-none">Dark Mode</span>
          <component :is="isDark ? SunIcon : MoonIcon" class="w-5 h-5"/>
        </button>
      </div> -->
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 dark:border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
      © {{ new Date().getFullYear() }} Damilola Codes. All rights reserved.
    </div>
    <!-- Back to Top Button -->
  <button
    v-if="showBackToTop"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
  >
    <ArrowUpIcon class="w-5 h-5 animate-bounce" />
  </button>
  </footer>
</template>
