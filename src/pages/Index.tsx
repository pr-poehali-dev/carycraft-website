import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Donate from "@/components/Donate";
import Rules from "@/components/Rules";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/6a2a23a4-9acb-41eb-bfcf-31875f1af37f.jpg)",
        }}
      />
      <div className="relative z-10 bg-black/60 min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "home" && <Hero />}
        {activeTab === "donate" && <Donate />}
        {activeTab === "rules" && <Rules />}
      </div>
    </div>
  );
};

export default Index;
