import { ProfileData } from '../types';

export const profileData: ProfileData = {
    personal: {
        name: "Muhammed Ajmal P",
        shortName: "Ajmal P",
        title: "WordPress Developer & SEO Specialist",
        location: "Malappuram, Kerala",
        email: "hi@moajmalp.in",
        phone: "9526271193",
        cvPath: "/assets/Ajmal-p-CV-01.pdf"
    },
    hero: {
        headline: "WordPress Developer | SEO Contributor | Software Tester",
        subtitle: "Building scalable websites and optimizing digital presence for businesses worldwide",
        cta: {
            downloadCV: "View Resume",
            contact: "Hire Me"
        }
    },
    about: {
        summary: "Experienced WordPress Developer and SEO Specialist with a proven track record in website development, search engine optimization, and digital marketing. Skilled in WordPress development, on-page and off-page SEO, content optimization, and website maintenance. Proficient in HTML, CSS, JavaScript, and PHP. Strong problem-solving abilities, excellent team collaboration skills, and adaptability to fast-paced environments. Currently pursuing advanced studies in Arabic Literature while maintaining active professional engagements in web development and SEO.",
        location: "Malappuram, Kerala"
    },
    biography: "Experienced WordPress Developer and SEO Specialist with a proven track record in website development, search engine optimization, and digital marketing. Skilled in WordPress development, on-page and off-page SEO, content optimization, and website maintenance. Proficient in HTML, CSS, JavaScript, and PHP. Strong problem-solving abilities, excellent team collaboration skills, and adaptability to fast-paced environments. Currently pursuing advanced studies in Arabic Literature while maintaining active professional engagements in web development and SEO.",
    skills: {
        technical: [
            {
                name: "WordPress Development",
                proficiency: 95,
                icon: "Code"
            },
            {
                name: "SEO (On/Off-page)",
                proficiency: 90,
                icon: "TrendingUp"
            },
            {
                name: "Content Optimization",
                proficiency: 88,
                icon: "FileText"
            },
            {
                name: "Website Maintenance",
                proficiency: 92,
                icon: "Settings"
            },
            {
                name: "HTML/CSS/JS",
                proficiency: 90,
                icon: "Layers"
            },
            {
                name: "PHP",
                proficiency: 85,
                icon: "Database"
            },
            {
                name: "Testing",
                proficiency: 88,
                icon: "CheckCircle"
            },
            {
                name: "Problem-solving",
                proficiency: 90,
                icon: "Lightbulb"
            },
            {
                name: "Team Collaboration",
                proficiency: 92,
                icon: "Users"
            },
            {
                name: "Adaptability",
                proficiency: 95,
                icon: "Zap"
            }
        ],
        languages: [
            {
                name: "English",
                level: "Proficient",
                proficiency: 95
            },
            {
                name: "Arabic",
                level: "Advanced (MA ongoing)",
                proficiency: 85
            },
            {
                name: "Urdu",
                level: "Diploma",
                proficiency: 80
            }
        ]
    },
    achievements: [
        {
            count: 12,
            label: "Projects Delivered",
            suffix: "+",
            icon: "Code"
        },
        {
            count: 1.5,
            label: "Years Experience",
            suffix: "+",
            icon: "Clock"
        },
        {
            count: 20,
            label: "Students Mentored",
            suffix: "+",
            icon: "Users"
        },
        {
            count: 30,
            label: "WordPress Customizations",
            suffix: "+",
            icon: "Settings"
        }
    ],
    experience: [
        {
            id: 1,
            title: "WordPress Developer & SEO Contributor",
            company: "CODO AI Innovations",
            location: "Remote",
            startDate: "June 2024",
            endDate: "October 2025",
            current: false,
            responsibilities: [
                "Developed and maintained WordPress websites with custom themes and plugins",
                "Implemented on-page and off-page SEO strategies, resulting in improved search rankings",
                "Optimized website performance, loading speeds, and user experience",
                "Collaborated with cross-functional teams to deliver high-quality web solutions",
                "Conducted SEO audits and provided actionable recommendations for content optimization"
            ]
        },
        {
            id: 2,
            title: "Software & Website Tester",
            company: "Annoor Online Academy",
            location: "Remote",
            startDate: "May 2024",
            endDate: "May 2025",
            current: false,
            responsibilities: [
                "Performed comprehensive testing of web applications and software products",
                "Identified and documented bugs, usability issues, and performance bottlenecks",
                "Created and executed test cases to ensure quality assurance standards",
                "Collaborated with development teams to resolve issues and improve product quality",
                "Maintained detailed test documentation and reports for stakeholders"
            ]
        },
        {
            id: 3,
            title: "Finance Coordinator / Albedo Educator",
            company: "Part-time Position",
            location: "Remote",
            startDate: "June 2025",
            endDate: "October 2025",
            current: false,
            responsibilities: [
                "Managed financial coordination tasks and maintained accurate records",
                "Delivered educational content and support as an Albedo Educator",
                "Balanced multiple responsibilities while maintaining high performance standards",
                "Collaborated with team members to ensure smooth operations",
                "Adapted quickly to changing requirements and priorities"
            ]
        }
    ],
    education: [
        {
            id: 1,
            degree: "MA in Arabic Literature",
            institution: "MANUU Hyderabad",
            location: "Hyderabad",
            startDate: "2024",
            endDate: "Present",
            current: true,
            description: "Pursuing Master's degree in Arabic Literature"
        },
        {
            id: 2,
            degree: "BA in Sociology",
            institution: "University of Calicut",
            location: "Calicut",
            startDate: "2020",
            endDate: "2023",
            current: false,
            description: "Bachelor's degree in Sociology"
        },
        {
            id: 3,
            degree: "Wafy — Coordination of Islamic Colleges",
            institution: "Coordination of Islamic Colleges",
            location: "Malappuram",
            startDate: "2017",
            endDate: "2025",
            current: false,
            description: "Completed Wafy program in Coordination of Islamic Colleges"
        }
    ],
    contact: {
        title: "Get In Touch",
        subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        form: {
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Send Message",
            sending: "Sending...",
            success: "Thank you! Your message has been sent successfully.",
            error: "Something went wrong. Please try again."
        }
    },
    seo: {
        baseUrl: "https://moajmalp.in",
        defaultTitle: "Muhammed Ajmal P - WordPress Developer & SEO Specialist",
        defaultDescription: "Professional WordPress Developer and SEO Specialist based in Malappuram, Kerala. Expert in website development, search engine optimization, and digital marketing.",
        defaultKeywords: "WordPress Developer, SEO Specialist, Web Developer, Digital Marketing, Website Development, Kerala",
        author: "Muhammed Ajmal P",
        ogImage: "/og-image.jpg"
    },
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform with product management, shopping cart, and secure checkout integration.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "#",
            codeUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Tailwind CSS to showcase creative work.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            liveUrl: "#",
            codeUrl: "#",
            featured: true
        },
        {
            id: 3,
            title: "SEO Dashboard",
            description: "An analytics dashboard for tracking website SEO performance, keyword rankings, and traffic tracking.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            tags: ["Vue.js", "D3.js", "Python"],
            liveUrl: "#",
            codeUrl: "#",
            featured: true
        }
    ],
    blogs: [
        {
            id: 1,
            title: "Mastering WordPress Performance",
            excerpt: "Learn how to optimize your WordPress site for lightning-fast load times and better SEO rankings.",
            date: "Oct 15, 2024",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
            tags: ["WordPress", "Performance", "SEO"],
            url: "/blog/mastering-wordpress-performance"
        },
        {
            id: 2,
            title: "The Future of SEO in 2025",
            excerpt: "Explore the upcoming trends in Search Engine Optimization and how AI is reshaping the landscape.",
            date: "Nov 02, 2024",
            image: "https://images.unsplash.com/photo-1572435555641-68dbbd68a5c1?w=800&q=80",
            tags: ["SEO", "AI", "Trends"],
            url: "/blog/future-of-seo-2025"
        },
        {
            id: 3,
            title: "Building Scalable React Apps",
            excerpt: "Best practices for structuring and maintaining large-scale React applications for long-term success.",
            date: "Nov 20, 2024",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
            tags: ["React", "Development", "Architecture"],
            url: "/blog/scalable-react-apps"
        }
    ],
    testimonials: [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Marketing Director",
            content: "Ajmal is an exceptional developer who delivered our project on time and exceeded our expectations. His SEO expertise also helped us double our traffic.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Startup Founder",
            content: "Working with Ajmal was a pleasure. He understood our vision perfectly and implemented it with great attention to detail. Highly recommended!",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Product Manager",
            content: "Technical skills are top-notch, but his communication and problem-solving abilities really set him apart. A true professional.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
        }
    ],
    faqs: [
        {
            question: "What services do you offer?",
            answer: "I offer a range of services including Custom WordPress Development, Website Performance Optimization, SEO Audits & Strategy, and Full-Stack Web Development using modern technologies like React."
        },
        {
            question: "How can I contact you for a project?",
            answer: "You can reach out to me via the Contact page form, email me directly at hi@moajmalp.in, or connect with me on LinkedIn. I usually respond within 24 hours."
        },
        {
            question: "Do you work as a freelancer?",
            answer: "Yes, I am available for freelance projects and contract work. I can work independently or integrate with your existing team."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "My core stack includes WordPress (PHP), React, TypeScript, Tailwind CSS, and Node.js. for SEO, I use various tools like Ahrefs, SEMrush, and Google Analytics."
        }
    ],
    certifications: [
        {
            title: "Advanced SEO Strategy",
            issuer: "Coursera",
            date: "2024",
            badge: "Award"
        },
        {
            title: "Full Stack Web Development",
            issuer: "Udemy",
            date: "2023",
            badge: "Code"
        },
        {
            title: "WordPress Expert Certification",
            issuer: "WordPress",
            date: "2022",
            badge: "CheckDecagram"
        },
        {
            title: "Google Analytics Certified",
            issuer: "Google",
            date: "2023",
            badge: "TrendingUp"
        }
    ]
};
