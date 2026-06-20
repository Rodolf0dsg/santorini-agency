import { Globe, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background text-on-surface-variant w-full pt-20 pb-8 border-t border-white/5">
      <div className="flex flex-col lg:flex-row justify-between items-start px-container-padding-mobile md:px-container-padding-desktop w-full max-w-7xl mx-auto gap-16">
        
        <div className="max-w-sm">
          <img 
            alt="Santorini White" 
            className="h-12 mb-8"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgKa5Kt2JFzYveYufietDw24n6id4-qVzNIzB_RYBp_VUh-sZOrd58GtfpQxN5x8j-RhsKHxrZ7Bo5UtZIWBY81cp70HVR6MdS-uCvw7s1lP8bSChZ0svT-fMDjzzKT7y-S_Xg_e_aZeKVyPDpywu3ZKnptRP16fQSkNjZhjtZeW9ssS1-N0xcfFnvjUoMtWTYZGcqDf-rQBzIcrf5RLi4xGgMUmq6Hfiq32fTjoZnepegngvIm9oz-hyTxsALhcOJGskis7_SQs" 
          />
          <p className="font-body-md text-body-md text-on-surface-variant/80">
            Redefining maritime standards through engineering precision and luxury service integration. Global reach,
            local expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full lg:w-auto">
          <div>
            <h5 className="font-label-md text-label-md text-secondary uppercase mb-6">Directory</h5>
            <ul className="space-y-4 font-body-md text-sm">
              <li>
                <a className="text-on-surface-variant hover:text-secondary transition-all" href="#">
                  Fleet Management
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-secondary transition-all" href="#">
                  Technical Services
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-secondary transition-all" href="#">
                  Crew Logistics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-secondary uppercase mb-6">Support</h5>
            <ul className="space-y-4 font-body-md text-sm">
              <li>
                <a className="text-on-surface-variant hover:text-secondary transition-all" href="#">
                  Portal Access
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-secondary transition-all" href="#">
                  Safety Protocols
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-secondary transition-all" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-secondary uppercase mb-6">Socials</h5>
            <div className="flex gap-4">
              <a 
                className="p-3 bg-surface-container rounded-full hover:bg-secondary hover:text-on-secondary transition-all border border-white/5 flex items-center justify-center"
                href="#"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a 
                className="p-3 bg-surface-container rounded-full hover:bg-secondary hover:text-on-secondary transition-all border border-white/5 flex items-center justify-center"
                href="#"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 pt-8 border-t border-white/5 px-container-padding-mobile md:px-container-padding-desktop w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-on-surface-variant/60 gap-6 text-center md:text-left">
        <p>© 2026 Santorini Ships Solutions. Premium Maritime Excellence.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="hover:text-secondary transition-all" href="#">SITEMAP</a>
          <a className="hover:text-secondary transition-all" href="#">LEGAL</a>
          <a className="hover:text-secondary transition-all" href="#">TERMS</a>
        </div>
      </div>
    </footer>
  );
};