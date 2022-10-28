import React from "react";

function PageTitle({ title }) {
  return (
    <div className="page-title">
      <h2>{title}</h2>
      <div className="divider"></div>
    </div>
  );
}

export default PageTitle;
