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
    title: "Muhammed Ajmal P | Full Stack Developer",
    description: "Portfolio of Muhammed Ajmal P, a Full Stack Developer specializing in modern web technologies.",
    keywords: ["Full Stack Developer", "Muhammed Ajmal P", "Portfolio", "React", "Next.js", "Web Development"],
    authors: [{ name: "Muhammed Ajmal P" }],
    robots: "index, follow",
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
