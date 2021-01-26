let baseUrl = 'http://localhost:5000/api'
if (process.env.REACT_APP_API_SOURCE !== 'dev') {
  baseUrl = 'https://status-app.creat-ive.net/api'
}

export default baseUrl
