interface IValidateOptions {
  isNumber?: boolean;
  isString?: boolean;
  isList?: boolean;
  isRating?: boolean;
}

export const useValidate = (
  value: string,
  options: IValidateOptions = { isString: true }
) => {
  if (!value) return true;
  if (options.isString) {
    return /^[a-zA-Zа-яА-ЯёЁ ]+$/.test(value);
  }
  if (options.isNumber) {
    return /^\d+$/.test(value);
  }
  if (options.isList) {
    return /^[a-zA-Zа-яА-ЯёЁ, ]+$/.test(value);
  }
  if (options.isRating) {
    if (/^\d+$/.test(value))
      return 0 <= parseInt(value) && parseInt(value) <= 10;
    return false;
  }
};
