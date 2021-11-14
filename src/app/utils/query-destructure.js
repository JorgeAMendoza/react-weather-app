export const queryDestructure = (search) => {
  const userSearchArray = search.replace(/,/, '').split(' ');
  const userCity = userSearchArray
    .slice(0, userSearchArray.length - 1)
    .join('');
  const userState = userSearchArray[userSearchArray.length - 1];

  return [userCity, userState];
};
