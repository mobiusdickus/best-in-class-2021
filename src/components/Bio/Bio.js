import './Bio.css';



function Bio(props) {
  return (
    <div className="bio">
      <div className="img" style={{ paddingBottom: "2rem" }}>
        <img 
          className="responsive"
          src={ props.imgSrc }
          alt={ props.imgAlt }/>
      </div>
      <h4 className="dark" style={{ paddingBottom: "1rem" }}>
        { props.firstName }<br/>{ props.lastName }
      </h4>
      <p className="small" style={{ paddingBottom: "1rem" }}>
        { props.jobTitle }<br/>{ props.isIntern ? "AT SUPERUNION" : null }
      </p>
      { props.isIntern ? <p style={{ paddingBottom: "1rem" }}>“{ props.quote }”</p> : null }
      { props.isIntern ? <p className="small">CLASS OF { props.classYear }</p> : null }
    </div>
  );
}

export default Bio;
