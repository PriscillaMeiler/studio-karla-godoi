import Button from "../components/button"

export default function Valores() {
  return (
    <div className="page-valores">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="header-title p-8 sm:p-20">
          <p className="header-title--text">Pacotes e Valores</p>
        </div>
        <div className="prices-section p-8 sm:p-20">
          <h2 className="section-title">Aulas Regulares</h2>
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
          <h2 className="section-title mt-10">Workshops e Aulas especiais</h2>
          <p className="section-text">Você pode ver todos os workshops disponíveis na <a href="/workshops">página de Workshops</a>. Todos os Workshops possuem 1 hora de duração, e podem ser agendados para o dia e horário mais conveniente pra você.</p>
          <p className="section-text">Além de Workshops, também oferecemos um mini curso de Giros, com duração de 2 horas, onde você vai aprender tudo o que precisa para fazer os giros perfeitos na barra fixa.</p>
          <p className="section-text">E a novidade quentinha que está saindo esse ano, é a Mentoria. Que é uma capacitação particular, com conteúdo distribuído em 6 aulas, com aulas teóricas e práticas, onde você vai aprender tudo sobre ensinar. Caso você tenha interesse em algum módulo específico da Mentoria, por um preço mais acessível você pode adquirir uma consultoria, e aprender apenas o que precisa.</p>
          <div className="prices-section--cards">
            <div className="price-card">
              <p className="price-card--title">Workshops <br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>80</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Workshops <br />(Semi Particular)</p>
              <p className="price-card--price semi"><span>R$</span>72*</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Mini Curso de Giros Infinitos<br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>250</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20avulsa" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Mini Curso de Giros Infinitos<br />(Semi Particular)</p>
              <p className="price-card--price semi"><span>R$</span>100*</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20avulsa" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Mentoria<br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>????</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20pacote%20de%20quatro%20aulas" 
                className="main-button solid secondary"
              />
            </div>
            <div className="price-card">
              <p className="price-card--title">Consultoria <br />(Particular)</p>
              <p className="price-card--price"><span>R$</span>???</p>
              <Button 
                title="Clique para agendar" 
                link="https://wa.me/5541997173114?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20pacote%20de%20quatro%20aulas" 
                className="main-button solid secondary"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
