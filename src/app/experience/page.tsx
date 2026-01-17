import { Metadata } from 'next';
import ExperienceClient from './ExperienceClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Experience - ${profileData.personal.name} | Professional Journey`,
    description: `Professional experience of ${profileData.personal.name} including WordPress Development, SEO, and Software Testing roles.`,
    openGraph: {
        title: `Experience - ${profileData.personal.name}`,
        description: `Professional experience of ${profileData.personal.name} including WordPress Development, SEO, and Software Testing roles.`,
    },
};

export default function ExperiencePage() {
    return <ExperienceClient />;
}
