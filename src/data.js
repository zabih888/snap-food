import oneMenu from "./assets/images/menu/desktop_1_603508bf202d8_img_st_food.png";
import twoMenu from "./assets/images/menu/desktop_2_603508b330711_img_st_cafe.png";
import threeMenu from "./assets/images/menu/desktop_3_603508a95b9be_img_st_sweet.png";
import fourMenu from "./assets/images/menu/desktop_4_603508a14ab73_img_st_supermarket.png";
import fiveMenu from "./assets/images/menu/desktop_5_60350898c61b5_img_st_bakery.png";
import sixMenu from "./assets/images/menu/desktop_6_6035088cbcde4_img_st_fruit.png";
import sevenMenu from "./assets/images/menu/desktop_7_60350883d6e43_img_st_nut.png";
import eightMenu from "./assets/images/menu/desktop_8_6035087b463a3_img_st_icecream.png";
import nineMenu from "./assets/images/menu/desktop_11_603507afc9a32_img_st_meat.png";
import tenMenu from "./assets/images/menu/desktop_9_603b811b1d540_img_st_other2.png";

import oneCategory from "./assets/images/category/website_image_asian_1.jpg";
import twoCategory from "./assets/images/category/website_image_burger_1.jpg";
import threeCategory from "./assets/images/category/website_image_fastfood_1.jpg";
import fourCategory from "./assets/images/category/website_image_gilani_1.jpg";
import fiveCategory from "./assets/images/category/website_image_irani_1.jpg";
import sixCategory from "./assets/images/category/website_image_italy_1.jpg";
import sevenCategory from "./assets/images/category/website_image_kebab_1.jpg";
import eightCategory from "./assets/images/category/website_image_pizza_1.jpg";
import nineCategory from "./assets/images/category/website_image_salad_1.jpg";
import tenCategory from "./assets/images/category/website_image_sandwich_1.jpg";
import elevenCategory from "./assets/images/category/website_image_seafood_1.jpg";
import twelveCategory from "./assets/images/category/website_image_sokhari_1.jpg";

import oneCompany from "./assets/images/company/_shila.jpg";
import twoCompany from "./assets/images/company/baguette.jpg";
import threeCompany from "./assets/images/company/bono.jpg";
import fourCompany from "./assets/images/company/hiva.jpg";
import fiveCompany from "./assets/images/company/mansour.jpg";
import sixCompany from "./assets/images/company/perperook.jpg";
import sevenCompany from "./assets/images/company/sahar.jpg";
import eightCompany from "./assets/images/company/shemroon.jpg";
import nineCompany from "./assets/images/company/tarighat.jpg";
import tenCompany from "./assets/images/company/tavazo.jpg";

//
export const menuData = [
  { image: oneMenu, text: "رستوران" },
  { image: twoMenu, text: "کافه" },
  { image: threeMenu, text: "شیرینی" },
  { image: fourMenu, text: "سوپر مارکت" },
  { image: fiveMenu, text: "نانوایی" },
  { image: sixMenu, text: "میوه" },
  { image: sevenMenu, text: "آجیل" },
  { image: eightMenu, text: "آبمیوه بستنی" },
  { image: nineMenu, text: "پروتئین" },
  { image: tenMenu, text: "سایر" },
];

export const categoryData = [
  { imgae: oneCategory, text: "آسیایی" },
  { imgae: twoCategory, text: "برگر" },
  { imgae: threeCategory, text: "فست فود" },
  { imgae: fourCategory, text: "گیلانی" },
  { imgae: fiveCategory, text: "ایرانی" },
  { imgae: sixCategory, text: "ایتالیایی" },
  { imgae: sevenCategory, text: "کباب" },
  { imgae: eightCategory, text: "پیتزا" },
  { imgae: nineCategory, text: "سالاد" },
  { imgae: tenCategory, text: "ساندویچ" },
  { imgae: elevenCategory, text: "دریایی" },
  { imgae: twelveCategory, text: "سوخاری" },
];

