const filter = (arr, key, val) => {
  return arr.filter(elem => elem[key] === val);
};

export default filter;