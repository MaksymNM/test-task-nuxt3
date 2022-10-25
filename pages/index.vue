<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const userData = reactive({
        email: '',
    })

    const user = useSupabaseUser();
    if(user.value) {
        userData.email = user.value.email;
    }
    

</script>

<template>
<div class="flex justify-center mt-5">
    <h2 class="text-lg text-white">
        Hello {{userData.email}}
    </h2>
</div>
</template>

