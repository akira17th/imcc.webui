import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import useNotice from '../util/notice'
import axios from '@/util/axios'

const getWeatherForecast = async () => {
  const res = await axios.get('WeatherForecast')
  console.log('page1', res)
}

const getBadTest = async () => {
  const res = await axios.get('WeatherForecast/test')
  console.log('page1', res)
}

export default function Page2() {
  const [ noticeInfo, noticeSuccess, noticeWarning, noticeError ] = useNotice()

  return (
    <div>
      this is page1
      <Link to="page2">to page2</Link>
      <Button variant="contained" onClick={() => getWeatherForecast()}>Axios Get</Button>
      <Button variant="contained" onClick={() => getBadTest()}>getBadTest</Button>
      <br />
      <Button variant="contained" onClick={() => noticeInfo('123')}>noticeInfo</Button>
      <Button variant="contained" onClick={() => noticeSuccess('123')}>noticeSuccess</Button>
      <Button variant="contained" onClick={() => noticeWarning('123')}>noticeWarning</Button>
      <Button variant="contained" onClick={() => noticeError('123')}>noticeError</Button>
    </div>
  )
}
