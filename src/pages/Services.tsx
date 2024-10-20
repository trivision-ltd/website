import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Brain, LineChart, Shield } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code className="h-12 w-12 text-primary-600" />,
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies like React, TypeScript, and Node.js.',
            features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'API Integration'],
        },
        {
            icon: <Smartphone className="h-12 w-12 text-primary-600" />,
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
            features: ['Cross-Platform Apps', 'Native Development', 'UI/UX Design', 'App Store Deployment'],
        },
        {
            icon: <Cloud className="h-12 w-12 text-primary-600" />,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and services using AWS, Azure, or Google Cloud.',
            features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', '24/7 Monitoring'],
        },
        {
            icon: <Brain className="h-12 w-12 text-primary-600" />,
            title: 'AI & Machine Learning',
            description: 'Intelligent solutions leveraging cutting-edge AI and ML technologies.',
            features: ['Data Analysis', 'Predictive Models', 'Natural Language Processing', 'Computer Vision'],
        },
        {
            icon: <LineChart className="h-12 w-12 text-primary-600" />,
            title: 'Digital Marketing',
            description: 'Result-driven digital marketing strategies to grow your online presence.',
            features: ['SEO/SEM', 'Content Marketing', 'Social Media', 'Analytics'],
        },
        {
            icon: <Shield className="h-12 w-12 text-primary-600" />,
            title: 'Cybersecurity',
            description: 'Comprehensive security solutions to protect your digital assets.',
            features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training'],
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
                            Our Services
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-center">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <span className="h-2 w-2 bg-primary-500 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our services can help you achieve your business goals
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;