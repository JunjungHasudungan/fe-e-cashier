export const required = (value, field) =>
  value ? "" : `${field} wajib diisi`;

export const emailFormat = (value) =>
  /^\S+@\S+\.\S+$/.test(value) ? "" : "Format email tidak valid";

export const min = (value, amount) =>
  value.length >= amount ? "" : `Minimal ${amount} karakter`;


