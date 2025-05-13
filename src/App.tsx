import Button from "./components/button"

import  "./css/pages/index.css"


export default function Home() {
  return (
    <div className="page-home">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="hero-section mt-15 p-8 sm:p-20">
          <div className="hero-section--content">
            <img
              src="/img/brand.png"
              alt="Studio Karla Godoi"
              className="hero-section--image"
            />
            <h1 className="hero-section--title">Studio de Pole Dance em Curitiba</h1>
          </div>
        </div>
        <div className="cta-section p-8 sm:p-20">
          <p className="cta-section--text">Aulas Particulares e Semi Particulares, planejadas especialmente para o seu corpo e no seu ritmo.</p>
          <div className="text-center">
            <Button 
              title="Agende Agora" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula" 
              className="main-button solid primary" />
          </div>
        </div>
        <div className="services-section p-8 sm:p-10">
          <h2 className="section-title">Conheça nossas modalidades</h2>
          <div className="services-section--services flex sm:flex-row flex-col flex-wrap">
            <div className="service">
              <div className="service-image">
                <img                
                  src="/img/karla.jpg"
                  alt="Aula de Pole dance"
                />
              </div>
              <h3 className="service-title">Pole Dance</h3>
              <p className="service-text">As aulas de Pole Dance seguem a metodologia Karla Godoi, com ênfase no pole artístico. Então, além de aprender os movimentos isolados, também vamos aprender a incluir esses elementos dentro de sequências, com elementos coreográficos e técnicas de fluidez e criatividade.</p>
            </div>
            <div className="service">
              <div className="service-image">
                <img
                  src="/img/agatha.jpg"
                  alt="Aula de Técnicas de Salto"
                  width={375}
                  height={290}
                />
              </div>
              <h3 className="service-title">Técnicas de Salto</h3>
              <p className="service-text">Pra quem quer começar a se aventurar no mundo do Exotic, que é o nosso famoso salto, essa aula é a base de tudo. Aqui você vai aprender movimentações usadas no Exotic, como leg waves, body waves, rotations, entre outros.</p>
            </div>
            <div className="service">
              <div className="service-image">
                <img
                    src="/img/pri.jpg"
                    alt="Aula de Coreográfico"
                    width={375}
                    height={290}
                  />
                </div>
              <h3 className="service-title">Coreográfico</h3>
              <p className="service-text">É uma modalidade para os amantes da dança. No Pole Coreográfico, você aprende coreografias com ou sem salto (você escolhe), e pode escolher entre várias coreografias maravilhosas da Prof. Agatha, ou criar uma especialmente para você.</p>
            </div>
            <div className="service">
              <div className="service-image">
                <img
                    src="/img/tathi.jpg"
                    alt="Aula de Mobilidade e Força específicos para Pole Dance"
                    width={375}
                    height={290}
                  />
                </div>
              <h3 className="service-title">Mobilidade e Força específicos para Pole Dance</h3>
              <p className="service-text">É uma modalidade para aqueles que já fazem aulas de Pole Dance, e querem evoluir ainda mais, com exercícios específicos, focando em educativos e fortalecimentos para você conquistar o move dos sonhos.</p>
            </div>
            <div className="service">
              <div className="service-image">
                <img
                  src="/img/thalita.jpg"
                  alt="Aula de Chair Dance"
                  width={375}
                  height={290}
                />
              </div>
              <h3 className="service-title">Chair Dance</h3>
              <p className="service-text">É uma modalidade de dança, que utiliza uma cadeira como elemento. Podendo ser uma dança sensual, ou não. Em cada aula será passada uma sequência coreográfica, de ritmos variados. Além de trabalharmos a autoconfiança e empoderamento, melhorando a autoestima, coordenação e consciência corporal. Sendo também uma ótima opção de exercício físico para ser praticado regularmente.</p>
            </div>
          </div>
        </div>
        <div className="instructors-section p-8 sm:p-10">
        <h2 className="section-title">Conheça nossas professoras</h2>
          <div className="instructors-section--all flex sm:flex-row flex-col flex-wrap">
            <div className="instructor">
              <div className="instructor-image">
                <img
                  src="/img/karla.jpg"
                  alt="Professora Karla Godoi"
                  width={375}
                  height={290}
                />
              </div>
              <div className="instructor-content">
                <h3 className="instructor-title">Karla Godoi</h3>
                <p className="instructor-text">Aulas de Pole Dance, workshops e cursos, para alunos e instrutores.</p>
              </div>
            </div>
            <div className="instructor invert-mobile">
              <div className="instructor-image">
                <img
                  src="/img/agatha.jpg"
                  alt="Professora Agatha Godoi"
                  width={375}
                  height={290}
                />
              </div>
              <div className="instructor-content">
                <h3 className="instructor-title">Agatha Godoi</h3>
                <p className="instructor-text">Aulas de Pole Dance, Técnicas de Salto no Pole, Pole Flow e coreografias.</p>
              </div>
            </div>
            <div className="instructor">
              <div className="instructor-image">
                <img
                  src="/img/pri.jpg"
                  alt="Professora Pri Meiler"
                  width={375}
                  height={290}
                />
              </div>
              <div className="instructor-content">
                <h3 className="instructor-title">Pri Meiler</h3>
                <p className="instructor-text">Aulas Introdutórias ao Pole Dance e aulas regulares de Pole Dance.</p>
              </div>
            </div>
            <div className="instructor invert-mobile">
              <div className="instructor-image">
                <img
                  src="/img/tathi.jpg"
                  alt="Professora Tathi Medeiros"
                  width={375}
                  height={290}
                />
              </div>
              <div className="instructor-content">
                <h3 className="instructor-title">Tathi Medeiros</h3>
                <p className="instructor-text">Aulas de Mobilidade e Força específica para Pole Dance.</p>
              </div>
            </div>
            <div className="instructor">
              <div className="instructor-image">
                <img
                  src="/img/thalita.jpg"
                  alt="Professora Thalita Silva"
                  width={375}
                  height={290}
                />
              </div>
              <div className="instructor-content">
                <h3 className="instructor-title">Thalita Silva</h3>
                <p className="instructor-text">Aulas de Chair Dance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="prices-section p-8 sm:p-20">
          <h2 className="section-title">Pacotes e Valores</h2>
          <p className="section-text">Nós trabalhamos com aulas particulares e semi particulares, ou seja, no máximo dois alunos em sala. Dessa forma, conseguimos dar mais atenção e planejar uma aula mais específica para o seu objetivo.</p>
          <p className="section-text">Fechando pacotes de no mínimo 3 aulas, tem 10% de desconto no valor total.</p>
          <div className="prices-section--cards">
            <div className="price-card">
              <p className="price-card--title">Aula experimental <br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>60</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Aula experimental <br />(Semi Particular)</p>
              <p className="price-card--price semi"><span>R$</span>40*</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Aula Regular Avulsa<br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>90</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20avulsa" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Aula Regular Avulsa <br />(Semi Particular)</p>
              <p className="price-card--price semi"><span>R$</span>80*</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20avulsa" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Pacote 4 aulas<br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>324</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20pacote%20de%20quatro%20aulas" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Pacote 4 aulas <br />(Semi Particular)</p>
              <p className="price-card--price semi"><span>R$</span>288*</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20pacote%20de%20quatro%20aulas" 
                className="main-button solid secondary"
              />
            </div>
          </div>
        </div>
        <div className="contact-section p-8 sm:p-20">
          <div className="contact-section--container">
            <div className="location">
              <h2 className="section-title">Localização</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.488854325685!2d-49.2338227600802!3d-25.439008777555973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5dd9f438e25%3A0x22e9a7a06756ea53!2sStudio%20de%20Pole%20Dance%20Karla%20Godoi!5e0!3m2!1sen!2sbr!4v1743788000668!5m2!1sen!2sbr" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
              <p>R. Delegado Leopoldo Belczak, 324 - Cristo Rei, Curitiba-PR</p>
            </div>
            <div className="space">
              <h2 className="section-title">O Espaço</h2>
              <p>Atualmente temos duas salas, no mesmo prédio. Cada uma com duas barras, que podem ser prendidas ao teto, caso a gente precise do espaço livre. Com isso, conseguimos atender de uma forma mais personalizada, e fazendo do jeito que a gente sempre sonhou, dando atenção especial para cada aluno que passa pelo Studio Karla Godoi.</p>
              <img
                  src="/img/space.png"
                  alt="Espaço Studio Karla Godoi"
                  width={500}
                  height={300}
                  className="space-image"
                />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
