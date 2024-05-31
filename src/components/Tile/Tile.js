function Tile({ header, subheader, img, text, link, linkText }) {
  return (
    <div className={"tile ${position}"}>
      <h2>{header}</h2>
      <h3>{subheader}</h3>
      <div className="img-parent">
        <img src="" />
      </div>
      <div className="text"></div>
      <div className="text"></div>
      <div className="link-parent">
        <a href="" className="link">
          {" "}
        </a>
      </div>
    </div>
  );
}
export default Tile;
