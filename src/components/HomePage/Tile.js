export const Tile = (props) => {
  return (
    <a>
      <div className="tile">
        <aside className="tile-icon">{props.icon}</aside>
        <div className="tile-name">{props.name}</div>
      </div>
    </a>
  );
};
