<template>
    <nav
      class="fixed bottom-0 left-0 w-full md:w-auto md:left-1/2 md:transform md:-translate-x-1/2
             bg-white/10 backdrop-blur-md p-4 z-10 rounded-t-lg md:rounded-full md:mb-2 md:px-8"
    >
      <ul class="flex justify-around items-center gap-6 md:gap-10">
        <li
          v-for="item in navItems"
          :key="item.name"
          @click="() => handleNavClick(item.name)"
          :class="[
            'flex flex-col items-center justify-center cursor-pointer transition-all duration-200',
            activeNav === item.name ? 'text-green-500 scale-110' : 'text-white hover:text-green-300'
          ]"
        >
          <component :is="item.icon" class="w-6 h-6 mb-1" />
          <span class="text-xs hidden md:block">{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    HomeIcon,
    CodeBracketIcon,
    BriefcaseIcon,
    EnvelopeIcon,
    CommandLineIcon,
  } from '@heroicons/vue/24/outline'
  
  const navItems = [
    { name: '#home', label: 'Home', icon: HomeIcon },
    { name: 'projects', label: 'Projects', icon: CommandLineIcon },
    { name: 'experience', label: 'Experience', icon: BriefcaseIcon },
    { name: 'contact', label: 'Contact', icon: EnvelopeIcon },
  ]
  
  const activeNav = ref('#home')
  
  const handleNavClick = (section) => {
    activeNav.value = section
    scrollToSection(section)
  }
  
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
  </script>
  
  <style scoped>
  nav {
    backdrop-filter: blur(10px);
  }
  </style>
  