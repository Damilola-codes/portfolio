<script setup>
    import {HomeIcon, DocumentTextIcon, ArrowRightCircleIcon} from '@heroicons/vue/24/outline';
    import {gsap} from 'gsap';
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMounted } from 'vue';
    import ProjectCard from '../components/ProjectCard.vue';
    import ProfileCard from '../components/ProfileCard.vue'
    import ProjectReviewCard from '../components/ProjectReviewCard.vue';
    import {IconBrandX, IconBrandLinkedin} from '@tabler/icons-vue';
    import Service from '../components/Service.vue'
    import Testimonial from '../components/Testimonial.vue'
    import Contact from '../components/Contact.vue'
    import Footer from '../components/Footer.vue'
    // import local hero image from src/assets so the bundler includes it reliably
    import myPic from '../assets/my-pic.jpg';
    // public asset (served from /). Keep as a constant and bind it in template for consistency.
    const profilePic = '/profile-pic.jfif';
    
    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        gsap.to('.animate-scroll', {
            x: '-50%', //The .animate-scroll div's width is twice the width of one set of items.
            duration: 20,
            ease: 'linear',
            repeat: -1,
        });

        gsap.from('.hero-item', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        });

        gsap.from('.about-content', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%'
            }
        });

        gsap.from('.experience-item', {
            y: 50,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
                trigger: '#experience',
                start: 'top 80%'
            }
        });

        gsap.from('.project-card-item', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 80%'
            },
        });
    });

    const projects = [
        {
            image: '/image1.jpg',
            title: 'Damilola Portfolio.',
            description: 'My Personal Portfolio Site.',
            link: 'https://www.damilolcodes.xyz'
        },
        {
            image: '/image2.jpg',
            title: 'Tech Portfolio',
            description: 'Innovating with the latest tech.',
            link: 'https://wwww.crackk.space'
        },
        {
            image: '/lenno.png',
            title: 'Lenno',
            description: 'Freelancing Job Platform that helps you get your tasks done faster.',
            link: 'https://lenno.xyz'
        },
    ];
    const experiences = [
        {year: 'Sep. 2023 - 2024', role: 'Frontend Engineer', company: 'ALX AFRICA', logo: '/alx.jpeg', remote: true},
        {year: '2024 - Present', role: 'React.js Developer', company: 'Upwork', logo: '/upwork.png', remote: true},
        {year: '2024 - Present', role: 'Vue.js Developer', company: 'Upwork', logo: '/upwork.png', remote: true},
        {year: 'Feb - Jun 2024', role: 'Frontend Intern', company: 'Innkeeper', logo: '/innkeeper.png', remote: false, hybrid: true},
    ];

    // Helper to create initials for a simple logo if no image is provided
    const getInitials = (name) => {
        if (!name) return '';
        return name
            .split(' ')
            .map(w => w[0])
            .slice(0,2)
            .join('')
            .toUpperCase();
    }

