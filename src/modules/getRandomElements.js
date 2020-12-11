function getRandomElements(dataArray) {
  const res = [];
  const n = 18;
  for (let i = 0; i < n;) {
    const random = Math.floor(Math.random() * dataArray.length);
    res.push(dataArray[random]);
    i += 1;
  }
  return res;
}

export default getRandomElements;