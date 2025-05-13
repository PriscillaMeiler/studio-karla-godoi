import  "../css/pages/modalidades.css"

import Button from "../components/button"


export default function Modalidades() {
  return (
    <div className="page-modalidades">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="header-title p-8 sm:p-20">
          <p className="header-title--text">Nossas Modalidades</p>
        </div>
        <div className="services-section p-8 sm:p-10">
          <div className="service-block">
            <div className="modalidade-img">
              <img                
                src="/img/karla.jpg"
                alt="Aula de Pole dance"
                />
            </div>
            <h2 className="section-title">Pole Dance</h2>
            <p>As aulas de Pole Dance seguem a metodologia Karla Godoi, com ênfase no pole artístico. Então, além de aprender os movimentos isolados, também vamos aprender a incluir esses elementos dentro de sequências, com elementos coreográficos e técnicas de fluidez e criatividade. Nossas aulas de são particulares ou semi-particulares, o que possibilita a gente focar no seu processo e no seu aprendizado, um passo de cada vez.</p>
            <p>Essas aulas são ministradas pelas professoras: <strong>Karla Godoi</strong>, <strong>Agatha Godoi</strong> e <strong>Pri Meiler</strong></p>
            <Button 
              title="Agende já sua aula" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20uma%20aula%20de%20pole%20dance"
              className="main-button solid primary" />
          </div>
          <div className="service-block">
            <div className="modalidade-img">
              <img
                src="/img/agatha.jpg"
                alt="Aula de Técnicas de Salto"/>
            </div>
            <h2 className="section-title">Técnicas de Salto</h2>
            <p>Pra quem quer começar a se aventurar no mundo do Exotic, que é o nosso famoso salto, essa aula é a base de tudo. Aqui você vai aprender movimentações usadas no Exotic, como leg waves, body waves, rotations, entre outros.</p>
            <p>Essas aulas são ministradas pela professora: <strong>Agatha Godoi</strong></p>
            <Button 
              title="Agende já sua aula" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20uma%20aula%20de%20tecnicas%20de%20salto"
              className="main-button solid primary" />
          </div>
          <div className="service-block">
            <div className="modalidade-img">
              <img
                src="/img/pri.jpg"
                alt="Aula de Coreográfico"
              />
            </div>
            <h2 className="section-title">Pole Coreográfico</h2>
            <p>É uma modalidade para os amantes da dança. No Pole Coreográfico, você pode escolher entre coreografias com ou sem salto, de uma lista de coreografias já criadas pela Prof. Agatha, ou pode escolher criar uma especialmente para você.</p>
            <p><a href="/coreografias" className="inline-link">Veja aqui</a> todas as coreografias da Prof. Agatha.</p>
            <p>Essas aulas são ministradas pela professora: <strong>Agatha Godoi</strong></p>

            <Button 
              title="Agende já sua aula" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20uma%20aula%20de%20pole%20coreografico" 
              className="main-button solid primary" />  
          </div>
          <div className="service-block">
            <div className="modalidade-img">
              <img
                src="/img/tathi.jpg"
                alt="Aula de Mobilidade e Força específicos para Pole Dance"
              />
            </div>
            <h2 className="section-title">Mobilidade e Força específicos para Pole Dance</h2>
            <p>É uma modalidade para aqueles que já fazem aulas de Pole Dance e querem evoluir ainda mais, com exercícios específicos, focando em educativos e fortalecimentos para você conquistar o move dos sonhos.</p>
            <p>Essas aulas são ministradas pela professora: <strong>Tathi Medeiros</strong></p>
            <Button 
              title="Agende já sua aula" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20uma%20aula%20de%20mobilidade%20e%20força%20para%20pole%20dance" 
              className="main-button solid primary" />
          </div>
          <div className="service-block">
            <div className="modalidade-img">
              <img
                src="/img/thalita.jpg"
                alt="Aula de Chair Dance"
              />
            </div>
            <h2 className="section-title">Chair Dance</h2>
            <p>É uma modalidade de dança, que utiliza uma cadeira como elemento. Podendo ser uma dança sensual, ou não. Em cada aula será passada uma sequência coreográfica, de ritmos variados. Além de trabalharmos a autoconfiança e empoderamento, melhorando a autoestima, coordenação e consciência corporal. O Chair Dance também é uma ótima opção de exercício físico para ser praticado regularmente.</p>
            <p>Essas aulas são ministradas pela professora: <strong>Thalita Silva</strong></p>
            <Button 
              title="Agende já sua aula" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20uma%20aula%20de%20chair%20dance" 
              className="main-button solid primary" />  
          </div>
          <div className="service-block">
            <div className="modalidade-img">
              <img
                src="/img/karla.jpg"
                alt="Mentoria em Pole Dance"
              />
            </div>
            <h2 className="section-title">Mentoria</h2>
            <p>A Mentoria é como um curso de capacitação. Mas como tudo na nossa metodologia, é uma capacitação particular. Dessa forma, conseguimos analisar quais as principais dificuldades de cada instrutor ou futuro instrutor no ensino do Pole, e conseguimos dar uma enfase maior nesses pontos. Claro que, como toda capacitação, passamos por todas as áreas essenciais, mas aqui, a mentoria flui no SEU ritmo.</p>
            <p>Na mentoria, você vai aprender desde como criar a sua aula e a sua metodologia, até comunicação interpessoal e como manter um relacionamento saudável entre sua vida pessoal e sua vida profissional.</p>
            <p className="pb-5">A mentoria é ministrada pela professora: <strong>Karla Godoi</strong></p>
            <Button 
              title="Agende já sua mentoria" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20horario%20para%20mentoria" 
              className="main-button solid primary" />  
          </div>
          <div className="service-block">
            <div className="modalidade-img">
              <img
                src="/img/agatha.jpg"
                alt="workshops de Pole Dance"
              />
            </div>
            <h2 className="section-title">Workshops</h2>
            <p>Nossos workshops funcionam sob demanda. Você pede, e a gente faz! São várias opções para você escolher, e marcar no dia e horário que encaixam na sua rotina. Veja todas as opções de workshops disponíveis na <a href="/workshops" className="inline-link">página de Workshops</a> aqui do nosso site.</p>
            <p className="pb-5">Os workshoos são ministrados pelas professora: <strong>Karla Godoi</strong> e <strong>Agatha Godoi</strong></p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20horario%20para%workshop" 
              className="main-button solid primary" />  
          </div>
        </div>
      </main>
    </div>
  );
}