</script>
<template>
    <section class="bg-[#f7f7f7] py-5 min-h-screen border-l border-r border-gray-300 font-sans 
                   mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-60">
            <header class="sticky top-0 z-50 bg-[#f7f7f7]/90 backdrop-blur-md border rounded-2xl border-gray-400 w-full md:w-[60%] mx-auto p-1 sm:p-1.5 my-2">
                <div class="flex place-items-center justify-between ">
                    <a href="#" class="p-1 sm:p-2 hover:bg-gray-200 rounded-xl">
                        <HomeIcon class="w-5 h-5 sm:w-6 sm:h-6"/>
                    </a>
                    <a href="https://x.com/damilolacodes" target="_blank" class="p-1 sm:p-2"><IconBrandX class="w-5 h-5 sm:w-6 sm:h-6"/></a>
                    <a href="https://linkedin.com/in/damilolacodes001" target="_blank" class="p-1 sm:p-2"><IconBrandLinkedin class="w-5 h-5 sm:w-6 sm:h-6"/></a>
                    <a href="/Damilola_Odeyemi_Frontend_Resume_2025.pdf">
                        <DocumentTextIcon class="w-5 h-5 sm:w-6 sm:h-6 mx-1 sm:mx-2 cursor-pointer"/>
                    </a>
                    <a href="https://calendly.com/damilola-codes">
                        <button class="text-white bg-black rounded-xl py-1.5 px-3 sm:py-2 sm:px-4 text-sm sm:text-base cursor-pointer">Book a call</button>
                    </a>
                </div>
            </header>

            <!--HERO/INRO SECTION-->
        <div class="px-4 sm:px-6 md:px-8 py-10 sm:py-12 max-w-lg md:max-w-3xl md:mx-auto text-center sm:text-left">
            <div class="flex justify-self-start hero-item">
                <img loading="lazy" :src="myPic" class="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mx-auto sm:mx-0" alt="Damilola Codes">
            </div>
            <div class="py-4 sm:py-5 text-left">
                <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold w-full hero-item mb-1">Hey, I'm Damilola Codes.</h2>
                <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold md-3 w-full hero-item"> Software Engineer.</h2>
            </div>
            
            <div class="w-full text-gray-500 leading-relaxed hero-item text-sm text-left sm:text-base">Creating seamless experiences with bold visuals and building scalable system designs. <br/> A creative thinker, innovator, and approachable collaborator.</div>
            <div class="flex items-center gap-4 py-5 hero-item">
                <a href="#contact">
                    <button class="text-white bg-black rounded-xl py-2 px-4 text-sm sm:text-base">Hire Me!</button>
                </a>
                <button class="bg-green-200 text-green-500 rounded-full py-2 px-4 text-sm sm:text-base"><span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-ping"></span> 
  <span class="hidden sm:inline">Available to new projects</span>
  <span class="inline sm:hidden">Open to Work</span>
</button>
            </div>
        </div>
        
        <!--PROJECT HIGHLIGHTS-->
        <section id="project-highlights" class="relative  pb-10 overflow-hidden 
                        xl:-ml-60 xl:w-[calc(100%+30rem)]
                        lg:-ml-32 lg:w-[calc(100%+16rem)]
                        md:-ml-16 md:w-[calc(100%+8rem)]
                        sm:-ml-8 sm:w-[calc(100%+4rem)]
                        -ml-4 w-[calc(100%+2rem)]">
            <div class="flex animate-scroll w-max"> 


            <div class="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
            <ProjectReviewCard
            imageSrc="/lenno.png"
            altText="Nature Nest Website"
            borderColor="#e2e8f0"
            class="p-4 sm:p-6 md:p-8 lg:p-12"/>
            </div>
            
            <div class="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
            <ProjectReviewCard
            imageSrc="/herobg.png" 
            altText="Another Project Showcase"
            borderColor="#e2e8f0"
            class="p-4 sm:p-6 md:p-8 lg:p-12"/>
            </div>
            
            <div class="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
            <ProjectReviewCard
            imageSrc="/image2.jpg"
            altText="Third Project Example"
            borderColor="#e2e8f0"
            class="p-4 sm:p-6 md:p-8 lg:p-12"/>
            </div>
            
            
            <div class="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
            <ProjectReviewCard
            imageSrc="/lenno.png"
            altText="Freelancing Website"
            borderColor="#e2e8f0"
            class="p-4 sm:p-6 md:p-8 lg:p-12"/>
            </div>
            
            <div class="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
            <ProjectReviewCard
            imageSrc="/herobg.png"
            altText="Another Project Showcase"
            borderColor="#e2e8f0"
            class="p-4 sm:p-6 md:p-8 lg:p-12"/>
            </div>
            
            <div class="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
            <ProjectReviewCard
            imageSrc="/image2.jpg"
            altText="Third Project Example"
            borderColor="#e2e8f0"
            class="p-4 sm:p-6 md:p-8 lg:p-12"/>
            </div>
            </div>
        </section>

        <!--ABOUT SECTION-->
