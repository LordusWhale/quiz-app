export const addObjectToArrayLS = (lsKey, item) => {
  const ls = getObjectFromLS(lsKey);
  if (!ls) {
    localStorage.setItem(lsKey, JSON.stringify([item]));
    return;
  }
  const newArray = [...ls, item];
  localStorage.setItem(lsKey, JSON.stringify(newArray));
};


export const deleteAllLS = (lsKey) => {
  localStorage.setItem(lsKey, null);
};


export const getObjectFromLS = (lsKey) => {
  const ls = JSON.parse(localStorage.getItem(lsKey));
  if (ls) return ls;
  return null;
};
