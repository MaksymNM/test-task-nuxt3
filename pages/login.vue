<script setup>
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();

    const email = ref('');
    const password = ref('');

    watchEffect(() => {
        if(user.value) {
            navigateTo('/user')
        } 
    });

    const signIn = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
            })
            if(error) {
                throw error
            }
            return {data, error}
        } catch (e) {
            throw e
        }
    }

</script>

<template>
<div class="flex flex-col items-center gap-2 mt-3">
    <h2 class="text-white ">
        Sign In
    </h2>
    <form @submit.prevent="signIn"  class="flex flex-col gap-2 w-200">
        <input
        class="border-2 border-background rounded-md p-1 "
        type="email"
        placeholder="Your email"
        v-model="email"
        />
        <input
        class="border-2 border-background rounded-md p-1"
        type="password"
        placeholder="Your password"
        v-model="password"
        />
        <input
        class="bg-background rounded-md text-white p-1 cursor-pointer hover:text-gray-300"
        type="submit"
        :value="'Sign In'"
        />
    </form>
    <NuxtLink to="/" class="hover:text-gray-300">
        Don't have an account.
    </NuxtLink>
</div>
</template>