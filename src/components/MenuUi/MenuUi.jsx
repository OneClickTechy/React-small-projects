import menu from "./data";
import MenuList from "./MenuList";

const MenuUi = () => {
  return (
    <nav
      className="flex flex-col bg-green-400 min-h-screen w-2/3"
    >
      <MenuList menu={menu} />
    </nav>
  );
};

export default MenuUi;
