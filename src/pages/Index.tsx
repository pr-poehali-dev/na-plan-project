import { useState } from "react";
import Icon from "@/components/ui/icon";

const BtnPrimary = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 font-bold rounded-2xl text-base text-white cursor-pointer ${className}`}
    style={{
      background: "linear-gradient(135deg, #FF5C5C 0%, #FF3366 100%)",
      padding: "14px 32px",
      boxShadow: "0 4px 20px rgba(255,92,92,0.4)",
      border: "none",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(255,92,92,0.55)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(255,92,92,0.4)"; }}
  >
    {children}
  </button>
);

const BtnSecondary = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 font-semibold rounded-2xl text-base cursor-pointer ${className}`}
    style={{
      background: "rgba(255,255,255,0.1)",
      color: "#ffffff",
      padding: "14px 32px",
      border: "1px solid rgba(255,255,255,0.25)",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; }}
  >
    {children}
  </button>
);

const reviews = [
  {
    name: "Анастасия К.",
    role: "Дизайнер",
    avatar: "А",
    color: "#FF5C5C",
    text: "Это приложение изменило мой подход к работе. Push-уведомления приходят именно тогда, когда нужно — никогда не пропускаю важное!",
    rating: 5,
  },
  {
    name: "Михаил Д.",
    role: "Предприниматель",
    avatar: "М",
    color: "#5B5BFF",
    text: "Пользуюсь уже полгода. Интерфейс интуитивный, скорость работы впечатляет. Команда оценила — теперь все коллеги на борту.",
    rating: 5,
  },
  {
    name: "Ольга Р.",
    role: "Маркетолог",
    avatar: "О",
    color: "#FFD600",
    text: "Наконец-то приложение, которое не надоедает лишними уведомлениями. Только самое важное и в нужный момент. Топ!",
    rating: 5,
  },
];

const features = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Запускается мгновенно, работает без лагов даже при медленном интернете",
    color: "#FFD600",
  },
  {
    icon: "Shield",
    title: "Полная безопасность",
    desc: "Сквозное шифрование и защита данных по стандарту ISO 27001",
    color: "#5B5BFF",
  },
  {
    icon: "Bell",
    title: "Умные уведомления",
    desc: "Push-уведомления только о важном — система сама учится вашим приоритетам",
    color: "#FF5C5C",
  },
  {
    icon: "Smartphone",
    title: "iOS и Android",
    desc: "Единый опыт на всех устройствах, синхронизация в реальном времени",
    color: "#00C896",
  },
];

