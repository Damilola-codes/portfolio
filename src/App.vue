<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { CheckBadgeIcon, DocumentArrowDownIcon, ChevronDoubleUpIcon } from "@heroicons/vue/24/solid";
import {BuildingLibraryIcon, LightBulbIcon, UserGroupIcon} from "@heroicons/vue/24/outline"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-vue-next'

gsap.registerPlugin(ScrollToPlugin);

const scrollBtn = ref(true)
const scrollToAbout = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#about-section", offsetY: 50 },
    ease: "power2.out"
  })
}

const showFAB = ref(false);

const handleScroll = () =>{
  showFAB.value = window.scrollY > 30;
}

const scrollToTop = () =>{
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: 0},
    ease: "power2.out"
  })
}

const photoBox = ref(null)
const textBox = ref(null)
const statsBox = ref(null)

// List of programming languages and expertise levels
const expertiseLevels = ref([
  { language: "HTML", level: "Experienced" },
  { language: "CSS", level: "Experienced" },
  { language: "JavaScript", level: "Advanced" },
  {language: "React.js", level: "Intermediate"},
  { language: "Next.js", level: "Intermediate" },
  { language: "Vue.js", level: "Intermediate" },
  { language: "Nuxt.js", level: "Intermediate" },
  { language: "Tailwind CSS", level: "Advanced" },
  { language: "Node.js", level: "Intermediate" },
  { language: "MongoDB", level: "Intermediate" },
]);

// Expertise typing effect
const expertiseList = ["Javascript","React.js","Vue.js", "Nuxt.js", "Tailwind CSS", "Node.js", "MongoDB"];
const currentExpertise = ref("");
let index = 0;

const typeText = (text, i = 0) => {
  if (i < text.length) {
    currentExpertise.value = text.substring(0, i + 1);
    setTimeout(() => typeText(text, i + 1), 100);
  } else {
    setTimeout(deleteText, 1500);
  }
};

const deleteText = () => {
  if (currentExpertise.value.length > 0) {
    currentExpertise.value = currentExpertise.value.substring(0, currentExpertise.value.length - 1);
    setTimeout(deleteText, 50);
  } else {
    index = (index + 1) % expertiseList.length;
    setTimeout(() => typeText(expertiseList[index]), 500);
  }
};

// Animate expertise items
onMounted(() => {
  gsap.from(".expertise-item", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  typeText(expertiseList[index]);
  window.addEventListener("scroll", handleScroll);
  gsap.from(scrollBtn.value, {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
  })
  gsap.from(photoBox.value, {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })

  gsap.from(textBox.value, {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: 'power3.out',
  })

  gsap.from(statsBox.value, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.6,
    ease: 'power2.out',
  })
}
);
</script>

