import { useContext } from "react";
import AppContext from "./context";

const useGlobalContext = () => useContext(AppContext)
export default useGlobalContext;