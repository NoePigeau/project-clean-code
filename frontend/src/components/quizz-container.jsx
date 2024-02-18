import { useState } from "react";
import { cardService } from "../services/card.service";

export const QuizzContainer = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState();
    const [inputAnswer, setInputAnswer] = useState("");
    const [score, setScore] = useState(0);

    const submitAnswer = async (e) => {
        e.preventDefault();
        await cardService.answerQuestion(
            cards[currentIndex].id,
            cards[currentIndex].answer === inputAnswer
        );
        setCurrentIndex(currentIndex + 1);
        setInputAnswer("");
        if (cards[currentIndex].answer === inputAnswer) {
            setScore(score + 1);
        }
    };

    if (currentIndex === undefined) {
        return (
            <div className="flex flex-col gap-8 bg-blue-950 p-10 rounded-md">
                <h1 className="text-3xl">Let&lsquo;s begin the quizz !</h1>
                <button
                    className="p-2 rounded-md bg-blue-800"
                    onClick={() => setCurrentIndex(0)}
                >
                    Start quizz
                </button>
            </div>
        );
    }

    if (!cards[currentIndex]) {
        return (
            <div className="flex flex-col gap-8 bg-blue-950 p-10 rounded-md">
                <h1 className="text-3xl">Quizz is over</h1>
                <h1 className="text-3xl">
                    Score: {score} / {cards.length}
                </h1>
            </div>
        );
    }

    return (
        <form
            onSubmit={submitAnswer}
            className="flex flex-col gap-8 bg-blue-950 p-10 rounded-md"
        >
            <h1 className="text-3xl">
                Question {currentIndex + 1}: {cards[currentIndex].question}
            </h1>
            <div className="flex flex-col gap-2">
                <input
                    className="p-2 rounded-md bg-blue-900"
                    type="text"
                    name="answer"
                    placeholder="Answer the question ..."
                    value={inputAnswer}
                    onChange={(e) => setInputAnswer(e.target.value)}
                />
                <input
                    className="p-2 rounded-md bg-blue-800"
                    type="submit"
                    value="Validate"
                />
            </div>
        </form>
    );
};