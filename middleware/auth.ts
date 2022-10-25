export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    
    if (!user.value) {
       return navigateTo('/register')
    }
})