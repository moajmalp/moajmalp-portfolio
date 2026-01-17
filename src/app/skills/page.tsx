import { Metadata } from 'next';
import SkillsClient from './SkillsClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Skills - ${profileData.personal.name} | Technical Expertise`,
    description: `Explore the technical skills and proficiencies of ${profileData.personal.name}, including Web Development, SEO, and various technologies.`,
    openGraph: {
        title: `Skills - ${profileData.personal.name}`,
        description: `Explore the technical skills and proficiencies of ${profileData.personal.name}, including Web Development, SEO, and various technologies.`,
    },
};

export default function SkillsPage() {
    return <SkillsClient />;
}
