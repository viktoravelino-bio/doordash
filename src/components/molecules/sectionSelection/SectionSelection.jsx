import { Fragment, useEffect, useState } from 'react';
import { SectionCarousel } from './SectionCarousel';

export function SectionSelection({
  data,
  renderItem,
  renderSectionTitle,
  itemsContainerClassName = '',
  keyExtractor,
  carouselClassName = '',
}) {
  const titles = data.map((section) => section.title);

  const [currentSection, setCurrentSection] = useState(titles[0]);

  useEffect(() => {
    const sectionsElements = document.querySelectorAll('div[data-section]');
    const sectionCarouselHeight =
      document.querySelector('.section-carousel').offsetHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const bottom = entry.boundingClientRect.bottom;
          if (bottom < sectionCarouselHeight + 63) {
            setCurrentSection(
              titles[titles.findIndex((title) => title === entry.target.id) + 1]
            );
          } else if (bottom >= sectionCarouselHeight + 63 && bottom < 300) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsElements.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <SectionCarousel {...{ carouselClassName, titles, currentSection }} />

      <div className="section-options">
        {data.map((section) => (
          <div key={section.title} id={section.title} data-section>
            {renderSectionTitle(section.title)}
            <div className={itemsContainerClassName} style={{}}>
              {section.items.map((item) => (
                <Fragment key={keyExtractor(item)}>{renderItem(item)}</Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
