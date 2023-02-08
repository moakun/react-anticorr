import React from 'react';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <div>
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
                        Objectifs
                      </span>
                    </h6>
                  </li>
                  <li className="rounded-sm">
                    <h6 className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        La corruption qu’est ce que c’est ?
                      </span>
                    </h6>
                  </li>
                  <li className="rounded-sm">
                    <h6 className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Pour Notre Pays
                      </span>
                    </h6>
                  </li>
                  <li className="rounded-sm">
                    <h6 className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Le bénin et la corruption
                      </span>
                    </h6>
                  </li>
                  <li className="rounded-sm">
                    <h6 className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Engagement du groupe VINCI
                      </span>
                    </h6>
                  </li>
                  <li className="rounded-sm">
                    <h6 className="flex items-center p-2 space-x-3 rounded-md">
                      <span className="text-gray-100 hover:text-black font-poppins">
                        Le Référentiel éthique de VINCI
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
              Première Partie:
            </h2>
            <div className="flex flex-col items-center">
              <video width="700" height="700" controls>
                <source
                  src="https://d21ulo4r1z07kx.cloudfront.net/PartOneFinal.mp4"
                  type="video/mp4"
                ></source>
              </video>
              <Link to="/course2">
                <button className="m-5 font-poppins hover:font-bold pr-60 pl-60 pt-5 pb-5 hover:text-black transition ease-in delay-50 rounded text-white flex flex-col items-center bg-blue-500">
                  Allez à la Partie 2 =={'>'}
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Course;
