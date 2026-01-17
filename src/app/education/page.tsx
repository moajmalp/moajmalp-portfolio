import { Metadata } from 'next';
import EducationClient from './EducationClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Education - ${profileData.personal.name} | Academic Background`,
    description: `Educational background of ${profileData.personal.name} including MA in Arabic Literature, BA in Sociology, and academic achievements.`,
    openGraph: {
        title: `Education - ${profileData.personal.name}`,
        description: `Educational background of ${profileData.personal.name} including MA in Arabic Literature, BA in Sociology, and academic achievements.`,
    },
};

export default function EducationPage() {
    return <EducationClient />;
}
