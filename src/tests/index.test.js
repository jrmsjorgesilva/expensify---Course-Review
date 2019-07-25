import renderer from 'react-test-renderer';

const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello, ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4);
  // if (result !== 7) {
  //   throw new Error(`you added four and three and get ${result}. Expected 7`);
  // }
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello, Mike!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello, anonymous!');
});
