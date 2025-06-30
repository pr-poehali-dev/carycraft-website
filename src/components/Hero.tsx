import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4 font-montserrat">
          Добро пожаловать на
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {" "}
            CaryCraft
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Уникальный полу-РП сервер Minecraft с системой потери сердец
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Система сердец</h3>
            </div>
            <p className="text-gray-300 mb-4">
              На нашем сервере действует уникальная система потери сердец после
              смерти. Каждая смерть делает игру более напряженной и
              реалистичной.
            </p>
            <Badge
              variant="destructive"
              className="bg-red-600/20 text-red-400 border-red-500/30"
            >
              Хардкор режим
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Полу-РП сервер</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Погрузитесь в мир ролевой игры, где каждое действие имеет
              значение. Создавайте истории, взаимодействуйте с другими игроками
              и стройте свою легенду.
            </p>
            <Badge
              variant="secondary"
              className="bg-green-600/20 text-green-400 border-green-500/30"
            >
              Ролевая игра
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Server" size={32} className="text-purple-400" />
            <h3 className="text-3xl font-bold text-white">IP: carycraft.ru</h3>
          </div>
          <p className="text-gray-300 text-lg">
            Присоединяйтесь к нашему сообществу и начните свое приключение уже
            сегодня!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
