/**
 * @author Yousef Gilany
 * @description This is the tile component used for reaching to the page that shows events by specific category.
 * @returns {React.FC}
 *
 *
 */
export const Tile = (props) => {
  return (
    <div className="tile">
      <aside className="tile-icon">{props.icon}</aside>
      <div className="tile-name">{props.name}</div>
    </div>
  );
};
