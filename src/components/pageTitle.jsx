export default function PageTitle(props){
  return (
    <div
    style={{
      height: "50vh",
      backgroundImage:
        `linear-gradient(rgba(33,37,41,1), rgba(33,37,41,0.8), rgba(33,37,41,0.0)), url(${props.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }}
    className="d-flex flex-column align-items-center justify-content-center"
  >
    
    <h1 className="text-light">{props.title}</h1>
    <i className="text-light w-75 text-center">{props.subtitle}</i>
  </div>
  )
}