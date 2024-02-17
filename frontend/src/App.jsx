import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { cardService } from "./services/card.service";
import { FormCard } from "./components/form-card";

const App = () => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    cardService.fetchAll().then((cards) => setCards(cards));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1050px] mx-[auto] flex flex-col gap-10">
        <h1 className="text-3xl font-bold"> Learn with Leitner method </h1>
        <section>
          <h1 className="text-xl font-bold mb-8"> Add new card </h1>
          <FormCard onSubmit={fetchCards} />
        </section>
        <section>
          <h1 className="text-xl font-bold mb-8"> All cards </h1>
          <div className="flex gap-6 flex-wrap">
            {cards?.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
