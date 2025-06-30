import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Donate = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 font-montserrat">
          Поддержать сервер
        </h1>
        <p className="text-xl text-gray-300">
          Помогите развитию CaryCraft и получите эксклюзивные преимущества
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Icon name="Key" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl text-white">
                Доступ к серверу
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50₽</div>
              <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                Разовая покупка
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Check" size={16} className="text-green-400" />
                Полный доступ к серверу
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Check" size={16} className="text-green-400" />
                Участие во всех событиях
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Check" size={16} className="text-green-400" />
                Доступ к РП функциям
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Купить проходку
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/30 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl text-white">
                Дополнительные сердца
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">10₽</div>
              <Badge className="bg-red-600/20 text-red-400 border-red-500/30">
                За 1 сердце
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Heart" size={16} className="text-red-400" />
                Восстановление здоровья
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Shield" size={16} className="text-red-400" />
                Защита от смерти
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="TrendingUp" size={16} className="text-red-400" />
                Максимум 10 сердец
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  1 ❤️
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  5 ❤️
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  10 ❤️
                </Button>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить сердца
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="CreditCard" size={24} className="text-purple-400" />
            <h3 className="text-xl font-bold text-white">Способы оплаты</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Принимаем карты, СБП, QIWI, ЮMoney и другие способы оплаты
          </p>
          <div className="flex justify-center gap-4">
            <Badge
              variant="outline"
              className="border-purple-500/30 text-purple-400"
            >
              Visa
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-500/30 text-purple-400"
            >
              MasterCard
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-500/30 text-purple-400"
            >
              СБП
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Donate;
