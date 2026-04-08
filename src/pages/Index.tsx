import { useState } from "react";
import Icon from "@/components/ui/icon";

const BG_HERO = "https://cdn.poehali.dev/projects/41e85a79-ab21-4137-8180-523c5c98c428/files/97f61177-6158-447e-b13f-e7f9a9fa4191.jpg";
const BG_TIMER = "https://cdn.poehali.dev/projects/41e85a79-ab21-4137-8180-523c5c98c428/files/8727f392-3e60-4991-b2ef-e8a349f91a6c.jpg";
const BG_MUSIC = "https://cdn.poehali.dev/projects/41e85a79-ab21-4137-8180-523c5c98c428/files/dfc643f3-9f66-4f4e-9d7e-77e9abb7065d.jpg";

const reviews = [
  {
    name: "Анастасия К.",
    role: "Дизайнер",
    avatar: "А",
    text: "Наконец-то всё в одном месте. Push-уведомления приходят именно тогда, когда нужно — никогда не пропускаю важное!",
    color: "#fed330",
  },
  {
    name: "Михаил Д.",
    role: "Предприниматель",
    avatar: "М",
    text: "Пользуюсь уже полгода. Интерфейс интуитивный, скорость работы впечатляет. Команда оценила — теперь все коллеги на борту.",
    color: "#fed330",
  },
  {
    name: "Ольга Р.",
    role: "Маркетолог",
    avatar: "О",
    text: "Наконец-то приложение, которое не надоедает лишними уведомлениями. Только самое важное и в нужный момент. Топ!",
    color: "#fed330",
  },
];

const tools = [
  { icon: "Timer", label: "Таймер", desc: "Точный отсчёт времени для любых задач", bg: BG_TIMER },
  { icon: "Music", label: "Музыка", desc: "Слушай любимые треки прямо в приложении", bg: BG_MUSIC },
  { icon: "Gamepad2", label: "Игры", desc: "Расслабься с коллекцией встроенных игр" },
  { icon: "Cloud", label: "Погода", desc: "Точный прогноз в любом городе мира" },
  { icon: "StickyNote", label: "Заметки", desc: "Быстрые записи всегда под рукой" },
  { icon: "Radio", label: "Радио", desc: "Живое вещание из десятков станций" },
];

