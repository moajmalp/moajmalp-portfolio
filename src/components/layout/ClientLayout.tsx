"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from '../Footer';
import { initTheme } from '../../utils/theme';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        initTheme();
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
                <div className="opacity-0">{children}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
            <Navbar />
            <AnimatePresence mode="wait">
                <main key={pathname}>
                    {children}
                </main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
