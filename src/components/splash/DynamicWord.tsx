import React, { useEffect, useState } from 'react';

interface Word {
  word: string;
  color: string;
}

const DynWordComponent: React.FC = () => {
  const dynWordList: Word[] = [
    { word: '<html>', color: 'var(--lang-color-html)' },
    { word: '#css', color: 'var(--lang-color-css)' },
    { word: 'javaScript();', color: 'var(--lang-color-js)' },
    { word: '<React />', color: '#61DBFB' },
    { word: 'TypeScript', color: '#007acc' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState<string | null>(null);

  useEffect(() => {
    const letterInterval = 100; // Adjust as needed
    const waitTime = 1000; // Adjust as needed

    let isMounted = true;

    const deleteWord = async () => {
      const word = dynWordList[currentIndex].word;
      for (let i = word.length; i >= 0; i--) {
        if (!isMounted) return;
        setCurrentWord(word.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, letterInterval));
      }
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    };

    const buildWord = async () => {
      const word = dynWordList[currentIndex].word;
      for (let i = 0; i <= word.length; i++) {
        if (!isMounted) return;
        setCurrentWord(word.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, letterInterval));
      }
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    };

    const cycleWords = async () => {
      await deleteWord();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dynWordList.length);
      await buildWord();
      await cycleWords();
    };

    cycleWords();

    return () => {
      isMounted = false;
    };
  }, [currentIndex, dynWordList]);

  return (
    <div
      id="dynWord"
      style={{
        color: currentWord ? dynWordList[currentIndex].color : 'inherit',
      }}
    >
      {currentWord}
    </div>
  );
};

export default DynWordComponent;
