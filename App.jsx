import React, { useState } from 'react';
import { motion } from 'framer-motion';

const frases = {
  Leve: [...Array(20).keys()].map(i => `Frase Leve ${i + 1}`),
  Medio: [...Array(20).keys()].map(i => `Frase Média ${i + 1}`),
  Alto: [...Array(20).keys()].map(i => `Frase Alta ${i + 1}`),
  Extremo: [...Array(20).keys()].map(i => `Frase Extrema ${i + 1}`),
  SemCensura: [...Array(20).keys()].map(i => `Frase Sem Censura ${i + 1}`)
};

const cores = {
  Leve: 'bg-green-300',
  Medio: 'bg-yellow-300',
  Alto: 'bg-orange-400',
  Extremo: 'bg-red-400',
  SemCensura: 'bg-purple-500'
};

export default function App() {
  const [fraseAtual, setFraseAtual] = useState('');
  const [categoria, setCategoria] = useState('');

  const sortearFrase = (nivel) => {
    const frasesDoNivel = frases[nivel];
    const frase = frasesDoNivel[Math.floor(Math.random() * frasesDoNivel.length)];
    setFraseAtual(frase);
    setCategoria(nivel);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Jogo de Poker Sensual</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {Object.keys(frases).map((nivel) => (
          <motion.button
            key={nivel}
            whileTap={{ scale: 0.95 }}
            onClick={() => sortearFrase(nivel)}
            className={`text-white font-semibold py-2 px-4 rounded-full shadow-lg ${cores[nivel]} hover:brightness-110`}
          >
            {nivel}
          </motion.button>
        ))}
      </div>
      {fraseAtual && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-center p-4 bg-white rounded-xl shadow-lg max-w-md"
        >
          <strong className="block mb-2 text-gray-700">Nível: {categoria}</strong>
          <span className="text-gray-900">{fraseAtual}</span>
        </motion.div>
      )}
    </div>
  );
}