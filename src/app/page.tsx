const photos = [
  {
    src: "/photos/photo-1.jpeg",
    text: "Un momento más que quiero guardar para siempre.",
    className: "photo-large",
  },
  {
    src: "/photos/photo-2.jpeg",
    text: "Tú haces especial hasta el momento más sencillo.",
    className: "photo-small",
  },
  {
    src: "/photos/photo-3.jpeg",
    text: "Nosotros, tal y como somos.",
    className: "photo-small",
  },
  {
    src: "/photos/photo-4.jpeg",
    text: "La persona que hace mis días un poquito más bonitos.",
    className: "photo-tall",
  },
  {
    src: "/photos/photo-5.jpeg",
    text: "Hay recuerdos que quisiera repetir una y otra vez.",
    className: "photo-square",
  },
  {
    src: "/photos/photo-6.jpeg",
    text: "Incluso en los días oscuros, contigo siempre hay luz.",
    className: "photo-tall",
  },
  {
    src: "/photos/photo-7.jpeg",
    text: "Y aquí estamos nosotros.",
    className: "photo-wide",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="hero">
        <div className="hero-overlay">
          <p className="eyebrow">PARA EL AMOR DE MI VIDA</p>

          <h1>
            Nuestra
            <span> historia</span>
          </h1>

          <p className="hero-text">
            Entre tantas personas, tantos caminos y tantas casualidades,
            tuve la suerte de encontrarte a ti.
          </p>

          <a href="#historia" className="hero-button">
            Conoce nuestra historia ↓
          </a>
        </div>
      </section>

      {/* HISTORIA */}

      <section id="historia" className="story">
        <p className="section-label">NOSOTROS</p>

        <h2>
          Una historia que
          <span> apenas comienza</span>
        </h2>

        <p className="story-text">
          Hay personas que llegan a nuestra vida sin avisar y terminan
          convirtiéndose en una de las partes más bonitas de ella.
          Tú eres esa persona para mí.
        </p>
      </section>

      {/* FRASE */}

      <section className="quote-section">
        <p>
          “De todas las casualidades de mi vida,
          <br />
          tú eres mi favorita.”
        </p>
      </section>

      {/* GALERÍA */}

      <section className="gallery-section">
        <div className="gallery-heading">
          <p className="section-label">NUESTROS RECUERDOS</p>

          <h2>
            Momentos que
            <span> quiero conservar</span>
          </h2>

          <p>
            Porque algún día miraremos atrás y nos daremos cuenta
            de que estos eran los momentos que realmente importaban.
          </p>
        </div>

        <div className="gallery">
          {photos.map((photo, index) => (
            <article
              className={`gallery-item ${photo.className}`}
              key={photo.src}
            >
              <img
                src={photo.src}
                alt={`Recuerdo ${index + 1}`}
              />

              <div className="photo-caption">
                <span>{photo.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MENSAJE */}

      <section className="message">
        <div className="message-card">
          <p className="quote">“</p>

          <p>
            Gracias por aparecer en mi vida, por hacerme sonreír,
            por acompañarme y por convertir tantos momentos normales
            en recuerdos que quiero guardar para siempre.
          </p>

          <span>— Con todo mi amor</span>
        </div>
      </section>
    </main>
  );
}