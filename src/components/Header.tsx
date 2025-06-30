interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="bg-gray-900 border-b-2 border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 border-2 border-green-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">⬛</span>
            </div>
            <h1 className="text-xl font-bold text-white tracking-wider">
              CARYCRAFT
            </h1>
          </div>

          <nav className="flex gap-1">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-2 border-2 transition-colors ${
                activeTab === "home"
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-gray-600 hover:border-white"
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => setActiveTab("donate")}
              className={`px-4 py-2 border-2 transition-colors ${
                activeTab === "donate"
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-gray-600 hover:border-white"
              }`}
            >
              DONATE
            </button>
            <button
              onClick={() => setActiveTab("rules")}
              className={`px-4 py-2 border-2 transition-colors ${
                activeTab === "rules"
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-gray-600 hover:border-white"
              }`}
            >
              RULES
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