export default function Index() {
  const [activeReview, setActiveReview] = useState(0);
  const [notifVisible, setNotifVisible] = useState(false);

  const handlePushDemo = () => {
    setNotifVisible(true);
    setTimeout(() => setNotifVisible(false), 3500);
  };

  return (
    <div className="font-golos min-h-screen overflow-x-hidden">

      {/* PUSH NOTIFICATION DEMO */}
      <div
        className={`fixed top-5 right-5 z-50 w-80 card-glass-light rounded-2xl p-4 shadow-2xl transition-all duration-500 ${
          notifVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
        style={{ transform: notifVisible ? "translateY(0)" : "translateY(-32px)" }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #FF5C5C, #5B5BFF)" }}
          >
            🦒
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Giraffer</p>
            <p className="text-gray-600 text-sm mt-0.5">🎉 Новая функция уже доступна! Обновите приложение.</p>
            <p className="text-gray-400 text-xs mt-1">сейчас</p>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="hero-bg noise-bg relative min-h-screen flex flex-col overflow-hidden">
        {/* Декоративные блобы */}
        <div
          className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #5B5BFF, transparent)" }}
        />
        <div
          className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF5C5C, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #FFD600, transparent)" }}
        />

        {/* Навбар */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 animate-fade-in opacity-0-init">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦒</span>
            <span className="text-white font-oswald font-bold text-2xl tracking-wide">Giraffer</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/70 font-medium">
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#about" className="hover:text-white transition-colors">О приложении</a>
          </div>
          <BtnSecondary>Скачать</BtnSecondary>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between flex-1 px-6 md:px-12 pb-16 gap-12 max-w-7xl mx-auto w-full">
          <div className="flex-1 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold animate-fade-in opacity-0-init"
              style={{
                background: "rgba(255,214,0,0.15)",
                border: "1px solid rgba(255,214,0,0.3)",
                color: "#FFD600",
                animationDelay: "0.1s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD600] animate-pulse" />
              Более 500 000 пользователей
            </div>

            <h1
              className="font-oswald font-bold text-white leading-none mb-6 animate-fade-in opacity-0-init"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", animationDelay: "0.2s" }}
            >
              ТВОЙ МИР
              <br />
              <span className="gradient-text">БЕЗ ХАОСА</span>
            </h1>

            <p
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in opacity-0-init"
              style={{ animationDelay: "0.35s" }}
            >
              Giraffer помогает держать всё важное под контролем. Умные push-уведомления напомнят о нужном в нужный момент.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in opacity-0-init"
              style={{ animationDelay: "0.5s" }}
            >
              <BtnPrimary>
                <Icon name="Download" size={18} />
                Скачать бесплатно
              </BtnPrimary>
              <BtnSecondary onClick={handlePushDemo}>
                <Icon name="Bell" size={18} />
                Демо уведомления
              </BtnSecondary>
            </div>

            <div
              className="flex items-center gap-6 mt-10 animate-fade-in opacity-0-init"
              style={{ animationDelay: "0.65s" }}
            >
              <div className="flex -space-x-3">
                {["#FF5C5C", "#5B5BFF", "#FFD600", "#00C896"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0F0F1A] flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {["А", "М", "О", "И"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-[#FFD600] text-sm">★★★★★</div>
                <p className="text-white/50 text-sm">4.9 / 5 — 12 000+ отзывов</p>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0 animate-float relative">
            <div
              className="relative w-[280px] h-[560px] rounded-[40px] overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #1a1a3e, #0d0d1f)",
                border: "2px solid rgba(255,255,255,0.1)",
                boxShadow: "0 40px 100px rgba(91,91,255,0.3), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/41e85a79-ab21-4137-8180-523c5c98c428/files/654d1686-8a12-44a1-95e5-901a69bcfb8d.jpg"
                alt="App screen"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/60 to-transparent" />
              <div className="absolute bottom-6 left-4 right-4">
                <div className="card-glass rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5C5C] flex items-center justify-center">
                    <Icon name="Bell" size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Напоминание</p>
                    <p className="text-white/60 text-xs">Встреча через 15 минут</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow под телефоном */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 blur-2xl rounded-full"
              style={{ background: "rgba(91,91,255,0.5)" }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-8 animate-pulse">
          <div className="flex flex-col items-center gap-1 text-white/30">
            <p className="text-xs">листай вниз</p>
            <Icon name="ChevronDown" size={16} />
          </div>
        </div>
      </section>

      {/* SECTION 2: REVIEWS */}
      <section id="reviews" className="py-24 px-6 md:px-12 bg-[#F8F7FF] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #5B5BFF, transparent)" }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ background: "rgba(91,91,255,0.1)", color: "#5B5BFF" }}
            >
              Отзывы пользователей
            </span>
            <h2 className="font-oswald font-bold text-[#0F0F1A] leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              ОНИ УЖЕ
              <br />
              <span className="gradient-text">ОЦЕНИЛИ</span>
            </h2>
          </div>

          {/* Карточки отзывов */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                onClick={() => setActiveReview(i)}
                className={`card-glass-light rounded-3xl p-7 cursor-pointer transition-all duration-300 ${
                  activeReview === i ? "scale-[1.02]" : "hover:scale-[1.01]"
                }`}
                style={{
                  borderColor: activeReview === i ? r.color : "rgba(255,255,255,0.6)",
                  borderWidth: activeReview === i ? "2px" : "1px",
                  borderStyle: "solid",
                }}
              >
                <div className="flex text-[#FFD600] text-lg mb-4">★★★★★</div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{r.name}</p>
                    <p className="text-gray-400 text-sm">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            {[
              { num: "500K+", label: "Пользователей" },
              { num: "4.9", label: "Средняя оценка" },
              { num: "12K+", label: "Отзывов в магазинах" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-oswald font-bold leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", background: "linear-gradient(135deg, #FF5C5C, #5B5BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {s.num}
                </div>
                <p className="text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT + PUSH */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#0F0F1A] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF5C5C, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #5B5BFF, transparent)" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ background: "rgba(255,214,0,0.15)", color: "#FFD600" }}
            >
              О приложении
            </span>
            <h2 className="font-oswald font-bold text-white leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              GIRAFFER —{" "}
              <span className="gradient-text-yellow">ВИД СВЕРХУ</span>
              <br />
              НА СВОЮ ЖИЗНЬ
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              Как жираф видит дальше других — Giraffer помогает увидеть всю картину и не упустить важное
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-20">
            {features.map((f, i) => (
              <div
                key={i}
                className="card-glass rounded-3xl p-7 group hover:scale-[1.01] transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40` }}
                >
                  <Icon name={f.icon} size={26} style={{ color: f.color }} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2 font-oswald">{f.title}</h3>
                <p className="text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Push notifications CTA */}
          <div
            className="relative rounded-[2rem] p-10 md:p-16 overflow-hidden text-center"
            style={{ background: "linear-gradient(135deg, #1a0f3a 0%, #0f1a3a 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, #5B5BFF, transparent)" }}
            />
            {/* Анимированные кольца */}
            <div className="relative inline-flex items-center justify-center mb-8">
              <div
                className="absolute w-24 h-24 rounded-full animate-pulse-ring"
                style={{ background: "rgba(255,92,92,0.2)" }}
              />
              <div
                className="absolute w-24 h-24 rounded-full animate-pulse-ring"
                style={{ background: "rgba(255,92,92,0.15)", animationDelay: "0.5s" }}
              />
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FF5C5C, #FF3366)" }}
              >
                <Icon name="Bell" size={36} className="text-white" />
              </div>
            </div>

            <h3 className="font-oswald font-bold text-white text-3xl md:text-4xl mb-4 relative z-10">
              PUSH-УВЕДОМЛЕНИЯ
            </h3>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto relative z-10">
              Система умных уведомлений обучается вашим привычкам и присылает только то, что реально важно. Никакого спама.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <BtnPrimary onClick={handlePushDemo}>
                <Icon name="Bell" size={18} />
                Попробовать сейчас
              </BtnPrimary>
              <BtnSecondary>
                Узнать больше
              </BtnSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080810] py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦒</span>
            <span className="text-white font-oswald font-bold text-xl tracking-wide">Giraffer</span>
          </div>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/70 transition-colors">Поддержка</a>
          </div>
          <p className="text-white/25 text-sm">© 2025 Giraffer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}