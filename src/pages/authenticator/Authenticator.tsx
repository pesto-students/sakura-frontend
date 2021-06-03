import React, { useEffect } from "react";
import { Hub } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {
  successfulLogin,
  successfulLogout,
  closeLoginModel,
  attemptLogin,
} from "./authenticator.slice";
import { Button, Modal } from "react-bootstrap";

export const Authenticator: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          dispatch(successfulLogin());
          break;
        case "signOut":
          dispatch(successfulLogout());
          break;
      }
    });
  }, []);
  return (
    <div>
      <LoginModal />
    </div>
  );
};

export const LoginModal: React.FC<{}> = () => {
  const modalState = useAppSelector((state) => state.auth.showLoginModal);
  const dispatch = useAppDispatch();

  return (
    <Modal show={modalState} onHide={() => dispatch(closeLoginModel())}>
      <Modal.Header>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to Sign In ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeLoginModel())}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(closeLoginModel());
            dispatch(attemptLogin());
          }}
        >
          SignIn
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Authenticator;
