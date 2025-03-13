 function Responsive() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="bg-gray-200 w-full h-full">
        {/* Barre de navigation */}
        <div className="flex items-center justify-between p-4 text-2xl font-bold">
          <div>Logo</div>

          {/* Bouton hamburger (affiché uniquement en mobile) */}
          <button
            className="sm:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Menu principal (visible en desktop) */}
          <div className="hidden sm:flex space-x-6">
            <a href="#">Accueil</a>
            <a href="#">Présentation</a>
            <a href="#">Produits</a>
            <a href="#">Contacts</a>
            <a href="#">À propos</a>
          </div>
        </div>

        {/* Menu mobile (affiché seulement quand `isOpen === true`) */}
        {isOpen && (
          <div className="flex flex-col items-center bg-gray-300 p-4 sm:hidden">
            <a href="#" className="py-2">
              Accueil
            </a>
            <a href="#" className="py-2">
              Présentation
            </a>
            <a href="#" className="py-2">
              Produits
            </a>
            <a href="#" className="py-2">
              Contacts
            </a>
            <a href="#" className="py-2">
              À propos
            </a>
          </div>
        )}
      </div>
    );
  } 