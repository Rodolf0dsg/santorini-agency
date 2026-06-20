import { BadgeCheck, ShieldCheck, Leaf, Anchor, Headphones } from "lucide-react";

export const CertificationsSection = () => {
  return (
    <section className="relative z-10 py-12 bg-surface-container overflow-hidden border-y border-white/5">
      <div className="flex animate-infinite-scroll whitespace-nowrap gap-8 items-center w-max">
        
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <BadgeCheck className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">ISO 9001 CERTIFIED</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <ShieldCheck className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">MARITIME SECURITY</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <Leaf className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">GREEN SEAS ALLIANCE</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <Anchor className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">IACS MEMBER</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <Headphones className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">GLOBAL RESPONSE</span>
        </div>
        
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <BadgeCheck className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">ISO 9001 CERTIFIED</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <ShieldCheck className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">MARITIME SECURITY</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <Leaf className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">GREEN SEAS ALLIANCE</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <Anchor className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">IACS MEMBER</span>
        </div>
        <div className="glass-card-light px-8 py-4 rounded-full flex items-center gap-4 min-w-70">
          <Headphones className="text-secondary w-5 h-5" />
          <span className="font-label-md text-label-md text-on-surface">GLOBAL RESPONSE</span>
        </div>

      </div>
    </section>
  );
};