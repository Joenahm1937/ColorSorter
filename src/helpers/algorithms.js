var trupleGenerator = (numBars) => {
  var res = [];
  var rand = () => Math.floor(Math.random() * 255);
  for (var i = 0; i < numBars; i++) {
    res.push([rand(), rand(), rand()])
  }
  return res;
}

export { trupleGenerator };