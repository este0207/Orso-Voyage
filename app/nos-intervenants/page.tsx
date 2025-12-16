import Card from "@/app/components/card";
import intervenants from "@/data/intervenants.json";

export default function NosIntervenants() {
  return (
    <div className="flex flex-col mt-22 items-center justify-center py-2 px-2">
      <h2 className="font-bold text-2xl">Nos Intervenants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {intervenants.map((intervenant) => (
          <Card
            key={intervenant.slug}
            href={`/intervenants/${intervenant.slug}`}
            hrefimg={intervenant.img}
            title={intervenant.name}
            desc={intervenant.desc}
          />
        ))}
      </div>
    </div>
  );
}
