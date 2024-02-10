import {useSelector} from "react-redux"
const SuccessNotification = () => {
  const successMessage=useSelector(state=>state.Snotification)
    if (successMessage === null) {
      return null
    }
  
    return (
      <div className="success">
        {successMessage}
      </div>
    )
  }
  const ErrorNotification = () => {
    const errorMessage= useSelector(state=>state.Enotification)
    if (errorMessage === null) {
      return null
    }
  
    return (
      <div className="error">
        {errorMessage}
      </div>
    )
  }
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {SuccessNotification, ErrorNotification}