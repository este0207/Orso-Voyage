import intervenants from "../../../data/intervenants.json";

interface IntervenantPageProps {
  params: { slug: string };
}

export default async function IntervenantPage({ params }: IntervenantPageProps) {
  // params peut être une Promise, donc Next.js recommande async
  const slug = params.slug; // ici Next.js a déjà résolu params, donc on peut l'utiliser

  // Trouver l'intervenant correspondant
  const intervenant = intervenants.find(i => i.slug === slug);

    console.log("param"+params); // Vérifie ce que Next.js envoie
    console.log("slug"+slug);


  if (!intervenant) return <p>Intervenant non trouvé pour slug: {slug}</p>;

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold">{intervenant.name}</h1>
      <img src={intervenant.img} alt={intervenant.name} className="w-64 h-64 object-cover rounded-full my-4" />
      <p className="text-lg text-center">{intervenant.desc}</p>
    </div>
  );
}
