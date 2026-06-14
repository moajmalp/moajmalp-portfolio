import { Metadata } from 'next';
import HomeClient from '../components/home/HomeClient';
import { profileData } from '../data/profileData';

export const metadata: Metadata = {
    title: "Muhammed Ajmal P | Full Stack Developer & SEO Specialist",
    description: "Muhammed Ajmal P is a professional Full Stack Developer and SEO Specialist specializing in custom WordPress engineering, React, Next.js, and strategic SEO development.",
    keywords: ["Full Stack Developer", "Muhammed Ajmal P", "WordPress Developer", "SEO Specialist", "React Developer", "Kerala"],
    openGraph: {
        title: "Muhammed Ajmal P | Full Stack Developer & SEO Specialist",
        description: "Muhammed Ajmal P is a professional Full Stack Developer and SEO Specialist specializing in custom WordPress engineering, React, Next.js, and strategic SEO development.",
        url: "https://moajmalp.in",
        siteName: "Muhammed Ajmal P Portfolio",
        type: "website",
    },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": profileData.personal.name,
        "url": "https://moajmalp.in",
        "image": "https://moajmalp.in/profile.png",
        "jobTitle": "Full Stack Developer & SEO Specialist",
        "description": "Full‑Stack Developer specializing in custom WordPress engineering, React, Next.js, and strategic SEO systems.",
        "sameAs": [
            "https://github.com/moajmalp",
            "https://linkedin.com/in/moajmalp",
            "https://twitter.com/moajmalp"
        ],
        "knowsAbout": [
            "Web Development",
            "Software Engineering",
            "WordPress Development",
            "React.js",
            "Next.js",
            "Search Engine Optimization (SEO)",
            "Arabic Literature"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Maulana Azad National Urdu University (MANUU)"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomeClient />
        </>
    );
}
