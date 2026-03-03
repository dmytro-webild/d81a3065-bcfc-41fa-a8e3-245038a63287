"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Award, Calendar, Users, CheckCircle, Clock, Truck, DollarSign } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
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

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Наши ключевые преимущества"
          description="Мы основали SALAFAN-CHI с целью стать надежным партнером для всех, кто нуждается в качественных пластических изделиях. Вот что нас отличает от конкурентов."
          tag="Наши сильные стороны"
          tagIcon={Award}
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              title: "Круглосуточная доступность",              description:
                "Работаем без выходных и праздников. Вы можете позвонить и сделать заказ в любое время дня и ночи. Срочные поставки — наша специальность.",              icon: Clock,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-vector/247-hours-open-helpline-yellow-template-design_1017-54495.jpg",                  imageAlt: "24/7 доступность"},
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/export-supervisor-drafting-billing-product-logistics_482257-88029.jpg",                  imageAlt: "Круглосуточный отдел доставки"},
              ],
            },
            {
              title: "Быстрая доставка по Намангану",              description:
                "При заказе от 50 кг доставляем товар бесплатно по городу в течение 24 часов. Используем собственный автопарк для надёжности.",              icon: Truck,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/female-trucker-standing-front-parked-trucks-pointing-her-finger-transportation-vehicles_342744-281.jpg",                  imageAlt: "Собственный автопарк доставки"},
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/rolls-garbage-bags-white-background-space-text_185193-162961.jpg",                  imageAlt: "Упакованные товары готовы к отправке"},
              ],
            },
            {
              title: "Лучшие цены на рынке",              description:
                "Мы работаем напрямую с производителями, что позволяет нам предлагать самые конкурентные цены. Сравните наши предложения с другими поставщиками.",              icon: DollarSign,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/best-price-offer-promotion-commerce-marketing-concept_53876-125395.jpg",                  imageAlt: "Самые низкие цены в городе"},
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894565.jpg",                  imageAlt: "Качество материалов"},
              ],
            },
            {
              title: "Проверенное качество и сертификаты",              description:
                "Все наши товары сертифицированы и прошли строгий контроль качества. При обнаружении дефектов мы гарантируем возврат в течение 7 дней.",              icon: CheckCircle,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/african-american-supervisor-evaluates-renewable-energy-metrics-factory_482257-125788.jpg",                  imageAlt: "Контроль качества продукции"},
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-male-worker-orange-protective-helmet_645730-108.jpg",                  imageAlt: "Производственные мощности"},
              ],
            },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Наши достижения за 9 лет"
          description="С 2015 года мы выросли с небольшой компании до лидера рынка пластических изделий в Намангане. Эти цифры подтверждают нашу надёжность."
          tag="История успеха"
          tagIcon={Calendar}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "1",              value: "9",              title: "лет",              description: "На рынке пластических изделий",              icon: Calendar,
            },
            {
              id: "2",              value: "2500",              title: "клиентов",              description: "Доверяют нам свои заказы",              icon: Users,
            },
            {
              id: "3",              value: "99.9",              title: "%",              description: "Доставок выполнено вовремя",              icon: CheckCircle,
            },
            {
              id: "4",              value: "50",              title: "типов",              description: "Различных пластических материалов",              icon: Award,
            },
          ]}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactText
          text="Хотите узнать больше о нашей компании или обсудить ваш проект? Позвоните нам или посетите наш офис в Намангане. Мы всегда готовы к сотрудничеству!"
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📞 Свяжитесь с нами", href: "tel:+998934941006" },
            { text: "📍 Посетить офис", href: "/contact" },
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