"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Trash2, Check, CheckSquare, Eye, X, Calendar, AlertCircle } from 'lucide-react';

export interface Lead {
    id: number;
    name: string;
    email: string;
    message: string;
    date: string;
    status: 'unread' | 'read' | 'replied';
}

interface LeadsTabProps {
    leads: Lead[];
    setLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
    triggerToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const INITIAL_MOCK_LEADS: Lead[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        email: "sarah@nexustech.io",
        message: "Hello Ajmal! I am the marketing director at NexusTech. We are looking to fully rebuild our primary corporate website in WordPress. We need a state-of-the-art glassmorphism design, fast Core Web Vitals performance, and a robust on-page SEO layout structure. Our budget is around $6,000. Would love to schedule a quick zoom call to discuss our brief!",
        date: "May 29, 2026, 04:30 PM",
        status: "unread"
    },
    {
        id: 2,
        name: "Michael Chen",
        email: "mchen@albedo.edu",
        message: "Hi Muhammed, I represent the Albedo Online Education portal. We recently noticed our student dashboards are loading very slowly, leading to support complaints. We need a highly skilled WordPress/PHP performance expert to perform an extensive query audit, implement Redis caching, and optimize database indexing. Looking forward to your response.",
        date: "May 28, 2026, 11:15 AM",
        status: "read"
    },
    {
        id: 3,
        name: "Khalid Al-Mansoori",
        email: "khalid@klashra.ae",
        message: "Excellent work on our tourism booking landing pages! We got 45 new qualified luxury trip leads in the last week alone thanks to your funnel optimization. We want to sign a monthly SEO retainer agreement with you starting next month to manage our local listings and citation building. Please send over your contract options.",
        date: "May 25, 2026, 02:40 PM",
        status: "replied"
    }
];

