const app = require('./app');
const express = require('express');

test('exports express instance', function() {
  expect(app).toBeInstanceOf(Function);
});
