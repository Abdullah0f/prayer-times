export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // backgroundColor: state.isSelected ? "#1E8D3E" : "white",
    backgroundColor: state.isFocused
      ? "#37ae597b"
      : state.isSelected
      ? "#1E8D3E"
      : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "#37ae597b",
      // color: "white",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.menuIsOpen ? "green" : "green",
    boxShadow: state.menuIsOpen ? "0 0 0 1px green" : "0 0 0 0.5px green",
    "&:hover": null,
  }),
};
