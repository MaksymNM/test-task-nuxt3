<script setup>
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();

    const signout = async () => {
        await supabase.auth.signOut();
        navigateTo('/register');
    };
    console.log(user.value)

</script>

<template>
    <div class="h-50 px-10 flex items-center justify-between bg-background">
        <div class="text-lg text-white">
            Hello it is Test Task
        </div>
        
        <button v-if="user"  @click="signout" class="text-white hover:text-gray-500" >
            Sign Out
        </button>
        
    </div>
</template>