import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 7,
        title: "Privacy Policy",
        path: "/about",
        newTab: false,
      },
      {
        id: 8,
        title: "Terms & Conditions",
        path: "/blog",
        newTab: false,
      },
      {
        id: 9,
        title: "Cookie Policy",
        path: "/blog-sidebar",
        newTab: false,
      },
    ],
  },
];
export default menuData;
