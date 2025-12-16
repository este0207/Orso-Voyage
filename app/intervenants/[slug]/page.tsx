import { notFound } from "next/navigation";
import Link from "next/link";
import intervenants from "@/data/intervenants.json";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return intervenants.map((i) => ({ slug: i.slug }));
}

export default async function Page({ params }: Props) {
  // `params` can be a Promise in the app router — unwrap it before use
  const resolvedParams = (await params) as { slug: string };
  const slug = resolvedParams.slug;
  const intervenant = intervenants.find((i) => i.slug === slug);

  if (!intervenant) {
    notFound();
  }

  return (
    <div className="flex flex-col mt-22 items-center justify-start py-8 px-4 md:px-8">
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden">
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 w-full">
            <img
              src={intervenant!.img}
              alt={intervenant!.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div className="p-6 md:w-2/3">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {intervenant!.name}
            </h1>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              {intervenant!.fulldesc}
            </p>

            <div className="mt-6">
              <Link
                href="/nos-intervenants"
                className="inline-block rounded-md bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm text-zinc-900 dark:text-white hover:opacity-90"
              >
                ← Retour à la liste
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

