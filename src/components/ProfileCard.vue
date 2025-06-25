<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 mx-auto">
        <div class="w-full h-60 sm:h-50 sm:w-40 md:h-80 md:w-70 bg-green-500 p-3">
            <div class="w-full h-full">
                <img loading="lazy" class="w-full h-full object cover rounded-xl shadow-xl":src="image" :alt="title">
            </div>
            <div>{{description}}</div>
        </div>
    </div>
</template>
<script setup>
    defineProps(
        {
           image: String,
           description: String,
           title: String
        }
    )
    
</script>