import  "../css/pages/studio.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


export default function Studio() {
  return (
    <div className="page-studio">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="header-title p-8 sm:p-20">
          <p className="header-title--text">O Studio</p>
        </div>
        <div className="contact-section p-8 sm:p-20">
          <div className="contact-section--container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img
                  src="/img/space.png"
                  alt="Espaço Studio Karla Godoi"
                  width={500}
                  height={300}
                  className="space-image"
                />
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div className="space">
              <h2 className="section-title">O Espaço</h2>
              <p>Tudo começou com uma salinha, em julho de 2020. Eram apenas duas barras e só aulas particulares. A sala era pequena, mas já transbordava amor. Era tanto amor, que em 2022, a salinha cresceu. Mudamos de casa, mas a energia ainda era a mesma. A salona agora tinha 4 barras, e muito acolhimento.</p>
              <p>Em 2024, surgiu a oportunidade de aumentar ainda mais nosso espaço, com a sala de baixo. Agora, além das aulas de Pole em cima, tinhamos um cantinho para as aulas de Chair Dance, e muitos workshops. E em 2025, resolvemos ouvir nosso coração, e voltar as origens, com aulas particulares e semi-partiulares.</p>
              <p>Atualmente temos duas salas, cada uma com duas barras, que podem ser prendidas ao teto, caso a gente precise do espaço livre. Com isso, conseguimos atender de uma forma mais personalizada, e fazendo do jeito que a gente sempre sonhou, dando atenção especial para cada aluno que passa pelo Studio Karla Godoi.</p>
            </div>
          </div>
        </div>
        <div className="contact-section p-8 sm:p-20">
          <div className="contact-section--container d-flex">
            <div className="location">
              <h2 className="section-title">Localização</h2>
              <p>Estamos localizados na R. Delegado Leopoldo Belczak, 324 - Cristo Rei, Curitiba-PR. Fica pertinho do Jardim Botânico, e é bem fácil de chegar pela Linha Verde.</p>
              <p>O prédio fica na esquina entre a R. Delegado Leopoldo Belczak e a R. Antônio Olívio Rodrigues, e enquanto a entrada da sala principal fica na Leopoldo Belczak, a sala de baixo fica na R. Antônio Olívio Rodrigues, 293.</p>
            </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.488854325685!2d-49.2338227600802!3d-25.439008777555973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5dd9f438e25%3A0x22e9a7a06756ea53!2sStudio%20de%20Pole%20Dance%20Karla%20Godoi!5e0!3m2!1sen!2sbr!4v1743788000668!5m2!1sen!2sbr" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
