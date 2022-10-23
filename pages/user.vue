<script setup>
    definePageMeta({
        middleware: 'auth'
    })

    const user = useSupabaseUser();
    const {email} = user.value

</script>

<template>
<div class="flex justify-center mt-5">
    <h2 class="text-lg text-white">
        Hello {{email}}
    </h2>
</div>
</template>

