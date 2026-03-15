import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      const referencePoint = window.scrollY + window.innerHeight * 0.35;
      let nextActiveSection = sections[0].id;

      sections.forEach((section) => {
        if (section.offsetTop <= referencePoint) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
