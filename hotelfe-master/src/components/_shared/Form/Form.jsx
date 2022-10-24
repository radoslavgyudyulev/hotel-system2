import React, { useEffect, useState } from "react";
import { Button } from "components/_shared";
import validate from "utils/validate";

const Form = ({
  className,
  inputsWithValidations,
  children,
  onSubmit,
  loading,
}) => {
  const errors = validate(inputsWithValidations);
  const hasAnyError =
    Object.keys(errors).filter((key) => errors[key].length > 0).length > 0;

  return (
    <form className={className} onSubmit={onSubmit}>
      {children(errors, hasAnyError)}
      {/* <Button buttonText="Submit" type="submit" loading={loading} disabled={hasAnyError} /> */}
    </form>
  );
};

export default Form;
