const consoleMethod = [
  'debug',
  'error',
  'info',
  'log',
  'warn',
  'dir',
  'dirxml',
  'table',
  'trace',
  'group',
  'groupCollapsed',
  'groupEnd',
  'clear',
  'count',
  'countReset',
  'assert',
  'profile',
  'profileEnd',
  'time',
  'timeLog',
  'timeEnd',
  'timeStamp'
]

const polyfillConsole = (showWarning) => {
  consoleMethod.forEach(key => {
    if (!console['groupCollapsed'] && console['group']) {
      console['groupCollapsed'] = console['group']
    }
    if (!console[key]) {
      console[key] = () => {
        showWarning && console.warn(`console.${key} not supported in this RN version.`)
      }
    }
  })
}

const disableConsole = () => {
  consoleMethod.forEach(key => {
    console[key] = () => { }
  })
}

export {
  polyfillConsole,
  disableConsole
}
