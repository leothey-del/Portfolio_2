const HouseIcon = ({
  open = false,
  closing = false,
  onAnimationEnd,
  width = 20,
  height = 40,
}) => (
  <span
    className={`house-icon ${open ? 'is-open' : ''} ${closing ? 'is-closing' : ''}`}
    role="img"
    aria-label="Door"
    style={{ width, height }}
    onAnimationEnd={onAnimationEnd}
  />
);

export default HouseIcon;
