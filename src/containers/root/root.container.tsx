import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ModalProvider as Modal } from 'styled-react-modal';

import { history } from 'utils';
import Store from 'containers/store';
import Contexts from 'containers/contexts';
import Theme from 'containers/theme';
import App from 'containers/app';

import { StyledToastContainer as ToastContainer, StyledModal } from './root.styles';

/* -------------------------------------------------------------------------- */

const Root: FC = () => (
  <Store>
    <Contexts>
      <Theme>
        <Modal backgroundComponent={StyledModal}>
          <ToastContainer limit={3} />

          <Router history={history}>
            <App />
          </Router>

          <ReactQueryDevtools initialIsOpen={false} />
        </Modal>
      </Theme>
    </Contexts>
  </Store>
);

export default Root;
