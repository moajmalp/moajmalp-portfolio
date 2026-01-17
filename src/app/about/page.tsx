import { Metadata } from 'next';
import AboutClient from './AboutClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `About - ${profileData.personal.name} | ${profileData.personal.title}`,
    description: `Learn more about ${profileData.personal.name}, a ${profileData.personal.title} with expertise in web development and SEO.`,
    openGraph: {
        title: `About - ${profileData.personal.name}`,
        description: `Learn more about ${profileData.personal.name}, a ${profileData.personal.title} with expertise in web development and SEO.`,
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
