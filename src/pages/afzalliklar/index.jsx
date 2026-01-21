import logo from '../../../public/logo.png'
import logo1 from '../../../public/logo1.png'
import logo2 from '../../../public/logo2.png'
import logo3 from '../../../public/logo3.png'
import logo4 from '../../../public/logo4.png'
import logo5 from '../../../public/logo5.png'
import logo6 from '../../../public/logo6.png'
import logo7 from '../../../public/logo7.png'

function onClick() {
   console.log("Card clicked");
   alert("siz jonatingiz");

    
}




import './style.css'

function Afzalliklar() {
    return <>
        <h3>Afzalliklar</h3>
        <main className=''>
            <section className='sectionI'>
                <div className="afzalliklar-text">
                    <p style={{ color: 'yellow' }}>НАШИ ПРЕИМУЩЕСТВА</p>
                    <br />
                    <h1>Преимущества TRUE FITNESS</h1>
                    <br />
                    <h4>Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования</h4>
                </div>
            </section>
            <section className='glavniy'>
                <div className="afzalliklar-cards">
                    <div className='afzalliklar-card'>
                        <img src={logo} alt="" />
                        <h2>Лучшие характеристики в классе</h2>
                        <br />
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className='afzalliklar-card'>
                        <img src={logo1} alt="" />
                        <h2>Высокая надежность оборудования</h2>
                        <br />
                        <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.</p>
                    </div>
                    <div className='afzalliklar-card'>
                        <img src={logo2} alt="" />
                        <h2>Низкая стоимость владения</h2>
                        <br />
                        <p>Тренажеры способны выдерживать серьезную эксплуатационную нагрузку, сохраняя минимальные затраты на сервис, что обеспечивает минимальную стоимость владения</p>
                    </div>
                    <div className='afzalliklar-card'>
                        <img src={logo3} alt="" />
                        <h2>Качественный и оперативный сервис</h2>
                        <br />
                        <p>Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="afzalliklar-cards2">
                    <div className='afzalliklar-card'>
                        <img src={logo4} alt="" />
                        <h2>Цены ниже, чем у аналогов</h2>
                        <br />
                        <p>Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы полностью превосходим конкурентов, наши цены ниже</p>
                    </div>
                    <div className='afzalliklar-card'>
                        <img src={logo5} alt="" />
                        <h2>Совершенная производительность</h2>
                        <br />
                        <p>Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для достижения самых высоких результатов.</p>
                    </div>
                    <div className='afzalliklar-card'>
                        <img src={logo6} alt="" />
                        <h2>Абсолютные лидеры по количеству инноваций</h2>
                        <br />
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className='afzalliklar-card'>
                        <img src={logo7} alt="" />
                        <h2>Максимальное удобство и функциональность</h2>
                        <br />
                        <p>Компания TRUE продумывает все технические нюансы и делает тренажеры максимально удобными и функциональными</p>
                    </div>
                </div>
            </section>
            <section>
                <br />
                <br />
                <div className='text mb'>
                    <hr />
                    <br />
                    <h2 style={{ textAlign: 'center' }}>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</h2>
                    <br />
                    <hr />
                </div>
            </section>
            <section className="hero">
                <div className="overlay"></div>

                <div className="hero-content">
                    <p className="brand">TRUE FITNESS</p>

                    <h1>
                        ПОЛУЧИТЕ <br />
                        <span>ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> <br />
                        НА ТРЕНАЖЕРЫ <span className="blue">TRUE FITNESS</span>
                    </h1>

                    <p className="desc">
                        Мы будем рады проконсультировать вас и помочь с подбором оборудования
                    </p>

                    <form className="form">
                        <input type="text" placeholder="ИМЯ" />
                        <input type="number" placeholder="+998 (99) 999-99-99" />
                        <input type="email" placeholder="E-MAIL" />
                        <button  onClick={onClick } >ОТПРАВИТЬ</button>
                    </form>

                    <p className="policy">
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных
                    </p>
                </div>
            </section>

            <footer className="footer">
                <div>
                    <h4>КАТАЛОГ ТОВАРОВ</h4>
                    <p>Кардио тренажеры</p>
                    <p>Силовые тренажеры</p>
                    <p>Composite Strength</p>
                </div>

                <div>
                    <h4>ИНФОРМАЦИЯ</h4>
                    <p>О бренде</p>
                    <p>Преимущества</p>
                    <p>Контакты</p>
                </div>

                <div>
                    <h4>КОНТАКТЫ</h4>
                    <p>Политика конфиденциальности</p>
                    <p>I brohimkomiljonov18@gmail.com</p>
                </div>

                <div>
                    <h4>НОВОСТИ И АКЦИИ</h4>
                    <div className="subscribe">
                        <input type="email" placeholder="E-mail" />
                        <button>➜</button>
                    </div>
                </div>
            </footer>
        </main>

    </>


}

export default Afzalliklar;