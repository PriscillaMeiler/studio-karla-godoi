import  "../css/pages/workshops.css"

import Button from "../components/button"


export default function Workshops() {
  return (
    <div className="page-workshop">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="header-title p-8 sm:p-20">
          <p className="header-title--text">Workshops</p>
        </div>
        <div className="services-section p-8 sm:p-10">
          <div className="workshop-block minicurso">
            <img
              src="/img/karla.jpg"
              alt="Mini Curso de Giros Infinitos"
              className="workshop-img"/>
            <h2 className="section-title">Mini Curso de Giros Infinitos</h2>
            <p>Que por aqui gostamos de girar na fixa não é segredo né? Neste mini curso, com duração de 2h, iremos aprender: Posição do corpo em relação a barra, posição das mãos, transferência de peso, impulsão, rever giros básicos, combos de giros, conhecer novos e ter muita troca de conhecimento para sairmos por aí, girando e girando.</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20horario%20para%20mentoria" 
              className="main-button solid primary" />  
          </div>
          <div className="workshop-block">
            <img                
              src="/img/karla.jpg"
              alt="Workshop de Pole Flow"
              className="workshop-img"/>
            <h2 className="section-title">Pole Flow</h2>
            <p>Venha aprender uma coreografia com movimentações fluídas, sem cortes ou pausas.</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%workshop%20de%20pole%20flow"
              className="main-button solid primary" />
          </div>
          <div className="workshop-block">
            <img
              src="/img/agatha.jpg"
              alt="AWorkshop de Floorwork"
              className="workshop-img"/>
            <h2 className="section-title">Floorwork</h2>
            <p>Uma coreografia realizada com muitos ergulhos, rolamentos, e claro, muito chão!</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%workshop%20de%20floorwork"
              className="main-button solid primary" />
          </div>
          <div className="workshop-block">
            <img
              src="/img/pri.jpg"
              alt="Workshop de Flow Heels"
              className="workshop-img"/>
            <h2 className="section-title">Flow Heels</h2>
            <p>Uma coreografia no Pole em cima das nossas queridas plataformas e com muito flow? Temos também! E cheia de dicas pra dançar em cima dessas belezas.</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20workshop%20de%20flow%20heels" 
              className="main-button solid primary" />  
          </div>
          <div className="workshop-block">
            <img
              src="/img/tathi.jpg"
              alt="Workshop de Waves"
              className="workshop-img"/>
            <h2 className="section-title">Waves</h2>
            <p>Quer aprender segredos dos body waves e leg waves? Podemos ajudar! Venha descobrir quais os detalhes não deixamos passar.</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20workshop%20de%20waves" 
              className="main-button solid primary" />
          </div>
          <div className="workshop-block">
            <img
              src="/img/agatha.jpg"
              alt="Workshop de Improviso"
              className="workshop-img"/>
            <h2 className="section-title">Improviso</h2>
            <p>Tem muita dificuldade em improvisar? Gostaria de aprender algumas das técnicas que utilizamos por aqui? Venha desenrolar esse assunto que parece um nó, mas que é uma delícia.</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20workshop%20de%20improviso"
              className="main-button solid primary" />  
          </div>
          <div className="workshop-block">
            <img
              src="/img/thalita.jpg"
              alt="Workshop de Chair Choreo"
              className="workshop-img"/>
            <h2 className="section-title">Chair Choreo</h2>
            <p>Quer aprender uma coreografia usando uma cadeira? Vem dançar com a gente!</p>
            <Button 
              title="Agende já seu workshop" 
              link="https://wa.me/5541997173114?text=Ol%C3%A1%20Gostaria%20de%20agendar%20um%20workshop%20de%20chair%20choreo"
              className="main-button solid primary" />  
          </div>
          
        </div>
      </main>
    </div>
  );
}
