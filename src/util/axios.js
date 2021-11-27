import axios from 'axios'

const baseURL = import.meta.env.DEV ? '/api' : ''

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    // 'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: '',
    post: {
      'content-type': 'application/json'
    }
  }
})

// instance.interceptors.request.use(
//   config => {
//     if (
//       !whitelist.some(x => x.toLowerCase() === config.url.toLowerCase())
//       && !auth.getAuth().userId
//     ) {
//       source.cancel()
//       return Promise.reject(new Error('token expired'))
//     }
//     if (auth.getAuth().token) {
//       config.headers.common.Authorization = `Bearer ${auth.getAuth().token}`
//     }
//     if (auth.getAuth().userId) {
//       config.headers.common['X-PD-UserId'] = btoa(auth.getAuth().userId)
//     }
//     return config
//   },
//   error => Promise.reject(error)
// )

instance.interceptors.response.use(
  res => ({ success: true, data: res.data }),
  error => {
    console.log('error', error.response)
    return {
      success: false,
      message: error.response.data,
      data: error.response.data
    }
  }
)

export default instance