<section id="about" class="px-4 sm:px-6 md:px-8 py-10 sm:py-12 max-w-lg md:max-w-3xl md:mx-auto text-left">
    <!-- Text Content -->
    <div class="pb-24 about-content">
      <h3 class="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-5 md:text-3xl underline">About.</h3>
      <p class="text-sm sm:text-base md:text-lg leading-relaxed text-gray-500">
        Hi, I’m Damilola; a software engineer with a focus on frontend development.<br/>
I design and build performant, accessible, and scalable web interfaces using modern frameworks like Typescript, VueJS, ReactJS, and NEXTJS.<br/>
With a solid understanding of UX principles, responsive design, and frontend architecture, I help teams and businesses create digital experiences that are both intuitive and impactful.
<br></br>From prototypes to production-ready apps, I deliver frontend solutions that feel effortless to use and powerful under the hood.
      </p>
    </div>

    <!-- Tilted Image Container -->
    <div class="flex justify-center about-content">
        <div class="relative w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto">
            <div class="bg-green-200 transform rotate-6 sm:rotate-12 rounded-xl p-1 sm:p-2">
                <img
                    :src="profilePic"
                    alt="About Damilola"
                    class="w-full h-auto object-cover rounded-xl transform -rotate-6 sm:-rotate-12 shadow-lg"
                />
            </div>
        </div> 
    </div>
</section>


                <!-- EXPERIENCE SECTION  -->
                <section id="experience" class="px-4 sm:px-6 md:px-8 py-10 sm:py-12 max-w-lg md:max-w-3xl md:mx-auto">
    <div class="max-w-5xl mx-auto">
        <h3 class="text-3xl sm:text-4xl font-semibold mb-8 underline">Work Experience.</h3>

        <div class="space-y-4">
            <div
                v-for="(exp, index) in experiences"
                :key="index"
                class="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl p-4 shadow-sm"
            >
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <div class="w-12 h-12 sm:w-14 md:w-16 rounded-md overflow-hidden bg-gray-100">
                        <template v-if="exp.logo">
                            <img :src="exp.logo" :alt="exp.company + ' logo'" class="w-full h-full object-cover" />
                        </template>
                        <template v-else>
                            <div class="w-full h-full flex items-center justify-center text-sm sm:text-base font-semibold text-gray-800">{{ getInitials(exp.company) }}</div>
                        </template>
                    </div>
                </div>

                <!-- Company + meta inline, role below -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-3 min-w-0">
                            <h4 class="text-base sm:text-lg md:text-xl font-semibold text-gray-800 truncate">{{ exp.company }} •</h4>
                            <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                                <span>{{ exp.year }}</span> •
                                <span v-if="exp.remote" class="inline-block bg-green-50 text-green-700 text-xs sm:text-sm px-2 py-0.5 rounded-full">Remote</span>
                                <span v-if="exp.hybrid" class="inline-block bg-yellow-50 text-yellow-700 text-xs sm:text-sm px-2 py-0.5 rounded-full">Hybrid</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm sm:text-base md:text-lg text-gray-600 mt-2 truncate">{{ exp.role }}</p>
                </div>
            </div>
        </div>
    </div>
</section>

        <!--Projects-->
        <section id="projects" class="py-8 sm:py-10">
            <h3 class="flex justify-center pb-12 place-items-center text-xl sm:text-2xl md:text-3xl font-semibold text-center">Check What I've Been Up To</h3>
             <div class="flex flex-wrap gap-4 sm:gap-6 justify-center px-2 sm:px-4"> 
                <ProjectCard 
                v-for="(project, index) in projects"
                :key="index"
                :image="project.image"
                :title="project.title"
                :description="project.description"
                :link="project.link"
                class="w-full max-w-sm project-card-item"/> <!-- ProjectCard itself should handle internal responsiveness -->
            </div>
            <div class="flex justify-center items-center py-10">
  <button class="bg-gray-700 text-white py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition">
    View All
    <ArrowRightCircleIcon class="w-6 h-6 text-white" />
  </button>
</div>
        </section>
            <Service/>
            <Testimonial/>
            <Contact/>
        <Footer/>
    </section>
</template>
