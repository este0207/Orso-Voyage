import chamanes from '@/data/chamanes.json';

export default function ChamanesMongolsPage() {
    return (
        <div className="container mx-auto mt-20 px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Chamanes Mongols</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chamanes.map((chamane) => (
                    <div key={chamane.id} className="border rounded-lg shadow-md p-6">
                        {chamane.img && (
                            <img 
                                src={chamane.img} 
                                alt={chamane.nom}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                        )}
                        <h2 className="text-2xl font-semibold mb-2">{chamane.nom}</h2>
                        {chamane.description && (
                            <p className="text-gray-700 mb-4">{chamane.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}