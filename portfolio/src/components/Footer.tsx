import {Github, Linkedin, Instagram, Mail} from "lucide-react";

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
                    <Icon><Github size={20} /></Icon>
                    </a>
                    <a href="mailto:mablemunanura@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Icon><Mail size={20} /></Icon>
                    </a>
                    <a href="https://www.linkedin.com/in/mable-tusiime-a35374323/" target="_blank" rel="noopener noreferrer">
                    <Icon><Linkedin size={20} /></Icon>
                    </a>
                    <a href="https://www.instagram.com/_.munanura._?igsh=MTZ3YXl4ZTFvM2w0cQ==" target="_blank" rel="noopener noreferrer">
                    <Icon><Instagram size={20} /></Icon>
                    </a>
                </div>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                    © {new Date().getFullYear()} Mable. All Rights Reserved
                    <br />
                    Designed by Mable Tusiime
                </p>
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
        </footer>
    );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-[#BB9476] transition cursor-pointer">
      {children}
    </span>
  );
}