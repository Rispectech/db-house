import './style.css';
import { Link,} from "react-router-dom";
import { Row } from "react-bootstrap";

function BlogItem(props) {     
  return (
  <div className={`materialItem ${props.class} `} >
    <Link to={`${props.Link}`}>  
      <div className="materialImg" style={{ backgroundImage:`url(${props.Image})` }} alt={`${props.alt}`}>
        <div className={`materialOverlay ${props.class} `} ></div>
      </div>
      <div className="materialInfo">
        <h4>{props.Heading}</h4>
      </div>
    </Link>
  </div> 
    );    
}
export default MaterialSelection;