<template>
  <div class="min-h-screen bg-gray-700 text-white font-sans text-center">
    <div class="fixed left-4 bottom-4 flex flex-col gap-4 z-50">
    <a href="https://github.com/damilola_codes" target="_blank" class="text-white hover:text-blue-500 transition">
      <Github class="w-6 h-6" />
    </a>
    <a href="https://linkedin.com/in/damilolacodes001" target="_blank" class="text-white hover:text-blue-500 transition">
      <Linkedin class="w-6 h-6" />
    </a>
    <a href="https://x.com/damilola-codes" target="_blank" class="text-white hover:text-blue-500 transition">
      <Twitter class="w-6 h-6" />
    </a>
    <a href="mailto:damilola.codes@gmail.com"
    target="_blank" class="text-white hover:text-blue-500 transition">
      <Mail class="w-6 h-6" />
    </a>
    <a href="https://www.damilolacodes.xyz" target="_blank" class="text-white hover:text-blue-500 transition">
      <Globe class="w-6 h-6" />
    </a>
    </div>
  <!-- Scroll to About Section Button -->
  <div v-if="showFAB" @click="scrollToTop" class="fixed right-4 bottom-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition z-10">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg> -->
    <ChevronDoubleUpIcon class="w-6 h-6"/>
  </div>
  <!-- Scroll Down Arrow -->
  <!-- <div ref="scrollBtn" class="fixed right-4 bottom-4 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
  </div> -->
  <!-- Scroll Down Arrow -->
    <div class="absolute bottom-10 flex justify-center w-full z-50">
    <svg
      @click="scrollToAbout"
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-10 text-green-400 hover:text-green-600 animate-bounce cursor-pointer transition"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
    <section class="h-screen flex items-center justify-center px-10">
      <div class="grid md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
        <!-- Left Side: Image -->
        <div class="flex justify-center">
          <img src="../img/my-pic.jpg" alt="Your Photo"
            class="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-500 shadow-lg">
        </div>
        <!-- Right Side: Text -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold">👋 Hi, I'm Damilola</h1>
          <p class="mt-4 text-lg text-gray-300">Software Engineer | Web Developer</p>
          <div class="mt-6 flex justify-center items-center md:justify-start space-x-4">
            <a href="https://github.com/damilola-codes" class="bg-green-600 hover:bg-gray-600 text-white px-4 py-2 rounded-lg items-center flex gap-1.5"><Github class="w-6 h-6" />GitHub</a>
            <a href="https://linkedin.com/in/damilolacodes001" class="bg-green-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex gap-1.5 "><Linkedin class="w-6 h-6" />LinkedIn</a>
            <a href="https://twitter.com/damilola-codes" class="bg-green-400 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex gap-1.5 "><Twitter class="w-6 h-6" />Twitter</a>
          </div>
          <p class="text-lg text-gray-300">Scroll to learn more about me</p>
        </div>
      </div>
    </section>
    <!-- About Section -->
    <section id="about-section" class="min-h-screen bg-gray-900 text-white py-16 px-4">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- <div class="text-blue-400 text-3xl font-semibold text-center">About</div> -->
      <!-- Left: Photo -->
      <div ref="photoBox" class="flex justify-center">
        <img
          src="../img/my-pic.jpg"
          alt="Profile Photo"
          class="object-cover rounded-3xl shadow-xl border-4 border-gray-500"
        />
      </div>

      <!-- Right: Text -->
      <div ref="textBox">
        <h2 class="text-4xl font-bold text-white mb-4">About Me</h2>
        <p class="text-gray-300 mb-4 leading-relaxed text-left">
          I'm a Software engineer with 2+ experience, always passionate about building scalable apps that solve real-world problems.<br>
          My main stack includes <span class="text-green-400">React.js, Next.js, Vue.js, Nuxt.js, Node.js, and MongoDB</span>.
        </p>
        <p class="text-gray-300 mb-4 leading-relaxed text-left">
          I’ve worked on projects like <span class="font-medium text-green-300">Crackk</span> (an edtech platform empowering creators and learners),
          e-commerce APIs, and interactive portfolios. I love combining clean UI with powerful backend logic.
        </p>
        <p class="text-gray-300 leading-relaxed text-left">
          I’m open to freelance, contract, or collaborative opportunities. Let’s build something amazing together!
        </p>
      </div>
    </div>

    <!-- Stats Section -->
    <div ref="statsBox" class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div class="bg-gray-800 p-6 rounded-lg shadow-md justify-items-center space-y-4">
        <BuildingLibraryIcon class="w-7 h-7 text-amber-200"/>
        <h3 class="text-3xl font-bold text-green-400">10+</h3>
        <p class="text-gray-300 mt-2">Projects Completed</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg shadow-md justify-items-center space-y-4">
        <LightBulbIcon class="w-7 h-7 text-amber-200"/>
        <h3 class="text-3xl font-bold text-green-400">2+</h3>
        <p class="text-gray-300 mt-2">Years Experience</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg shadow-md justify-items-center space-y-4">
        <UserGroupIcon class="w-7 h-7 text-amber-200"/>
        <h3 class="text-3xl font-bold text-green-400">4+</h3>
        <p class="text-gray-300 mt-2">Clients Served</p>
      </div>
    </div>
  </section>


    <!-- Expertise Section with Typing Effect -->
    <section class="mt-16 text-center">
      <h2 class="text-3xl font-bold">Expertise</h2>
      <p class="mt-4 text-2xl text-green-400 font-semibold">{{ currentExpertise }}<span class="animate-pulse">|</span></p>
    </section>

    <!-- Animated Expertise Levels -->
    <section class="mt-16 text-center">
      <h2 class="text-3xl font-bold">My Skill Levels</h2>
      <div class="max-w-3xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(expertise, index) in expertiseLevels"
          :key="index"
          class="bg-gray-800 p-4 rounded-lg flex items-center gap-3 expertise-item shadow-lg"
        >
          <CheckBadgeIcon class="w-6 h-6 text-green-400 mt-[-20px]" />
          <div>
            <p class="text-lg font-semibold text-white">{{ expertise.language }}</p>
            <p class="text-gray-400">{{ expertise.level }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download CV Button -->
    <div class="mt-10 text-center">
      <section class="mt-16 text-center">
      <a href="/cv.pdf" download class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
        <DocumentArrowDownIcon class="w-6 h-6 mr-2" /> Download CV
      </a>
      </section>
    </div>
  </div>
</template>