export const faqData = [
  {
    question: "چگونه سفارش ثبت کنم؟",
    answer:
      "جهت ثبت سفارش در سامانه اسنپ‌فود با انتخاب آدرس یا جست‌وجوی محله خود، لیست رستوران‌هایی که به شما سرویس می‌دهند را مشاهده می‌کنید. با توجه به اطلاعات ثبت شده در پروفایل هر رستوران، مشاهده منو و نظرات سایر کاربران می‌توانید انتخاب مناسبی داشته باشید. بعد از تکمیل سبد خرید، از شما خواسته می شود تا وارد حساب کاربری خود شوید یا حساب کاربری جدید بسازید. با انتخاب آدرس مورد نظر و انتخاب نحوه پرداخت (اگر کد تخفیف دارید در همین مرحله در قسمت کد تخفیف وارد و اعمال کنید) وارد درگاه بانکی مورد نظر شوید و مبلغ سفارش خود را پرداخت نمایید. با ثبت موفق سفارش، زمان انتظار برای تهیه و ارسال سفارش به شما نمایش داده می‌شود.",
  },
  {
    question: "چرا امکان ثبت سفارش نقدی برای من وجود ندارد؟",
    answer:
      "ممکن است که برخی از رستوران‌ها امکان پرداخت نقدی را در اسنپ‌فود نداشته باشند",
  },
  {
    question: "از کجا کد تخفیف دریافت کنم؟",
    answer:
      "تخفیفات با توجه به کمپین‌های مختلف در اختیار مشتریان قرار می‌گیرد. هم‌چنین بسته‌های خدماتی جهت کاهش هزینه‌های سفارش‌های شما در سایت وجود دارد  ",
  },
  {
    question: "چرا کد تخفیف اعمال نمی‌شود؟",
    answer:
      "در صورت اعمال کد تخفیف با توجه به پیغام نمایش داده شده توسط سیستم مشکل احتمالی از قبیل انقضای کد، اشتباه بودن کد، غیرقابل استفاده بودن کد برای این رستوران یا سفارش به شما گزارش می‌شود  ",
  },
  {
    question: "کد تخفیف را کجا وارد کنم",
    answer:
      "بعد از تکمیل سبد خرید، انتخاب آدرس و انتخاب نحوه پرداخت آنلاین، کد تخفیف خود را داخل باکس کد تخفیف وارد کرده و از گزینه اعمال کد استفاده کنید و با استفاده از روش پرداخت آنلاین سفارش خود را تکمیل کنید. حتما به توضیحات کد تخفیف دریافت شده و شرایط استفاده از آن توجه کنید.",
  },
  {
    question: "کد تخفیف ارسالی را گم کرده ام. از کجا می‌توانم پیدا کنم؟",
    answer:
      "به دلیل متعدد بودن و تنوع کمپین‌ها و مجموعه‌هایی که برای ارائه این تخفیفات با مجموعه اسنپ‌فود همکاری می‌کنند، ارسال مجدد کدهای تخفیف ممکن نیست.",
  },
  {
    question: "چرا کد تخفیف کمتر از مبلغ اعلام شده از سفارشم کسر کرد؟",
    answer:
      "کدهای تخفیف، درصد اعلام شده تا سقف خریدی که در توضیحات کد درج شده را از سفارش شما کسر می‌کنند. به عنوان مثال کد تخفیف ٪۲۵ تا سقف خرید ۲۰،۰۰۰ تومان، درصورتی که سبد خرید شما ۲۰،۰۰۰ تومان یا بیشتر از این مبلغ باشد نهایتا مبلغ ۵۰۰۰ تومان از سفارش شما را کسر می‌کند.",
  },
  {
    question: "در هر سفارش از چند کد تخفیف می‌توانم استفاده کنم؟",
    answer:
      "در هر سفارش فقط از یک کد تخفیف می‌شود استفاده کرد. اما اگر رستوران انتخابی شما تخفیف داشته باشد، این تخفیف‌ها با هم جمع می‌شوند",
  },
  {
    question:
      "چرا تخفیف رستوران و یا کد تخفیف روی سفارش نقدی (پرداخت در محل) اعمال نشد؟",
    answer:
      "تمام تخفیف‌های مجموعه اسنپ‌فود فقط برای سفارش‌های پرداخت آنلاین است.",
  },
  {
    question:
      "چرا نمی‌توانم از رستورانی که قبلا ثبت سفارش ثبت کردم، سفارش ثبت کنم؟",
    answer:
      "درصورتی که موقعیت ثبت شده مکانی روی نقشه با آدرس ثبت شده مطابقت دارد و بازهم امکان ثبت سفارش از رستوران را ندارید، رستوران مد نظر شما محدوده سرویس‌دهی خود را تغییر داده و برای محدوده مورد نظر شما ارسال ندارد. با جست‌وجو رستوران‌های نزدیک‌تر و انتخاب رستوران دیگر می‌توانید سفارش خود را از اسنپ‌فود ثبت کنید.",
  },
  {
    question: "پرداخت آنلاین؟",
    answer:
      "برای پرداخت آنلاین در خریدهای اینترنتی احتیاج به کارت بانکی عضو سیستم شتاب و فعال بودن رمز اینترنتی (رمز دوم) این کارت دارید. بعد از ورود به حساب کاربری خود در اسنپ‌فود و تکمیل سبد خرید خود، با انتخاب نحوه پرداخت آنلاین و درگاه بانکی مورد نظر خود می‌توانید پرداخت را با وارد کردن اطلاعات مورد نیاز درگاه بانکی انجام دهید",
  },
];

export const companyData = [
  { img: oneCompany },
  { img: twoCompany },
  { img: threeCompany },
  { img: fourCompany },
  { img: fiveCompany },
  { img: sixCompany },
  { img: sevenCompany },
  { img: eightCompany },
  { img: nineCompany },
  { img: tenCompany },
];
