export default function MentionLegales() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md my-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Mentions Légales</h1>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Éditeur du site</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Nom de l'entreprise : ORSO VOYAGE SARL<br />
                    Adresse : 43, avenue des Molières, 78470 Saint Rémy lès Chevreuse, France<br />
                    Téléphone : 09 73 66 22 68<br />
                    Email : orsosvoyages@gmail.com<br />
                    N° SIRET : 818 121 436 00013<br />
                    APE : 633Z<br />
                    Capital social : 7 500 €<br />
                    Licence Agent de Voyage N° IM en cours
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Hébergement</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Hébergeur : [Nom de l'hébergeur]<br />
                    Adresse : [Adresse de l'hébergeur]
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Garanties et Assurances</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Garantie Financière : APST, 15 Avenue Carnot, 75017 Paris<br />
                    Responsabilité Civile Professionnelle : HISCOX N° HA PRC0136470 IMS<br />
                    Adresse RCP : 66 rue de Sotteville, 76030 Rouen Cedex 1, France
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Propriété intellectuelle</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Tous les contenus présents sur ce site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de l'entreprise à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Données personnelles</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant à l'adresse email indiquée ci-dessus.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.
                </p>
            </section>
        </div>
    );
}