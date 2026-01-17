import { Metadata } from 'next';
import ContactClient from './ContactClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Contact - ${profileData.personal.name} | Get In Touch`,
    description: `Get in touch with ${profileData.personal.name} for web development, SEO services, or partnership opportunities.`,
    openGraph: {
        title: `Contact - ${profileData.personal.name}`,
        description: `Get in touch with ${profileData.personal.name} for web development, SEO services, or partnership opportunities.`,
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
