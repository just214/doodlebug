"use client";

import shuffle from "lodash/shuffle";
import { IconType } from "react-icons";
import { FaRandom } from "react-icons/fa";
import { useIsClient } from "usehooks-ts";

import { bgColors } from "utils/bgColors";
import { actions } from "utils/constants";
import { Word } from "utils/types";
import { useLocalStorage } from "utils/useLocalStorage";

import { Header } from "./Header";

type Props = {
  words: Word[];
};

type Selections = {
  wordIndex: null | number;
  actionIndex: null | number;
  bgColorIndex: number;
};

const defaultSelections = {
  wordIndex: null,
  actionIndex: null,
  bgColorIndex: 0,
};

export const Home = (props: Props) => {
  const isClient = useIsClient();
  const [words, setWords] = useLocalStorage<Word[]>(
    "doodlebug-words",
    props.words
  );

  const [selections, setSelections] = useLocalStorage<Selections>(
    "doodlebug-selections",
    defaultSelections
  );

  function handleEndGame() {
    setSelections(defaultSelections);
    setWords(shuffle(props.words));
  }

  function handleSelection() {
    setSelections({
      wordIndex: selections.wordIndex === null ? 0 : selections.wordIndex + 1,
      actionIndex: getRandomIndex(actions.length),
      bgColorIndex: getRandomIndex(bgColors.length),
    });
  }

  function getRandomIndex(len: number) {
    return Math.floor(Math.random() * len);
  }

  const bgColor = bgColors[selections.bgColorIndex] || "#333";

  const word =
    typeof selections?.wordIndex === "number"
      ? words[selections?.wordIndex % words.length]
      : null;

  const action =
    typeof selections?.actionIndex === "number"
      ? actions[selections?.actionIndex]
      : null;

  const ActionIcon = action?.icon as IconType;

  const usedWords = words?.slice(0, selections?.wordIndex as number);

  if (!isClient) return null;

  return (
    <main
      className={`flex flex-col items-center gap-8 min-h-screen transition-colors duration-500 ease-in-out p-4 pattern`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="flex flex-col items-center max-w-xl mx-auto text-center w-full">
        <Header />

        {word && action && (
          <div className="w-full p-4 rounded-2xl bg-black/40 mt-12">
            {word && action && (
              <div key={word.id} className="text-center animate-fade w-full">
                <p className="text-7xl font-display">{word.name}</p>
                <p className="mt-6 inline-block rounded-full px-3 py-1 bg-black/50 text-yellow-100 text-base font-sans font-medium ">
                  {word.category}
                </p>
                <div className="flex items-center text-xl justify-center gap-4 mt-6">
                  <ActionIcon className="text-yellow-100" />
                  <p className="font-sans">{action.name}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {usedWords && usedWords.length > 0 && (
          <div className="w-full p-3 flex flex-wrap justify-center gap-2 mt-12 border-2 border-white border-dashed rounded-lg">
            {usedWords?.map((word) => (
              <p
                className="bg-black/30 font-sans rounded-full px-2 animate-fade"
                key={word.id}
              >
                {word.name}
              </p>
            ))}
          </div>
        )}

        {selections?.actionIndex !== null && (
          <button
            className="inline-block absolute bottom-5 mt-6 p-2 text-lg rounded-lg hover:bg-black/30 transition-all duration-300 ease-in-out active:scale-95"
            onClick={handleEndGame}
          >
            End Game
          </button>
        )}

        <button
          className=" fixed right-10 bottom-10 text-4xl font-display flex items-center gap-2 justify-center  my-6 active:scale-95 bg-yellow-200  p-4 rounded-full transition-all duration-200 ease-in-out"
          onClick={handleSelection}
          aria-label="Next Word"
          style={{ color: bgColor }}
        >
          <FaRandom />
        </button>
      </div>
    </main>
  );
};
