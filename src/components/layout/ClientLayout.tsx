"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from '../Footer';
import { initTheme } from '../../utils/theme';
import CustomCursor from '../common/CustomCursor';
import { ResumeModalProvider } from '../../context/ResumeModalContext';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [mouseCoords, setMouseCoords] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        initTheme();
        setMounted(true);

        const handleGlobalMouseMove = (e: MouseEvent) => {
            setMouseCoords({ x: e.clientX, y: e.clientY });
        };
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };
        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault();
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('copy', handleCopy as EventListener);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('copy', handleCopy as EventListener);
        };
    }, []);

    const isAdminRoute = pathname.startsWith('/admin') || pathname === '/login';

    if (!mounted) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
                <div className="opacity-0">{children}</div>
            </div>
        );
    }

    return (
        <ResumeModalProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
                {/* Custom Premium Handcrafted Cursor */}
                <CustomCursor />

                {/* Subtle Blueprint Architectural Coordinate System Grid */}
                <div className="fixed inset-0 blueprint-grid pointer-events-none z-0" />
                
                {/* Interactive Torch/Spotlight Follower */}
                <div 
                    className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500 opacity-50"
                    style={{
                        background: `radial-gradient(circle 400px at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(128, 128, 128, 0.05), transparent 100%)`
                    }}
                />

                {/* Foreground Main Application Stack */}
                <div className="relative z-10">
                    {!isAdminRoute && <Navbar />}
                    <AnimatePresence mode="wait">
                        <main key={pathname}>
                            {children}
                        </main>
                    </AnimatePresence>
                    {!isAdminRoute && <Footer />}
                </div>
            </div>
        </ResumeModalProvider>
    );
}

