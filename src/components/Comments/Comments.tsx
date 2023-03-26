import React, { FC } from "react";
import { ICommentsProps } from "../../types";
import "./Comments.scss";

const Comments: FC<ICommentsProps> = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Комментарии</h2>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p className="comment__text">Пользователь</p>
            <p className="comment__text">{comment.message}</p>
            <p className="comment__text">{comment.rating}</p>
            <p className="comment__text">
              {comment.time.getDate()}-{comment.time.getMonth()}-
              {comment.time.getFullYear()} {comment.time.getHours()}:
              {comment.time.getMinutes()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
