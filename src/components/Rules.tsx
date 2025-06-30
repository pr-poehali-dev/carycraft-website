import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const ruleCategories = [
    {
      id: "general",
      title: "Общие правила",
      icon: "BookOpen",
      color: "blue",
      rules: [
        "Уважительное отношение к другим игрокам",
        "Запрещен мат в общем чате",
        "Запрещена реклама других серверов",
        "Использование читов и модификаций запрещено",
      ],
    },
    {
      id: "rp",
      title: "РП правила",
      icon: "Users",
      color: "green",
      rules: [
        "Соблюдение ролевой игры в специальных зонах",
        "Запрещен RandomDeathMatch (RDM)",
        "Обязательная ролевая причина для конфликтов",
        "Уважение к чужим ролевым историям",
      ],
    },
    {
      id: "building",
      title: "Строительство",
      icon: "Building",
      color: "orange",
      rules: [
        "Запрещено строительство в чужих территориях",
        "Соблюдение архитектурного стиля региона",
        "Запрещены неэстетичные постройки",
        "Обязательная регистрация крупных построек",
      ],
    },
    {
      id: "pvp",
      title: "PvP правила",
      icon: "Sword",
      color: "red",
      rules: [
        "PvP разрешен только в специальных зонах",
        "Запрещено убийство новичков",
        "Обязательное предупреждение перед атакой",
        "Запрещено использование багов в бою",
      ],
    },
    {
      id: "economy",
      title: "Экономика",
      icon: "Coins",
      color: "yellow",
      rules: [
        "Честная торговля между игроками",
        "Запрещен дюп предметов",
        "Соблюдение рыночных цен",
        "Запрещено мошенничество в сделках",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500 border-blue-500/30 text-blue-400",
      green: "from-green-500 to-emerald-500 border-green-500/30 text-green-400",
      orange:
        "from-orange-500 to-yellow-500 border-orange-500/30 text-orange-400",
      red: "from-red-500 to-pink-500 border-red-500/30 text-red-400",
      yellow:
        "from-yellow-500 to-amber-500 border-yellow-500/30 text-yellow-400",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 font-montserrat">
          Правила сервера
        </h1>
        <p className="text-xl text-gray-300">
          Соблюдение правил обеспечивает комфортную игру для всех
        </p>
      </div>

      <div className="space-y-4">
        {ruleCategories.map((category) => (
          <Card
            key={category.id}
            className="bg-black/40 border-gray-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-colors"
          >
            <Collapsible
              open={openCategories.includes(category.id)}
              onOpenChange={() => toggleCategory(category.id)}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color).split(" ")[0]} ${getColorClasses(category.color).split(" ")[1]} rounded-full flex items-center justify-center`}
                      >
                        <Icon
                          name={category.icon as any}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white text-left">
                          {category.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className={`${getColorClasses(category.color).split(" ")[2]} border-current/30 mt-2`}
                        >
                          {category.rules.length} правил
                        </Badge>
                      </div>
                    </div>
                    <Icon
                      name={
                        openCategories.includes(category.id)
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={24}
                      className="text-gray-400"
                    />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="pt-0 pb-6">
                  <div className="space-y-3 ml-16">
                    {category.rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 bg-gradient-to-r ${getColorClasses(category.color).split(" ")[0]} ${getColorClasses(category.color).split(" ")[1]} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{rule}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Shield" size={24} className="text-purple-400" />
            <h3 className="text-xl font-bold text-white">Важно помнить</h3>
          </div>
          <p className="text-gray-300">
            Незнание правил не освобождает от ответственности. Все нарушения
            рассматриваются администрацией индивидуально.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rules;
