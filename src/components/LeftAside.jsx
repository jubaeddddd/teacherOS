import React, { useState } from "react";
import {
  FaThLarge,
  FaCalendarAlt,
  FaUserFriends,
  FaFlask,
  FaFileAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [active, setActive] = useState("Routine");

  const menuItems = [
    {
      name: "Dashboard",
      icon: FaThLarge,
      path: '/'
    },
    {
      name: "Schedule",
      icon: FaCalendarAlt,
      path: '/schedule'
    },
    {
      name: "Counseling",
      icon: FaUserFriends,
      path: '/counseling'
    },
    {
      name: "Quiz Lab",
      icon: FaFlask,
      path: '/quizLab'
    },
    {
      name: "Resources",
      icon: FaFileAlt,
      path: '/resources'
    },
  ];

  return (
    <div className="h-screen w-full bg-[#1f237e] text-white flex flex-col justify-between p-5">

      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-[#2b2fa3] p-3 rounded-xl">
            <FaGraduationCap size={22} />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Teacher OS</h1>
            <p className="text-xs text-indigo-300">Central Management</p>
          </div>
        </div>

        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <NavLink
                key={index}
                onClick={() => setActive(item.name)}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
                  ${isActive
                    ? "bg-[#2b2fa3] text-white"
                    : "text-indigo-200 hover:bg-[#2b2fa3]"
                  }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-3 bg-[#2b2fa3] p-3 rounded-xl">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold">Prof. Anderson</h3>
          <p className="text-xs text-indigo-300">Lead Educator</p>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;