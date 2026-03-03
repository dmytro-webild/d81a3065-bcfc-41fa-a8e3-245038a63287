"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Package } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Главная", id: "/" },
            { name: "Продукты", id: "/products" },
            { name: "Почему мы", id: "/about" },
            { name: "Контакты", id: "/contact" },
            { name: "О компании", id: "/testimonials" },
          ]}
          brandName="SALAFAN-CHI"
          bottomLeftText="Намаган, Узбекистан"
          bottomRightText="+998 93 494 10 06"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Свяжитесь с нами прямо сейчас"
          description="Мы доступны 24/7 для ответа на ваши вопросы. Позвоните, напишите в Telegram или отправьте запрос на электронную почту. Мы ответим в течение 15 минут!"
          tag="Контакты"
          tagIcon={Package}
          background={{ variant: "grid" }}
          buttons={[
            { text: "📞 +998 93 494 10 06", href: "tel:+998934941006" },
            { text: "💬 Telegram", href: "https://t.me/salafan_chi" },
          ]}
          mediaItems={[
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/warehouse-logistics-service-composition_23-2149128315.jpg?_wi=4",
              imageAlt: "Наш офис и склад",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/export-supervisor-drafting-billing-product-logistics_482257-88029.jpg?_wi=5",
              imageAlt: "Менеджеры по продажам",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/female-trucker-standing-front-parked-trucks-pointing-her-finger-transportation-vehicles_342744-281.jpg?_wi=3",
              imageAlt: "Служба доставки",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/rolls-garbage-bags-white-background-space-text_185193-162961.jpg?_wi=4",
              imageAlt: "Готовая продукция",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894565.jpg?_wi=6",
              imageAlt: "Качество материалов",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/african-american-supervisor-evaluates-renewable-energy-metrics-factory_482257-125788.jpg?_wi=3",
              imageAlt: "Контроль качества",
            },
          ]}
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <ContactText
          text="Наш адрес: Намаган, Узбекистан | Телефон: +998 93 494 10 06 | Telegram: @salafan_chi | Email: info@salafan-chi.uz | Часы работы: 24 часа в сутки, 7 дней в неделю"
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📧 Отправить письмо", href: "mailto:info@salafan-chi.uz" },
            { text: "🌐 Вернуться на главную", href: "/" },
          ]}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactText
          text="Есть вопросы? Наша команда специалистов готова помочь вам найти нужный продукт и согласовать лучшие условия. Позвоните или напишите нам — ответим быстро!"
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📞 Позвонить сейчас", href: "tel:+998934941006" },
            { text: "📝 Оставить заявку", href: "https://t.me/salafan_chi" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="SALAFAN-CHI"
          leftLink={{ text: "Политика конфиденциальности", href: "#" }}
          rightLink={{ text: "Условия использования", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}