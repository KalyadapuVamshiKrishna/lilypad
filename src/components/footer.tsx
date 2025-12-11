import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Pin, 
  FileText 
} from "lucide-react";

// Data remains the same, but styling below is updated
const FOOTER_COLUMNS = [
  {
    id: 1,
    groups: [
      { title: "Network", links: ["Community", "Investor", "Broker"] },
      { title: "Technology", links: ["Artificial Intelligence", "Block Chain"] },
    ],
  },
  {
    id: 2,
    groups: [
      { title: "Product", links: ["Invest", "Discover", "Transact", "Manage"] },
      {
        title: "Highlights",
        content: [
          "Impact of COVID-19 on the food and beverage industry and the retail sector",
          "Commercial lending during COVID-19: navigating the impact",
        ],
        isText: true, 
      },
    ],
  },
  {
    id: 3,
    groups: [
      { title: "Our Story", links: ["Approach", "AboutUs"] },
      { title: "Knowledge Center", links: ["Resource", "Blog"] },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#18181b] text-white py-12 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* ==================== LEFT SECTION (Actions) ==================== */}
          <div className="w-full lg:w-[38%] space-y-8 relative">
            
            {/* Newsletter Input */}
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="w-full h-12 rounded-full bg-[#27272a] pl-5 pr-40 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500 border border-zinc-800/50"
              />
              <button className="absolute right-1 top-1 bottom-1 rounded-full bg-[#3f3f46] px-5 text-[11px] font-semibold text-white hover:bg-zinc-600 transition-colors tracking-wide">
                Subscribe To Newsletter
              </button>
            </div>

            {/* Headline */}
            <div className="max-w-xs">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-white">
                Signup and start enjoying the benifits today!
              </h2>
            </div>

            {/* Primary CTA Button */}
            <div>
              <button className="bg-[#7c5dfa] hover:bg-[#6b4ce6] text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-purple-500/20 tracking-wide">
                Sign Up To Lilypads
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={<Facebook size={16} />} />
              <SocialIcon icon={<Twitter size={16} />} />
              <SocialIcon icon={<Linkedin size={16} />} />
              <SocialIcon icon={<Youtube size={16} />} />
              <SocialIcon icon={<FileText size={16} />} />
              <SocialIcon icon={<Pin size={16} />} />
            </div>

            {/* Decorative Vertical Line (Desktop Only) */}
            <div className="hidden lg:block absolute right-[-32px] top-0 h-full w-[1px] bg-zinc-500/50"></div>
          </div>

          {/* ==================== RIGHT SECTION (Navigation) ==================== */}
          <div className="w-full lg:w-[62%] flex flex-col gap-10 pt-2">
            
            {/* Top Header: Logo & Address */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
              {/* LOGO using Next.js Image */}
              <div className="w-24 shrink-0">
                 {/* Ensure you have the image at this path in your /public folder.
                    The 'object-contain' class ensures it scales nicely without distortion.
                 */}
                 <Image 
                    src="/images/logo.png" 
                    alt="Lilypads Logo" 
                    width={100} 
                    height={100}
                    className="w-auto h-auto object-contain"
                 />
              </div>

              {/* Address Block */}
              <div className="space-y-1.5">
                <h4 className="text-white font-medium text-sm tracking-wide">Reach Us At</h4>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-[250px]">
                  6751 Columbia Gateway Dr.,<br />
                  3rd floor, Columbia,<br />
                  MD 21046
                </p>
              </div>
            </div>

            {/* The Link Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.id} className="flex flex-col gap-8">
                  {col.groups.map((group) => (
                    <div key={group.title} className="space-y-3">
                      <h4 className="font-semibold text-sm text-white">{group.title}</h4>
                      
                      {group.isText ? (
                        <div className="space-y-3">
                          {group.content?.map((text, i) => (
                            <p key={i} className="text-[11px] text-zinc-400 leading-relaxed pr-4">
                              {text}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-1.5">
                          {group.links?.map((link) => (
                            <li key={link}>
                              <a href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

// Helper Component for Social Icons - Reduced Size
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a 
      href="#" 
      className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-purple-700 hover:scale-110 transition-transform duration-200 shadow-sm"
    >
      {icon}
    </a>
  );
}