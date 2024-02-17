import { useState } from "react";
import { cardService } from "../services/card.service";

export const FormCard = ({ onSubmit }) => {
  const [form, setForm] = useState({
    question: "",
    answer: "",
    tag: "",
  });

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await cardService.create(form);
    onSubmit();
  };

  return (
    <form action="" onSubmit={submitForm} className="flex flex-col gap-2 ">
      <input
        className="p-2 rounded-md bg-blue-900"
        type="text"
        name="question"
        placeholder="Question"
        onChange={onChangeInput}
      />
      <input
        className="p-2 rounded-md bg-blue-900"
        type="text"
        name="answer"
        placeholder="Answer"
        onChange={onChangeInput}
      />
      <input
        className="p-2 rounded-md bg-blue-900"
        type="text"
        name="tag"
        placeholder="Tag"
        onChange={onChangeInput}
      />
      <input
        className="p-2 rounded-md bg-blue-800"
        type="submit"
        value="Add card"
      />
    </form>
  );
};
