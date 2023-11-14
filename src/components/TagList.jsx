import React from "react";
import "../styles/taglist.css";

const TagList = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
