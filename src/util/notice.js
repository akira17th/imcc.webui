import { useSnackbar } from 'notistack'
import Grow from '@material-ui/core/Grow'

const option = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  TransitionComponent: Grow
}

const useNotice = () => {
  const {
    enqueueSnackbar
  // closeSnackbar
  } = useSnackbar()

  const noticeSuccess = msg => {
    enqueueSnackbar(msg, {
      variant: 'success',
      ...option
    })
  }

  const noticeInfo = msg => {
    enqueueSnackbar(msg, {
      variant: 'info',
      ...option
    })
  }

  const noticeWarning = msg => {
    enqueueSnackbar(msg, {
      variant: 'warning',
      ...option
    })
  }

  const noticeError = msg => {
    enqueueSnackbar(msg, {
      variant: 'error',
      ...option
    })
  }

  return [ noticeInfo, noticeSuccess, noticeWarning, noticeError ]
}

export default useNotice
