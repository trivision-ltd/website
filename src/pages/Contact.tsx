import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission to your backend
        setSubmitStatus('success');
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-primary-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            Get in touch with us to discuss your next project
                        </p>
                    </motion.div>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Get in Touch
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <Icon icon="lucide:map-pin" className="h-6 w-6 text-primary-600 mr-4" />
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Address</h3>
                                        <p className="text-gray-600">
                                            No. 8, Anthony Enahoro Street Utako,<br />
                                            Abuja, Nigeria
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Icon icon="lucide:phone" className="h-6 w-6 text-primary-600 mr-4" />
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                        <p className="text-gray-600">(+234) 902 010 9113</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Icon icon="lucide:mail" className="h-6 w-6 text-primary-600 mr-4" />
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                        <p className="text-gray-600">info@trivisiontechltd.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Office Hours
                                </h2>
                                <div className="space-y-2 text-gray-600">
                                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
                    px-4 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
                    px-4 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
                    px-4 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
                    px-4 py-2 border"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                                >
                                    <Icon icon="lucide:send" className="h-5 w-5 mr-2" />
                                    Send Message
                                </button>
                            </form>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        {/* Replace this div with an actual map integration */}
                        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Map integration goes here</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;