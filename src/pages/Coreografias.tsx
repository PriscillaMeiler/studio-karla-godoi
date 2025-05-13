import  "../css/pages/coreografias.css"

import coreo01 from '/videos/agatha.mp4'
import coreo02 from '/videos/01-agatha.mp4'
import coreo03 from '/videos/agatha-01.mp4'
import coreo04 from '/videos/coreo04.mp4'
import coreo05 from '/videos/coreo05.mp4'
import coreo06 from '/videos/coreo06.mp4'
import coreo07 from '/videos/coreo07.mp4'
import coreo08 from '/videos/coreo08.mp4'
import coreo09 from '/videos/coreo09.mp4'
import coreo10 from '/videos/coreo10.mp4'


export default function Coreografias() {
  return (
    <div className="page-coreografias">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="header-title p-8 sm:p-20">
          <p className="header-title--text">Coreografias</p>
        </div>
        <div className="description">
          <p>Aqui você encontra todas as coreografias da Prof. Agatha. Você pode aprender qualquer uma delas nas aulas de Pole Coreográfico com ela. Todas as coreografias podem ser feitas com ou sem salto.</p>
          <p>Vem dançar com a gente!</p>
        </div>
        <div className="services-section p-8 sm:p-10">
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo01} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 01</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo02} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 02</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo03} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 03</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo04} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 04</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo05} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 05</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo06} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 06</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo07} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 07</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo08} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 08</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo09} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 09</h2>
          </div>
          <div className="coreo-block ml-5">
            <video width="377" height="200" controls >
              <source src={coreo10} type="video/mp4"/>
            </video>
            <h2 className="section-title">Coreografia 10</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
