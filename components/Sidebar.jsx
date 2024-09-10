import React from "react";
import { PanelLeftClose, PanelRightOpen } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`z-10 fixed top-0 left-0 h-full bg-[#1E4A7C] text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 shadow-md`}
    >
      <button className="absolute top-4 right-4" onClick={toggleSidebar}>
        {isOpen ? (
          <PanelLeftClose color="#FFF" />
        ) : (
          <PanelRightOpen color="#FFF" />
        )}
      </button>
      <div className="p-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
      </div>
    </div>
  );
};

export default Sidebar;
