// "required" core, used in almost every validator to allow empty values
export const req = (value: any): boolean => {
    if (Array.isArray(value)) {
      return !!value.length;
    }
    if (value === undefined || value === null) {
      return false;
    }
  
    if (value === false) {
      return true;
    }
  
    if (value instanceof Date) {
      // invalid date won't pass
      return !isNaN(value.getTime());
    }
  
    if (typeof value === 'object') {
      for (const _ in value) {
        return true;
      }
      return false;
    }
  
    return !!String(value).length;
  };
  
  // get length in type-agnostic way
  export const len = (value: any) => {
    if (Array.isArray(value)) {
      return value.length;
    }
    if (typeof value === 'object') {
      return Object.keys(value).length;
    }
    return String(value).length;
  };
  export const regex = (value: any, expr: any) => !req(value) || expr.test(value);
  