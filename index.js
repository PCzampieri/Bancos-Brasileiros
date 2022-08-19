const fs = require('fs')

const bancosdados = require('./bancosdados.json')

const bancosReady = bancosdados.map(({COMPE, ISPB, LongName, ShortName}) => ({COMPE, ISPB, LongName, ShortName, BANK: `${COMPE} - ${LongName}` }))

fs.writeFile('bancos.json', JSON.stringify(bancosReady, null, 2), {
  encoding: 'utf-8', flag: 'w'
}, () => {
  console.log('ok!')
} )
