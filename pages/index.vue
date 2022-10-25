<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const user = useSupabaseUser();
    const email = user.value.email;

</script>

<template>
<div class="flex justify-center mt-5">
    <h2 class="text-lg text-white">
        Hello {{email}}
    </h2>
</div>
</template>

