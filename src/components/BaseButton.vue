<script setup>
    defineProps({
        label: String,
        type:{
            type: String,
            default: 'button',//Default type is: button
        },
        styleClass: {
            type: String,
            default: 'primary',//Default class for styling
        },
        icons: String,
        loading: Boolean,
    });

    defineEmits(['click']);//Allows parent to listen for click events
</script>
<template>
    <button :type="type" :class="styleClass" :disabled="loading" @click="$emit('click')">
        <i v-if="icons && !loading" :class="icons"></i>
       <span v-if="loading" class="spinner"></span>
       {{ loading ? 'Loading...' : label }}
    </button>
</template>
<style>
    button:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .spinner{
        width: 14px;
        height: 14px;
        border: 2px solid white;
        border-top: 2px solid transparent;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }
    @keyframe spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            tansform: rotate(360deg);
        }
    }
</style>