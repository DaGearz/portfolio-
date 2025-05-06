const navVariables = [
    { id: "L1", name: "Home", path: "/", isSelect: false, isHideOnLarge: false }, 
    { id: "L2", name: "About", path: "/about", isSelect: false, isHideOnLarge: false  },
    { id: "L3", name: "Portfolio", path: "/portfolio", isSelect: false, isHideOnLarge: false  },
    { id: "L4", name: "Contact", path: "/contact-info", isSelect: false, isHideOnLarge: false  },
    { id: "L5", name: "Resume", path: "/resume", isSelect: false, isHideOnLarge: false  },
    {
      id: "L7",
      name: "Additional",
      path: null,
      isSelect: true,
      isHideOnLarge: true, 
      options: [
        { id: "O1", name: "Contact", path: "/contact-info" },
        { id: "O2", name: "Resume", path: "/resume" },
      ]
    }
  ];

  export default navVariables