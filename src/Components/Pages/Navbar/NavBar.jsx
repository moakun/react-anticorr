import React from 'react';
import Logo from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';
import { useLogout } from '../../../Hooks/useLogout';
import { useAuthContext } from '../../../Hooks/useAuthContext';

function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-20 relative right-96"
                  src={Logo}
                  alt="sogeaLogo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className=" hover:text-white hover:bg-blue-400 transition ease-in delay-20 text-black px-3 py-2 rounded-md text-sm font-poppins text-base"
                  >
                    Acceuil
                  </Link>

                  {!user && (
                    <Link
                      to="/login"
                      className="text-black hover:bg-blue-400 transition ease-in delay-20 hover:text-white px-3 py-2 rounded-md text-sm font-poppins text-base"
                    >
                      Connexion
                    </Link>
                  )}
                  {!user && (
                    <Link
                      to="/register"
                      className="text-black hover:bg-blue-400 transition ease-in delay-20 hover:text-white px-3 py-2 rounded-md text-sm font-poppins text-base"
                    >
                      Créer Un Compte
                    </Link>
                  )}
                  {user && (
                    <span className="text-black transition ease-in delay-20 px-3 py-2 rounded-md text-sm font-poppins text-base">
                      {user.userName}
                    </span>
                  )}
                  {user && (
                    <Link
                      className="text-black hover:bg-blue-400 transition ease-in delay-20 hover:text-white px-3 py-2 rounded-md text-sm font-poppins text-base"
                      onClick={handleClick}
                    >
                      Déconnexion
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
