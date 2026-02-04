"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.svg" alt="MarketingPro" className="h-8 w-8" />
                            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Marketing<span className="text-blue-600">Pro</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/blog" className="hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                Blog
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
                        <Link href="/" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/blog" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Blog
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
