const { ESLint } = require('eslint')
const config = require('./index.js')

const TINY_VALID_JS_CODE = ''

const error = jest.spyOn(console, 'error').mockImplementation(() => {})

afterAll(() => {
  error.mockRestore()
})

describe('Validate ESLint config', () => {
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: config })

  it(`config is a valid flat config array`, () => {
    expect(Array.isArray(config)).toBe(true)
    expect(config.length).toBeGreaterThan(0)
  })

  it(`all top-level properties are correct`, async () => {
    const [result] = await eslint.lintText(TINY_VALID_JS_CODE)
    expect(result.messages.length).toBe(0)
  })

  it(`no deprecated rules are used`, async () => {
    const [result] = await eslint.lintText(TINY_VALID_JS_CODE)
    expect(result.usedDeprecatedRules.length).toBe(0)
  })
})
