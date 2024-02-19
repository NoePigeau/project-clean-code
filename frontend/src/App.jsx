import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { cardService } from "./services/card.service";
import { FormCard } from "./components/form-card";
import { QuizzContainer } from "./components/quizz-container";

const App = () => {
  const [allCards, setAllCards] = useState([]);
  const [quizzCards, setQuizzCards] = useState([]);

  const fetchAllCards = async () => {
    cardService.fetchAll().then((cards) => setAllCards(cards));
  };

  const fetchQuizzCards = async () => {
    cardService.fetchQuizz().then((cards) => setQuizzCards(cards));
  };

  useEffect(() => {
    fetchAllCards();
    fetchQuizzCards();
  }, []);

  return (
      <div className="w-full py-12">
        <div className="w-full max-w-[1050px] mx-[auto] flex flex-col gap-10">
          <h1 className="text-3xl font-bold"> Learn with Leitner method </h1>
          <section>
            <h1 className="text-xl font-bold mb-8"> Quizz of the day </h1>
            <QuizzContainer cards={quizzCards} />
          </section>
          <section>
            <h1 className="text-xl font-bold mb-8"> Add new card </h1>
            <FormCard onSubmit={fetchAllCards} />
          </section>
          <section>
            <h1 className="text-xl font-bold mb-8"> All cards </h1>
            <div className="flex gap-6 flex-wrap">
              {allCards && allCards.map((card) => {
                return <Card key={card.id} card={card} />;
              })}
              {!allCards && (
                <p> No cards found. </p>
              )}
            </div>
          </section>
        </div>
      </div>
  );
};

export default App;