import TechBadge from './TechBadge';

function TechMarquee({ items }) {
  const loopItems = [...items, ...items];

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:hidden">
        {items.map((item) => (
          <TechBadge key={item} name={item} className="justify-center" />
        ))}
      </div>
      <div className="marquee-shell hidden sm:block">
        <div className="marquee-track">
          {loopItems.map((item, index) => (
            <TechBadge key={`${item}-${index}`} name={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TechMarquee;
