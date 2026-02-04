"use client";

import { BarChart3, Globe, Zap, Shield, Users, Smartphone } from "lucide-react";

const features = [
    {
        name: "Data-Driven Insights",
        description: "Make decisions based on real-time data and comprehensive analytics.",
        icon: BarChart3,
    },
    {
        name: "Global Reach",
        description: "Expand your market presence with our international SEO strategies.",
        icon: Globe,
    },
    {
        name: "Lightning Fast",
        description: "Optimized performance ensuring your campaigns load instantly.",
        icon: Zap,
    },
    {
        name: "Enterprise Security",
        description: "Bank-grade security protocols to protect your sensitive data.",
        icon: Shield,
    },
    {
        name: "Audience Targeting",
        description: "Precise targeting tools to reach the people who matter most.",
        icon: Users,
    },
    {
        name: "Mobile First",
        description: "Responsive designs that look perfect on every device.",
        icon: Smartphone,
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-900/50" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Everything you need to succeed
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Our comprehensive suite of marketing tools enables you to scale your business efficiently.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative p-8 bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="absolute top-8 left-8">
                                <span className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-16">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
