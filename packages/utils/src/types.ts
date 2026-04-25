export type InvertStringStringRecord<T extends Record<string, string>> = {
  [Key in keyof T as T[Key]]: Key;
};
