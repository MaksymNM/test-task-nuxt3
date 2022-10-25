<script setup lang="ts">
    import {CustomForm} from '~/types/form';

    const user = useSupabaseUser();
    const supabase = useSupabaseClient();

    const signInForm = reactive<CustomForm>({
        email: '',
        password: '',
    })

    supabase.auth.onAuthStateChange((event, session) => {
        if (session && user.value) {
            navigateTo('/')
        }
    })

    const signIn = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
            email: signInForm.email,
            password: signInForm.password,
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
        v-model="signInForm.email"
        />
        <input
        class="border-2 border-background rounded-md p-1"
        type="password"
        placeholder="Your password"
        v-model="signInForm.password"
        />
       
    </form>
    <button 
    @click="signIn"
    type="submit"
    class="w-200 bg-background rounded-md text-white p-1 cursor-pointer hover:text-gray-300">
    Sign In
    </button>
    <NuxtLink to="/register" class="hover:text-gray-300">
        Don't have an account.
    </NuxtLink>
</div>
</template>