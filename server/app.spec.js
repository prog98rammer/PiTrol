const app = require('./app')

test('exports express instance', function () {
  expect(app).toBeInstanceOf(Function)
})
