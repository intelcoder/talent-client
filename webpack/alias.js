var path = require('path')
var CWD = process.cwd()

module.exports = {
  'Redux': CWD + '/app/redux',
  'Root': CWD + '/app/containers/Root',
  'Modules': CWD + '/app/redux/modules',
  'Containers': CWD + '/app/containers',
  'Components': CWD + '/app/components',
  'Pages': CWD + '/app/containers/pages',
  'Layout': CWD + '/app/containers/layout',
  'Global': CWD + '/app/containers/global',
  'Data': CWD + '/app/data'
}