import React from "react";
import {
  BookOpenCheck,
  DoorOpen,
  FileQuestion,
  Gamepad2,
  House,
  Medal,
  PanelLeftClose,
  PanelRightOpen,
} from "lucide-react";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`z-10 fixed top-0 left-0 h-full bg-[#BED8F6] transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 shadow-md`}
    >
      <button className="absolute top-4 right-4" onClick={toggleSidebar}>
        {isOpen ? <PanelLeftClose /> : <PanelRightOpen color="#FFF" />}
      </button>
      <div className="p-4 h-full flex flex-col">
        <h2 className="text-xs bg-[#D9D9D9] w-fit py-3 px-5 rounded-full">
          LOGO
        </h2>
        <div className="mt-10 flex flex-col gap-2 flex-grow">
          <Link href="/dashboard">
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#8FBCF0] cursor-pointer">
              <House color="#1E4A7C" />
              <p>Home</p>
            </div>
          </Link>
          <Link href="/lessons">
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#8FBCF0] cursor-pointer">
              <BookOpenCheck color="#1E4A7C" />
              <p>Lessons</p>
            </div>
          </Link>
          <Link href="/quizzes">
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#8FBCF0] cursor-pointer">
              <FileQuestion color="#1E4A7C" />
              <p>Quizzes</p>
            </div>
          </Link>
          <Link href="/challenges">
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#8FBCF0] cursor-pointer">
              <Gamepad2 color="#1E4A7C" />
              <p>Challenges</p>
            </div>
          </Link>
          <Link href="/achievements">
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#8FBCF0] cursor-pointer">
              <Medal color="#1E4A7C" />
              <p>Achievements</p>
            </div>
          </Link>
        </div>
        <div className="mx-auto flex items-center gap-2 py-2 px-4 text-center rounded-lg hover:bg-[#8FBCF0] cursor-pointer mt-auto">
          <DoorOpen color="#1E4A7C" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
