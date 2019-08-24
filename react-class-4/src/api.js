function getRequestAsync(url) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = function() {
      if (request.status == 200) {
        const responseObj = JSON.parse(request.response)
        resolve(responseObj)
      } else {
        reject('request success but something wrong in server.')
      }
    }

    request.onerror = function() {
      reject('fail to send request')
    }
    request.send()
  })
}
