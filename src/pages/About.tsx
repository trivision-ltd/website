import { useState } from 'react';
import { motion } from "motion/react";
import { Icon } from '@iconify/react';

const About = () => {
    const [showTeam,] = useState<boolean>(false);
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
            name: 'Ifeanyi Franklin Ikeh',
            role: 'Founder',
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

                        <h3 className="mt-4 text-2xl font-extrabold text-gray-500 max-w-3xl mx-auto">
                            Mission & Vision
                        </h3>

                        <p className="text-justify mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            At Trivision Technologies Limited our mission is to harness the power of technology to create innovative solutions that address social challenges, empower communities and drive sustainable development. We strive to bridge the digital divide by providing accessible, user-friendly solutions that enhance education, health and economic opportunities for all.
                        </p>
                        <p className="text-justify mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            Our vision is to be a leading force in transforming lives through technology. We envision a world where every individual has access to the tools and knowledge they need to thrive, fostering a future where technology serves as a catalyst for positive change and social equity. Together, we aim to build a connected and inclusive society that embraces innovation for the betterment of humanity.
                        </p>

                        {/* <h3 className="mt-4 text-2xl font-extrabold text-gray-500 max-w-3xl mx-auto">
                            Company Profile
                        </h3> */}
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
                                    <Icon icon="lucide:check-circle" className="h-6 w-6 text-primary-600 mr-2" />
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
            {showTeam && (<section className="py-16 bg-gray-50">
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
            )}
        </div>
    );
};

export default About;