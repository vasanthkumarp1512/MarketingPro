import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "../../data/posts";

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Find post by slug (simulated)
    const post = posts.find(
        (p) => p.title.toLowerCase().replace(/ /g, "-").replace(/:/g, "") === slug
    );

    return (
        <div className="bg-white dark:bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-10">
                    <Link
                        href="/blog"
                        className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </div>

                <article>
                    {post?.image && (
                        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-10 overflow-hidden rounded-2xl">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4 capitalize">
                        {slug.replace(/-/g, " ")}
                    </h1>

                    <div className="flex items-center gap-x-4 text-sm mb-8 text-gray-500 dark:text-gray-400">
                        <time dateTime={post?.date || "2024-03-16"}>{post?.date || "Mar 16, 2024"}</time>
                        <span>•</span>
                        <span>{post?.readTime || "5 min read"}</span>
                    </div>

                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h2>Heading 1</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <blockquote>
                            <p>
                                "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                            </p>
                        </blockquote>
                        <h2>Heading 2</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <ul>
                            <li>But I must explain to you how all this mistaken idea</li>
                            <li>Of denouncing pleasure and praising pain was born</li>
                            <li>And I will give you a complete account of the system</li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    );
}
