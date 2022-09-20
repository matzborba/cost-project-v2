import Input from "../form/Input";
import Select from "../form/Seletc";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <div>
        <Input
          type="text"
          placeholder="Insira o nome do Projeto"
          text="Nome do Projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          placeholder="Insira o orçamento total"
          name="budget"
          text="Orçamento total"
        />
      </div>
      <div>
        <Select name="category_id" text="Seleciona uma categoria" />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