export default function Index() {
  const [notifVisible, setNotifVisible] = useState(false);

  const handlePushDemo = () => {
    setNotifVisible(true);
    setTimeout(() => setNotifVisible(false), 4000);
  };

  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#f0f0f0" }}>

      {/* PUSH NOTIFICATION */}
      <div
        className="notif-popup"
        style={{
          opacity: notifVisible ? 1 : 0,
          transform: notifVisible ? "translateY(0)" : "translateY(-20px)",
          pointerEvents: notifVisible ? "auto" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10, flexShrink: 0,
            background: "#fed330", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20,
          }}>🦒</div>
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fed330", fontSize: 14, marginBottom: 4 }}>Giraffer</p>
            <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.4 }}>🎉 Новая функция уже доступна! Обновите приложение.</p>
            <p style={{ fontSize: 11, color: "#666", marginTop: 4 }}>только что</p>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 48px", backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🦒</span>
          <span style={{ fontFamily: "Pacifico, cursive", fontSize: 24, color: "#fed330", letterSpacing: 1 }}>Giraffer</span>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <a href="#tools" className="nav-link">Инструменты</a>
          <a href="#reviews" className="nav-link">Отзывы</a>
          <a href="#about" className="nav-link">О нас</a>
        </div>
        <button className="btn-yellow" onClick={handlePushDemo}>
          <Icon name="Bell" size={15} />
          Уведомления
        </button>
      </nav>

      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "90vh",
        backgroundImage: `url(${BG_HERO})`,
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,15,0.65)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 720, padding: "0 24px" }}>
          <h1 style={{
            fontFamily: "Pacifico, cursive", fontSize: "clamp(3.5rem, 8vw, 6rem)",
            color: "#fed330", marginBottom: 20, lineHeight: 1.1,
            textShadow: "0 4px 24px rgba(254,211,48,0.3)",
          }}>
            Giraffer
          </h1>
          <p style={{
            fontFamily: "Arimo, sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.8)", marginBottom: 12, lineHeight: 1.6,
          }}>
            Бесплатная платформа всё-в-одном: таймер, музыка, игры, погода, заметки и радио
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", marginBottom: 40, fontFamily: "Arimo" }}>
            Работает с 2022 года · Более 500 000 пользователей
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-yellow" style={{ fontSize: "1.05rem", padding: "13px 32px" }}>
              <Icon name="Download" size={18} />
              Скачать бесплатно
            </button>
            <button className="btn-outline" onClick={handlePushDemo} style={{ padding: "12px 28px" }}>
              <Icon name="Bell" size={16} />
              Включить уведомления
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 52 }}>
            {[
              { n: "500K+", l: "Пользователей" },
              { n: "4.9★", l: "Средняя оценка" },
              { n: "8", l: "Инструментов" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "2rem", color: "#fed330", fontWeight: 700 }}>{s.n}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontFamily: "Montserrat" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section id="tools" style={{ padding: "80px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "Pacifico, cursive", fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: "#fed330", textAlign: "center", marginBottom: 8,
        }}>
          Всё в одном месте
        </h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 48, fontFamily: "Arimo" }}>
          Выбери нужный инструмент и открой прямо сейчас
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
          {tools.map((t, i) => (
            <div
              key={i}
              className="section-card"
              style={{
                backgroundImage: t.bg ? `url(${t.bg})` : undefined,
                backgroundColor: t.bg ? undefined : ["#1a1520", "#0f1a20", "#1a1a10", "#0f1520", "#1a100f", "#101520"][i],
              }}
            >
              <div className="section-card-overlay" />
              <div className="section-card-content">
                <div style={{
                  width: 48, height: 48, borderRadius: 10, background: "rgba(254,211,48,0.15)",
                  border: "1px solid rgba(254,211,48,0.3)", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 14,
                }}>
                  <Icon name={t.icon} size={22} style={{ color: "#fed330" }} />
                </div>
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.4rem", color: "#fff", fontWeight: 600, marginBottom: 6 }}>
                  {t.label}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: 20, fontFamily: "Arimo" }}>
                  {t.desc}
                </p>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <button className="btn-yellow">Открыть.</button>
                  <button className="btn-outline" style={{ fontSize: "0.8rem" }}>Сообщить об ошибке.</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{
        padding: "80px 48px",
        background: "rgba(0,0,0,0.4)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "Pacifico, cursive", fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#fed330", textAlign: "center", marginBottom: 8,
          }}>
            Отзывы
          </h2>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", marginBottom: 48, fontFamily: "Arimo" }}>
            Что говорят наши пользователи
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "28px 24px",
              }}>
                <div style={{ color: "#fed330", fontSize: "1.1rem", marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontFamily: "Arimo", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: 20, fontSize: "0.95rem" }}>
                  "{r.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", background: "#fed330",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, color: "#111", fontSize: "1.1rem", fontFamily: "Montserrat",
                  }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p style={{ fontFamily: "Montserrat", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>{r.name}</p>
                    <p style={{ fontFamily: "Arimo", color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{
              fontFamily: "Pacifico, cursive", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#fed330", marginBottom: 20, lineHeight: 1.2,
            }}>
              О приложении
            </h2>
            <p style={{ fontFamily: "Arimo", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "1rem", marginBottom: 16 }}>
              Giraffer — бесплатная платформа, которая объединяет самые нужные инструменты в одном месте. Никаких подписок, никакой рекламы.
            </p>
            <p style={{ fontFamily: "Arimo", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 32 }}>
              Умные push-уведомления сообщают только о важном — система учится вашим привычкам и не беспокоит по пустякам.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn-yellow" onClick={handlePushDemo}>
                <Icon name="Bell" size={16} />
                Включить уведомления
              </button>
              <button className="btn-outline">Узнать больше</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "Zap", label: "Быстрый запуск", val: "< 1 сек" },
              { icon: "Shield", label: "Безопасность", val: "ISO 27001" },
              { icon: "Bell", label: "Push-уведомления", val: "Умные" },
              { icon: "Smartphone", label: "Платформы", val: "iOS & Android" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: "rgba(254,211,48,0.12)",
                  border: "1px solid rgba(254,211,48,0.25)", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 12px",
                }}>
                  <Icon name={s.icon} size={20} style={{ color: "#fed330" }} />
                </div>
                <div style={{ fontFamily: "Oswald", fontWeight: 600, color: "#fed330", fontSize: "1.1rem", marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontFamily: "Arimo", color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "32px 48px",
        background: "rgba(0,0,0,0.5)",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>🦒</span>
          <span style={{ fontFamily: "Pacifico, cursive", fontSize: 20, color: "#fed330" }}>Giraffer</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" className="nav-link" style={{ fontSize: "0.85rem" }}>Политика конфиденциальности</a>
          <a href="#" className="nav-link" style={{ fontSize: "0.85rem" }}>Поддержка</a>
        </div>
        <p style={{ fontFamily: "Arimo", color: "rgba(255,255,255,0.25)", fontSize: "0.82rem" }}>
          © 2025 Giraffer. Бесплатная платформа.
        </p>
      </footer>
    </div>
  );
}
