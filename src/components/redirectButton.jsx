import { Link } from "react-router-dom";


export default function RedirectButton(props) {
  return (

        <Link style={{
          height: '100px',           
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${props.image})`,
          backgroundSize: 'cover',
        }} 
        to={props.to} className="btn btn-dark flex-grow-1 m-3 d-flex justify-content-center align-items-center">
          <h3>{props.name}</h3> 
        </Link>
  );
}