import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white font-montserrat">
              CaryCraft
            </h1>
          </div>

          <nav className="flex gap-2">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              onClick={() => setActiveTab("home")}
              className={`${
                activeTab === "home"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button
              variant={activeTab === "donate" ? "default" : "ghost"}
              onClick={() => setActiveTab("donate")}
              className={`${
                activeTab === "donate"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon name="CreditCard" size={16} className="mr-2" />
              Донат
            </Button>
            <Button
              variant={activeTab === "rules" ? "default" : "ghost"}
              onClick={() => setActiveTab("rules")}
              className={`${
                activeTab === "rules"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon name="BookOpen" size={16} className="mr-2" />
              Правила
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
