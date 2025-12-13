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
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols0=-3 gap-10">
                {/* Left section */}
                <div>
                    <h2 className="text-2xl font-semibold italic">Mable Tusiime</h2>
                    <p className="uppercase text-sm tracking-widest mt-1 text-gray-400">Software Developer</p>
                </div>

                {/* Social icons */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-4 mb-4">
                        <Icon><Github size={20} /> </Icon>
                        <Icon><Mail size={20} /> </Icon>
                        <Icon><Linkedin size={20} /> </Icon>
                        <Icon><Instagram size={20} /> </Icon>
                    </div>
                    {/* Copyright */}
                    <p className="text-sm text-gray-400 text-center leading-relaxed mt-6">
                        2025 Copyright Mable. All Rights Reserved <br/>
                        Designed by Mable Tusiime
                    </p>
                </div>                 

                {/* Quick links */}
                <div className="md:text-right mt-8 md:mt-0">
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        {quickLinks.map((link)=> (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-white transition">
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

function Icon({children}: {children:React.ReactNode}){
    return(
        <span className="p-2 rounded-full border border0-gray-400 hover:bg-gray-700 transition cursor-pointer">
            {children}
        </span>
    )
}