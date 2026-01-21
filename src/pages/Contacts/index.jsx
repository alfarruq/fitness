
import './style.css'
import rasm from '../../assets/rasm.png'

function Contacts() {
    return ( 
    <div className="page">
     

      <section className="title">
        <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ</h1>
        <p>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD</p>
      </section>

      <section className="slider">
        <button className="arrow left">‹</button>
        <img
          src={rasm} alt=""/>
        <button className="arrow right">›</button>

        <div className="dots">
          <span />
          <span className="active" />
          <span />
          <span />
        </div>
      </section>

      <section className="info">
        <div className="map">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Tashkent%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>

        <div className="contact">
          <h3>ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР В УЗБЕКИСТАНЕ</h3>
          <p className="brand">PRAWELLNESS</p>
          <p>📞 +998 (90) 606-66-66</p>
          <p>✉ info@prawellness.uz</p>
          <p>
            📍 Адрес: Ташкент Сити, Бульвар, <br />
            Ул. Фурката 2А
          </p>
          <p className="time">
            ПН–СБ: 09:00–19:00 <br />
            ВС НЕ РАБОЧИЙ
          </p>
        </div>
      </section>
    </div>

     );
}

export default Contacts;