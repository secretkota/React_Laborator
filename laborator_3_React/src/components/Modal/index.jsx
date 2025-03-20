import React from 'react'
import closeBtn from '../../assets/img/close-btn.svg';
import { CloseBtn, Content, ModalMain, Wrapper } from './Modal.styled'


export default function Modal({ isOpen, onClose, children }) {

  return (
    <>
      {isOpen && (
        <ModalMain>
          <Wrapper>
            <Content>
              {children}
              <CloseBtn
                onClick={() => onClose()}
              >
                <img src={closeBtn} alt="12" />
              </CloseBtn>
            </Content>
          </Wrapper>
        </ModalMain>
      )}
    </>
  )
}
