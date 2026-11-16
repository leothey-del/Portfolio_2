import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import JumpingSprite from './JumpingSprite';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, onToggleTheme, githubBatLanded }) => {
  const [toggle, setToggle] = useState(false);
  const [jumping, setJumping] = useState(theme === 'light');
  const [runnerFlight, setRunnerFlight] = useState(null);
  const [runnerDirection, setRunnerDirection] = useState('outbound');
  const [sitSequence, setSitSequence] = useState(null);
  const [seatedCharacterVisible, setSeatedCharacterVisible] = useState(false);
  const [batFlight, setBatFlight] = useState(null);
  const [batHasFlown, setBatHasFlown] = useState(false);
  const [treeDeparting, setTreeDeparting] = useState(false);
  const [batInFlight, setBatInFlight] = useState(false);
  const batBurnTimeoutRef = useRef(null);

  useEffect(() => () => {
    window.clearTimeout(batBurnTimeoutRef.current);
  }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const getRunnerEndpoints = () => {
    const sittingBounds = document.querySelector('.theme-toggle-character').getBoundingClientRect();
    const navbarBounds = document.querySelector('.theme-navbar').getBoundingClientRect();
    const spriteWidth = 24;
    const spriteHeight = 32;
    const runnerY = navbarBounds.bottom - spriteHeight - 4;

    return {
      leftEdgeX: -spriteWidth,
      houseY: runnerY,
      themeX: sittingBounds.left,
      themeY: runnerY,
    };
  };

  const getRunnerCurrentPosition = (fallbackX) => {
    const sprite = document.querySelector('.house-runner-sprite');
    return sprite ? sprite.getBoundingClientRect().left : fallbackX;
  };

  const startRunnerRight = (startX) => {
    const { houseY, themeX, themeY } = getRunnerEndpoints();
    setSitSequence(null);
    setSeatedCharacterVisible(false);
    setJumping(false);
    setRunnerDirection('patrol');
    setRunnerFlight({
      startX,
      startY: houseY,
      endX: themeX,
      endY: themeY,
    });
  };

  const startRunnerLeft = (startX, startY) => {
    const { leftEdgeX, houseY } = getRunnerEndpoints();
    setJumping(false);
    setSeatedCharacterVisible(false);
    setSitSequence(null);
    setRunnerDirection('returning');
    setRunnerFlight({
      startX,
      startY: startY ?? houseY,
      endX: leftEdgeX,
      endY: houseY,
    });
  };

  const handleJumpComplete = () => {
    if (theme !== 'light') return;
    const jumper = document.querySelector('.navbar-sprite-slot');
    if (!jumper) return;
    const bounds = jumper.getBoundingClientRect();
    startRunnerRight(bounds.left);
  };

  const startRunnerForTheme = () => {
    if (theme === 'light') {
      if (seatedCharacterVisible) {
        const { themeX, themeY } = getRunnerEndpoints();
        setJumping(false);
        setSeatedCharacterVisible(false);
        setSitSequence({
          x: themeX,
          y: themeY,
          phase: 'standing',
        });
        return;
      }

      if (sitSequence) {
        startRunnerLeft(sitSequence.x, sitSequence.y);
      } else if (runnerFlight) {
        startRunnerLeft(
          getRunnerCurrentPosition(runnerFlight.startX),
          runnerFlight.startY,
        );
      } else if (jumping) {
        const jumper = document.querySelector('.navbar-sprite-slot');
        const bounds = jumper?.getBoundingClientRect();
        const { houseY } = getRunnerEndpoints();
        startRunnerLeft(bounds?.left ?? 0, houseY);
      }
      return;
    }

    const { leftEdgeX } = getRunnerEndpoints();
    if (sitSequence) {
      startRunnerRight(sitSequence.x);
    } else if (runnerFlight) {
      startRunnerRight(getRunnerCurrentPosition(runnerFlight.startX));
    } else {
      startRunnerRight(leftEdgeX);
    }
  };

  const handleThemeToggle = () => {
    if (theme === 'dark') {
      const bat = document.querySelector('.bat-flying-sprite');

      if (bat && !batHasFlown) {
        setBatFlight({ phase: 'pending' });
        batBurnTimeoutRef.current = window.setTimeout(() => {
          const currentBat = document.querySelector('.bat-flying-sprite');
          if (!currentBat) return;
          const { left, top } = currentBat.getBoundingClientRect();
          setBatFlight({
            phase: 'burning',
            x: left,
            y: top,
          });
        }, 1000);
      } else if (treeDeparting) {
        setTreeDeparting(false);
      }
    } else {
      window.clearTimeout(batBurnTimeoutRef.current);
      setBatFlight(null);
      setBatHasFlown(false);
      setTreeDeparting(true);
      setBatInFlight(false);
    }

    startRunnerForTheme();
    onToggleTheme();
  };

  const handleBatAnimationEnd = (event) => {
    if (event.animationName === 'bat-flying-across') {
      setBatHasFlown(true);
    } else if (event.animationName === 'bat-burn-frames') {
      setBatFlight(null);
      setBatInFlight(false);
    }
  };

  const handleTreeDepartureEnd = (event) => {
    if (event.animationName === 'tree-bat-takeoff') {
      setTreeDeparting(false);
      setBatInFlight(true);
    }
  };

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <div className={`theme-navbar fixed w-full h-[80px] flex justify-between items-center pl-0 pr-4 z-10 ${jumping ? 'has-jumping-sprite' : ''} ${toggle ? 'is-mobile-menu-open' : ''}`}>
      <span className="navbar-tree-container relative h-[76px] w-16 shrink-0" aria-hidden="true">
        {githubBatLanded ? (
          <span className="navbar-tree-hanging-bat" />
        ) : theme === 'dark' && (treeDeparting || batInFlight) ? (
          <span
            className={`navbar-tree-bat-departure${batInFlight ? ' is-departed' : ''}`}
            onAnimationEnd={handleTreeDepartureEnd}
          />
        ) : (
          <span className="navbar-tree-only" />
        )}
      </span>
      <ScrollLink
        to="home"
        smooth
        duration={500}
        offset={-80}
        aria-label="Home"
        className="house-home-link theme-secondary inline-flex h-11 w-6 shrink-0 cursor-pointer items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        {jumping && <JumpingSprite onJumpComplete={handleJumpComplete} />}
      </ScrollLink>
      {(batInFlight || batFlight) && (
        <span
          className={`bat-flying-sprite${batFlight ? ` is-${batFlight.phase}` : ''}${batHasFlown && !batFlight ? ' is-flown' : ''}`}
          aria-hidden="true"
          style={batFlight ? {
            '--bat-burn-x': `${batFlight.x}px`,
            '--bat-burn-y': `${batFlight.y}px`,
          } : undefined}
          onAnimationEnd={handleBatAnimationEnd}
        />
      )}
      {runnerFlight && (
        <span
          className={`house-runner-sprite is-${runnerDirection}`}
          aria-hidden="true"
          style={{
            '--runner-start-x': `${runnerFlight.startX}px`,
            '--runner-start-y': `${runnerFlight.startY}px`,
            '--runner-end-x': `${runnerFlight.endX}px`,
            '--runner-end-y': `${runnerFlight.endY}px`,
          }}
          onAnimationEnd={(event) => {
            if (runnerDirection === 'patrol' && event.animationName === 'house-runner-patrol') {
              setRunnerFlight(null);
              setRunnerDirection('outbound');
              setSitSequence({
                x: runnerFlight.endX,
                y: runnerFlight.endY,
                phase: 'transition',
              });
            } else if (
              runnerDirection === 'returning'
              && event.animationName === 'house-runner-return'
            ) {
              setRunnerFlight(null);
              setRunnerDirection('outbound');
            }
          }}
        />
      )}
      {sitSequence && (
        <span
          className={`house-runner-sit-sequence is-${sitSequence.phase}`}
          aria-hidden="true"
          style={{
            '--sit-x': `${sitSequence.x}px`,
            '--sit-y': `${sitSequence.y}px`,
          }}
          onAnimationEnd={(event) => {
            if (
              sitSequence.phase === 'transition'
              && event.animationName === 'house-runner-sit-down'
            ) {
              setSitSequence(null);
              setSeatedCharacterVisible(true);
            } else if (
              sitSequence.phase === 'standing'
              && event.animationName === 'house-runner-stand-up'
            ) {
              startRunnerLeft(sitSequence.x, sitSequence.y);
            }
          }}
        />
      )}
      {/* Desktop Menu */}
      <ul className="nav-menu absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
        {navItems.map(({ name, path }, index) => (
          <li key={index}>
            <ScrollLink
              to={path}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              activeClass="is-active"
              spy={true}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div className="ml-auto flex items-center gap-4 md:ml-0">
        <ThemeToggle
          theme={theme}
          onToggle={handleThemeToggle}
          hideCharacter={!seatedCharacterVisible}
        />
      {/* Hamburger */}
        <button
          type="button"
          className="theme-secondary z-10 md:hidden"
          onClick={handleClick}
          aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={toggle}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          toggle
            ? 'theme-mobile-menu absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        {navItems.map(({ name, path }, index) => (
          <li key={index} className="py-6 text-4xl">
            <ScrollLink
              to={path}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleClick}
              className="capitalize hover:text-blue-400 transition cursor-pointer"
              activeClass="text-blue-400 capitalize"
              spy={true}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* Social icons removed as per the request */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
