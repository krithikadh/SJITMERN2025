/*import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <div>
          <span>Hooks</span>
          <ol>
            <li>
              <Link to="/use-state">useState</Link>
            </li>
            <li>
              <Link to="/use-effect">useEffect</Link>
            </li>
          </ol>
        </div>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
*/

import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const [showList1, setShowList1] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <div
          onMouseEnter={() => setShowList(true)}
          onMouseLeave={() => setShowList(false)}
          style={{ display: "inline-block", position: "relative" }}
        >
          <span style={{ cursor: "pointer" }}>
            <navigate>Hooks</navigate>
          </span>
          {showList && (
            <ol
              style={{
                position: "fixed",
                background: "lightblue",
                padding: "10px",
                borderRadius: "4px",
                listStyle: "none",
                top: "20px",
              }}
            >
              <li onClick={() => setShowList(false)}>
                <Link to="/use-state">useState</Link>
              </li>
              <li onClick={() => setShowList(false)}>
                <Link to="/use-effect">useEffect</Link>
              </li>
              <li onClick={() => setShowList(false)}>
                <Link to="/use-effect-api">useEffectAPI</Link>
              </li>
              <li onClick={() => setShowList(false)}>
                <Link to="/use-ref">useRef</Link>
              </li>
              <li onClick={() => setShowList(false)}>
                <Link to="/use-memo">useMemo</Link>
              </li>
              <li onClick={() => setShowList(false)}>
                <Link to="/use-callback">useCallback</Link>
              </li>
              <li onClick={() => setShowList(false)}>
                <Link to="/use-memoize">useMemoizeCustomHook</Link>
              </li>
            </ol>
          )}
        </div>

        <li>
          <Link to="/hoc">HoC</Link>
        </li>

        <div
          onMouseEnter={() => setShowList1(true)}
          onMouseLeave={() => setShowList1(false)}
          style={{ display: "inline-block", position: "relative" }}
        >
          <span style={{ cursor: "pointer" }}>
            <navigate>Memoizaiton</navigate>
          </span>
          {showList1 && (
            <ol
              style={{
                position: "fixed",
                background: "lightblue",
                padding: "10px",
                borderRadius: "4px",
                listStyle: "none",
                top: "20px",
              }}
            >
              <li onClick={() => setShowList1(false)}>
                <Link to="/memo">Memo</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/lazy">Lazy Loading</Link>
              </li>
            </ol>
          )}
        </div>

        <li>
          <Link to="/res">ContextAPI</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
