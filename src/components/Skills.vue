<template>
    <!-- <div class="skills">
      <div class="skill-item" v-for="(skill, index) in skills" :key="index">
        <Icon :icon="skill.icon" width="50" height="50" class="icon" />
        <p>{{ skill.name }}</p>
      </div>
    </div> -->
    <section id="skills" class="py-20 overflow-hidden text-black">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 text-center text-amber-200">Skills & Tools</h2>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <div
                    class="skill-item group bg-amber-100 rounded p-8 text-center shadow-lg transition duration-300 hover:shadow-white/20 hover:scale-105"
                    v-for="(skill, index) in skills"
                    :key="index"
                >
                    <div class="flex justify-center mb-3">
                        <Icon :icon="skill.icon" width="80" height="80" class="icon" />
                    </div>
                    <p class="text-sm font-medium group-hover:text-amber-400 transition duration-300">
                        {{ skill.name }}
                    </p>
                </div>
            </div>
        </div>
    </section>
      <!-- Duplicate and replace for other skills like CSS, JS, etc. -->
  </template>
  
  <script>
  import { defineComponent } from 'vue'; // For Vue 3
  import { Icon } from '@iconify/vue'; // Import Icon component from Iconify
  
  export default defineComponent({
    name: 'Skills',
    components: {
      Icon, // Register Icon component
    },
    data() {
      return {
        skills: [
            {name: 'HTML', icon: 'logos:html-5'},
          { name: 'JavaScript', icon: 'logos:javascript' },
          { name: 'CSS', icon: 'logos:css-3' },
          { name: 'React.js', icon: 'logos:react' },
          { name: 'Vue.js', icon: 'logos:vue' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss' },
          { name: 'Next.js', icon: 'logos:nextjs' },
          { name: 'MongoDB', icon: 'logos:mongodb' },
          { name: 'Node.js', icon: 'logos:nodejs' },
          { name: 'Nuxt.js', icon: 'logos:nuxtjs-light' },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .skills {
    display: flex;
    flex-wrap: wrap;
  }
  
  .skill-item {
    margin: 10px;
    text-align: center;
  }
  
  .iconify {
    font-size: 3rem;
    color: #3498db;
    transition: transform 0.3s ease;
  }
  
  .iconify:hover {
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
    transform: scale(1.2);
  }
  
  .icon {
    cursor: pointer;
  }
  </style>
  