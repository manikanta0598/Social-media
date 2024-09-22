import { useState } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <div className="App">
      {isHome ? (
        <Profile setIsHome={setIsHome} isHome={isHome} />
      ) : (
        <Home setIsHome={setIsHome} isHome={isHome} />
      )}
    </div>
  );
}

export default App;
