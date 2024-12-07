import { motion } from "motion/react";
import { Icon } from '@iconify/react';

const Portfolio = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'Web Development',
            description: 'A full-featured e-commerce platform built with React and Node.js',
            image: '/images/contextual.png',
            technologies: ['Python', 'React', 'PostgreSQL', 'PostGIS', 'Azure'],
        },
        {
            title: 'Health & Fitness App',
            category: 'Mobile Development',
            description: 'Cross-platform mobile app for tracking fitness and nutrition',
            image: '/api/placeholder/600/400',
            technologies: ['React Native', 'Firebase', 'Redux'],
        },
        {
            title: 'AI-Powered Analytics',
            category: 'Machine Learning',
            description: 'Business intelligence platform with predictive analytics',
            image: '/api/placeholder/600/400',
            technologies: ['Python', 'TensorFlow', 'AWS'],
        },
    ];

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
                            Our Portfolio
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            Showcasing our successful projects and digital innovations
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Portfolio Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-0 left-0 m-4">
                                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                                    >
                                        View Case Study
                                        <Icon icon="lucide:external-link" className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">100+</div>
                            <div className="text-primary-100">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">50+</div>
                            <div className="text-primary-100">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">5+</div>
                            <div className="text-primary-100">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">3</div>
                            <div className="text-primary-100">Global Offices</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;