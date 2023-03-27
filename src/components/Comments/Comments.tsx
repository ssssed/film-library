import React, { FC } from "react";
import { ICommentsProps } from "../../types";
import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments: FC<ICommentsProps> = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Комментарии</h2>
      <div className="comments">
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
