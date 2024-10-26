import MenuItem from "./MenuItem";

const MenuList = ({ menu }) => {
  return (
    <ul>
      {menu?.length &&
        menu.map((list, index) => (
            <MenuItem list={list} key={index} />
        ))}
    </ul>
  );
};

export default MenuList;
