import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Seletc";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Input
          type="text"
          name="projectName"
          placeholder="Insira o nome do Projeto"
          text="Nome do Projeto"
          handleOnChange={handleChange}
          value={project.projectName}
        />
      </div>
      <div>
        <Input
          type="number"
          placeholder="Insira o orçamento total"
          name="budget"
          text="Orçamento total"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ""}
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione uma categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ""}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
