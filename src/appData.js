let baseUrl = 'http://localhost:5000/app/status-app/api'
if (process.env.REACT_APP_API_SOURCE !== 'dev') {
  baseUrl = 'https://creat-ive.net/app/status-app/api'
}

export default baseUrl