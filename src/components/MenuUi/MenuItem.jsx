import { useState } from "react";
import MenuList from "./MenuList";
import { BiMinus, BiPlus } from "react-icons/bi";

const MenuItem = ({ list }) => {
  const [currentDisplayItem, setCurrentDisplayItem] = useState({});
  const handleDisplayChild = (getCurrentListName) => {
    setCurrentDisplayItem((previous) => ({
      ...previous,
      [getCurrentListName]: !previous[getCurrentListName],
    }));
  };
  return (
    <li className="flex flex-col">
      <div className={`flex justify-center items-center ${!list?.subMenu?.length ? 'p-4' : null}`} onClick={() => handleDisplayChild(list.name)}>
        {list.name}
        {list?.subMenu?.length ? (
          currentDisplayItem[list.name] ? (
            <span>
              {" "}
              <BiMinus />{" "}
            </span>
          ) : (
            <span>
              {" "}
              <BiPlus />{" "}
            </span>
          )
        ) : null}
      </div>
      {list?.subMenu?.length && currentDisplayItem[list.name] ? (
        <MenuList menu={list.subMenu} />
      ) : null}
    </li>
  );
};

export default MenuItem;
