export const capName = (input: string) => {
  let cap = input.slice(0, 1).toUpperCase();
  let rest = input.slice(1);
  return cap + rest;
};
