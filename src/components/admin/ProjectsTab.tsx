"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit2, Trash2, Globe, ExternalLink, X, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { profileData } from '../../data/profileData';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
    featured: boolean;
}

interface ProjectsTabProps {
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    triggerToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export default function ProjectsTab({ projects, setProjects, triggerToast }: ProjectsTabProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [deletingProject, setDeletingProject] = useState<Project | null>(null);
    const [uploadTab, setUploadTab] = useState<'upload' | 'url'>('upload');
    const [isDragging, setIsDragging] = useState(false);

    // Form inputs state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        tagsString: '',
        liveUrl: '',
        codeUrl: '',
        featured: true
    });

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target?.result as string;
                setFormData(prev => ({ ...prev, image: base64 }));
                triggerToast("Image file uploaded successfully!", "success");
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
                setFormData(prev => ({ ...prev, image: base64 }));
                triggerToast("Image dropped successfully!", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    // Sync with localStorage
    useEffect(() => {
        const stored = localStorage.getItem('portfolio_projects');
        if (!stored) {
            localStorage.setItem('portfolio_projects', JSON.stringify(profileData.projects));
            setProjects(profileData.projects);
        } else {
            setProjects(JSON.parse(stored));
        }
    }, [setProjects]);

    // Save changes helper
    const saveProjects = (updatedProjects: Project[]) => {
        setProjects(updatedProjects);
        localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
    };

    // Open add modal
    const handleOpenAdd = () => {
        setEditingProject(null);
        setFormData({
            title: '',
            description: '',
            image: '/assets/kugoriental.png', // Default premium mock image
            tagsString: 'WordPress, PHP, LMS',
            liveUrl: '',
            codeUrl: '',
            featured: true
        });
        setFormErrors({});
        setUploadTab('upload');
        setIsFormOpen(true);
    };

    // Open edit modal
    const handleOpenEdit = (project: Project) => {
        setEditingProject(project);
        setFormData({
            title: project.title,
            description: project.description,
            image: project.image,
            tagsString: project.tags.join(', '),
            liveUrl: project.liveUrl,
            codeUrl: project.codeUrl,
            featured: project.featured
        });
        setFormErrors({});
        setUploadTab(project.image.startsWith('data:') ? 'upload' : 'url');
        setIsFormOpen(true);
    };

    // Validate and submit form
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors: typeof formErrors = {};

        if (!formData.title.trim()) errors.title = "Project Title is required.";
        if (!formData.description.trim()) errors.description = "Description is required.";
        if (!formData.image.trim()) errors.image = "Mock Image URL is required.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const parsedTags = editingProject ? editingProject.tags : [];

        if (editingProject) {
            // Edit existing
            const updated = projects.map(p => 
                p.id === editingProject.id 
                    ? {
                        ...p,
                        title: formData.title,
                        description: formData.description,
                        image: formData.image,
                        tags: parsedTags,
                        liveUrl: formData.liveUrl,
                        codeUrl: formData.codeUrl,
                        featured: formData.featured
                      }
                    : p
            );
            saveProjects(updated);
            triggerToast("Project successfully updated", "success");
        } else {
            // Add new
            const newProject: Project = {
                id: Date.now(),
                title: formData.title,
                description: formData.description,
                image: formData.image,
                tags: parsedTags,
                liveUrl: formData.liveUrl,
                codeUrl: formData.codeUrl,
                featured: formData.featured
            };
            saveProjects([newProject, ...projects]);
            triggerToast("New project successfully created", "success");
        }

        setIsFormOpen(false);
    };

    // Confirm and delete
    const handleDeleteConfirm = () => {
        if (deletingProject) {
            const updated = projects.filter(p => p.id !== deletingProject.id);
            saveProjects(updated);
            triggerToast("Project deleted successfully", "info");
            setDeletingProject(null);
        }
    };

    // Filter projects
    const filteredProjects = projects.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-6 text-left">
            {/* Top Workspace Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 p-4 rounded-2xl shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search projects by title, stack tags..."
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
                    Add Project
                </button>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-[2rem] p-4 flex flex-col justify-between shadow-xl hover:border-primary-500/35 transition-all duration-300 relative overflow-hidden"
                        >
                            <div>
                                {/* Mock Screenshot */}
                                <div className="relative aspect-[16/10] bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden mb-4 border border-gray-150/20 dark:border-white/5 flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80';
                                        }}
                                    />
                                    {project.featured && (
                                        <span className="absolute top-3 left-3 bg-primary-500 text-slate-950 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md z-10">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Title & details */}
                                <div className="px-1 text-left">
                                    <h4 className="font-extrabold text-lg text-gray-950 dark:text-white mb-2 truncate">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-500 dark:text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                </div>
                            </div>

                            {/* CRUD Control Bar */}
                            <div className="border-t border-gray-200/50 dark:border-white/5 pt-3 mt-4 flex items-center justify-between px-1">
                                {project.liveUrl ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                                    >
                                        <Globe className="w-3.5 h-3.5" />
                                        <span>Live Preview</span>
                                        <ExternalLink className="w-2.5 h-2.5" />
                                    </a>
                                ) : (
                                    <span className="text-xs font-semibold text-gray-400">Offline Mockup</span>
                                )}

                                <div className="flex items-center gap-1 flex-shrink-0">
                                    <button
                                        onClick={() => handleOpenEdit(project)}
                                        title="Edit Project"
                                        className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:text-primary-500 hover:bg-primary-500/10 transition-all"
                                    >
                                        <Edit2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={() => setDeletingProject(project)}
                                        title="Delete Project"
                                        className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-all"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-16 text-center flex flex-col items-center justify-center bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-3xl p-8">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 mb-4">
                            <ImageIcon className="w-6 h-6" />
                        </div>
                        <h5 className="font-bold text-gray-800 dark:text-white mb-1">No Projects Found</h5>
                        <p className="text-xs text-gray-400">Add a new project or adjust your search.</p>
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
                            className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-gray-200/50 dark:border-white/5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
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
                                    {editingProject ? 'Edit Portfolio Project' : 'Add New Portfolio Project'}
                                </h3>
                                <p className="text-xs text-gray-400 font-medium mt-1">
                                    Fill in the fields below. Test data stays sandbox-isolated.
                                </p>
                            </div>

                            {/* Inputs form */}
                            <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                                {/* Title */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Project Title
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                        placeholder="e.g. Albedo Corporate Hub"
                                    />
                                    {formErrors.title && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.title}</span>}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Project Description
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        rows={3}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                                        placeholder="Brief paragraph detailing visual aesthetics and technical goals..."
                                    />
                                    {formErrors.description && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.description}</span>}
                                </div>

                                {/* Banner Image Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                        Banner Image
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
                                            Image URL
                                        </button>
                                    </div>

                                    {/* Dynamic content tab */}
                                    {uploadTab === 'upload' ? (
                                        <div
                                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                            onDragLeave={() => setIsDragging(false)}
                                            onDrop={handleDrop}
                                            onClick={() => document.getElementById('project-file-input')?.click()}
                                            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                                                isDragging
                                                    ? 'border-primary-500 bg-primary-500/5'
                                                    : formData.image
                                                        ? 'border-gray-250/20 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-900/30'
                                                        : 'border-gray-200 dark:border-white/10 hover:border-primary-500/50 bg-gray-50/30 dark:bg-zinc-900/10'
                                            }`}
                                        >
                                            <input
                                                type="file"
                                                id="project-file-input"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                            {formData.image ? (
                                                <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
                                                    <div className="w-24 h-16 rounded-lg overflow-hidden border border-gray-200/50 dark:border-white/5 flex-shrink-0">
                                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-xs font-extrabold text-gray-950 dark:text-white truncate">
                                                            Image loaded successfully
                                                        </p>
                                                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                                                            Click or drag a new file to change
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="py-2">
                                                    <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-xs font-extrabold text-gray-950 dark:text-white">
                                                        Drag & Drop image here or click to browse
                                                    </p>
                                                    <p className="text-[10px] text-gray-400 mt-1 font-medium">
                                                        Supports PNG, JPG, WebP, AVIF
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={formData.image}
                                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                                className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                                placeholder="/assets/kugoriental.png"
                                            />
                                            {formData.image && (
                                                <div className="mt-2 flex items-center gap-3">
                                                    <div className="w-12 h-9 rounded bg-zinc-950 overflow-hidden border border-white/5 flex-shrink-0">
                                                        <img
                                                            src={formData.image}
                                                            alt="Mini Preview"
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                const target = e.target as HTMLImageElement;
                                                                target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80';
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-[10px] text-gray-400 font-semibold truncate">
                                                        Previewing image URL
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {formErrors.image && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.image}</span>}
                                </div>



                                {/* Links Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                            Live Preview URL
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.liveUrl}
                                            onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                                            className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                            placeholder="https://mysite.com/"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                            Source Code URL
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.codeUrl}
                                            onChange={(e) => setFormData({ ...formData, codeUrl: e.target.value })}
                                            className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                            placeholder="https://github.com/..."
                                        />
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="flex items-center gap-2 pt-2 ml-1">
                                    <input
                                        type="checkbox"
                                        id="featured"
                                        checked={formData.featured}
                                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                        className="w-4 h-4 rounded border-gray-200 bg-gray-50 dark:border-white/5 text-primary-500 focus:ring-primary-500"
                                    />
                                    <label htmlFor="featured" className="text-xs font-bold text-gray-600 dark:text-zinc-350">
                                        Feature this project on the home page preview grid
                                    </label>
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
                                        Save Project
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Warning Popup for Delete Confirmation */}
            <AnimatePresence>
                {deletingProject && (
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
                                Delete Portfolio Project?
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                                Are you sure you want to remove <strong className="text-gray-950 dark:text-white">"{deletingProject.title}"</strong>? This action will permanently remove it from your local catalog memory.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setDeletingProject(null)}
                                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="px-5 py-2.5 bg-red-500 hover:bg-red-650 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-sm focus:outline-none"
                                >
                                    Yes, Delete Project
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
