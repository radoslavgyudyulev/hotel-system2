import React from "react";

const CrmWidget = ({ widgetConfig: { visibility } }) => {
  if (!visibility) {
    return null;
  }
  return (
    <div>
      <p>SOME CRM CONTENT</p>
    </div>
  );
};

export default CrmWidget;
