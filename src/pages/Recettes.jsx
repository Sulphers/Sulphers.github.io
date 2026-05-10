import PageHero from '../components/PageHero';
import { recipes } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const seasons = [
  { title: 'Matin', text: 'Des bases rapides pour stabiliser l’energie sans alourdir la digestion.' },
  { title: 'Midi', text: 'Des assiettes completes, lisibles et faciles a transporter.' },
  { title: 'Soir', text: 'Des repas reconfortants, plus doux, pour finir la journee sereinement.' },
];

const Recettes = () => {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Recettes"
        title="Des idees simples, colorees et faciles a adapter."
        text="Une selection de bases equilibrees pour retrouver du plaisir dans l’assiette tout en gardant une structure nutritionnelle claire."
      />

      <section className="recipe-showcase" data-reveal="up">
        <div>
          <p className="eyebrow">Inspiration</p>
          <h2>Composer sans compter chaque detail.</h2>
        </div>
        <div className="showcase-plate" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="recipes-layout">
        {recipes.map((recipe, index) => (
          <article
            className="recipe-card"
            data-reveal="up"
            key={recipe.title}
            style={{ '--delay': `${index * 90}ms` }}
          >
            <div className={`recipe-visual visual-${index + 1}`}>
              <span>{recipe.time}</span>
            </div>
            <div className="recipe-content">
              <div className="tag-row">
                {recipe.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h2>{recipe.title}</h2>
              <p>{recipe.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="meal-rhythm" data-reveal="up">
        {seasons.map((item, index) => (
          <article key={item.title} style={{ '--delay': `${index * 100}ms` }} data-reveal="up">
            <span>{item.title}</span>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Recettes;
