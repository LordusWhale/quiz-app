
// Local storage functions

export const addObjectToArrayLS = (lsKey, item) => {
  const ls = getObjectFromLS(lsKey);
  if (!ls) {
    localStorage.setItem(lsKey, JSON.stringify([item]));
    return;
  }
  const newArray = [...ls, item];
  localStorage.setItem(lsKey, JSON.stringify(newArray));
};


export const deleteObjectFromArray = (lsKey, id) => {
  const ls = getObjectFromLS(lsKey);
  if (!ls) return;
  const newArray = ls.filter(item=>{
    return item.id !== id;
  })
  localStorage.setItem(lsKey, JSON.stringify(newArray));
}

export const deleteAllLS = (lsKey) => {
  localStorage.setItem(lsKey, null);
};

// Create unique ID that can be used to delete.
export const createID =(lsKey) => {
  const ls = getObjectFromLS(lsKey);
  if (!ls) return 0;
  return ls.length;
}

export const getObjectFromLS = (lsKey) => {
  const ls = JSON.parse(localStorage.getItem(lsKey));
  if (ls) return ls;
  return null;
};
