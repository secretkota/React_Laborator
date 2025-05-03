import React from 'react'
import closeBtn from '../../assets/img/close-btn.svg';
import { CloseBtn, Content, ModalMain, Wrapper } from './Modal.styled'

/**
 * Создание модального окна, которое показывается, когда isOpen === true.
 * Внутри окна отображение переданных children и кнопку для закрытия модалки.
 *
 * @component
 * @param {Object} props - Свойства, которые я принимаю.
 * @param {boolean} props.isOpen - Флаг, открыта ли модалка.
 * @param {Function} props.onClose - Функция, которую я вызываю при закрытии модалки.
 * @param {React.ReactNode} props.children - Контент, который я показываю внутри модалки.
 * @returns {JSX.Element|null} Модальное окно или null, если окно закрыто.
 */
export default function Modal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <ModalMain>
          <Wrapper>
            <Content>
              {children}
              <CloseBtn onClick={onClose}>
                <img src={closeBtn} alt="Close"/>
              </CloseBtn>
            </Content>
          </Wrapper>
        </ModalMain>
      )}
    </>
  )
}
