import voyageData from "@/data/voyage2026.json";

interface Trip {
    region?: string;
    destination?: string;
    dates: string;
    titre: string;
    guide?: string;
    guides?: string[];
    prix_eur: number;
    avion?: string;
}

export default function NosVoyage() {
    const allTrips: Trip[] = [
        ...voyageData.voyages_mondiaux,
        ...voyageData.voyages_laponie_suede,
        ...voyageData.voyages_mongolie_2026,
    ];

    return (
        <div className="min-h-screen bg-zinc-50 mt-20 dark:bg-black font-sans">
            <div className="flex flex-col items-center justify-center py-2 px-2">
                <h2 className="text-2xl font-bold text-black/80 dark:text-white/80 ml-3 py-2">
                    NOS VOYAGES INITIATIQUES EN 2026
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                    {allTrips.map((trip: Trip, idx: number) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2 dark:text-white">{trip.titre}</h3>
                                {trip.region && <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{trip.region}</p>}
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{trip.dates}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    {trip.guide || trip.guides?.join(", ")}
                                </p>
                                <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">{trip.prix_eur}€</p>
                                {trip.avion && <p className="text-xs text-gray-500 dark:text-gray-400">{trip.avion}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
