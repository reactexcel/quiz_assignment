import { createContext, useState } from "react";
import Cookies from "js-cookie";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const token = Cookies.get("token");
  const [myScore, setMyScore] = useState(null);
  const [totalScore,setTotalScore]=useState(null);
  const [difficulty,setDifficulty]=useState('Easy')

  return (
    <MyContext.Provider
      value={{
        myScore,
        setMyScore,
        setTotalScore,
        totalScore,
        setDifficulty,
        difficulty
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
