export default function About() {
    return (
         <section className="max-w-6xl mx-auto px-4 py-12 bg-[url(/image10.jpg)] bg-cover rounded-lg mr-4 ml-4 dark:bg-[url(/image11.jpg)]">
                <h2 className="text-3xl font-bold text-white/80 mb-6 dark:text-gray-200">Qui sommes-nous?</h2>
                <div className="bg-gray-200/20 rounded-lg p-8 mb-8 backdrop-blur-md">
                    <p className="text-white leading-relaxed mb-4 dark:text-gray-300">
                        ORSO VOYAGE existe depuis 2005 en Mongolie. Nous sommes la seule agence locale de voyage 
                        officiellement immatriculée au registre des agences de voyage de la République Française depuis 2016.
                    </p>
                    <p className="text-white leading-relaxed dark:text-gray-300">
                        Créée par Madame Chimegmaa ORSOO, nous avons servi plus de 5000 clients depuis 1996. 
                        Membre de l'APST et du Syndicat national des agences de voyage en France, nous garantissons 
                        vos voyages en toute sécurité et tranquillité.
                    </p>
                </div>
            </section>
    );
}