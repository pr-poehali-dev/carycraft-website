const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">
          CARYCRAFT SERVER
        </h1>
        <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Полу-РП сервер с системой потери сердец после смерти
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-black/70 backdrop-blur-sm border-2 border-gray-700 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-600 border-2 border-red-400 flex items-center justify-center">
              <span className="text-white text-lg">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              СИСТЕМА СЕРДЕЦ
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            На сервере действует система потери сердец после смерти. Каждая
            смерть уменьшает максимальное здоровье игрока.
          </p>
          <div className="inline-block px-4 py-2 bg-red-900 border border-red-700 text-red-300">
            HARDCORE MODE
          </div>
        </div>

        <div className="bg-black/70 backdrop-blur-sm border-2 border-gray-700 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 border-2 border-blue-400 flex items-center justify-center">
              <span className="text-white text-lg">👥</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              ПОЛУ-РП
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ролевая игра в специальных зонах сервера. Создавайте истории и
            взаимодействуйте с другими игроками.
          </p>
          <div className="inline-block px-4 py-2 bg-blue-900 border border-blue-700 text-blue-300">
            ROLEPLAY
          </div>
        </div>
      </div>

      <div className="bg-black/70 backdrop-blur-sm border-2 border-gray-600 p-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-8 bg-green-600 border-2 border-green-400"></div>
          <h3 className="text-2xl font-bold text-white tracking-wider">
            SERVER IP
          </h3>
        </div>
        <div className="text-3xl font-bold text-green-400 tracking-widest mb-4">
          carycraft.ru
        </div>
        <p className="text-gray-400">Подключайтесь и начинайте игру</p>
      </div>
    </div>
  );
};

export default Hero;
