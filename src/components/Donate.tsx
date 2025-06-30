const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">
          ПОДДЕРЖКА СЕРВЕРА
        </h1>
        <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg">Помогите развитию CaryCraft</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-900 border-2 border-gray-700 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-600 border-2 border-green-400 flex items-center justify-center">
              <span className="text-white text-lg">🗝️</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              ДОСТУП К СЕРВЕРУ
            </h3>
          </div>

          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-green-400 mb-2">50₽</div>
            <div className="inline-block px-4 py-2 bg-green-900 border border-green-700 text-green-300">
              РАЗОВАЯ ПОКУПКА
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-400">▪</span>
              Полный доступ к серверу
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-400">▪</span>
              Участие во всех событиях
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-400">▪</span>
              Доступ к РП функциям
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 border-2 border-green-400 transition-colors">
            КУПИТЬ ПРОХОДКУ
          </button>
        </div>

        <div className="bg-gray-900 border-2 border-gray-700 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-600 border-2 border-red-400 flex items-center justify-center">
              <span className="text-white text-lg">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              СЕРДЦА
            </h3>
          </div>

          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-red-400 mb-2">10₽</div>
            <div className="inline-block px-4 py-2 bg-red-900 border border-red-700 text-red-300">
              ЗА 1 СЕРДЦЕ
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-red-400">▪</span>
              Восстановление здоровья
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-red-400">▪</span>
              Защита от смерти
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-red-400">▪</span>
              Максимум 10 сердец
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button className="py-2 border-2 border-red-600 text-red-400 hover:bg-red-900 transition-colors">
                1 ❤️
              </button>
              <button className="py-2 border-2 border-red-600 text-red-400 hover:bg-red-900 transition-colors">
                5 ❤️
              </button>
              <button className="py-2 border-2 border-red-600 text-red-400 hover:bg-red-900 transition-colors">
                10 ❤️
              </button>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 border-2 border-red-400 transition-colors">
              КУПИТЬ СЕРДЦА
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border-2 border-gray-600 p-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-8 bg-yellow-600 border-2 border-yellow-400"></div>
          <h3 className="text-2xl font-bold text-white tracking-wider">
            СПОСОБЫ ОПЛАТЫ
          </h3>
        </div>
        <p className="text-gray-400 mb-6">Карты, СБП, QIWI, ЮMoney</p>
        <div className="flex justify-center gap-4">
          <div className="px-4 py-2 border border-gray-600 text-gray-400">
            VISA
          </div>
          <div className="px-4 py-2 border border-gray-600 text-gray-400">
            MASTERCARD
          </div>
          <div className="px-4 py-2 border border-gray-600 text-gray-400">
            СБП
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
