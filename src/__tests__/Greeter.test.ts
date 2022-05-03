import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Unknown')).toBe('Hello Unknown Welcome to npm package by Tr');
});
