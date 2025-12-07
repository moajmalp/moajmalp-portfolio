import { Helmet } from 'react-helmet-async';
import { profileData } from '../data/profileData';
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

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{profileData.seo.defaultTitle}</title>
        <meta name="description" content={profileData.seo.defaultDescription} />
        <meta name="keywords" content={profileData.seo.defaultKeywords} />
        <link rel="canonical" href={`${profileData.seo.baseUrl}/`} />
        <meta property="og:title" content={profileData.seo.defaultTitle} />
        <meta property="og:description" content={profileData.seo.defaultDescription} />
        <meta property="og:url" content={`${profileData.seo.baseUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${profileData.seo.baseUrl}${profileData.seo.ogImage}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profileData.personal.name,
            jobTitle: profileData.personal.title,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Malappuram',
              addressRegion: 'Kerala',
              addressCountry: 'IN'
            },
            email: profileData.personal.email,
            telephone: profileData.personal.phone,
            url: profileData.seo.baseUrl
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* What I Do Section */}
      <WhatIDo />

      {/* Tech Stack Slider */}
      <TechStackSlider />

      {/* Achievements Section */}
      <Achievements />

      {/* Why Hire Me Section */}
      <WhyHireMe />

      {/* Experience Preview Section */}
      <ExperiencePreview />

      {/* Education Preview Section */}
      <EducationPreview />

      {/* Projects Preview Section */}
      <ProjectsPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Certifications Section */}
      <Certifications />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
};

export default Home;
