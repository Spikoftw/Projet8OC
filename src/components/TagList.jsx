import React from "react";
import "../styles/taglist.css";

const TagList = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={index} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
