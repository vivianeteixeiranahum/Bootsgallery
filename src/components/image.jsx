
export default function Image(props) {
  return (
      <img style={{
        width: '47%',
      }}
      className="my-3"
      src={props.src}
      alt={props.alt}
      loading="lazy"
      >
        
      </img>
    )

}
