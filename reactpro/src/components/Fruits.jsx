import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const fruits = [
    { name: "Apple", price: 1.99, emoji: "🍎" },
    { name: "Banana", price: 0.99, emoji: "🍌" },
    { name: "Cherry", price: 2.99, emoji: "🍒" },
    { name: "Date", price: 3.99, emoji: "🪀" },
    { name: "Elderberry", price: 4.99, emoji: "🫐" },
  ];
  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}
