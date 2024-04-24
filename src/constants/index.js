export const navItems = (isValidUser) => [
  ...(isValidUser
    ? [
        {
          title: "Home",
          isButton: false,
          path: "/home",
        },
        {
          title: "About Us",
          isButton: false,
          path: "/about",
        },
        {
          title: "Contact",
          isButton: false,
          path: "/contact-us",
        },
        {
          title: "Logout",
          isButton: true,
          isLogout: true,
        },
      ]
    : [
        {
          title: "Login/Register",
          isButton: true,
          path: "/sign-in",
        },
      ]),
];

export const footerItems = (isValidUser) => [
  ...(isValidUser
    ? [
        {
          title: "Home",
          isButton: false,
          path: "/home",
        },
        {
          title: "About Us",
          isButton: false,
          path: "/about",
        },
        {
          title: "Contact",
          isButton: false,
          path: "/contact-us",
        },
        {
          title: "Article",
          isButton: false,
        },
      ]
    : []),
];
