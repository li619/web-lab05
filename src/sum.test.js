// src/sum.test.js

const sum = require('./sum');  // 导入 sum.js 文件

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);  // 测试 1 + 2 是否等于 3
});

test('adds -1 + 2 to equal 1', () => {
  expect(sum(-1, 2)).toBe(1);  // 测试 -1 + 2 是否等于 1
});

test('adds -1 + -1 to equal -2', () => {
  expect(sum(-1, -1)).toBe(-2);  // 测试 -1 + -1 是否等于 -2
});
