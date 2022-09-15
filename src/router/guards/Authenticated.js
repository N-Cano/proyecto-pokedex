import { useAuthStore } from '@/stores/auth';

export default async function () {
    const auth = useAuthStore()
    const user = auth.user()

    if (! user) {
        return 'login'
    }
}