import { Link } from "react-router-dom"
import Loader from "../../assets/Loader";
const styles = {
    display:'block',
    fontSize:'15px',
    padding:'10px 20px',
    textDecoration:'none',
    color:'#222',
    // border:'1px solid #000',
    display:'flex',alignItem:'center',justifyContent:'center',
    gap:'5px',
}
const Dropdown = ({paths,click,name,x,component,style}) => {
    return(
        <Link to={`${paths}`} onClick={click}
                    style={styles} {...x} >{name} {component}</Link>
    )
}
export default Dropdown;