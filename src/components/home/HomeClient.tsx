"use client";

import { useState, useEffect } from 'react';
import Hero from './Hero';
import WhatIDo from './WhatIDo';
import TechStackSlider from './TechStackSlider';
import Achievements from './Achievements';
import WhyHireMe from './WhyHireMe';
import WorkPhilosophy from './WorkPhilosophy';
import ExperiencePreview from './ExperiencePreview';
import GitHubStats from './GitHubStats';
import EducationPreview from './EducationPreview';
import ProjectsPreview from './ProjectsPreview';
import LearningNow from './LearningNow';
import BlogPreview from './BlogPreview';
import Testimonials from './Testimonials';
import Certifications from './Certifications';
import FAQ from './FAQ';
import CallToAction from './CallToAction';

// Skeletons
import HeroSkeleton from './skeletons/HeroSkeleton';
import CardSkeleton from './skeletons/CardSkeleton';
import AchievementSkeleton from './skeletons/AchievementSkeleton';

const HomeClient = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading for premium feel
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="bg-white dark:bg-[#050505]">
                <HeroSkeleton />
                <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
                <AchievementSkeleton />
                <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            </div>
        );
    }

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
};

export default HomeClient;
