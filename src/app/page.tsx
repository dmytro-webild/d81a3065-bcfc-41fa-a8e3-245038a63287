"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Award,
  TrendingUp,
  Star,
  Clock,
  Truck,
  DollarSign,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Главная", id: "home" },
    { name: "Продукты", id: "products" },
    { name: "Почему мы", id: "about" },
    { name: "Контакты", id: "contact" },
    { name: "О компании", id: "testimonials" },
  ];

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
          title="Надёжный поставщик ПВХ и полиэтиленовой плёнки в Намангане"
          description="Оптовые и розничные поставки. Быстрая доставка. Работаем 24/7. Позвоните прямо сейчас и получите лучшую цену на пластмассы."
          tag="Поставщик пластмасс"
          tagIcon={Package}
          background={{ variant: "grid" }}
          buttons={[
            { text: "📞 Позвонить сейчас: +998 93 494 10 06", href: "tel:+998934941006" },
            { text: "📝 Получить предложение", href: "/contact" },
          ]}
          mediaItems={[
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/rolls-garbage-bags-white-background-space-text_185193-162961.jpg",
              imageAlt: "Рулоны пластмасс",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894565.jpg",
              imageAlt: "Полиэтиленовая плёнка",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/minimalist-construction-pvc-pipes-arrangement_23-2149106839.jpg",
              imageAlt: "ПВХ изделия",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/black-man-moving-furniture_53876-24835.jpg",
              imageAlt: "Стрейч-плёнка",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/warehouse-logistics-service-composition_23-2149128315.jpg",
              imageAlt: "Упаковочные материалы",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894571.jpg",
              imageAlt: "Салфаны и листовые материалы",
            },
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Наш ассортимент продуктов"
          description="Полный спектр качественных пластических изделий для оптовых и розничных партнёров. Все товары — проверенного качества с гарантией."
          tag="Каталог товаров"
          tagIcon={ShoppingCart}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "1",
              name: "Полиэтиленовая плёнка",
              price: "От 2,500 сум/кг",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894565.jpg",
              imageAlt: "Полиэтиленовая плёнка в рулонах",
            },
            {
              id: "2",
              name: "ПВХ изделия",
              price: "От 3,200 сум/кг",
              imageSrc:
                "http://img.b2bpic.net/free-photo/minimalist-construction-pvc-pipes-arrangement_23-2149106839.jpg",
              imageAlt: "Трубы и изделия из ПВХ",
            },
            {
              id: "3",
              name: "Стрейч-плёнка",
              price: "От 3,500 сум/кг",
              imageSrc:
                "http://img.b2bpic.net/free-photo/black-man-moving-furniture_53876-24835.jpg",
              imageAlt: "Стрейч-плёнка для упаковки",
            },
            {
              id: "4",
              name: "Упаковочные материалы",
              price: "От 1,800 сум/кг",
              imageSrc:
                "http://img.b2bpic.net/free-photo/warehouse-logistics-service-composition_23-2149128315.jpg",
              imageAlt: "Упаковочные пакеты и рулоны",
            },
            {
              id: "5",
              name: "Салфаны",
              price: "От 2,200 сум/кг",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894571.jpg",
              imageAlt: "Салфаны и листовые материалы",
            },
            {
              id: "6",
              name: "Специальные заказы",
              price: "Цена по запросу",
              imageSrc:
                "http://img.b2bpic.net/free-photo/export-supervisor-drafting-billing-product-logistics_482257-88029.jpg",
              imageAlt: "Производство на заказ",
            },
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Почему выбирают SALAFAN-CHI"
          description="Мы — лидер рынка пластических изделий в Намангане с безупречной репутацией и гарантией качества. Работаем с 2015 года."
          tag="Наши преимущества"
          tagIcon={Award}
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              title: "Круглосуточная работа",
              description:
                "Мы доступны 24/7, включая праздники и выходные. Срочные заказы приветствуются.",
              icon: Clock,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-vector/247-hours-open-helpline-yellow-template-design_1017-54495.jpg",
                  imageAlt: "24/7 доступность",
                },
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/export-supervisor-drafting-billing-product-logistics_482257-88029.jpg",
                  imageAlt: "Круглосуточный склад",
                },
              ],
            },
            {
              title: "Бесплатная доставка по Намангану",
              description:
                "При заказе от 50 кг доставляем бесплатно по городу. Быстро и надёжно.",
              icon: Truck,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/female-trucker-standing-front-parked-trucks-pointing-her-finger-transportation-vehicles_342744-281.jpg",
                  imageAlt: "Быстрая доставка",
                },
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/rolls-garbage-bags-white-background-space-text_185193-162961.jpg",
                  imageAlt: "Готовая упаковка",
                },
              ],
            },
            {
              title: "Оптимальные цены",
              description:
                "Сравните наши цены с конкурентами. Гарантируем лучшие предложения на рынке.",
              icon: DollarSign,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/best-price-offer-promotion-commerce-marketing-concept_53876-125395.jpg",
                  imageAlt: "Лучшие цены",
                },
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894565.jpg",
                  imageAlt: "Качество по цене",
                },
              ],
            },
            {
              title: "Качество и надёжность",
              description:
                "Все продукты сертифицированы и прошли проверку качества. Возврат в течение 7 дней.",
              icon: CheckCircle,
              mediaItems: [
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/african-american-supervisor-evaluates-renewable-energy-metrics-factory_482257-125788.jpg",
                  imageAlt: "Контроль качества",
                },
                {
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-male-worker-orange-protective-helmet_645730-108.jpg",
                  imageAlt: "Производство",
                },
              ],
            },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Наши достижения"
          description="Цифры, которые говорят о нашей надёжности и лидерстве на рынке пластических изделий."
          tag="Статистика"
          tagIcon={TrendingUp}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "1",
              value: "9",
              title: "лет на рынке",
              description: "Успешно работаем с 2015 года",
              icon: Calendar,
            },
            {
              id: "2",
              value: "2500",
              title: "довольных клиентов",
              description: "Регулярные заказы от бизнеса в Намангане",
              icon: Users,
            },
            {
              id: "3",
              value: "99.9",
              title: "% доставок вовремя",
              description: "Стабильно выполняем графики поставок",
              icon: CheckCircle,
            },
            {
              id: "4",
              value: "24",
              title: "часов доступности",
              description: "Работаем без выходных и праздников",
              icon: Clock,
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Отзывы наших клиентов"
          description="Что говорят бизнесмены и компании о работе с SALAFAN-CHI"
          tag="Отзывы"
          tagIcon={Star}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",
              name: "Азиз Хамраев",
              handle: "ООО 'СтройМатериалы'",
              testimonial:
                "Работаю с SALAFAN-CHI уже 4 года. Качество не подводит, цены честные, доставка быстрая. Рекомендую всем!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Азиз Хамраев",
            },
            {
              id: "2",
              name: "Эргашева Гули",
              handle: "Завод упаковки 'Тарозмонд'",
              testimonial:
                "Поддерживаем спонтанные заказы благодаря 24/7 доступности SALAFAN-CHI. Просто супер!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Эргашева Гули",
            },
            {
              id: "3",
              name: "Максимлиан Нарбаев",
              handle: "Сеть магазинов 'Брилл'",
              testimonial:
                "Используем их стрейч-плёнку для упаковки товаров. Качество отличное, цены конкурентны. Спасибо!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Максимлиан Нарбаев",
            },
            {
              id: "4",
              name: "Фарход Дадаходжаев",
              handle: "ООО 'СтройКом'",
              testimonial:
                "Партнёр надежный и ответственный. Все свои обязательства выполняет вовремя. Спасибо за профессионализм!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Фарход Дадаходжаев",
            },
            {
              id: "5",
              name: "Камалов Антон",
              handle: "ИП 'Пластмасс-сервис'",
              testimonial:
                "Лучший поставщик в городе. Качество, цена и сервис — всё на высшем уровне. Рекомендую друзьям.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Камалов Антон",
            },
            {
              id: "6",
              name: "Фауста Ниязова",
              handle: "Логистическая компания 'ТрансЛид'",
              testimonial:
                "Работаем с SALAFAN-CHI для упаковки грузов. Доставка всегда в срок, качество стабильное. Спасибо!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Фауста Ниязова",
            },
          ]}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactText
          text="Готовы заказать? Позвоните прямо сейчас или заполните форму. Мы ответим в течение 15 минут!"
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📞 Позвонить: +998 93 494 10 06", href: "tel:+998934941006" },
            { text: "💬 Напишите в Telegram", href: "https://t.me/salafan_chi" },
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