import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery">
          <img
            src="/src/assets/whiskey_3.jpg"
            alt=""
          />
             <img
            src="/src/assets/hammer_1.jpg"
            alt=""
          />
          <img
            src="/src/assets/cheese_board_4.jpg"
            alt=""
          />
              <img
            src="/src/assets/cheese_board_1.jpg"
            alt=""
          />
          <img
            src="/src/assets/wiskey_smoker_1.jpg"
            alt=""
          />
          <img
            src="/src/assets/wiskey_smoker.jpg"
            alt=""
          />

        </div>
      </div>
    </div>
  );
};

export default Gallery;
