/**
 * @author Yousef Gilany
 * @description This is the tile component used for searching .
 * @returns {React.FC}
 *
 *
 */
export const Tile = (props) => {
  return (
    <a href="facebook.com" style={{ textDecoration: "none" }}>
      <div className="tile">
        <aside className="tile-icon">{props.icon}</aside>
        <div className="tile-name">{props.name}</div>
      </div>
    </a>
  );
};
