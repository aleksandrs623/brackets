module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    const config = bracketsConfig.find(c => c[0] === bracket || c[1] === bracket);
    if (config) {
      if (config[0] === config[1]) {
        if (stack.length > 0 && stack[stack.length - 1] === bracket) {
          stack.pop();
        } else {
          stack.push(bracket);
        }
      } else if (bracket === config[0]) {
        stack.push(bracket);
      } else if (stack.length === 0 || stack.pop() !== config[0]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
  