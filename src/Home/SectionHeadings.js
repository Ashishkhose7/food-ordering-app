const SectionHeadings = ({ title, marg }) => {
  return (
    <section className={`quick-search-section-heading ${marg}`} id="dashboard">
      <h4 className="title-one-head">
        <span className="">{title}</span>
      </h4>
    </section>
  );
};
export default SectionHeadings;
