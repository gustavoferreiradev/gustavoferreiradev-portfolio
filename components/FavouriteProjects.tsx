import React from 'react';
import Link from 'next/link';

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h2 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Projetos Favoritos
          </h2>
          <Link
            href="/projetos"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
            target="_blank"
            rel="noreferrer">
            <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>Ver Todos</p>
            </>
          </Link>
        </header>
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          <a
            href="https://expanse-tracker-react.netlify.app/"
            className="w-full block col-span-3 shadow-2xl"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative overflow-hidden">
              <img
                src="/sistema-financeiro-pessoal.png"
                alt="Sistema Financeiro"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h3 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                Sistema Financeiro
              </h3>
              <h3 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h3>
            </div>
          </a>
          <a
            href="https://pokedex-demo-vue.netlify.app/"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/pokedex-vue.png"
                alt="Pokédex com VueJS"
                title="Pokédex com VueJS"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h3 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                Pokédex
              </h3>
              <h3 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h3>
            </div>
          </a>
          <a
            href="https://rpg-demo-reactjs.netlify.app/"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="/rpg.png"
                alt="Simulação de Jogo de RPG"
                title="Simulação de Jogo de RPG"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h3 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                RPG
              </h3>
              <h3 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
