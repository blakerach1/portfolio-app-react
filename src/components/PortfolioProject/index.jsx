import "./style.css";

function Project(props) {
  return (
    <div className="project">
      <h2>{props.project.title}</h2>
      <a href={props.project.projectURL} target="_blank">
        <img src={props.project.image} alt={props.project.title} />
      </a>
      <p>{props.project.description}</p>
    </div>
  );
}

export default Project;
// the above function is a callback function that takes in a text argument
