function getRandomElements(dataArray) {
  const res = [];
  let n = 18;
  for(let i = 0; i < n; ){
      const random = Math.floor(Math.random() * dataArray.length);
      if(res.indexOf(dataArray[random]) !== -1){
        continue;
      };
      res.push(dataArray[random]);
      i++;
  };
  return res;
}

export default getRandomElements;