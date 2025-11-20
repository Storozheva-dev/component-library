"use client";
import React, { useState } from "react";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home" },
    {
      label: "Services",
      children: [{ label: "Web Development" }, { label: "Design" }],
    },
    { label: "Contact" },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      <SidebarMenu
        items={menuItems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
