import  "../css/pages/equipe.css"


export default function Equipe() {
  return (
    <div className="page-equipe">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="header-title p-8 sm:p-20">
          <p className="header-title--text">Equipe</p>
        </div>
        <div className="instructors-section p-8 sm:p-10">
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
                <p className="instructor-text">Iniciei o Pole em 2012, há 12 anos. Realizei minha primeira capacitação em 2013, onde no final do mesmo ano já comecei a ministrar aulas, há 11 anos. Já dei aulas de Pole Dance, Pole Coreográfico, Floorwork e Flexibilidade. Já participei de espetáculos, campeonatos e festivais. Apaixonada por ensinar nos detalhes, ministrarei as aulas de Pole Dance através da metodologia Karla Godoi, além de workshops e cursos, para alunos e instrutores, com o intuito de compartilhar todo meu conhecimento de todos esses anos na área.</p>
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
                <p className="instructor-text">Iniciei o Pole em 2013, há 11 anos. Participei de campeonatos, onde me consagrei vice-campeã Brasileira e campeã Latino-americana em 2018, de espetáculos e festivais de Pole. Apaixonada por dançar, tenho experiência em Jazz e Ballet Clássico, onde participei de grupos competitivos por 5 anos. Sempre buscando me atualizar, estudando outras modalidades como Heels e Jazz Funk. Ministrarei aulas de Pole Dance, Técnicas de Salto no Pole, Pole Flow e Ccoreografias.</p>
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
                <p className="instructor-text">Pratico o Pole desde 2016, a mais de 8 anos. Já realizei apresentações em espetáculos e festivais de Pole. Sou apaixonada por combos e flips. Irei ministrar Aulas Introdutórias ao Pole Dance, especialmente para quem nunca fez, e aulas regulares para quem já pratica a modalidade.</p>
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
                <p className="instructor-text">Sou formada em Educação Física - Bacharelado e atuo na área há 12 anos, quase 13! Praticante de Pole Dance faz 10 anos, ministrarei as aulas de Mobilidade e Força específica para Pole Dance. Onde serão trabalhados exercícios de mobilidade e força muscular, específicos para a modalidade, com o uso da barra ou não. Melhorando acima de tudo a percepção corporal para a execução dos movimentos.</p>
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
                <p className="instructor-text">Sou formada em Educação Física - Bacharelado e atuo na área com aulas de dança em academias há 8 anos. Pratico o Chair desde 2021, quando fiz uma aula online e conheci a modalidade. Ministrarei as aulas de Chair Dance, que é uma modalidade de dança, que utiliza uma cadeira como elemento. Podendo ser uma dança sensual, ou não. Em cada aula será passada uma sequência coreográfica, de ritmos variados. Além de trabalharmos a autoconfiança e empoderamento, melhorando a autoestima, coordenação e consiência corporal. Sendo também uma ótima opção de exercício físico para ser praticado regularmente.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
