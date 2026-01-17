import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { profileData } from '../../data/profileData';

export const metadata: Metadata = {
    title: `Blog - ${profileData.personal.name} | Insights & Articles`,
    description: `Read the latest insights, tutorials, and articles on web development and SEO from ${profileData.personal.name}.`,
    openGraph: {
        title: `Blog - ${profileData.personal.name}`,
        description: `Read the latest insights, tutorials, and articles on web development and SEO from ${profileData.personal.name}.`,
    },
};

export default function BlogPage() {
    return <BlogClient />;
}
