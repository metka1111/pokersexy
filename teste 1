import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const frasesBase = [
  // LEVE (20 frases)
  { nivel: "Leve", texto: "Vale um beijo no pescoço" },
  { nivel: "Leve", texto: "Vale um abraço apertado de 10 segundos" },
  { nivel: "Leve", texto: "Vale um carinho no cabelo por 1 minuto" },
  { nivel: "Leve", texto: "Vale um beijo na bochecha" },
  { nivel: "Leve", texto: "Vale um olhar intenso por 30 segundos" },
  { nivel: "Leve", texto: "Vale um beijo na mão" },
  { nivel: "Leve", texto: "Vale um elogio bem safado" },
  { nivel: "Leve", texto: "Vale um beijo na testa" },
  { nivel: "Leve", texto: "Vale um cafuné no sofá" },
  { nivel: "Leve", texto: "Vale um sussurro no ouvido" },
  { nivel: "Leve", texto: "Vale um toque suave na coxa" },
  { nivel: "Leve", texto: "Vale uma dança lenta e colada" },
  { nivel: "Leve", texto: "Vale um bilhetinho escrito algo safado" },
  { nivel: "Leve", texto: "Vale uma mordidinha no lábio" },
  { nivel: "Leve", texto: "Vale um selinho demorado" },
  { nivel: "Leve", texto: "Vale um aperto de mãos com desejo" },
  { nivel: "Leve", texto: "Vale uma mensagem picante pelo celular" },
  { nivel: "Leve", texto: "Vale um beijo de olhos fechados" },
  { nivel: "Leve", texto: "Vale um sorriso malicioso" },
  { nivel: "Leve", texto: "Vale uma provocação discreta" },

  // MÉDIO (20 frases)
  { nivel: "Médio", texto: "Vale um beijo grego" },
  { nivel: "Médio", texto: "Vale um áudio dizendo algo sexy" },
  { nivel: "Médio", texto: "Vale um strip-tease de 1 peça de roupa" },
  { nivel: "Médio", texto: "Vale uma massagem com óleo" },
  { nivel: "Médio", texto: "Vale um toque por dentro da camisa" },
  { nivel: "Médio", texto: "Vale um beijo molhado no pescoço" },
  { nivel: "Médio", texto: "Vale um sussurro picante no ouvido" },
  { nivel: "Médio", texto: "Vale uma provocação sob o lençol" },
  { nivel: "Médio", texto: "Vale um gemido no ouvido" },
  { nivel: "Médio", texto: "Vale um toque sob a roupa íntima" },
  { nivel: "Médio", texto: "Vale uma dança erótica de 1 minuto" },
  { nivel: "Médio", texto: "Vale uma selfie sensual" },
  { nivel: "Médio", texto: "Vale uma mordida provocante" },
  { nivel: "Médio", texto: "Vale um elogio + beijo na nuca" },
  { nivel: "Médio", texto: "Vale uma simulação de posição" },
  { nivel: "Médio", texto: "Vale um toque entre as pernas por cima da roupa" },
  { nivel: "Médio", texto: "Vale um beijo com mordidas" },
  { nivel: "Médio", texto: "Vale um aperto forte no quadril" },
  { nivel: "Médio", texto: "Vale um toque ousado sem avisar" },
  { nivel: "Médio", texto: "Vale uma pegada na parede" },

  // ALTO (20 frases)
  { nivel: "Alto", texto: "Vale uma posição escolhida por quem ganhou" },
  { nivel: "Alto", texto: "Vale sexo oral por 2 minutos" },
  { nivel: "Alto", texto: "Vale uma fantasia com venda nos olhos" },
  { nivel: "Alto", texto: "Vale uma performance com acessório" },
  { nivel: "Alto", texto: "Vale ser amarrado com lençol por 2 minutos" },
  { nivel: "Alto", texto: "Vale um desafio de prazer com limite de tempo" },
  { nivel: "Alto", texto: "Vale usar lubrificante de sabor" },
  { nivel: "Alto", texto: "Vale uma penetração rápida no local escolhido" },
  { nivel: "Alto", texto: "Vale um sexo com espelho" },
  { nivel: "Alto", texto: "Vale gravar um áudio ousado juntos" },
  { nivel: "Alto", texto: "Vale uma rapidinha no local inesperado" },
  { nivel: "Alto", texto: "Vale o uso de um vibrador por 2 minutos" },
  { nivel: "Alto", texto: "Vale sexo anal com lubrificante quente" },
  { nivel: "Alto", texto: "Vale gemidos sincronizados" },
  { nivel: "Alto", texto: "Vale escolher qualquer posição por 5 minutos" },
  { nivel: "Alto", texto: "Vale colocar um acessório anal por 2 minutos" },
  { nivel: "Alto", texto: "Vale provocação oral sem toque" },
  { nivel: "Alto", texto: "Vale usar espelho para assistir o outro" },
  { nivel: "Alto", texto: "Vale posição de quatro em qualquer cômodo" },
  { nivel: "Alto", texto: "Vale oral com toque proibido" },

  // EXTREMO (20 frases)
  { nivel: "Extremo", texto: "Vale sexo anal com posição escolhida pelo outro" },
  { nivel: "Extremo", texto: "Vale submissão total por 10 minutos" },
  { nivel: "Extremo", texto: "Vale 3 posições seguidas sem descanso" },
  { nivel: "Extremo", texto: "Vale tapa erótico com comando" },
  { nivel: "Extremo", texto: "Vale gravação de um vídeo curto ousado" },
  { nivel: "Extremo", texto: "Vale usar algemas reais por 5 minutos" },
  { nivel: "Extremo", texto: "Vale controle remoto de vibração" },
  { nivel: "Extremo", texto: "Vale provocar o outro até pedir para parar" },
  { nivel: "Extremo", texto: "Vale uso de brinquedo de dupla penetração" },
  { nivel: "Extremo", texto: "Vale troca de mensagens explícitas ao vivo" },
  { nivel: "Extremo", texto: "Vale escolher o local mais ousado da casa" },
  { nivel: "Extremo", texto: "Vale tentar manter o silêncio durante o prazer" },
  { nivel: "Extremo", texto: "Vale desafio de 10 minutos de resistência" },
  { nivel: "Extremo", texto: "Vale repetir a última posição com mais intensidade" },
  { nivel: "Extremo", texto: "Vale posição escolhida de aplicativo" },
  { nivel: "Extremo", texto: "Vale uso de cinto erótico" },
  { nivel: "Extremo", texto: "Vale jogo de dominação e obediência" },
  { nivel: "Extremo", texto: "Vale provocação sem roupa por 5 minutos" },
  { nivel: "Extremo", texto: "Vale penetração anal lenta por 3 minutos" },
  { nivel: "Extremo", texto: "Vale orgasmo simultâneo como meta" },

  // SEM CENSURA (20 frases)
  { nivel: "Sem Censura", texto: "Vale tudo o que desejar por 10 minutos" },
  { nivel: "Sem Censura", texto: "Vale ser completamente dominado" },
  { nivel: "Sem Censura", texto: "Vale gravar uma cena completa de sexo" },
  { nivel: "Sem Censura", texto: "Vale fazer sexo em local público controlado" },
  { nivel: "Sem Censura", texto: "Vale realizar uma fantasia secreta" },
  { nivel: "Sem Censura", texto: "Vale dormir nus abraçados após o sexo" },
  { nivel: "Sem Censura", texto: "Vale explorar o corpo inteiro sem limite" },
  { nivel: "Sem Censura", texto: "Vale provocação com penetração múltipla" },
  { nivel: "Sem Censura", texto: "Vale a prática de inversão de papéis" },
  { nivel: "Sem Censura", texto: "Vale posições exóticas sem interrupção" },
  { nivel: "Sem Censura", texto: "Vale gravar áudios de prazer ao vivo" },
  { nivel: "Sem Censura", texto: "Vale sexo total no espelho" },
  { nivel: "Sem Censura", texto: "Vale ficar nu por toda a casa" },
  { nivel: "Sem Censura", texto: "Vale masturbação assistida e comentada" },
  { nivel: "Sem Censura", texto: "Vale cena inspirada em filme adulto" },
  { nivel: "Sem Censura", texto: "Vale provocar com brinquedo favorito" },
  { nivel: "Sem Censura", texto: "Vale transar em local secreto do quarto" },
  { nivel: "Sem Censura", texto: "Vale orgasmo múltiplo forçado" },
  { nivel: "Sem Censura", texto: "Vale teste de resistência com brinquedos" },
  { nivel: "Sem Censura", texto: "Vale experimentar posição nova sem parar" }
];

