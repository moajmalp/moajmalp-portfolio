import { Metadata } from 'next';
import LoginClient from './LoginClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Login - ${profileData.personal.name}`,
    description: 'Login to access your dashboard and manage your portfolio.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
    return <LoginClient />;
}
