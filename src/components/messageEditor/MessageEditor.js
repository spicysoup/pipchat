import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useAuth0 } from 'react-auth0-spa';
import { useDispatch, useSelector } from 'react-redux';
import { send, exchangeKeys } from 'features/chat/chatSlice';

const MessageEditor = () => {
  const { user } = useAuth0();
  const peer = useSelector((state) => state.session.peer);
  const dispatch = useDispatch();

  const handleKeyPressed = (event) => {
    if (event.key === 'Enter') {
      if (event.ctrlKey) {
        // End-to-end encryption flow
        // console.log('Control + Enter pressed', event.target.value);
        // event.preventDefault();
        // dispatch(exchangeKeys({ self: user.sub, peer, message: event.target.value }));
      } else {
        console.log('Enter pressed', event.target.value);
        event.preventDefault();
        dispatch(send({ self: user.sub, peer, message: event.target.value }));
      }
    }
  };
  return (
    <InputGroup>
      <FormControl
        as="textarea"
        aria-label="message to send"
        onKeyPress={handleKeyPressed}
      />
    </InputGroup>
  );
};
export default MessageEditor;
