import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="sm:text-center lg:text-left"
                        >
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">Innovative Solutions</span>
                                <span className="block text-primary-600">for Digital Success</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Empowering businesses with cutting-edge technology solutions.
                                We transform ideas into powerful digital experiences.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="/website/contact"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Get Started
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="/website/services"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                                    >
                                        Our Services
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Hero;