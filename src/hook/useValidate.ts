interface IValidateOptions {
  isNumber?: boolean;
  isString?: boolean;
  isList?: boolean;
}

export const useValidate = (
  value: string,
  options: IValidateOptions = { isString: true }
) => {
  if (options.isString) {
    if (!value) return true;
    return /^[a-zA-Zа-яА-ЯёЁ ]+$/.test(value);
  }
  if (options.isNumber) {
    if (!value) return true;
    return /^\d+$/.test(value);
  }
  if (options.isList) {
    if (!value) return true;
    return /^[a-zA-Zа-яА-ЯёЁ, ]+$/.test(value);
  }
};
