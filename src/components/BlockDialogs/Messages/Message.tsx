type propsType = {
  message: string;
};
const Message: React.FC<propsType> = (props) => {
  return <div>{props.message}</div>;
};

export default Message;
