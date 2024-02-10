export const Notification = ({notification}) => {
    
    return <>
    {notification!=='' ? <p>{notification}</p> : <></>}
    </>
}