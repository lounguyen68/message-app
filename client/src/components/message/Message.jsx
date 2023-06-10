import './message.scss';

const Message = (props) => {
  return (
    <div className={`message ${props.className} ${props.id}`}>
        <div className="message__box">
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Message
