import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "../data/posts";

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
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800">
                                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, "-").replace(/:/g, "")}`}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
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
                                    <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, "-").replace(/:/g, "")}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
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
