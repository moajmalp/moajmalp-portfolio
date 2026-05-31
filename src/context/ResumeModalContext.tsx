"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, AlertCircle, FileText } from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeModalContextType {
  isViewModalOpen: boolean;
  isDownloadConfirmOpen: boolean;
  openViewModal: () => void;
  closeViewModal: () => void;
  openDownloadConfirm: () => void;
  closeDownloadConfirm: () => void;
  triggerDownload: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined);

export const useResumeModal = () => {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error('useResumeModal must be used within a ResumeModalProvider');
  }
  return context;
};

export const ResumeModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDownloadConfirmOpen, setIsDownloadConfirmOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when view modal opens
  useEffect(() => {
    if (isViewModalOpen) {
      setIsLoading(true);
    }
  }, [isViewModalOpen]);

  // Handle ESC key to close active modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDownloadConfirmOpen) {
          setIsDownloadConfirmOpen(false);
        } else if (isViewModalOpen) {
          setIsViewModalOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isViewModalOpen, isDownloadConfirmOpen]);

  const openViewModal = () => {
    setIsViewModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openDownloadConfirm = () => {
    setIsDownloadConfirmOpen(true);
  };

  const closeDownloadConfirm = () => {
    setIsDownloadConfirmOpen(false);
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = profileData.personal.cvPath;
    link.download = 'Muhammed-Ajmal-P-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloadConfirmOpen(false);
  };

  return (
    <ResumeModalContext.Provider
      value={{
        isViewModalOpen,
        isDownloadConfirmOpen,
        openViewModal,
        closeViewModal,
        openDownloadConfirm,
        closeDownloadConfirm,
        triggerDownload,
      }}
    >
      {children}

      {/* Global Modals Portal Stack */}
      <AnimatePresence>
        {/* 1. PDF Viewer Modal */}
        {isViewModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeViewModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Glassmorphic Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-250/50 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden select-text"
            >
              {/* Header Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-lg">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg tracking-tight leading-none">
                      Muhammed Ajmal P - CV
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Curriculum Vitae / Resume PDF
                    </span>
                  </div>
                </div>

                {/* Toolbar Actions */}
                <div className="flex items-center space-x-2">
                  {/* Open in New Tab (useful for mobile) */}
                  <a
                    href={profileData.personal.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 text-xs font-semibold"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </a>

                  {/* Download Trigger */}
                  <button
                    onClick={openDownloadConfirm}
                    className="bg-primary-500 hover:bg-primary-400 text-slate-950 px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 border-0 cursor-pointer"
                    title="Download Resume"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </button>

                  <div className="w-[1px] h-6 bg-gray-200 dark:bg-white/10 mx-1 hidden sm:block" />

                  {/* Close Trigger */}
                  <button
                    onClick={closeViewModal}
                    className="p-2 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Container Canvas */}
              <div className="flex-1 relative bg-gray-100 dark:bg-gray-950 overflow-hidden flex flex-col items-center justify-center">
                {isLoading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium animate-pulse">
                      Loading interactive PDF canvas...
                    </p>
                  </div>
                )}

                <iframe
                  src={`${profileData.personal.cvPath}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none z-10"
                  onLoad={() => setIsLoading(false)}
                  title="Muhammed Ajmal P Resume PDF"
                />

                {/* Standard Fallback / Mobile specific helper */}
                <div className="absolute bottom-4 left-4 right-4 z-20 md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200/50 dark:border-white/10 shadow-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
                    <AlertCircle className="w-4 h-4 text-primary-500 shrink-0" />
                    <span>PDF render options vary on mobile browsers.</span>
                  </div>
                  <a
                    href={profileData.personal.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 font-bold hover:underline shrink-0"
                  >
                    Open Directly
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 2. Download Confirmation Modal */}
        {isDownloadConfirmOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDownloadConfirm}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Glassmorphic Small Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 20, stiffness: 400 }}
              className="relative w-full max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/15 p-6 shadow-2xl overflow-hidden text-center"
            >
              {/* Decorative accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-sky-600" />

              {/* Dialog Content */}
              <div className="flex flex-col items-center gap-4 mt-2">
                <div className="p-3.5 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full">
                  <Download className="w-6 h-6 animate-pulse" />
                </div>

                <h3 className="font-extrabold text-gray-900 dark:text-white text-lg sm:text-xl tracking-tight mt-1">
                  Confirm Download
                </h3>
                <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed font-medium">
                  Would you like to download a local copy of <strong>Muhammed Ajmal's Resume</strong> PDF?
                </p>

                {/* Confirmation Options */}
                <div className="grid grid-cols-2 gap-3 w-full mt-4">
                  <button
                    onClick={closeDownloadConfirm}
                    className="py-3 px-4 rounded-xl border border-gray-250 dark:border-white/15 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95 transition-all text-xs sm:text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={triggerDownload}
                    className="py-3 px-4 rounded-xl bg-primary-500 hover:bg-primary-400 text-slate-950 font-extrabold shadow-lg shadow-primary-500/10 active:scale-95 transition-all text-xs sm:text-sm cursor-pointer"
                  >
                    Yes, Download
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ResumeModalContext.Provider>
  );
};
