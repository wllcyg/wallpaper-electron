import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DrawContainer } from '@/render/pages/components/style';

interface Props {
  open?: boolean;
  position?: 'left' | 'right';
  width?: number | string;
  children?: React.ReactNode;
  close?: () => void;
}

const Drawer = ({ open, position, width, children,close }: Props) => {
  // 判断width属性是否包含百分比的符号
  const isPercentage = typeof width === 'string' && width.includes('%');
  if (!isPercentage) {
    width = `${width}px`
  }

  const [visible, setVisible] = useState(open);
  const [active, setActive] = useState(open);
  useEffect(() =>{
    if (open) setVisible(true);
    requestAnimationFrame(() =>{
      setActive(open)
    })
  },[open])
  const cancel = () => {
    close()
  }
  if (!open && !visible) {
    return null;
  }
  return open ? ReactDOM.createPortal(
    <DrawContainer>
      <div className={classNames(['draw', active && 'active'])}>
        <div className="mask" onClick={() => cancel()}></div>
        <div className="content" style={{width}}>1111</div>
      </div>
    </DrawContainer>,
    document.body
  ) : null;
};

export default Drawer;
