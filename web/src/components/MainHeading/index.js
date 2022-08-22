import './style.css';
function MainHeading(props) {     
  return (
    <div className={`mainHeading pb-30  ${props.class} `}>
      <h2>{props.Heading}</h2>
      <h5 className={`${props.parahClass}`}>{props.HeadingParah}</h5>    
    </div>
    );    
}
export default MainHeading;