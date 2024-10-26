import { useEffect, useState } from "react";
import Button from "./Button";
import winningPattern from "./winningPattern";
const TicTacToe = () => {
  const [isXTurn, setIsXturn] = useState(true);
  const [content, setContent] = useState(Array(9).fill(""));
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [winner, setWinner] = useState(null);

  const getWinner = () => {
    winningPattern.map((row) => {
      const contentcpy = [...content];
      const [x, y, z] = row;
      if (
        contentcpy[x] &&
        contentcpy[x] === contentcpy[y] &&
        contentcpy[x] === contentcpy[z]
      ) {
        const winner = contentcpy[x];
        console.log(winner)
        setWinner(winner);
      }
    });
  };

  useEffect(() => {
      console.log("winner", winner);
      console.log('content', content);
      getWinner()

  }, [content]);
  const handleClick = (index) => {
    const oldContent = [...content];
    if (oldContent[index] !== "") return;
    oldContent.splice(index, 1, isXTurn ? "x" : "o");
    setIsXturn(!isXTurn);
    setContent(oldContent);
  };
  const handleReset = () => {
    setIsXturn(true);
    setWinner(null);
    setContent(Array(9).fill(""));
    setIsButtonDisable(false);
  };

  useEffect(() => {
    if (winner !== null) setIsButtonDisable(!isButtonDisable);
    console.log("winner", winner);
  }, [winner]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="self-start text-2xl font-bold text-center w-full">
        Tic Tac Toe
      </h1>

      <div className="bg-gray-400 w-96 h-96 border border-gray-500 gap-1 ">
        <div className="w-full h-32 border border-gray-500 flex justify-between">
          <Button
            content={content[0]}
            index={0}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
          <Button
            content={content[1]}
            index={1}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
          <Button
            content={content[2]}
            index={2}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
        </div>
        <div className="w-full h-32 border border-gray-500 flex justify-between">
          <Button
            content={content[3]}
            index={3}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
          <Button
            content={content[4]}
            index={4}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
          <Button
            content={content[5]}
            index={5}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
        </div>
        <div className="w-full h-32 border border-gray-500 flex justify-between">
          <Button
            content={content[6]}
            index={6}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
          <Button
            content={content[7]}
            index={7}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
          <Button
            content={content[8]}
            index={8}
            handleClick={handleClick}
            disabled={isButtonDisable}
          />
        </div>
      </div>
      <p className="font-semibold text-xl">
      {winner && <p className="text-4xl text-green-400 animate-shakeX">Player {winner} is Win</p>}
        Current Player is {isXTurn ? "X" : "O"}
      </p>
      <h2></h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
