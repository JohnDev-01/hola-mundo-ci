const holaMundo = require('../index');

test('Imprime ==>  "Hola mundo, probando los actions"', () => {
  expect(holaMundo()).toBe("Hola mundo, probando los actions");
});
