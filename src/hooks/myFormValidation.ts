interface Empty {
  isEmpty: boolean;
  values?: string[];
}

export const myFormValidation = () => {
  function isEmpty(obj: {}): Empty {
    const entries = Object.entries(obj);
    const emptyValues: Empty = {
      isEmpty: false,
      values: [],
    };
    entries.forEach(([key, val]) => {
      if (!val) {
        emptyValues.values?.push(`'${key}' field is Empty`);
        emptyValues.isEmpty = true;
      }
    });

    return emptyValues;
  }

  return { isEmpty };
};
