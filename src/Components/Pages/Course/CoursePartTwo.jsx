import React, { useState } from 'react';
import { useTestChange } from '../../../Hooks/useTestChange';
import { Link } from 'react-router-dom';
import Loading from '../Auth/buildingBlocks';
import { useAuthContext } from '../../../Hooks/useAuthContext';

function CoursePartTwo() {
  const { user } = useAuthContext();
  const [userName] = useState(user.userName);
  const [firstName] = useState(user.firstName);
  const [lastName] = useState(user.lastName);
  const [companyName] = useState(user.companyName);
  const { testChange, isLoading } = useTestChange();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await testChange(userName, firstName, lastName, companyName);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex">
          <aside className="h-screen sticky top-0">
            <div className="flex flex-col h-screen p-3 bg-blue-500 shadow w-60">
              <div className="space-y-3">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold text-white font-poppins">
                    Points Discutés
                  </h2>
                </div>
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          Procédure D’évaluation des tiers
                        </span>
                      </h6>
                    </li>
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          La Politique ethique et anti corruption politique de
                          l'agence du benin
                        </span>
                      </h6>
                    </li>
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          Règles en matières de: Cadeaux, Voyages, Invitations
                        </span>
                      </h6>
                    </li>
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          régimes disciplinaires, sanctions
                        </span>
                      </h6>
                    </li>
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          Dispositifs D'alert
                        </span>
                      </h6>
                    </li>
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          Charte Relations Sous-Traitrants
                        </span>
                      </h6>
                    </li>
                    <li className="rounded-sm">
                      <h6 className="flex items-center p-2 space-x-3 rounded-md">
                        <span className="text-gray-100 hover:text-black font-poppins">
                          9 mesures de Base concrètes pour lutter contre la
                          corruption et prévenir les conflits d’intérêt
                        </span>
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <main>
            <div className="flex flex-col items-center justify-center relative left-40 top-10">
              <h2 className="text-2xl m-2 font-poppins text-blue-500 underline">
                Deuxième Partie:
              </h2>
              <div className="flex flex-col items-center">
                <video width="700" height="700" controls>
                  <source
                    src="https://d21ulo4r1z07kx.cloudfront.net/lastPartTwo.mp4"
                    type="video/mp4"
                  ></source>
                </video>
                <div>
                  <Link to="/course">
                    <button className="m-5 font-poppins hover:font-bold pl-20 pr-20 pt-5 pb-5 hover:text-black transition ease-in delay-50 rounded text-white bg-blue-500">
                      {'<'}== Retour à la Partie 1
                    </button>
                  </Link>
                  <Link to="/quiz">
                    <button
                      onClick={handleSubmit}
                      className="m-5 font-poppins hover:font-bold pl-20 pr-20 pt-5 pb-5 hover:text-black transition ease-in delay-50 rounded text-white bg-blue-500"
                    >
                      Faire le Quiz
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default CoursePartTwo;
