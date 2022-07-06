/* eslint-disable @typescript-eslint/no-empty-function */
class ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
  }

  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  }

  reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  }

  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  }
}

export default class MyErrorListener extends ErrorListener {
  _errors

  constructor() {
    super()

    this._errors = []
  }

  syntaxError(
    recognizer,
    offendingSymbol,
    line,
    column,
    message
  ) {
    this._errors.push({ message, line, column })
  }

  getErrors() {
    return this._errors
  }

  hasErrors() {
    return this._errors.length > 0
  }
}
