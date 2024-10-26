import { useState } from "react";
import accordionData from "../../constants/accordionList";

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedArray, setSelectedArray] = useState([]);
  const [multimode, setMultimode] = useState(true);

  const handleVisibility = (id) => {
    let cpySelectedArray = [...selectedArray];
    const findIndex = cpySelectedArray.indexOf(id);

    if (multimode) {
      if (findIndex === -1) {
        cpySelectedArray.push(id);
        setSelectedArray(cpySelectedArray);
      } else {
        cpySelectedArray = cpySelectedArray.filter(
          (selectedId) => selectedId !== id
        );
        setSelectedArray(cpySelectedArray);
      }
    } else {
      setSelectedItem(selectedItem === id ? null : id);
    }
  };

  const isSelected = (id) => {
    return multimode ? selectedArray.includes(id) : selectedItem === id;
  };

  return (
    <div className="accordion-container w-full h-screen flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={() => setMultimode(!multimode)}
        className="bg-zinc-600 text-white active:scale-95"
      >
        Multi Mode ( {multimode ? "true" : "false"} )
      </button>
      {accordionData.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-2xl flex flex-col justify-center items-start"
        >
          <div className="w-full flex justify-between items-center">
            <h3
              onClick={() => handleVisibility(item.id)}
              className="cursor-pointer"
            >
              {item.title}
            </h3>
            <p className="ml-auto">{isSelected(item.id) ? "-" : "+"}</p>
          </div>
          <p className={isSelected(item.id) ? "show" : "hidden"}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
