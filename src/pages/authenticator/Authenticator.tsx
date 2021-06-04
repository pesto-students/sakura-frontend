import React, { useEffect } from "react";
import { Hub } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import {
  successfulLogin,
  successfulLogout,
  closeLoginModal,
  attemptLogin,
  closeLogoutModal,
  attemptLogout,
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
      <LogoutModal />
    </div>
  );
};

export const LoginModal: React.FC<{}> = () => {
  const modalState = useAppSelector((state) => state.auth.showLoginModal);
  const dispatch = useAppDispatch();

  return (
    <Modal show={modalState} onHide={() => dispatch(closeLoginModal())}>
      <Modal.Header>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to Sign In ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeLoginModal())}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(closeLoginModal());
            dispatch(attemptLogin());
          }}
        >
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const LogoutModal: React.FC<{}> = () => {
  const modalState = useAppSelector((state) => state.auth.showLogoutModal);
  const dispatch = useAppDispatch();

  return (
    <Modal show={modalState} onHide={() => dispatch(closeLogoutModal())}>
      <Modal.Header>
        <Modal.Title>Sign Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to Sign Out ?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch(closeLogoutModal())}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(closeLogoutModal());
            dispatch(attemptLogout());
          }}
        >
          Sign Out
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Authenticator;
