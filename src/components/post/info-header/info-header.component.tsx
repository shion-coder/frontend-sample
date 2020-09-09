import React, { FC } from 'react';
import Modal from 'styled-react-modal';

import { ReturnGetPostProps } from 'types';
import { useCustomHistory, useModal } from 'hooks';
import Avatar from 'components/common/avatar';
import PostModal from './post-modal';

import { Container, Name, More } from './info-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const InfoHeader: FC<Props> = ({
  data: {
    post: {
      author: { fullName, username, avatar },
    },
  },
}) => {
  const { goUser } = useCustomHistory(username);
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Container>
      <Avatar src={avatar} width="2.5rem" height="2.5rem" cursor onClick={goUser} />

      <Name onClick={goUser}>{fullName}</Name>

      <More onClick={openModal} />

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <PostModal closeModal={closeModal} />
      </Modal>
    </Container>
  );
};

export default InfoHeader;
