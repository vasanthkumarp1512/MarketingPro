import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "The Future of Digital Marketing in 2024",
        excerpt: "Discover the emerging trends that will shape the marketing landscape in the coming year.",
        date: "Mar 16, 2024",
        category: "Trends",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Mastering SEO: A Comprehensive Guide",
        excerpt: "Learn the strategies and techniques to improve your search engine rankings and drive organic traffic.",
        date: "Mar 10, 2024",
        category: "SEO",
        readTime: "8 min read",
    },
    {
        id: 3,
        title: "Building a Strong Brand Identity",
        excerpt: "How to create a memorable brand that resonates with your target audience and stands out from the competition.",
        date: "Mar 5, 2024",
        category: "Branding",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "Social Media Strategies for Growth",
        excerpt: "Effective ways to leverage social media platforms to grow your audience and engagement.",
        date: "Feb 28, 2024",
        category: "Social Media",
        readTime: "4 min read",
    },
    {
        id: 5,
        title: "Content Marketing Essentials",
        excerpt: "Why content is king and how to create valuable content that converts visitors into customers.",
        date: "Feb 20, 2024",
        category: "Content",
        readTime: "7 min read",
    },
    {
        id: 6,
        title: "Email Marketing ROI Optimization",
        excerpt: "Tips for maximizing the return on investment from your email marketing campaigns.",
        date: "Feb 15, 2024",
        category: "Email",
        readTime: "5 min read",
    },
];

export default function Blog() {
    return (
        <div className="bg-white dark:bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Insights, strategies, and tips to help you grow your business.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-zinc-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between group cursor-pointer">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                                    {post.date}
                                </time>
                                <span className="relative z-10 rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">{post.readTime}</span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="relative mt-4 flex items-center gap-x-4">
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900 dark:text-white flex items-center group-hover:text-blue-600 transition-colors">
                                        Read more <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
