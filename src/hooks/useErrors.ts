import { useState } from 'react';

interface Error {
  field: string;
  message: string;
}

interface addErrorData {
  field: string;
  message: string;
}

export function useErrors() {
  const [errors, setErrors] = useState<Error[]>([]);

  function addError({ field, message }: addErrorData) {
    const errorAlreadyExists = errors.find(error => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors(prevState => [...prevState, { field, message }]);
  }

  function removeError(field: string) {
    setErrors(prevState => prevState.filter(error => error.field !== field));
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.field === fieldName)?.message;
  }

  return {
    addError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
