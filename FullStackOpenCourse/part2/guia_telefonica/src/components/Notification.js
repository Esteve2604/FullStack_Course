const successNotification = ({successMessage}) => {
    if (successMessage === null) {
      return null
    }
  
    return (
      <div className="success">
        'Se ha añadido a {successMessage} correctamente'
      </div>
    )
  }
  const errorNotification = ({errorMessage}) => {
    if (errorMessage === null) {
      return null
    }
  
    return (
      <div className="error">
        'La información de {errorMessage} ya ha sido eliminada del servidor'
      </div>
    )
  }
  export default {successNotification, errorNotification}