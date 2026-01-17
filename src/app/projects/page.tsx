import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Projects - ${profileData.personal.name} | Portfolio Collections`,
    description: `Browse through the various projects completed by ${profileData.personal.name}, showcasing web development and SEO capabilities.`,
    openGraph: {
        title: `Projects - ${profileData.personal.name}`,
        description: `Browse through the various projects completed by ${profileData.personal.name}, showcasing web development and SEO capabilities.`,
    },
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
