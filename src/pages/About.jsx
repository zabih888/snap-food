import React from "react";
import styled from "styled-components";
import imgDelivery from "../assets/images/svg/Take Away-pana.svg";
import { paddingContainerWithTop, setColor } from "../styles";
import Footer from "../components/Layout/Footer";
import HeaderTop from "../components/Global/HeaderTop";
import Container from "../components/Global/Container";
const About = () => {
  return (
    <>
      <HeaderTop />
      <div style={{ backgroundColor: `${setColor.containerDark}` }}>
        <Container>
          <Wrap>
            <section>
              <h1 className="title">
                <span>درباره</span> اسنپ‌فود
              </h1>
              <p className="desc">
                اسنپ‌فود، فرهنگ جدید سفارش غذاست که برای اولین بار در ایران
                معرفی و اجرا شده است. سفارش اینترنتی غذا در ايران تا قبل از
                راه‌اندازی اسنپ‌فود تنها یک رویا بود و کمتر کسی از مزایای آن خبر
                داشت. این رويا در سال ۱۳۸۸ به واقعيت تبديل شد و در این مدت
                طرفداران زیادی نيز بین مردم ایران پيدا كرده است. اسنپ‌فود اولین
                وب‌سایت ایرانی و متعلق به شرکت آوا نگار اطلس تجارت است که سفارش
                اینترنتی غذا را برای مردم ایران به ارمغان آورده است و امکانات
                متعددی به منظور راحتی هر چه بيشتر مردم و رستوران‌ها تدارک دیده و
                روز به روز بر اين امكانات خواهد افزود. كاربران ما می‌توانند به
                راحتی غذای مورد نظر خود را انتخاب کرده و یکی از سه روش پرداخت را
                تعيين و در نهايت غذای خود را تحویل بگیرند
              </p>
            </section>
            <section>
              <img src={imgDelivery} />
            </section>
            <section className="info">
              <p>
                اسنپ‌فود امکانات متفاوت و مطلوبی را به منظور صرفه‌جویی در وقت و
                هزینه در اختیار كاربران خود قرار می دهد. علاوه بر این می توان به
                بخشی از اين امكانات به شرح زیر اشاره نمود:
              </p>
              <ul>
                <li>
                  تنوع بی‌نظیر غذاها اعم از ایرانی، سنتی، فرنگی، چینی، دریایی،
                  ایتالیایی، مغولی، فست‌فود، گیاهی، رژیمی و ...
                </li>
                <li>روش‌های پرداخت متنوع (حضوری، اعتباری و آنلاین)</li>
                <li>
                  روش‌های گوناگون جستجوی غذا بر اساس نوع رستوران، منطقه مورد
                  نظر، غذای مورد علاقه و ...
                </li>
                <li>
                  امکان اضافه نمودن رستوران‌های مورد علاقه در پروفایل شخصی افراد
                </li>
                <li>یکسان بودن قیمت منوها در سایت اسنپ‌فود با رستوران‌ها</li>
                <li>تخفیف بر روی غذاهای رستوران‌های مختلف</li>
                <li>شرکت در کمپین‌های اسنپ‌فود در مناسبت‌های مختلف</li>
                <li>اضافه كردن رستوران‌های جدید متناسب با نظرات كاربران</li>
                <li>مشاهده منوی به روز رستوران‌ها و عکس غذاها</li>
                <li>آگاهی از رستوران‌های جدید</li>
              </ul>
            </section>
          </Wrap>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
// =======================================================================
//                              STYLE
// =======================================================================
const Wrap = styled.div`
  ${paddingContainerWithTop}

  .title {
    text-align: center;
    span {
      color: ${setColor.primaryDark};
    }
  }

  .info {
    p {
      color: ${setColor.primaryDark};
      font-weight: 500;
    }
    ul {
      padding-right: 1rem;
      margin-top: 2rem;
      li {
        position: relative;
        padding-bottom: 0.5rem;
        &::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          right: -15px;
          top: 0;
          transform: translateY(50%);
          background-color: ${setColor.primaryDark};
        }
      }
    }
  }
`;
