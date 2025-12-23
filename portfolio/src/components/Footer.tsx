import {Github, Linkedin, Instagram, Mail} from "lucide-react";
import type React from "react";

export default function Footer(){
    const quickLinks = [
        {name:"Home",href:"#home"},
        {name:"About",href:"#about"},
        {name:"Portfolio",href:"#portfolio"},
        {name:"Skills",href:"#skills"},
        {name:"Services",href:"#services"},
        {name:"Resume",href:"#resume"},
        {name:"Testimonials",href:"#testimonials"},
        {name:"Contact",href:"#contact"},
    ];
    return(
        <footer className="bg-[#1f2a1f] text-gray-200 px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left section */}
                <div>
                    <h2 className="text-4xl font-semibold italic">Mable Tusiime</h2>
                    <p className="uppercase text-lg tracking-widest mt-1 text-gray-300">Software Developer</p>
                </div>

                {/* Social icons */}
                {/* CENTER */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-4 mb-4">

                        <a href="https://github.com/mablemunanura" target="_blank" rel="noopener noreferrer">
                        <Icon label="Github"><Github size={20} /></Icon>
                        </a>

                        <a href="mailto:mablemunanura@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Icon label="Mail"><Mail size={20} /></Icon>
                        </a>

                        <a href="https://www.linkedin.com/in/mable-tusiime-a35374323/" target="_blank" rel="noopener noreferrer">
                        <Icon label="LinkedIn"><Linkedin size={20} /></Icon>
                        </a>

                        <a href="https://www.instagram.com/_.munanura._?igsh=MTZ3YXl4ZTFvM2w0cQ==" target="_blank" rel="noopener noreferrer">
                        <Icon label="Instagram"><Instagram size={20} /></Icon>
                        </a>

                    </div>
                </div>                

                {/* Quick links */}
                <div className="md:text-right mt-8 md:mt-0">
                    <h3 className="font-semibold mb-4 underline">Quick Links</h3>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-0 text-gray-200 text-sm">
                        {quickLinks.map((link)=> (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-[#BB9476]! hover:font-semibold transition">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t-2 border-gray-400 mt-8 pt-4">
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                    © {new Date().getFullYear()} Mable. All Rights Reserved
                    <br />
                    <span className="text-xs">Designed by Mable Tusiime</span>
                </p>
            </div>
        </footer>
    );
}

type IconProps = {
    label: string
    children: React.ReactNode
}

function Icon({ children, label }: IconProps) {
  return (
    <span title={label} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-[#BB9476] transition cursor-pointer">
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0
      group-hover:opacity-100 scale-95 group-hover:scale-100 bg-[#3b2a1a] text-white text-xs
      px-2 py-1 rounded-md whitespace-nowrap pointer-events-none transition-all duration-200 z-50">
        {label}
      </span>
    </span>
  );
}