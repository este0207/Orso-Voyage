import Link from "next/link";

interface CardProps {
  href: string;
  hrefimg: string;
  title: string;
  desc: string;
}

export default function Card({ href, hrefimg, title, desc }: CardProps) {
  return (
    <div className="flex min-h-full items-center justify-center bg-transparent font-sans">
      <Link
        href={href}
        className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-900 block transition-transform duration-300 scale-90 hover:scale-100 hover:shadow-xl"
      >
        <img src={hrefimg} alt={title} className="h-64 w-full object-cover" />
        <div className="p-3">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
        </div>
      </Link>
    </div>
  );
}
