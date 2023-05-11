const Notification = ({notification}) => {

  const colorDecider = notification.split(' ')

    if (notification === ''){
        return (<></>)
    }

    else {

      if (colorDecider.includes('added') || colorDecider.includes('updated')){
        return (
          <>
            <div className="notification"> {notification} </div>
          </>
        )
      }

      else {

    return (
       <>
         <div className="error"> {notification} </div>
       </> 
    )}
}}



export {Notification}