
import './style.css';
import yugurish from "../../assets/humikQ1.png"
import gruppa from "../../assets/humikQ2.png"
import register from "../../assets/humikQ3.png"

function Home() {
    return (
        <div className="home-container">
            {/* 1-bo'lim: Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="play-button">▶</div>
                    <h1>TRUE FITNESS - ПРЕМИУМ <br /> ТРЕНАЖЕРЫ ИЗ США</h1>
                </div>
                <div className="hero-blue-bar">
                    <p>TRUE - ВЕДУЩИЙ МИРОВОЙ ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС ОБОРУДОВАНИЯ</p>
                </div>
            </section>

            {/* 2-bo'lim: Product Section */}
            <section className="product-section">
                <div className="product-text">
                    <h2 className="brand-title">TRUE <br /><span>FITNESS</span></h2>
                    <div className="divider"></div>
                    <p className="product-desc">СОВРЕМЕННОЕ И НАДЕЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ</p>
                    <a href="#" className="product-link">КАРДИО ТРЕНАЖЕРЫ &rarr;</a>
                    <div className="dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="product-image-container">
                    <img src={yugurish} alt="" />
                    <div className="blue-bg-shape"></div>
                </div>
            </section>

            {/* 3-bo'lim: Features Grid */}
            <section className="features-grid">
                <div className="feature-item bg-img-1">
                    <h3>ЛУЧШИЕ ХАРАКТЕРИСТИКИ</h3>
                    <p>Наши тренажеры имеют самые совершенные характеристики...</p>
                </div>
                <div className="feature-item bg-blue">
                    <h3>НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ</h3>
                    <p>Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание...</p>
                </div>
                <div className="feature-item bg-blue">
                    <h3>ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</h3>
                    <p>Высокое качество тренажеров - это визитная карточка TRUE. Гарантия до 5 лет.</p>
                </div>
                <div className="feature-item bg-img-2">
                    <h3>КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС</h3>
                    <p>Оборудование должно работать бесперебойно. Мы уделяем внимание наличию запчастей.</p>
                </div>
            </section>

            {/* 4-bo'lim: Services Section */}
            <section className="services-section">
                <h2 className="section-title">МЫ ПРЕДЛАГАЕМ ПОЛНЫЙ КОМПЛЕКС УСЛУГ</h2>
                <img src={gruppa} alt="" />
            </section>

         
            {/* 5-bo'lim: Contact Form */}
            <section className="contact-section">
                <div className="form-container">
                    <h4>ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS</h4>
                    <p>Мы будем рады проконсультировать вас</p>
                    <input type="text" placeholder="ИМЯ" />
                    <input type="email" placeholder="EMAIL" />
                    <div className="phone-input">
                        <span className="flag">🇺🇿</span> <span>+998 </span>
                        <input type="tel" placeholder="(90) 000-00-00" />
                    </div>
                    <button className="submit-btn">ОТПРАВИТЬ</button>
                </div>
            </section>
        </div>
    );
}

export default Home;