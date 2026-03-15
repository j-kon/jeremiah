function SectionHeading({ eyebrow, title, description, align = 'left', titleId }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={titleId} className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

export default SectionHeading;
