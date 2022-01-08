import { CSSProperties, FC, memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CardLocation } from "../CardLocation";
const style: CSSProperties = {
  marginBottom: "30px",
  backgroundColor: "white",
  cursor: "move",
};

export interface CardProps {
  id: string;
  text: string;
  moveCard: (id: string, to: number) => void;
  findCard: (id: string) => { index: number };
  item: any;
  plan: any;
}

interface Item {
  id: string;
  originalIndex: number;
}

export const Card: FC<CardProps> = memo(function Card({
  id,
  text,
  moveCard,
  findCard,
  item,
  plan,
}) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "card",
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;

  return (
    <div ref={(node) => drag(drop(node))} style={{ ...style, opacity }}>
      {plan &&
      plan.length &&
      plan.filter((e: any) => e.locationid == item.siteid).length > 0 ? (
        <CardLocation
          data={item}
          onPlan={true}
          plan={plan.filter((e: any) => e.locationid == item.siteid)[0]}
        />
      ) : (
        <></>
      )}
    </div>
  );
});
