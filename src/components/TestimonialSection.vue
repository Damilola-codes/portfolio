<template>
    <section id="testimonials" class="py-20 px-6 md:px-16 bg-gradient-to-b from-[#606161] to-gray-700 overflow-hidden">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-amber-200 mb-10">Reviews Don't Lie</h2>
  
        <div ref="slider" class="flex gap-6">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="min-w-[300px] md:min-w-[400px] bg-white/10 backdrop-blur-md rounded-xl p-6 text-white border border-white/10 shadow-md transition-transform hover:scale-105 hover:shadow-[0_0_20px_#ffffff33]"
          >
            <div class="flex items-center gap-4 mb-4">
              <img
                :src="testimonial.avatar"
                class="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div class="text-left">
                <h3 class="font-semibold text-white">{{ testimonial.name }}</h3>
                <p class="text-sm text-gray-300">{{ testimonial.title }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-200 leading-relaxed">"{{ testimonial.message }}"</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  
  const slider = ref(null)
  
  const testimonials = [
    {
      name: 'Ada Lovelace',
      title: 'Software Engineer at CodeSpace',
      avatar: 'https://i.pravatar.cc/150?img=32',
      message: 'Working with you was a game-changer. Your attention to detail and speed is top-notch!',
    },
    {
      name: 'Elon T.',
      title: 'Startup Founder',
      avatar: 'https://i.pravatar.cc/150?img=49',
      message: 'You didn’t just deliver fast — you delivered *better* than we expected. Will collaborate again!',
    },
    {
      name: 'Marie Curie',
      title: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=36',
      message: 'Super professional and always on point. You turned our vision into reality!',
    },
    {
      name: 'Alan Turing',
      title: 'AI Pioneer',
      avatar: 'https://i.pravatar.cc/150?img=25',
      message: 'Brilliant work and elegant design — your frontend skills are 🔥.',
    },
    {
      name: 'Grace Hopper',
      title: 'Tech Speaker',
      avatar: 'https://i.pravatar.cc/150?img=12',
      message: 'Loved how smooth everything worked. Your code speaks for itself.',
    },
  ]
  
  onMounted(() => {
    const wrapper = slider.value
    const totalWidth = wrapper.scrollWidth
  
    gsap.to(wrapper, {
      x: -totalWidth / 2,
      ease: 'none',
      duration: 25,
      repeat: -1,
    })
  })
  </script>
  
  <style scoped>
  /* Smooth infinite scroll loop (duplicates needed for true infinity) */
  </style>
  