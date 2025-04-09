<template>
    <div class="text-center text-3xl ">
        {{profile.firstName}}
        <div class="bg-red-400 p-48">Hello world</div>
    </div>
</template>
<script setup>
    import { ref, reactive } from 'vue';

    const name = ref('name');
    const profile = reactive({
        firstName: 'John',
        lastName: '',
        age: 0,
        password: 0,
    });

    console.log(name.value);
    console.log(profile.firstName);
    console.log(profile[lastName]);

</script>