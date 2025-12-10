import Card from "./Card";

export default function CardContainerHorizontal() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-row overflow-x-scroll gap-4 scrollbar-hide">
      {books.map((book) => (
        <Card key={book} />
      ))}
    </div>
  );
}
