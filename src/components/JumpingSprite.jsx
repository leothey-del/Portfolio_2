const JumpingSprite = ({ onJumpComplete }) => (
  <span
    className="navbar-sprite-slot"
    aria-hidden="true"
    onAnimationEnd={(event) => {
      if (event.animationName === 'jumping-sprite-steps') {
        onJumpComplete();
      }
    }}
  >
    <span className="jumping-sprite" />
  </span>
);

export default JumpingSprite;
