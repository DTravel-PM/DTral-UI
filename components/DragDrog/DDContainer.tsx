import React, { FC, memo, useCallback, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./Card";
import update from "immutability-helper";

export const DDContainer: FC<any> = memo(function Container({ ITEMS, plan }) {
  const [cards, setCards] = useState(ITEMS);

  const [, drop] = useDrop(() => ({ accept: "card" }));

  useEffect(() => {
    setCards(ITEMS);
  }, [ITEMS]);

  const findCard = useCallback(
    (id: string) => {
      const card = cards.filter((c: any) => `${c.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );


  return (
    <div ref={drop}>
      {cards &&
        cards.map((card: any, i: any) => (
          <Card
            id={`${card.id}`}
            text={card.text}
            item={card}
            moveCard={moveCard}
            findCard={findCard}
            key={i}
            plan={plan}
          />
        ))}
    </div>
  );
});
