import { useState } from "react";

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
      title: "ОБЩИЕ ПРАВИЛА",
      symbol: "📖",
      rules: [
        "Уважительное отношение к другим игрокам",
        "Запрещен мат в общем чате",
        "Запрещена реклама других серверов",
        "Использование читов и модификаций запрещено",
      ],
    },
    {
      id: "rp",
      title: "РП ПРАВИЛА",
      symbol: "👥",
      rules: [
        "Соблюдение ролевой игры в специальных зонах",
        "Запрещен RandomDeathMatch (RDM)",
        "Обязательная ролевая причина для конфликтов",
        "Уважение к чужим ролевым историям",
      ],
    },
    {
      id: "building",
      title: "СТРОИТЕЛЬСТВО",
      symbol: "🏗️",
      rules: [
        "Запрещено строительство в чужих территориях",
        "Соблюдение архитектурного стиля региона",
        "Запрещены неэстетичные постройки",
        "Обязательная регистрация крупных построек",
      ],
    },
    {
      id: "pvp",
      title: "PVP ПРАВИЛА",
      symbol: "⚔️",
      rules: [
        "PvP разрешен только в специальных зонах",
        "Запрещено убийство новичков",
        "Обязательное предупреждение перед атакой",
        "Запрещено использование багов в бою",
      ],
    },
    {
      id: "economy",
      title: "ЭКОНОМИКА",
      symbol: "💰",
      rules: [
        "Честная торговля между игроками",
        "Запрещен дюп предметов",
        "Соблюдение рыночных цен",
        "Запрещено мошенничество в сделках",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">
          ПРАВИЛА СЕРВЕРА
        </h1>
        <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg">
          Соблюдение правил обязательно для всех игроков
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {ruleCategories.map((category) => (
          <div
            key={category.id}
            className="bg-black/70 backdrop-blur-sm border-2 border-gray-700"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full p-6 text-left hover:bg-black/70 backdrop-blur-sm transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-2 border-gray-400 flex items-center justify-center">
                    <span className="text-lg">{category.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                    <div className="text-gray-400 text-sm mt-1">
                      {category.rules.length} ПРАВИЛ
                    </div>
                  </div>
                </div>
                <div className="text-2xl text-white">
                  {openCategories.includes(category.id) ? "−" : "+"}
                </div>
              </div>
            </button>

            {openCategories.includes(category.id) && (
              <div className="px-6 pb-6">
                <div className="ml-16 space-y-3">
                  {category.rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white border border-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-black/70 backdrop-blur-sm border-2 border-gray-600 p-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-8 bg-red-600 border-2 border-red-400"></div>
          <h3 className="text-2xl font-bold text-white tracking-wider">
            ВНИМАНИЕ
          </h3>
        </div>
        <p className="text-gray-300">
          Незнание правил не освобождает от ответственности. Все нарушения
          рассматриваются администрацией.
        </p>
      </div>
    </div>
  );
};

export default Rules;
