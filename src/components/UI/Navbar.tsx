"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../UI/NavbarMenu";
import { cn } from "../../utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem item="About Me" />
        <MenuItem item="Projects" />
        <MenuItem item="Skills" />
        <MenuItem item="Contact Me" />
      </Menu>
    </div>
  );
}
