"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit2, Trash2, Quote, X, AlertTriangle, User, Image as ImageIcon } from 'lucide-react';
import { profileData } from '../../data/profileData';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

interface TestimonialsTabProps {
    testimonials: Testimonial[];
    setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
    triggerToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export default function TestimonialsTab({ testimonials, setTestimonials, triggerToast }: TestimonialsTabProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
    const [deletingTestimonial, setDeletingTestimonial] = useState<Testimonial | null>(null);
    const [uploadTab, setUploadTab] = useState<'upload' | 'url'>('upload');
    const [isDragging, setIsDragging] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        avatar: ''
    });

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target?.result as string;
                setFormData(prev => ({ ...prev, avatar: base64 }));
                triggerToast("Avatar file uploaded successfully!", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                triggerToast("Only image files are supported.", "error");
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target?.result as string;
                setFormData(prev => ({ ...prev, avatar: base64 }));
                triggerToast("Avatar dropped successfully!", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    // Sync with localStorage
    useEffect(() => {
        const stored = localStorage.getItem('portfolio_testimonials');
        if (!stored) {
            localStorage.setItem('portfolio_testimonials', JSON.stringify(profileData.testimonials));
            setTestimonials(profileData.testimonials);
        } else {
            setTestimonials(JSON.parse(stored));
        }
    }, [setTestimonials]);

    // Save changes helper
    const saveTestimonials = (updatedTestimonials: Testimonial[]) => {
        setTestimonials(updatedTestimonials);
        localStorage.setItem('portfolio_testimonials', JSON.stringify(updatedTestimonials));
    };

    // Open add modal
    const handleOpenAdd = () => {
        setEditingTestimonial(null);
        setFormData({
            name: '',
            role: '',
            content: '',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80' // Default reviewer avatar
        });
        setFormErrors({});
        setUploadTab('upload');
        setIsFormOpen(true);
    };

    // Open edit modal
    const handleOpenEdit = (testimonial: Testimonial) => {
        setEditingTestimonial(testimonial);
        setFormData({
            name: testimonial.name,
            role: testimonial.role,
            content: testimonial.content,
            avatar: testimonial.avatar
        });
        setFormErrors({});
        setUploadTab(testimonial.avatar.startsWith('data:') ? 'upload' : 'url');
        setIsFormOpen(true);
    };

    // Validate and submit form
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors: typeof formErrors = {};

        if (!formData.name.trim()) errors.name = "Reviewer Name is required.";
        if (!formData.role.trim()) errors.role = "Company / Role is required.";
        if (!formData.content.trim()) errors.content = "Testimonial Content is required.";
        if (!formData.avatar.trim()) errors.avatar = "Avatar URL is required.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        if (editingTestimonial) {
            // Edit existing
            const updated = testimonials.map(t => 
                t.id === editingTestimonial.id 
                    ? {
                        ...t,
                        name: formData.name,
                        role: formData.role,
                        content: formData.content,
                        avatar: formData.avatar
                      }
                    : t
            );
            saveTestimonials(updated);
            triggerToast("Testimonial successfully updated", "success");
        } else {
            // Add new
            const newTestimonial: Testimonial = {
                id: Date.now(),
                name: formData.name,
                role: formData.role,
                content: formData.content,
                avatar: formData.avatar
            };
            saveTestimonials([newTestimonial, ...testimonials]);
            triggerToast("New testimonial successfully added", "success");
        }

        setIsFormOpen(false);
    };

    // Confirm and delete
    const handleDeleteConfirm = () => {
        if (deletingTestimonial) {
            const updated = testimonials.filter(t => t.id !== deletingTestimonial.id);
            saveTestimonials(updated);
            triggerToast("Testimonial deleted successfully", "info");
            setDeletingTestimonial(null);
        }
    };

    // Filter testimonials
    const filteredTestimonials = testimonials.filter(t => 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 text-left">
            {/* Top Workspace Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 p-4 rounded-2xl shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search testimonials by reviewer name, company, content..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                </div>
                <button
                    onClick={handleOpenAdd}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-400 text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-all focus:outline-none"
                >
                    <Plus className="w-4 h-4" />
                    Add Testimonial
                </button>
            </div>

            {/* Testimonials Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTestimonials.length > 0 ? (
                    filteredTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-lg relative group overflow-hidden"
                        >
                            {/* Quote details */}
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        {/* Avatar image */}
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 dark:bg-zinc-900 border border-gray-150/20 dark:border-white/5 flex-shrink-0 flex items-center justify-center">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80';
                                                }}
                                            />
                                        </div>
                                        <div className="min-w-0 text-left">
                                            <h5 className="font-extrabold text-sm text-gray-950 dark:text-white truncate">
                                                {testimonial.name}
                                            </h5>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider truncate">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <Quote className="w-8 h-8 text-primary-500/10 group-hover:text-primary-500/20 transition-colors flex-shrink-0" />
                                </div>
                                <p className="text-gray-650 dark:text-zinc-350 text-sm leading-relaxed text-left italic mb-6">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            {/* Actions block */}
                            <div className="border-t border-gray-100 dark:border-white/5 pt-4 flex justify-end gap-1.5 mt-auto">
                                <button
                                    onClick={() => handleOpenEdit(testimonial)}
                                    title="Edit Review"
                                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:text-primary-500 hover:bg-primary-500/10 transition-all focus:outline-none"
                                >
                                    <Edit2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => setDeletingTestimonial(testimonial)}
                                    title="Delete Review"
                                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-all focus:outline-none"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-16 text-center flex flex-col items-center justify-center bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-3xl p-8">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 mb-4">
                            <User className="w-6 h-6" />
                        </div>
                        <h5 className="font-bold text-gray-800 dark:text-white mb-1">No Testimonials Found</h5>
                        <p className="text-xs text-gray-400">Add a new testimonial or adjust your search.</p>
                    </div>
                )}
            </div>

            {/* Modal CRUD Editor Dialog */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-gray-200/50 dark:border-white/5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Close */}
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="border-b border-gray-200/50 dark:border-white/5 pb-4 mb-6 text-left">
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                                    {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                                </h3>
                                <p className="text-xs text-gray-400 font-medium mt-1">
                                    Fill in the fields below. Testimonials updates stay sandbox-isolated from production site.
                                </p>
                            </div>

                            {/* Inputs form */}
                            <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Reviewer Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                        placeholder="e.g. John Smith"
                                    />
                                    {formErrors.name && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.name}</span>}
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Company / Professional Role
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                        placeholder="e.g. CEO, NexusTech Industries"
                                    />
                                    {formErrors.role && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.role}</span>}
                                </div>

                                {/* Avatar Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                        Reviewer Avatar Image
                                    </label>
                                    
                                    {/* Tabs */}
                                    <div className="flex gap-2 mb-3 bg-gray-100/50 dark:bg-white/5 p-1 rounded-xl w-fit">
                                        <button
                                            type="button"
                                            onClick={() => setUploadTab('upload')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all focus:outline-none ${
                                                uploadTab === 'upload'
                                                    ? 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm'
                                                    : 'text-gray-405 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                        >
                                            Drag & Drop Upload
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setUploadTab('url')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all focus:outline-none ${
                                                uploadTab === 'url'
                                                    ? 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm'
                                                    : 'text-gray-405 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                        >
                                            Avatar URL
                                        </button>
                                    </div>

                                    {/* Dynamic content tab */}
                                    {uploadTab === 'upload' ? (
                                        <div
                                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                            onDragLeave={() => setIsDragging(false)}
                                            onDrop={handleDrop}
                                            onClick={() => document.getElementById('avatar-file-input')?.click()}
                                            className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                                                isDragging
                                                    ? 'border-primary-500 bg-primary-500/5'
                                                    : formData.avatar
                                                        ? 'border-gray-250/20 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-900/30'
                                                        : 'border-gray-200 dark:border-white/10 hover:border-primary-500/50 bg-gray-50/30 dark:bg-zinc-900/10'
                                            }`}
                                        >
                                            <input
                                                type="file"
                                                id="avatar-file-input"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                            {formData.avatar ? (
                                                <div className="flex items-center gap-4 text-left">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200/50 dark:border-white/5 flex-shrink-0">
                                                        <img src={formData.avatar} alt="Preview" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-xs font-extrabold text-gray-950 dark:text-white truncate">
                                                            Avatar loaded successfully
                                                        </p>
                                                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                                                            Click or drag a new file to change
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="py-2">
                                                    <ImageIcon className="w-6 h-6 text-gray-400 mx-auto mb-1.5" />
                                                    <p className="text-xs font-extrabold text-gray-950 dark:text-white leading-tight">
                                                        Drag & Drop image here or click
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={formData.avatar}
                                                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                                                className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                                placeholder="https://images.unsplash.com/photo-..."
                                            />
                                            {formData.avatar && (
                                                <div className="mt-2 flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/5 flex-shrink-0">
                                                        <img
                                                            src={formData.avatar}
                                                            alt="Mini Preview"
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                const target = e.target as HTMLImageElement;
                                                                target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80';
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-[10px] text-gray-400 font-semibold truncate">
                                                        Previewing avatar URL
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {formErrors.avatar && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.avatar}</span>}
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Review Content
                                    </label>
                                    <textarea
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        rows={4}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                                        placeholder="Write what the client said about your excellent work, support, or strategic capabilities..."
                                    />
                                    {formErrors.content && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.content}</span>}
                                </div>

                                {/* Footer actions */}
                                <div className="flex justify-end gap-2.5 border-t border-gray-200/50 dark:border-white/5 pt-4 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsFormOpen(false)}
                                        className="px-4 py-2 rounded-xl text-xs font-extrabold text-gray-550 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2 bg-primary-500 hover:bg-primary-400 text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-colors focus:outline-none"
                                    >
                                        Save Testimonial
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Warning Popup for Delete Confirmation */}
            <AnimatePresence>
                {deletingTestimonial && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-gray-200/50 dark:border-white/5 shadow-2xl text-center"
                        >
                            <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertTriangle className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2">
                                Delete Testimonial?
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                                Are you sure you want to remove the testimonial from <strong className="text-gray-950 dark:text-white">"{deletingTestimonial.name}"</strong>? This action will permanently remove it from your local catalog memory.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setDeletingTestimonial(null)}
                                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="px-5 py-2.5 bg-red-500 hover:bg-red-655 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-sm focus:outline-none"
                                >
                                    Yes, Delete Testimonial
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
