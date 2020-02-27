import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import NavBar from 'features/navBar/NavBar';
import { useAuth0 } from 'react-auth0-spa';
import styles from 'App.module.scss';
import MessageEditor from 'components/messageEditor/MessageEditor';
import PeerList from 'components/peerList/PeerList';
import Messages from 'components/messages/Messages';
import Toolbar from 'components/toolbar/Toolbar';

const App = () => {
  const { loading, user } = useAuth0();
  return (
    <div>
      <NavBar />
      <Container className={styles.rootPane}>
        {loading && <div>Loading...</div>}
        {!loading
          && (
          <Row>
            {/*<Col><p>User List</p></Col>*/}
            <Col>{user && <PeerList />}</Col>
            <Col xs={8}>
              <Row className={styles.messages}>
                <Messages />
              </Row>
              <Row className={styles.messageEditor}>
                <MessageEditor />
              </Row>
              {/*<Row className={styles.toolbar}>*/}
              {/*  <Toolbar />*/}
              {/*</Row>*/}
            </Col>
          </Row>
          )}
      </Container>
    </div>
  );
};

export default App;