export default function LeadsTab({ leads, setLeads, triggerToast }: LeadsTabProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'read' | 'replied'>('all');
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [deletingLead, setDeletingLead] = useState<Lead | null>(null);

    // Initialize leads if empty
    useEffect(() => {
        const stored = localStorage.getItem('portfolio_leads');
        if (!stored) {
            localStorage.setItem('portfolio_leads', JSON.stringify(INITIAL_MOCK_LEADS));
            setLeads(INITIAL_MOCK_LEADS);
        } else {
            setLeads(JSON.parse(stored));
        }
    }, [setLeads]);

    // Save changes helper
    const saveLeads = (updatedLeads: Lead[]) => {
        setLeads(updatedLeads);
        localStorage.setItem('portfolio_leads', JSON.stringify(updatedLeads));
    };

    const handleToggleStatus = (id: number, currentStatus: 'unread' | 'read' | 'replied') => {
        const nextStatus: typeof currentStatus = currentStatus === 'unread' ? 'read' : 'unread';
        const updated = leads.map(lead => 
            lead.id === id ? { ...lead, status: nextStatus } : lead
        );
        saveLeads(updated);
        triggerToast(`Lead marked as ${nextStatus}`, 'info');
    };

    const handleMarkReplied = (id: number) => {
        const updated = leads.map(lead => 
            lead.id === id ? { ...lead, status: 'replied' as const } : lead
        );
        saveLeads(updated);
        triggerToast("Lead marked as Replied", 'success');
        if (selectedLead && selectedLead.id === id) {
            setSelectedLead({ ...selectedLead, status: 'replied' });
        }
    };

    const handleDeleteLead = (id: number) => {
        const updated = leads.filter(lead => lead.id !== id);
        saveLeads(updated);
        triggerToast("Lead successfully deleted", 'info');
        if (selectedLead && selectedLead.id === id) {
            setSelectedLead(null);
        }
    };

    const handleViewLead = (lead: Lead) => {
        setSelectedLead(lead);
        if (lead.status === 'unread') {
            const updated = leads.map(l => 
                l.id === lead.id ? { ...l, status: 'read' as const } : l
            );
            saveLeads(updated);
        }
    };

    // Filters
    const filteredLeads = leads.filter(lead => {
        const matchesSearch = 
            lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.message.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Counts
    const unreadCount = leads.filter(l => l.status === 'unread').length;
    const repliedCount = leads.filter(l => l.status === 'replied').length;

    return (
        <div className="space-y-6 text-left">
            {/* Header statistics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-2xl p-5 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Leads</p>
                    <h4 className="text-3xl font-black text-gray-900 dark:text-white">{leads.length}</h4>
                </div>
                <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Unread Inbox</p>
                    <h4 className="text-3xl font-black text-primary-500">{unreadCount}</h4>
                    {unreadCount > 0 && (
                        <div className="absolute right-4 top-4 w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    )}
                </div>
                <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-2xl p-5 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Followed Up</p>
                    <h4 className="text-3xl font-black text-green-500">{repliedCount}</h4>
                </div>
            </div>

            {/* Toolbar search & filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 p-4 rounded-2xl shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search leads by name, email, query..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                </div>
                <div className="flex gap-2">
                    {(['all', 'unread', 'read', 'replied'] as const).map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setStatusFilter(filter)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                                statusFilter === filter
                                    ? 'bg-primary-500 text-slate-950 font-black'
                                    : 'bg-gray-150/50 dark:bg-white/5 text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Leads List rendering */}
            <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-100 dark:divide-white/5">
                    {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead) => (
                            <div
                                key={lead.id}
                                className={`p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-all duration-150 ${
                                    lead.status === 'unread' ? 'bg-primary-500/5' : ''
                                }`}
                            >
                                {/* Lead Sender info */}
                                <div className="min-w-0 flex-1 cursor-pointer" onClick={() => handleViewLead(lead)}>
                                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                                        <h5 className="font-extrabold text-sm text-gray-950 dark:text-white truncate">
                                            {lead.name}
                                        </h5>
                                        {lead.status === 'unread' ? (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-primary-500 text-slate-950">
                                                New
                                            </span>
                                        ) : lead.status === 'replied' ? (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/20">
                                                Replied
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2 truncate">
                                        <Mail className="w-3.5 h-3.5 text-gray-400/80" />
                                        <span>{lead.email}</span>
                                        <span>•</span>
                                        <span>{lead.date}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-zinc-300 text-sm line-clamp-2 leading-relaxed">
                                        {lead.message}
                                    </p>
                                </div>

                                {/* Leads Quick action items */}
                                <div className="flex items-center gap-1.5 self-end md:self-center flex-shrink-0">
                                    <button
                                        onClick={() => handleViewLead(lead)}
                                        title="View inquiry"
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleToggleStatus(lead.id, lead.status)}
                                        title={lead.status === 'unread' ? "Mark as Read" : "Mark as Unread"}
                                        className={`p-2 rounded-lg transition-colors ${
                                            lead.status === 'unread'
                                                ? 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:bg-green-500/10 hover:text-green-500'
                                                : 'bg-green-500/10 text-green-500 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-400'
                                        }`}
                                    >
                                        <Check className="w-4 h-4" />
                                    </button>
                                    {lead.status !== 'replied' && (
                                        <button
                                            onClick={() => handleMarkReplied(lead.id)}
                                            title="Mark as Replied"
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                                        >
                                            <CheckSquare className="w-4 h-4" />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setDeletingLead(lead)}
                                        title="Delete lead"
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 text-gray-400 rounded-2xl flex items-center justify-center mb-4">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h5 className="font-bold text-gray-800 dark:text-white mb-1">No Leads Found</h5>
                            <p className="text-xs text-gray-400">
                                Try adjusting your search query or status filter.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Detailed Lead modal screen */}
            <AnimatePresence>
                {selectedLead && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 15 }}
                            className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-gray-200/50 dark:border-white/5 shadow-2xl relative"
                        >
                            {/* Modal Close */}
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Header */}
                            <div className="border-b border-gray-200/50 dark:border-white/5 pb-4 mb-6 text-left">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 mb-3">
                                    Inquiry Detail
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                                    {selectedLead.name}
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2.5 text-xs font-semibold text-gray-400">
                                    <a
                                        href={`mailto:${selectedLead.email}`}
                                        className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1.5"
                                    >
                                        <Mail className="w-3.5 h-3.5" />
                                        {selectedLead.email}
                                    </a>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                                        {selectedLead.date}
                                    </span>
                                </div>
                            </div>

                            {/* Message content */}
                            <div className="bg-gray-50 dark:bg-zinc-900/40 border border-gray-200/20 dark:border-white/5 rounded-2xl p-5 text-sm leading-relaxed text-gray-700 dark:text-zinc-200 max-h-96 overflow-y-auto text-left whitespace-pre-wrap">
                                {selectedLead.message}
                            </div>

                            {/* Actions footer */}
                            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200/50 dark:border-white/5">
                                <button
                                    onClick={() => setDeletingLead(selectedLead)}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-red-500 hover:bg-red-500/5 transition-colors focus:outline-none"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    Delete Lead
                                </button>
                                <div className="flex gap-2">
                                    {selectedLead.status !== 'replied' ? (
                                        <button
                                            onClick={() => handleMarkReplied(selectedLead.id)}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-slate-950 rounded-xl text-xs font-black hover:bg-primary-400 shadow-sm focus:outline-none transition-colors"
                                        >
                                            <Check className="w-4 h-4" />
                                            Mark as Followed Up
                                        </button>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-green-500/10 text-green-500 rounded-xl text-xs font-bold border border-green-500/20">
                                            <Check className="w-4 h-4" />
                                            Followed Up
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            {/* Warning Popup for Delete Confirmation */}
            <AnimatePresence>
                {deletingLead && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-gray-200/50 dark:border-white/5 shadow-2xl text-center"
                        >
                            <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertCircle className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2">
                                Delete Customer Lead?
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                                Are you sure you want to remove the lead from <strong className="text-gray-950 dark:text-white">"{deletingLead.name}"</strong>? This action will permanently remove this customer inquiry.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setDeletingLead(null)}
                                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        handleDeleteLead(deletingLead.id);
                                        setDeletingLead(null);
                                    }}
                                    className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-sm focus:outline-none"
                                >
                                    Yes, Delete Lead
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
