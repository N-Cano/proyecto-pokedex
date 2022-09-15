import { useAuthStore as auth} from '@/stores/auth';

export default async function () {
    if (! await auth().user()) return 'login'
}