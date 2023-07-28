import React from 'react'
import { Modal } from 'flowbite-react';

export function ModalBasic(props) {
 
  const {show, size, title, children, showOrHide, onRefresh} = props

  return (
    <Modal show={show} size={size} onClose={() => showOrHide()}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

ModalBasic.defaultProps = {
  size: 'md',
  title: 'Modal'
}
