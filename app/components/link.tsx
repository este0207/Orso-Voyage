import Link from "next/link";

interface LinkProps {
    href: string;
    name: string;
}

export default function Links({ href, name }: LinkProps) {
    return (
        <Link href={href} className="text-black-600 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-200 mx-2 scale-95 hover:scale-105 transition-transform">
            {name}
        </Link>
    );
}
