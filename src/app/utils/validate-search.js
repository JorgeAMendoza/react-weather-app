import { queryDestructure } from './query-destructure';

export const validateSearch = (search) => {
  const cityRegex = /^[A-Za-z.' ]+$/;
  const cityStateRegex = /^[A-Za-z.' ]+$|^[A-Za-z.' ]+, [A-Za-z][A-Za-z]$/;

  if (cityRegex.test(search)) return [search];
  else if (cityStateRegex.test(search)) return queryDestructure(search);
  else return 'Invalid City Name, Please Try Again';
};
