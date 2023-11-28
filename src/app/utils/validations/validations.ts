/*
 * Copyright (c) 2021.
 * author: https://github.com/vuelidate/vuelidate/tree/master/src/validators
 */

import { len, regex, req } from './common';

export const isRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return req(value.trim());
  }
  return req(value);
};

export const isEmail = (value: any): boolean => {
  const emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  return regex(value, emailRegex);
};

export const isLength = (value: any, length: number): boolean => {
  return len(value) === length;
};

export const hasMaxLength = (value: any, length: number): boolean => {
  return !req(value) || len(value) <= length;
};

export const hasMinLength = (value: any, length: number): boolean => {
  return !req(value) || len(value) >= length;
};

export const isInteger = (value: any): boolean => {
  return regex(value, /(^[0-9]*$)|(^-[0-9]+$)/);
};

export const isValidPassword = (value: any): boolean => {
  return regex(value, /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/);
};
