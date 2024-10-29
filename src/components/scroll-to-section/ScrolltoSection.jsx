import { useRef } from "react";

const ScrolltoSection = () => {
  const currScrollRef = useRef(null);
  const cards = [
    {
      title: "card 1",
      styles: "bg-red-500 w-full min-h-screen",
    },
    {
      title: "card 2",
      styles: "bg-green-500 w-full min-h-screen",
    },
    {
      title: "card 3",
      styles: "bg-blue-500 w-full min-h-screen",
    },
  ];
  const handleScrolltoSection = (e) => {
    const pos = currScrollRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1 className="text-4xl">Scroll to Section</h1>
      <button onClick={handleScrolltoSection}>Click to Scroll</button>
      {cards.map((card, index) => (
        <div
          key={index}
          ref={index === 2 ? currScrollRef : null}
          className={card.styles}
        >
          {card.title}
        </div>
      ))}
    </div>
  );
};

export default ScrolltoSection;
