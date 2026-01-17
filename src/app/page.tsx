import Hero from '../components/home/Hero';
import WhatIDo from '../components/home/WhatIDo';
import TechStackSlider from '../components/home/TechStackSlider';
import Achievements from '../components/home/Achievements';
import WhyHireMe from '../components/home/WhyHireMe';
import CallToAction from '../components/home/CallToAction';
import ExperiencePreview from '../components/home/ExperiencePreview';
import EducationPreview from '../components/home/EducationPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import BlogPreview from '../components/home/BlogPreview';
import Testimonials from '../components/home/Testimonials';
import Certifications from '../components/home/Certifications';
import FAQ from '../components/home/FAQ';

export default function Home() {
    return (
        <>
            <Hero />
            <WhatIDo />
            <TechStackSlider />
            <Achievements />
            <WhyHireMe />
            <ExperiencePreview />
            <EducationPreview />
            <ProjectsPreview />
            <Testimonials />
            <Certifications />
            <BlogPreview />
            <FAQ />
            <CallToAction />
        </>
    );
}
