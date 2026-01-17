import Hero from '../components/home/Hero';
import WhatIDo from '../components/home/WhatIDo';
import TechStackSlider from '../components/home/TechStackSlider';
import Achievements from '../components/home/Achievements';
import WhyHireMe from '../components/home/WhyHireMe';
import WorkPhilosophy from '../components/home/WorkPhilosophy';
import CallToAction from '../components/home/CallToAction';
import ExperiencePreview from '../components/home/ExperiencePreview';
import GitHubStats from '../components/home/GitHubStats';
import EducationPreview from '../components/home/EducationPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import LearningNow from '../components/home/LearningNow';
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
            <WorkPhilosophy />
            <ExperiencePreview />
            <GitHubStats />
            <EducationPreview />
            <ProjectsPreview />
            <LearningNow />
            <Testimonials />
            <Certifications />
            <BlogPreview />
            <FAQ />
            <CallToAction />
        </>
    );
}
