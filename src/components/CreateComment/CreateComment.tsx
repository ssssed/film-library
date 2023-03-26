import React, { FC, useState } from "react";
import { ICreateCommentProps, IFilm } from "../../types";
import "./CreateComment.scss";

const CreateComment: FC<ICreateCommentProps> = ({
  addComments,
  selectedFilm,
}) => {
  const [comment, setComment] = useState<string>("");
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedFilm: IFilm = {
      ...selectedFilm,
      comments: [
        ...selectedFilm.comments,
        {
          id: Date.now(),
          message: comment,
          time: new Date(),
        },
      ],
    };
    addComments(updatedFilm);
    setComment("");
  };
  return (
    <div className="create-comment">
      <h2>Оставьте свой комментарий</h2>
      <form className="create-comment__form" onSubmit={handleSubmit}>
        <input
          className="create-comment__input"
          placeholder="Оставьте свой отзыв"
          value={comment}
          onChange={handleCommentChange}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default CreateComment;
