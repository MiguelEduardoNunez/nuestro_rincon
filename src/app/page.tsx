"use client";

import { useEffect } from "react";

const storyChapters = [
  {
    number: "01",
    title: "La primera vez que te vi",
    text: (
      <>
        Aquel día que llegué a la empresa y te vi por primera vez, sentada y
        con tus rulitos, al inicio quedó esa duda en mí, de quién eras, de
        dónde habías salido. Pero esa duda duró horas, hasta que te llevaron a
        presentar a la oficina.
        <br />
        <br />
        Te vi por primera vez y en mi mente solo pasó:{" "}
        <em>
          qué niña tan linda, tiene ojos bonitos, el pelo hermoso, carita
          bonita, cuerpo precioso
        </em>
        . En pocas palabras, hermosa.
        <br />
        <br />
        Cuando llegó mi momento de hablar y presentarme, estaba re nervioso.
        Así digas que miraba feo, me temblaban las manos.
      </>
    ),
    image: "/photos/photo-1.jpeg",
    imageAlt: "Nuestro primer recuerdo",
    side: "left",
  },

  {
    number: "02",
    title: "No podía sacarte de mi cabeza",
    text: (
      <>
        Mi siguiente pensamiento fue:{" "}
        <em>muy linda y todo, pero debe tener pareja</em>. Según yo, todo iba
        a quedar ahí y saldrías de mi cabeza, pero no, fue todo lo contrario.
        <br />
        <br />
        No podía sacar esa primera imagen de ti de mi cabeza. Se me quedó
        plasmada la primera vez que te vi.
        <br />
        <br />
        Según yo, no te miraba mal, pero pensándolo, puede ser que me negaba a
        aceptar que estaba sintiendo cosas por ti.
        <br />
        <br />
        ¿El por qué? Porque por primera vez en mi vida estaba sintiendo algo
        por alguien y eso se combinó con miedo, miedo a que me volvieran a
        hacer daño.
      </>
    ),
    image: "/photos/photo-2.jpeg",
    imageAlt: "Un recuerdo juntos",
    side: "right",
  },

  {
    number: "03",
    title: "Poco a poco, nosotros",
    text: (
      <>
        Pero decidí ir conociéndote poco a poco y gracias a eso he pasado los
        mejores 3 meses de mi vida, y los que faltan, por cierto.
        <br />
        <br />
        <strong>De mí no te deshaces, mi vida. ❤️</strong>
        <br />
        <br />
        Mientras te conocía poco a poco, fui desarrollando un sentimiento más
        allá de la amistad.
        <br />
        <br />
        Tal vez te parezca que fue muy rápido (aunque me dijiste que por qué
        no me había afanado más), pero siento que en ese poco tiempo viví más
        cosas de las que había vivido antes y sentí una conexión contigo que
        tampoco había sentido antes.
      </>
    ),
    image: "/photos/photo-7.jpeg",
    imageAlt: "Nosotros",
    side: "left",
  },

  {
    number: "04",
    title: "19 de junio",
    text: (
      <>
        Hasta aquel <strong>19 de junio</strong>, donde todo cambió y me
        diste el honor de ser tu novio.
        <br />
        <br />
        Fue un día muy especial para mí. Después de eso, te has vuelto la
        primera vez en muchas cosas.
        <br />
        <br />
        Puedo decir que me siento amado por primera vez.
      </>
    ),
    image: "/photos/photo-6.jpeg",
    imageAlt: "Un momento especial",
    side: "right",
  },
];

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
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-photo, .reveal-gallery"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero-overlay">

          <p className="eyebrow">
            PARA EL AMOR DE MI VIDA
          </p>

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


      {/* =========================
          INTRODUCCIÓN
      ========================= */}

      <section id="historia" className="story">

        <p className="section-label">
          NOSOTROS
        </p>

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


      {/* =========================
          NUESTRA HISTORIA
      ========================= */}

      <section className="our-story">

        <div className="story-heading">

          <p className="section-label">
            NUESTRA HISTORIA
          </p>

          <h2>
            Y así fue como
            <span> comenzó todo...</span>
          </h2>

        </div>


        <div className="story-timeline">

          {storyChapters.map((chapter) => (

            <article
              className={`story-chapter ${chapter.side}`}
              key={chapter.number}
            >

              <div className="chapter-image reveal-photo">

                <img
                  src={chapter.image}
                  alt={chapter.imageAlt}
                />

                <div className="chapter-number">
                  {chapter.number}
                </div>

              </div>


              <div className="chapter-content">

                <p className="chapter-label">
                  CAPÍTULO {chapter.number}
                </p>

                <h3>
                  {chapter.title}
                </h3>

                <div className="chapter-text">
                  {chapter.text}
                </div>

              </div>

            </article>

          ))}

        </div>


        {/* FINAL DE LA HISTORIA */}

        <div className="story-ending">

          <div className="heart">
            ♥
          </div>

          <p>
            Y después de todo...
          </p>

          <h3>
            Te amo, mi niña de ojos bonitos.
          </h3>

          <span>
            ❤️
          </span>

        </div>

      </section>


      {/* =========================
          FRASE
      ========================= */}

      <section className="quote-section">

        <p>
          “De todas las casualidades de mi vida,
          <br />
          tú eres mi favorita.”
        </p>

      </section>


      {/* =========================
          GALERÍA
      ========================= */}

      <section className="gallery-section">

        <div className="gallery-heading">

          <p className="section-label">
            NUESTROS RECUERDOS
          </p>

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
              className={`gallery-item ${photo.className} reveal-gallery`}
              key={photo.src}
            >

              <img
                src={photo.src}
                alt={`Recuerdo ${index + 1}`}
              />

              <div className="photo-caption">

                <span>
                  {photo.text}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          CARTA FINAL
      ========================= */}

      <section className="message">

        <div className="message-card">

          <p className="quote">
            “
          </p>

          <p>
            Gracias por aparecer en mi vida, por hacerme sonreír,
            por acompañarme y por convertir tantos momentos normales
            en recuerdos que quiero guardar para siempre.
          </p>

          <span>
            — Con todo mi amor
          </span>

        </div>

      </section>

    </main>
  );
}