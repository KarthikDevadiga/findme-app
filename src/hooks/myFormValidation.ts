import { useAuthStore } from "@/stores/Auth";

export const myFormValidation = () => {
  const authStore = useAuthStore();
  function isEmpty(obj: object) {
    const entries = Object.entries(obj);
    entries.forEach(([key, val]) => {
      if (!val) {
        authStore.formStatus.values?.push(`'${key}' field is Empty`);
        authStore.formStatus.valid = false;
      }
    });
  }

  function minChar(charNo: number, obj: object) {
    const entries = Object.entries(obj);
    entries.forEach(([key, val]) => {
      if (val.length < charNo) {
        authStore.formStatus.valid = false;
        authStore.formStatus.values?.push(
          `'${key}' field requires atleast ${charNo} charaters`
        );
      }
    });
  }

  return { isEmpty, minChar };
};
