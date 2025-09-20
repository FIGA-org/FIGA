import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/granitodarena",
    hover: "hover:bg-blue-600 hover:shadow-blue-500/40",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/fgranitodearena",
    hover: "hover:bg-pink-500 hover:shadow-pink-400/40",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/Elena_Fundacion",
    hover: "hover:bg-blue-400 hover:shadow-blue-300/40",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/fundaci%C3%B3n-internacional-granito-de-arena-82653a366/",
    hover: "hover:bg-blue-700 hover:shadow-blue-600/40",
  },
  {
    label: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@elena_fundacion",
    hover: "hover:bg-black hover:shadow-gray-800/40",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@fgranitodearena",
    hover: "hover:bg-red-600 hover:shadow-red-500/40",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send/?phone=529613697151&text&type=phone_number&app_absent=0",
    hover: "hover:bg-green-500 hover:shadow-green-400/40",
  },
];

export default function SocialLinks() {
  return (
    <div className="rounded-2xl bg-[#0b2340] text-white p-6 shadow-lg">
      <h2 className="text-xl font-extrabold">Síguenos en redes sociales</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {socials.map(({ label, icon: Icon, href, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`group relative flex items-center justify-center rounded-full bg-white/10 
                        w-12 h-12 transition-all duration-300 
                        hover:scale-110 hover:shadow-lg ${hover}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
