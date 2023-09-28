import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="cta">
          <h1 className="title">Quinn Woodcrafting</h1>
          <p className="headline">
            Where Your Ideas Meet Our Chisels: Custom Wood Artistry.
          </p>
          <p className="stars">
            <span className="star" aria-hidden="true"></span>
            <span className="star" aria-hidden="true"></span>
            <span className="star" aria-hidden="true"></span>
            <span className="star" aria-hidden="true"></span>
            <span className="star" aria-hidden="true"></span>
            <span className="star" aria-hidden="true"></span>
            <span className="star" aria-hidden="true"></span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
