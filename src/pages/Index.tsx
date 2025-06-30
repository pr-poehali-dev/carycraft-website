import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Donate from "@/components/Donate";
import Rules from "@/components/Rules";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "home" && <Hero />}
      {activeTab === "donate" && <Donate />}
      {activeTab === "rules" && <Rules />}
    </div>
  );
};

export default Index;
