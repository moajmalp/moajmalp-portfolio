"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit2, Trash2, Calendar, BookOpen, X, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { profileData } from '../../data/profileData';

export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    tags: string[];
    url: string;
}

interface BlogsTabProps {
    blogs: Blog[];
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
    triggerToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export default function BlogsTab({ blogs, setBlogs, triggerToast }: BlogsTabProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [deletingBlog, setDeletingBlog] = useState<Blog | null>(null);
    const [uploadTab, setUploadTab] = useState<'upload' | 'url'>('upload');
    const [isDragging, setIsDragging] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        image: '',
        tagsString: '',
        content: ''
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
        const stored = localStorage.getItem('portfolio_blogs');
        if (!stored) {
            localStorage.setItem('portfolio_blogs', JSON.stringify(profileData.blogs));
            setBlogs(profileData.blogs);
        } else {
            setBlogs(JSON.parse(stored));
        }
    }, [setBlogs]);

    // Save changes helper
    const saveBlogs = (updatedBlogs: Blog[]) => {
        setBlogs(updatedBlogs);
        localStorage.setItem('portfolio_blogs', JSON.stringify(updatedBlogs));
    };

    // Open add modal
    const handleOpenAdd = () => {
        setEditingBlog(null);
        setFormData({
            title: '',
            excerpt: '',
            image: '/assets/blog_seo_future.png', // Default premium mock image
            tagsString: 'SEO, Marketing, Google',
            content: ''
        });
        setFormErrors({});
        setUploadTab('upload');
        setIsFormOpen(true);
    };

    // Open edit modal
    const handleOpenEdit = (blog: Blog) => {
        setEditingBlog(blog);
        setFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            image: blog.image,
            tagsString: blog.tags.join(', '),
            content: 'In today\'s digital landscape, website performance directly impacts both conversion rates and search rankings. A search engine optimization campaign can fail simply because a website loads too slowly...' // Mock contents
        });
        setFormErrors({});
        setUploadTab(blog.image.startsWith('data:') ? 'upload' : 'url');
        setIsFormOpen(true);
    };

    // Validate and submit form
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors: typeof formErrors = {};

        if (!formData.title.trim()) errors.title = "Article Title is required.";
        if (!formData.excerpt.trim()) errors.excerpt = "Brief Excerpt is required.";
        if (!formData.image.trim()) errors.image = "Banner Image URL is required.";
        if (!formData.tagsString.trim()) errors.tagsString = "At least one category tag is required.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const parsedTags = formData.tagsString
            .split(',')
            .map(t => t.trim())
            .filter(t => t !== '');

        const slug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        if (editingBlog) {
            // Edit existing
            const updated = blogs.map(b => 
                b.id === editingBlog.id 
                    ? {
                        ...b,
                        title: formData.title,
                        excerpt: formData.excerpt,
                        image: formData.image,
                        tags: parsedTags,
                        url: `/blog/${slug}`
                      }
                    : b
            );
            saveBlogs(updated);
            triggerToast("Blog post successfully updated", "success");
        } else {
            // Add new
            const newBlog: Blog = {
                id: Date.now(),
                title: formData.title,
                excerpt: formData.excerpt,
                date: new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                }),
                image: formData.image,
                tags: parsedTags,
                url: `/blog/${slug}`
            };
            saveBlogs([newBlog, ...blogs]);
            triggerToast("New blog article successfully created", "success");
        }

        setIsFormOpen(false);
    };

    // Confirm and delete
    const handleDeleteConfirm = () => {
        if (deletingBlog) {
            const updated = blogs.filter(b => b.id !== deletingBlog.id);
            saveBlogs(updated);
            triggerToast("Blog post deleted successfully", "info");
            setDeletingBlog(null);
        }
    };

    // Filter blogs
    const filteredBlogs = blogs.filter(b => 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="space-y-6 text-left">
            {/* Top Workspace Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 p-4 rounded-2xl shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search articles by title, categories..."
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
                    Create Article
                </button>
            </div>

            {/* Blogs Table/List */}
            <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-100 dark:divide-white/5">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-all duration-150"
                            >
                                <div className="flex items-start gap-4 min-w-0 flex-1">
                                    {/* Thumbnail Preview */}
                                    <div className="w-20 h-14 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0 border border-gray-200/50 dark:border-white/5 hidden sm:block">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&q=80';
                                            }}
                                        />
                                    </div>
                                    <div className="min-w-0 text-left">
                                        <h5 className="font-extrabold text-sm text-gray-950 dark:text-white truncate">
                                            {blog.title}
                                        </h5>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider mb-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{blog.date}</span>
                                            <span>•</span>
                                            <span className="text-primary-500">{blog.tags.join(', ')}</span>
                                        </div>
                                        <p className="text-gray-550 dark:text-zinc-400 text-xs line-clamp-1 leading-relaxed">
                                            {blog.excerpt}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-1.5 self-end md:self-center flex-shrink-0">
                                    <button
                                        onClick={() => handleOpenEdit(blog)}
                                        title="Edit Article"
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setDeletingBlog(blog)}
                                        title="Delete Article"
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-16 text-center flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 mb-4">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h5 className="font-bold text-gray-800 dark:text-white mb-1">No Articles Found</h5>
                            <p className="text-xs text-gray-400">Create a new blog or adjust your search.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal CRUD Editor Dialog */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-gray-200/50 dark:border-white/5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
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
                                    {editingBlog ? 'Edit Blog Article' : 'Create New Blog Article'}
                                </h3>
                                <p className="text-xs text-gray-400 font-medium mt-1">
                                    Fill in the fields below. Test articles are stored isolated from production builds.
                                </p>
                            </div>

                            {/* Inputs form */}
                            <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                                {/* Title */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Article Title
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                        placeholder="e.g. The Future of WordPress in 2026"
                                    />
                                    {formErrors.title && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.title}</span>}
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Brief Excerpt
                                    </label>
                                    <textarea
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        rows={2}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                                        placeholder="Short excerpt card overview summarizing the content hooks..."
                                    />
                                    {formErrors.excerpt && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.excerpt}</span>}
                                </div>

                                {/* Banner Image Selector */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                            Banner Image
                                        </label>
                                        
                                        {/* Tabs */}
                                        <div className="flex gap-2 mb-3 bg-gray-100/50 dark:bg-white/5 p-1 rounded-xl w-fit">
                                            <button
                                                type="button"
                                                onClick={() => setUploadTab('upload')}
                                                className={`px-3 py-1 text-[10px] font-extrabold rounded-lg transition-all focus:outline-none ${
                                                    uploadTab === 'upload'
                                                        ? 'bg-white dark:bg-zinc-800 text-gray-905 dark:text-white shadow-sm'
                                                        : 'text-gray-405 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
                                                }`}
                                            >
                                                Upload
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setUploadTab('url')}
                                                className={`px-3 py-1 text-[10px] font-extrabold rounded-lg transition-all focus:outline-none ${
                                                    uploadTab === 'url'
                                                        ? 'bg-white dark:bg-zinc-800 text-gray-905 dark:text-white shadow-sm'
                                                        : 'text-gray-405 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
                                                }`}
                                            >
                                                URL
                                            </button>
                                        </div>

                                        {/* Content tabs */}
                                        {uploadTab === 'upload' ? (
                                            <div
                                                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                                onDragLeave={() => setIsDragging(false)}
                                                onDrop={handleDrop}
                                                onClick={() => document.getElementById('blog-file-input')?.click()}
                                                className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                                                    isDragging
                                                        ? 'border-primary-500 bg-primary-500/5'
                                                        : formData.image
                                                            ? 'border-gray-250/20 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-900/30'
                                                            : 'border-gray-200 dark:border-white/10 hover:border-primary-500/50 bg-gray-50/30 dark:bg-zinc-900/10'
                                                }`}
                                            >
                                                <input
                                                    type="file"
                                                    id="blog-file-input"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                                {formData.image ? (
                                                    <div className="flex items-center gap-3 text-left">
                                                        <div className="w-14 h-10 rounded overflow-hidden border border-white/5 flex-shrink-0">
                                                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="text-[10px] font-extrabold text-gray-950 dark:text-white truncate">
                                                                Uploaded successfully
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="py-1">
                                                        <ImageIcon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                                                        <p className="text-[10px] font-extrabold text-gray-905 dark:text-white leading-tight">
                                                            Drag & drop image or browse
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="space-y-1.5">
                                                <input
                                                    type="text"
                                                    value={formData.image}
                                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                                    className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                                    placeholder="/assets/blog_seo_future.png"
                                                />
                                            </div>
                                        )}
                                        {formErrors.image && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.image}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                            Categories (Comma separated)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.tagsString}
                                            onChange={(e) => setFormData({ ...formData, tagsString: e.target.value })}
                                            className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                                            placeholder="e.g. SEO, Performance, WordPress"
                                        />
                                        {formErrors.tagsString && <span className="text-xs text-amber-500 ml-1 mt-1 block">{formErrors.tagsString}</span>}
                                    </div>
                                </div>

                                {/* Content canvas */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">
                                        Article Content (Writing Canvas Editor)
                                    </label>
                                    <textarea
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        rows={7}
                                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200/50 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono"
                                        placeholder="## 1. Title subheader&#10;Write rich article contents here..."
                                    />
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
                                        Publish Article
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Warning Popup for Delete Confirmation */}
            <AnimatePresence>
                {deletingBlog && (
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
                                Delete Blog Article?
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                                Are you sure you want to remove <strong className="text-gray-950 dark:text-white">"{deletingBlog.title}"</strong>? This action will permanently remove it from your local catalog memory.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setDeletingBlog(null)}
                                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="px-5 py-2.5 bg-red-500 hover:bg-red-655 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-sm focus:outline-none"
                                >
                                    Yes, Delete Article
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
