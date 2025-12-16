import Image from 'next/image';
import { ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';

export default function HomePage() {
    const trips = [
        {
            title: 'Fête familiale et chamanisme à l\'ouest',
            date: 'du 17 au 31 octobre 2027',
            icon: '🎭'
        },
        {
            title: 'Yoga et Chamanisme en Mongolie centrale',
            date: 'du 8 au 24 août 2026',
            icon: '🧘'
        },
        {
            title: 'Festival et Solstice en Mongolie',
            date: 'du 15 au 29 juin 2026',
            icon: '🌞'
        },
        {
            title: 'Les massifs de l\'Altai, le Berceau de l\'humanité',
            date: 'du 12 au 25 juillet 2026',
            icon: '⛰️'
        },
        {
            title: 'Rencontre initiatique avec les chamanes mongols',
            date: 'du 9 au 24 août 2026',
            icon: '🕯️'
        },
        {
            title: 'Chaman péruvien en Mongolie',
            date: 'Du 1 au 15 juillet 2026',
            icon: '🌍'
        }
    ];

    const testimonials = [
        {
            text: 'L\'itinéraire est parfait car nous avons pu découvrir le pays et la rencontre avec les chamanes sans trop de déplacement...',
            author: 'Alen',
            year: '2016'
        },
        {
            text: 'J\'ai réalisé un de mes plus beaux rêves de découvrir votre pays lors d\'un voyage authentique avec les chamanes mongols...',
            author: 'Virginie',
            year: '2015'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <header className="bg-blue-900 text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2">ORSO VOYAGE</h1>
                    <p className="text-xl text-blue-100">
                        Voyages initiatiques en Mongolie avec Mme ORSOO depuis 1992
                    </p>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Au-delà d'une simple découverte
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Nos voyages sont une rencontre, le début d'un projet en collaboration avec les Mongols, 
                        la connexion avec son origine... Découvrez la Mongolie, terre des vastes steppes et berceau 
                        du chamanisme, où les esprits de la nature dialoguent encore avec les hommes.
                    </p>
                    <button className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-800">
                        En savoir plus <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Trips Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                        Nos Voyages Initiatiques en 2026
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trips.map((trip, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                                <div className="text-3xl mb-3">{trip.icon}</div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{trip.title}</h3>
                                <p className="text-blue-600 text-sm">{trip.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Qui sommes-nous?</h2>
                <div className="bg-blue-50 rounded-lg p-8 mb-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        ORSO VOYAGE existe depuis 2005 en Mongolie. Nous sommes la seule agence locale de voyage 
                        officiellement immatriculée au registre des agences de voyage de la République Française depuis 2016.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Créée par Madame Chimegmaa ORSOO, nous avons servi plus de 5000 clients depuis 1996. 
                        Membre de l'APST et du Syndicat national des agences de voyage en France, nous garantissons 
                        vos voyages en toute sécurité et tranquillité.
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                        Témoignages de nos clients
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                                <p className="font-bold text-blue-900">{testimonial.author} • {testimonial.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">France</h3>
                            <div className="space-y-3">
                                <p className="flex items-center gap-2"><MapPin size={20} /> 43, avenue des Molières, 78470 Saint Rémy lès Chevreuse</p>
                                <p className="flex items-center gap-2"><Phone size={20} /> 01 30 45 20 60</p>
                                <p className="flex items-center gap-2"><Phone size={20} /> 06 62 41 08 75</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Mongolie</h3>
                            <div className="space-y-3">
                                <p className="flex items-center gap-2"><MapPin size={20} /> P.O.Box 60, Ulanbator 22, 210322</p>
                                <p className="flex items-center gap-2"><Phone size={20} /> 976 - 99.88.77.70</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center text-sm">
                    <p>Mentions légales - Tous droits réservés © ORSO VOYAGE Mongolie 1998 - 2024</p>
                </div>
            </footer>
        </div>
    );
}