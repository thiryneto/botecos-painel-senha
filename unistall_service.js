var Service = require('node-windows').Service;
var svc = new Service({
  name: 'botecosenha',
  description: 'Serviço de senha em painel',
  script: 'E:\\Dropbox\\www\\botecos-painel-senha\\dist\\server.js'
});
svc.on('uninstall', function () {
  console.log('Uninstall complete.');
});

svc.uninstall();