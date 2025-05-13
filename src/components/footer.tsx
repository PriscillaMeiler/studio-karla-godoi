import "@/css/components/footer.css";

export default function PageFooter() {
  return (
    <footer className="page-footer flex items-center">
      <div className="footer-logo">
        <img 
          src="/img/footer-logo.png"
          width={188}
          height={203}
          alt="Karla Godoi Studio de Pole Dance"
          className="footer-logo__image"
        />
      </div>
      <div className="footer-menu">
        <h3 className="footer-title">Menu</h3>
        <ul>
          <li><a href="/modalidades">Modalidades</a></li>
          <li><a href="/studio">O Studio</a></li>
          <li><a href="/equipe">Equipe</a></li>
          <li><a href="/valores">Pacotes e Valores</a></li>
          <li><a href="/workshops">Workshops</a></li>
          <li><a href="/coreografias">Coreografias</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3 className="footer-title">Contato</h3>
        <p>Studio Karla Godoi<br />CNPJ: 37.764.746/0001-81<br />R. Delegado Leopoldo Belczak, 324 - Sala 12<br />Cristo Rei, Curitiba, PR - 82800-220<br />
        <a href="https://www.instagram.com/studiokarlagodoi/" target="_blank" rel="noopener noreferrer">@studiokarlagodoi</a><br />
        <a href="https://wa.me/5541997173114" target="_blank" rel="noopener noreferrer">(41) 99717-3114</a></p>
      </div>
    </footer>
  );
}