const niveis = [
  { nome: "Leve", cor: "gray", valor: 5 },
  { nome: "Médio", cor: "green", valor: 10 },
  { nome: "Alto", cor: "blue", valor: 20 },
  { nome: "Extremo", cor: "red", valor: 40 },
  { nome: "Sem Censura", cor: "black", valor: 80 }
];

export default function App() {
  const [frasesAtuais, setFrasesAtuais] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);

  const sortearFrase = (nivel) => {
    const frasesDoNivel = frasesBase.filter((f) => f.nivel === nivel.nome);
    const aleatoria = frasesDoNivel[Math.floor(Math.random() * frasesDoNivel.length)];
    setFrasesAtuais([...frasesAtuais, aleatoria]);
    setPontuacao(pontuacao + nivel.valor);
  };

  const correr = () => {
    const frasesMedia = frasesBase.filter((f) => f.nivel === "Médio");
    const prenda = frasesMedia[Math.floor(Math.random() * frasesMedia.length)];
    setFrasesAtuais([...frasesAtuais, { texto: `PRÊMIO POR CORRER: ${prenda.texto}`, nivel: "Médio" }]);
  };

  const reiniciar = () => {
    setFrasesAtuais([]);
    setPontuacao(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 text-center space-y-6">
      <h1 className="text-3xl font-bold">Jogo de Poker Sensual</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {niveis.map((nivel) => (
          <Button
            key={nivel.nome}
            className={`bg-${nivel.cor}-600 hover:bg-${nivel.cor}-700 text-white font-semibold px-4 py-2 rounded-full border-2 border-white`}
            onClick={() => sortearFrase(nivel)}
          >
            {nivel.nome} ({nivel.valor} pts)
          </Button>
        ))}
        <Button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full border-2 border-white"
          onClick={correr}
        >
          Correr (Recebe Prenda)
        </Button>
        <Button
          className="bg-white hover:bg-gray-200 text-black font-semibold px-4 py-2 rounded-full border-2 border-white"
          onClick={reiniciar}
        >
          Reiniciar Jogo
        </Button>
      </div>

      {frasesAtuais.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <Card className="max-w-md mx-auto bg-white text-black">
            <CardContent className="p-6 space-y-3">
              {frasesAtuais.map((frase, index) => (
                <div key={index}>
                  <p className="text-lg font-semibold">{frase.texto}</p>
                  <p className="text-sm text-gray-600">Nível: {frase.nivel}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="text-sm text-gray-300 mt-4">
        Pontuação acumulada: <strong>{pontuacao} pts</strong>
      </div>
    </div>
  );
}
