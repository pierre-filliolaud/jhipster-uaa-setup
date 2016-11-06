'use strict';

module.exports = {
    app: 'src/main/webapp/',
    dist: 'build/www/',
    test: 'src/test/javascript/',
    bower: 'src/main/webapp/bower_components/',
    tmp: 'build/tmp',
    revManifest: 'build/tmp/rev-manifest.json',
    port: 9000,
    apiPort: 8080,
    liveReloadPort: 35729,
    uri: 'http://localhost:',
    constantTemplate:
        '// DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n' +
        '<% constants.forEach(function(constant) { %>export const <%- constant.name %> = <%= constant.value %>;\n<% }) %>' +
        '\n'
};