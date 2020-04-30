const mdns = require('multicast-dns')()

const QUERY_INTERVAL = 2000
const QUERY_NAME = 'ipfs.local'

mdns.on('query', (query) => console.log({ query }))

function doQuery () {
  mdns.query({
    questions: [{
      name: QUERY_NAME,
      type: 'PTR'
    }]
  })
}

setInterval(doQuery, QUERY_INTERVAL)
doQuery()
