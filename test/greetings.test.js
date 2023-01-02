const greetings = require('../greetings');

const gust = 'Karim';

test('say hello to gust', () => {
  expect(greetings.say_hello(gust)).toBe(`Hello, ${gust}!`);
});

test('say hello to gust', () => {
  expect(greetings.say_hello(gust)).toBe(`Hello, Fail!`);
});