import { Metadata } from 'next';
import DashboardClient from './DashboardClient';
import { profileData } from '../../../data/profileData';

export const metadata: Metadata = {
    title: `Admin Dashboard - ${profileData.personal.name}`,
    description: 'Manage projects, blogs, testimonials, and leads.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardPage() {
    return <DashboardClient />;
}
