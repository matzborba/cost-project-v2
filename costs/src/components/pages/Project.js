import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import Projects from "./Projects";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          console.log(project);
        })
        .catch((error) => console.log(error));
    }, 1000);
  }, [id]);

  return (
    <>
      {project.projectName ? (
        <div>
          <Container customClass="column">
            <div>
              <h1>Projeto: {project.projectName}</h1>
              <button type="">Editar projeto</button>
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
