import { Menu } from "lucide-react";


export function MobileMenuIcon() {
    return (
      <div className="col-span-3 flex justify-end items-center md:hidden">
        <Menu className="text-[#002D4B] w-6 h-6" />
      </div>
    );
  }