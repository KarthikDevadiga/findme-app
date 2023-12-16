import type { IsValid } from "@/hooks/myInterfaces";

export const myFormValidation = () => {
  function isEmpty(obj: object): IsValid {
    const entries = Object.entries(obj);
    const emptyValues: IsValid = {
      valid: true,
      values: [],
    };
    entries.forEach(([key, val]) => {
      if (!val) {
        emptyValues.values?.push(`'${key}' field is Empty`);
        emptyValues.valid = false;
      }
    });
    return emptyValues;
  }

  function minChar(charNo: number, obj: object): IsValid {
    const entries = Object.entries(obj);
    const fieldInfo: IsValid = {
      valid: true,
      values: [],
    };
    entries.forEach(([key, val]) => {
      if (val.length < charNo) {
        fieldInfo.valid = false;
        fieldInfo.values?.push(
          `'${key}' field requires atleast ${charNo} charaters`
        );
      }
    });
    return fieldInfo;
  }

  return { isEmpty, minChar };
};
