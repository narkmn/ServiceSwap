import { useLocation } from "react-router-dom";
const Whoops404 = () => {
    console.log(useLocation())
    const {pathname}=useLocation();
    return ( <>
        <h1>Page not found at {pathname}</h1>
    </> );
}
 
export default Whoops404;