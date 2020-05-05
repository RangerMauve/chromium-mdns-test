const mdns = require('multicast-dns')()

const QUERY_INTERVAL = 10000
const QUERY_NAME = Math.floor(Math.random() * 255) + `.example.local`

mdns.on('query', ({questions}) => console.log(questions[0]))

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
