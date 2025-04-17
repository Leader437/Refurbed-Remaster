import React from "react";

const BorderButton = ({children}) => {
  return (
    <button className="px-6 py-4 text-sm font-semibold text-custom-pri-light border-1 border-custom-pri-light rounded-lg hover:border-custom-pri transition duration-200">
      {children}
    </button>
  );
};

export default BorderButton;