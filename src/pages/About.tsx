import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const values = [
        {
            title: 'Innovation',
            description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
        },
        {
            title: 'Excellence',
            description: 'Committed to delivering the highest quality in everything we do.',
        },
        {
            title: 'Integrity',
            description: 'Building trust through honesty and transparent relationships.',
        },
    ];

    const team = [
        {
            name: 'John Smith',
            role: 'CEO & Founder',
            image: '/api/placeholder/300/300',
        },
        {
            name: 'Sarah Johnson',
            role: 'Technical Director',
            image: '/api/placeholder/300/300',
        },
        {
            name: 'Michael Chen',
            role: 'Lead Developer',
            image: '/api/placeholder/300/300',
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
                            About Trivision Tech
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            We're a team of passionate technologists dedicated to transforming businesses
                            through innovative digital solutions.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Company Values */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900">
                        Our Values
                    </h2>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <CheckCircle className="h-6 w-6 text-primary-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {value.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
                        Our Team
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="mx-auto h-48 w-48 rounded-full object-cover"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-gray-500">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;