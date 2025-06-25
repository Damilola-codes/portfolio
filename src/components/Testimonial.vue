<template>
  <section class="py-36 px-4 sm:px-10 bg-gray-50">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2">Testimonial</h2>
      <p class="text-gray-600 text-sm sm:text-base mb-6">A few words from teammates, clients & collaborators.</p>

      <!-- Navigation -->
      <div class="flex justify-end space-x-4 mb-4">
        <button @click="slidePrev" :disabled="!canSlide" class="bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed">
          <ArrowLeftIcon class="w-5 h-5 text-gray-700" />
        </button>
        <button @click="slideNext" :disabled="!canSlide" class="bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed">
          <ArrowRightIcon class="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <!-- Carousel wrapper -->
      <div class="overflow-hidden">
        <div
          ref="carousel"
          class="flex space-x-6 w-max"
        >
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="flex flex-col justify-between items-center bg-white rounded-xl border shadow-md p-6 w-72 sm:w-80 min-w-[18rem] text-left"
          >
            <p class="text-gray-700 italic text-sm sm:text-base mb-6">“{{ t.message }}”</p>
            <!-- <img :src="t.avatar" class="place-self-start w-14 h-14 rounded-full mb-2 object-cover" :alt="t.name" /> -->
            <div class="place-self-start">
              <p class="text-sm font-semibold text-gray-800">{{ t.name }}</p>
              <p class="text-xs text-gray-500">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';

const carousel = ref(null);
const currentIndex = ref(0);
const visibleCards = ref(3);
const cardWidth = ref(344); // Default: sm:w-80 (320px) + space-x-6 (24px)

const testimonials = [
  {
    message: 'Damilola is one of the most creative and focused engineers I’ve worked with.',
    name: 'Olawale Adewale',
    role: 'Client, Upwork',
    avatar: '/avatars/jane.jpg',
  },
  {
    message: 'His attention to detail and design intuition is outstanding.',
    name: 'Emmanuel Godswin',
    role: 'UI/UX Designer, Freelancer',
    avatar: '/avatars/john.jpg',
  },
  {
    message: 'Reliable, fast, and always delivers beyond expectations.',
    name: 'Aisha Ahmed',
    role: 'Friend.',
    avatar: '/avatars/aisha.jpg',
  },
  {
    message: 'Great communication and top-notch delivery every time.',
    name: 'David Honour',
    role: 'Frontend Developer',
    avatar: '/avatars/david.jpg',
  },
  {
    message: 'Can turn any concept into a working, beautiful product.',
    name: 'Jessica Loveth',
    role: 'UX Designer',
    avatar: '/avatars/sofia.jpg',
  },
];

// Computed property to determine if the carousel should be interactive
const canSlide = computed(() => testimonials.length > visibleCards.value);

// Computed property for the maximum slide index
const maxIndex = computed(() => {
  if (!canSlide.value) return 0;
  return testimonials.length - visibleCards.value;
});

function slideTo(index) {
  if (!carousel.value) return;
  gsap.to(carousel.value, {
    x: -(index * cardWidth.value),
    duration: 0.6,
    ease: 'power2.inOut',
  });
}

function updateCarouselConfig() {
  const screenWidth = window.innerWidth;
  const space = 24; // from space-x-6 (1.5rem)

  if (screenWidth < 640) { // Tailwind 'sm' breakpoint
    visibleCards.value = 1;
    cardWidth.value = 288 + space; // w-72
  } else if (screenWidth < 1024) { // Tailwind 'lg' breakpoint
    visibleCards.value = 2;
    cardWidth.value = 320 + space; // sm:w-80
  } else {
    visibleCards.value = 3;
    cardWidth.value = 320 + space; // sm:w-80
  }

  // Adjust currentIndex if it's out of bounds after resize
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value;
  }
  
  // Instantly update position without animation for a smoother resize experience
  gsap.set(carousel.value, { x: -(currentIndex.value * cardWidth.value) });
}

onMounted(() => {
  updateCarouselConfig();
  window.addEventListener('resize', updateCarouselConfig);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateCarouselConfig);
});

function slideNext() {
  if (!canSlide.value) return;
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Wrap around
  }
  slideTo(currentIndex.value);
}

function slidePrev() {
  if (!canSlide.value) return;
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = maxIndex.value; // Wrap around
  }
  slideTo(currentIndex.value);
}
</script>
