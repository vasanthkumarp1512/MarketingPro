"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-white dark:bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200 mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                    Now Available for Public Beta
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 max-w-4xl"
                >
                    Supercharge Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        Digital Marketing
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Elevate your brand with data-driven strategies and premium design. We help you connect with your audience and drive real results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-colors duration-200"
                    >
                        Read our Blog
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
