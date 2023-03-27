import React, { FC } from "react";
import { IComment } from "../../types";
import "./Comment.scss";

const Comment: FC<IComment> = (comment) => {
  return (
    <div key={comment.id} className="comment">
      <p className="comment__text">Пользователь</p>
      <p className="comment__text">Комментарий: {comment.message}</p>
      <p className="comment__text">Рейтинг: {comment.rating}</p>
      <p className="comment__text">Дата: {comment.time.toString()}</p>
    </div>
  );
};

export default Comment;
