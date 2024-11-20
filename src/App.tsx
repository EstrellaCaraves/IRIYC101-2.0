import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css';

function App() {
  const [wordData, setWordData] = useState(getRandomWord());
  const [word, setWord] = useState(wordData.word);
  const [hint, setHint] = useState(wordData.hint);
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]); // Estado para las letras correctas

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose || won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    // Actualizar hiddenWord
    const hiddenWordArray = hiddenWord.split(' ');
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));

    // Agregar la letra a correctLetters
    setCorrectLetters((prevLetters) => [...prevLetters, letter]);
  };

  const newGame = () => {
    const newWordData = getRandomWord();

    setWordData(newWordData);
    setWord(newWordData.word);
    setHint(newWordData.hint);
    setHiddenWord('_ '.repeat(newWordData.word.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
    setCorrectLetters([]); // Reiniciar las letras correctas
  };

  return (
    <div className="App">
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Pista */}
      <h4>Pista: {hint}</h4>

      {/* Contador de intentos */}
      <h3>Intentos: {attempts}</h3>

      {/* Mensaje si perdió */}
      {lose && <h3>Has agotado tus oportunidades☠️. La palabra era: {word}</h3>}

      {/* Mensaje si ganó */}
      {won && <h2>¡Felicidades, te has ganado una estrellita! ⭐</h2>}

      {/* Botones de letras */}
      {letters.map((letter) => (
        <button
          onClick={() => checkLetter(letter)}
          key={letter}
          style={{
            color: correctLetters.includes(letter) ? 'blue' : 'black',
          }}
        >
          {letter}
        </button>
      ))}

      <br />
      <br />
      <button onClick={newGame}>Nueva Palabra</button>
    </div>
  );
}

export default App;
