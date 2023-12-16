interface Empty {
  isEmpty: boolean;
  values?: (string | number)[];
}

export const helperFunctions = () => {
  function isEmpty(obj: {}): Empty {
    const entries = Object.entries(obj);
    const emptyValues: Empty = {
      isEmpty: false,
      values: [],
    };
    entries.forEach(([key, val]) => {
      if (!val) {
        emptyValues.values?.push(key);
        emptyValues.isEmpty = true;
      }
    });

    return emptyValues;
  }

  return { isEmpty };
};
