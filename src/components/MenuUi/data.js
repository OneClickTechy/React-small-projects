const navMenu = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Shop",
      link: "/shop",
      subMenu: [
        {
          name: "Men",
          link: "/shop/men",
          subMenu: [
            { name: "Shirts", link: "/shop/men/shirts" },
            { name: "Pants", link: "/shop/men/pants" },
          ],
        },
        {
          name: "Women",
          link: "/shop/women",
          subMenu: [
            { name: "Dresses", link: "/shop/women/dresses" },
            { name: "Skirts", link: "/shop/women/skirts" },
          ],
        },
      ],
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
      subMenu: [
        { name: "Customer Support", link: "/contact/support" },
        { name: "FAQ", link: "/contact/faq" },
      ],
    },
  ];
  
  export default navMenu;
  