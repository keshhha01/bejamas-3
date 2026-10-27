import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Truck,
  Phone,
  User,
  Search,
  ShoppingCart,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";

function TopDropdown({ label, value }) {
  return (
    <button className="flex items-center gap-1 hover:text-white transition-colors">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-200">{value}</span>
      <ChevronDown size={12} className="text-gray-400" />
    </button>
  );
}

function TopIconLink({ icon: Icon, label, badge }) {
  return (
    <button className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors relative">
      <span className="relative">
        <Icon size={15} />
        {badge != null && (
          <span
            className="absolute -top-2 -right-2 flex items-center justify-center text-[10px] font-medium rounded-full w-3.5 h-3.5"
            style={{ background: "#3aa7a0", color: "#fff" }}
          >
            {badge}
          </span>
        )}
      </span>
      <span>{label}</span>
    </button>
  );
}

function SocialIcon({ icon: Icon }) {
  return (
    <a
      href="#"
      className="flex items-center justify-center rounded-full w-8 h-8 transition-opacity hover:opacity-80"
      style={{ background: "#fbe7ef" }}
    >
      <Icon size={15} style={{ color: "#c23b78" }} />
    </a>
  );
}

function FlowerLogoIcon() {
  
  const petals = Array.from({ length: 8 });
  return (
    <svg viewBox="0 0 60 60" width="48" height="48">
      <g fill="none" stroke="#e8a4c4" strokeWidth="1.4">
        {petals.map((_, i) => (
          <ellipse
            key={i}
            cx="30"
            cy="16"
            rx="5.5"
            ry="9"
            transform={`rotate(${i * 45} 30 30)`}
          />
        ))}
        <circle cx="30" cy="30" r="3.2" fill="#e8a4c4" stroke="none" />
      </g>
    </svg>
  );
}

function NavItem({ children, withCaret }) {
  return (
    <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#c23b78] transition-colors py-3">
      {children}
      {withCaret && <ChevronDown size={14} className="text-gray-500" />}
    </button>
  );
}

export default function FlowersHeader() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      
      <div style={{ background: "#272727" }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 h-9 text-[12.5px]">
          <div className="flex items-center gap-5">
            <TopDropdown label="Валюта" value="Грн" />
            <TopDropdown label="Язык" value="Рус" />
            <TopDropdown label="Город" value="Киев" />
            <TopIconLink icon={Heart} label="Закладки" badge={2} />
            <TopIconLink icon={Truck} label="Доставка и оплата" />
            <TopIconLink icon={Phone} label="Контакты" />
          </div>
          <div className="flex items-center gap-1.5 text-gray-300">
            <User size={15} />
            <button className="hover:text-white transition-colors">Вход</button>
            <span className="text-gray-500">|</span>
            <button className="hover:text-white transition-colors">Регистрация</button>
          </div>
        </div>
      </div>

      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex items-center gap-8 px-4 py-5">
          
          <div className="flex items-center gap-2 shrink-0">
            <FlowerLogoIcon />
            <div className="leading-tight">
              <div className="text-[19px] font-semibold tracking-wide text-gray-900">
                FLOWERS-UKRAINE
              </div>
              <div className="text-[10px] tracking-wide text-gray-400">
                ДОСТАВКА ЦВЕТОВ И ПОДАРКОВ
              </div>
            </div>
          </div>

          
          <div className="flex-1 flex items-center border-b border-gray-300 max-w-[520px]">
            <button className="flex items-center gap-1 text-[13px] text-gray-500 pr-3 border-r border-gray-300 whitespace-nowrap">
              Поиск по категориям
              <ChevronDown size={12} />
            </button>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по товарам"
              className="flex-1 px-3 py-1.5 text-[13px] outline-none placeholder-gray-400"
            />
            <button className="px-2 text-gray-500 hover:text-[#c23b78]" aria-label="Поиск">
              <Search size={17} />
            </button>
          </div>

          
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <SocialIcon icon={MessageCircle} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Send} />
              <SocialIcon icon={Facebook} />
            </div>
            <div className="text-[15px] font-semibold text-gray-900 whitespace-nowrap">
              +38 (067) 829 30 30
            </div>
          </div>

          
          <div className="flex items-center gap-5 shrink-0">
            <button className="relative text-gray-700 hover:text-[#c23b78]">
              <Heart size={22} />
              <span
                className="absolute -top-1.5 -right-1.5 flex items-center justify-center text-[10px] font-medium rounded-full w-4 h-4"
                style={{ background: "#e0772b", color: "#fff" }}
              >
                1
              </span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#c23b78]">
              <span className="relative">
                <ShoppingCart size={22} />
                <span
                  className="absolute -top-1.5 -right-1.5 flex items-center justify-center text-[10px] font-medium rounded-full w-4 h-4"
                  style={{ background: "#e0772b", color: "#fff" }}
                >
                  1
                </span>
              </span>
              <span className="text-[15px] font-semibold text-gray-900">
                ₴ 1 520
              </span>
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto flex items-center gap-8 px-4">
          <NavItem withCaret>Каталог товаров</NavItem>
          <NavItem>Форум</NavItem>
          <NavItem>Отзывы</NavItem>
          <NavItem>Акции</NavItem>
          <NavItem>Новости</NavItem>
          <NavItem withCaret>Информация</NavItem>
        </div>
      </div>
    </div>
  );
}