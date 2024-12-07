import { motion } from "motion/react";
import Hero from '../components/Hero.tsx';
import { Icon } from '@iconify/react';

const Home = () => {
    const services = [
        {
            icon: <Icon icon="lucide:code" className="h-8 w-8 text-primary-600" />,
            title: 'Web Development',
            description: 'Custom web solutions built with cutting-edge technologies.',
        },
        {
            icon: <Icon icon="lucide:cloud" className="h-8 w-8 text-primary-600" />,
            title: 'Cloud Solutions',
            description: 'Scalable and secure cloud infrastructure for your business.',
        },
        {
            icon: <Icon icon="lucide:line-chart" className="h-8 w-8 text-primary-600" />,
            title: 'Digital Marketing',
            description: 'Data-driven strategies to grow your online presence.',
        },
    ];

    return (
        <div className="min-h-screen">
            <Hero />

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Services
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            We offer comprehensive technology solutions to help your business grow
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="absolute top-0 -mt-4 left-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg">
                                    {service.icon}
                                </div>
                                <div className="pt-8 text-center">
                                    <h3 className="text-xl font-medium text-gray-900">
                                        {service.title}
                                    </h3>
                                    <p className="mt-4 text-gray-500">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-700">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Ready to get started?</span>
                        <span className="block text-primary-300">Let's discuss your project.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                            >
                                Get in touch
                                <Icon icon="lucide:arrow-right" className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;