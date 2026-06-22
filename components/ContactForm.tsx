"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    urgency: "general",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Next.js inyectará esto de forma segura durante el build/runtime
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          urgency: formState.urgency,
          message: formState.message,
          from_name: "Santorini Web Operations",
          subject: `New Operational Ledger [Urgency: ${formState.urgency.toUpperCase()}]`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormState({ name: "", email: "", urgency: "general", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Transmission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card p-10 rounded-2xl border border-white/5 bg-surface-container-low/50 text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
        <CheckCircle className="w-16 h-16 text-secondary mb-4 animate-bounce" />
        <h3 className="text-white font-bold text-2xl mb-2">Ledger Transmitted</h3>
        <p className="text-white/60 text-sm max-w-sm">
          The operational data has been securely routed to our dispatch office. Our team will review the parameters shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-label-md tracking-widest text-secondary hover:text-white uppercase transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 glass-card p-6 rounded-2xl border border-white/5 bg-surface-container-low/50 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-label-md tracking-wider uppercase text-on-surface-variant">Company / Representative</label>
          <input
            type="text"
            required
            disabled={status === "loading"}
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="e.g., Chevron Shipping"
            className="bg-surface border border-white/10 px-4 py-3 rounded-xl font-body-md text-on-surface focus:border-secondary focus:outline-none transition-colors duration-300 placeholder:text-white/20 disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-label-md tracking-wider uppercase text-on-surface-variant">Email</label>
          <input
            type="email"
            required
            disabled={status === "loading"}
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="ops@company.com"
            className="bg-surface border border-white/10 px-4 py-3 rounded-xl font-body-md text-on-surface focus:border-secondary focus:outline-none transition-colors duration-300 placeholder:text-white/20 disabled:opacity-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-label-md tracking-wider uppercase text-on-surface-variant">Operational Urgency</label>
        <select
          disabled={status === "loading"}
          value={formState.urgency}
          onChange={(e) => setFormState({ ...formState, urgency: e.target.value })}
          className="bg-surface border border-white/10 px-4 py-3 rounded-xl font-body-md text-on-surface focus:border-secondary focus:outline-none transition-colors duration-300 cursor-pointer appearance-none disabled:opacity-50"
        >
          <option value="general">Standard Commercial Query</option>
          <option value="bunker">Bunkering / Provisions Request</option>
          <option value="husbandry">Crew Change / Husbandry Logistics</option>
          <option value="emergency">Emergency Port / Anchorage Assistance</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-label-md tracking-wider uppercase text-on-surface-variant">Operational Scope / Requirements</label>
        <textarea
          rows={3}
          required
          disabled={status === "loading"}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Provide vessel details, IMO number or specific port requirements..."
          className="bg-surface border border-white/10 px-4 py-3 rounded-xl font-body-md text-on-surface focus:border-secondary focus:outline-none transition-colors duration-300 resize-none placeholder:text-white/20 disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs font-medium">
          Transmission failed. Please check your network or try again directly via email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-secondary border border-secondary text-on-secondary py-3.5 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-transparent hover:text-secondary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            Transmitting...
            <Loader2 className="w-4 h-4 animate-spin" />
          </>
        ) : (
          <>
            Transmit Ledger
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
};