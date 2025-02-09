import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Trivision Technologies Limited</h3>
                        <p className="text-gray-400">
                            Delivering innovative technology solutions for tomorrow's challenges.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/trivision-tech-ltd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500">
                                <Icon icon="simple-icons:linkedin" height={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-500">
                                <Icon icon="simple-icons:twitter" height={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-500">
                                <Icon icon="simple-icons:facebook" height={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">Mobile Apps</li>
                            <li className="text-gray-400">Cloud Solutions</li>
                            <li className="text-gray-400">IT Consulting</li>
                            <li className="text-gray-400">Digital Marketing</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-400">
                                <Icon icon="lucide:map-pin" height={20} className="mr-2" />
                                No. 8, Anthony Enahoro Street Utako, Abuja, Nigeria
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Icon icon="lucide:phone" height={20} className="mr-2" />
                                (+234) 902 010 9113<br />
                                (+49) 1521 781 0552
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Icon icon="lucide:mail" height={20} className="mr-2" />
                                info@trivisiontech.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Trivision Tech Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;