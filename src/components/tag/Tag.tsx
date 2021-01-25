import React from "react";
import { Tag as HDSTag } from "hds-react";

export const Tag = () => {
  const onTagClick = () => alert("Tag clicked");
  const onTagRemove = () => alert("Tag removed");

  const customTheme = {
    "--tag-background": "var(--color-engel)",
    "--tag-color": "var(--color-black-90)",
    "--tag-focus-outline-color": "var(--color-black-90)",
  };

  return (
    <div>
      <h1>Tags</h1>
      <div>
        <HDSTag>Americum</HDSTag>{" "}
        <HDSTag role="link" id="link" onClick={onTagClick}>
          Americum
        </HDSTag>{" "}
        <HDSTag deleteButtonAriaLabel="Delete" onDelete={onTagRemove}>
          Americum
        </HDSTag>{" "}
        <HDSTag role="link" id="link" onClick={onTagClick} theme={customTheme}>
          Americum
        </HDSTag>
      </div>
    </div>
  );
};
