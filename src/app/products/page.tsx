"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { ShoppingCart, TrendingUp, CheckCircle, Users, Calendar, Clock } from "lucide-react";

export default function ProductsPage() {
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

      <div id="products" data-section="products">
        <ProductCardOne
          title="Полный каталог наших продуктов"
          description="Исследуйте полный спектр высококачественных пластических изделий. Каждый продукт прошел строгий контроль качества и готов к отправке. Мы предлагаем конкурентные цены для оптовых и розничных заказов."
          tag="Каталог товаров"
          tagIcon={ShoppingCart}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Полиэтиленовая плёнка 100-150 мкм",              price: "От 2,500 сум/кг",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894565.jpg?_wi=4",              imageAlt: "Полиэтиленовая плёнка премиум класса"},
            {
              id: "2",              name: "ПВХ трубы и фитинги",              price: "От 3,200 сум/кг",              imageSrc:
                "http://img.b2bpic.net/free-photo/minimalist-construction-pvc-pipes-arrangement_23-2149106839.jpg?_wi=3",              imageAlt: "Трубы и фитинги из ПВХ"},
            {
              id: "3",              name: "Стрейч-плёнка производственная",              price: "От 3,500 сум/кг",              imageSrc:
                "http://img.b2bpic.net/free-photo/black-man-moving-furniture_53876-24835.jpg?_wi=3",              imageAlt: "Стрейч-плёнка промышленного назначения"},
            {
              id: "4",              name: "Упаковочные пакеты и рулоны",              price: "От 1,800 сум/кг",              imageSrc:
                "http://img.b2bpic.net/free-photo/warehouse-logistics-service-composition_23-2149128315.jpg?_wi=3",              imageAlt: "Упаковочные материалы оптом"},
            {
              id: "5",              name: "Салфаны и листовые материалы",              price: "От 2,200 сум/кг",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894571.jpg?_wi=3",              imageAlt: "Салфаны и пластиковые листы"},
            {
              id: "6",              name: "Специальные заказы и нестандартные размеры",              price: "Цена по запросу",              imageSrc:
                "http://img.b2bpic.net/free-photo/export-supervisor-drafting-billing-product-logistics_482257-88029.jpg?_wi=3",              imageAlt: "Производство на заказ"},
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Почему товары SALAFAN-CHI популярны"
          description="Наши продукты выбирают тысячи компаний благодаря качеству, надёжности и справедливым ценам. Вот цифры, которые это доказывают."
          tag="Популярность товаров"
          tagIcon={TrendingUp}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "1",              value: "15000",              title: "тонн",              description: "Отправлено материалов за последний год",              icon: ShoppingCart,
            },
            {
              id: "2",              value: "98",              title: "%",              description: "Клиентов возвращаются к нам повторно",              icon: Users,
            },
            {
              id: "3",              value: "50",              title: "видов",              description: "Различных товаров в каталоге",              icon: CheckCircle,
            },
            {
              id: "4",              value: "100",              title: "%",              description: "Сертифицировано и протестировано",              icon: CheckCircle,
            },
          ]}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactText
          text="Интересуетесь нашей продукцией? Свяжитесь с нами для получения подробного прайса и условий доставки. Наши специалисты готовы помочь!"
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📞 Позвонить менеджеру", href: "tel:+998934941006" },
            { text: "📧 Запросить счёт", href: "/contact" },
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