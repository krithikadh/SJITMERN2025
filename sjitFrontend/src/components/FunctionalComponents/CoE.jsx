import { createContext } from "react";
import Faculty from "./ContextAPI/Faculty";
import StudentResults from "./ContextAPI/StudentResults";
export const ResPub = createContext();
const CoE = () => {
  return (
    <ResPub.Provider value={{ sgpa: "10 SGPA", cgpa: "10 CGPA" }}>
      <Faculty />
      <h1>Result Published.</h1>
      <StudentResults />
    </ResPub.Provider>
  );
};
export default CoE;
