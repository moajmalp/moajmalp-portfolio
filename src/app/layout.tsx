import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import ClientLayout from "../components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://moajmalp.in"),
    title: "Muhammed Ajmal P | Full Stack Developer & SEO Strategist",
    description: "Portfolio of Muhammed Ajmal P, a Full Stack Developer specializing in custom WordPress engineering, React, Next.js, and strategic SEO development.",
    keywords: ["Full Stack Developer", "Muhammed Ajmal P", "Portfolio", "WordPress Developer", "SEO Specialist", "React Developer", "Next.js Portfolio", "MANUU", "Arabic Literature scholar"],
    authors: [{ name: "Muhammed Ajmal P" }],
    robots: "index, follow",
    icons: {
        icon: "/assets/logo.png",
    },
    openGraph: {
        title: "Muhammed Ajmal P | Full Stack Developer & SEO Strategist",
        description: "Portfolio of Muhammed Ajmal P, a Full Stack Developer specializing in custom WordPress engineering, React, Next.js, and strategic SEO development.",
        url: "https://moajmalp.in",
        siteName: "Muhammed Ajmal P Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Muhammed Ajmal P | Full Stack Developer & SEO Strategist",
        description: "Portfolio of Muhammed Ajmal P, a Full Stack Developer specializing in custom WordPress engineering, React, Next.js, and strategic SEO development.",
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
