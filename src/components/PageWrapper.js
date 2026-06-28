function PageWrapper({ title, children }) {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h2 className="page-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;