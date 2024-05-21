import Modal from '@/render/components/modal';
import React, { useState } from 'react';
import Button from '@/render/components/button';
import Dumtist from '@/render/components/VList/test'
import VirtualList from '@/render/components/VList/VList';

const Collection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const closeModel = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={() => setOpen(true)}>点击展开弹窗</button>
      <Button text="按钮颜色"></Button>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*// @ts-ignore*/}
      <Modal open={open} onClose={closeModel}>
        <div>弹窗内容弹窗内容弹窗内容</div>
      </Modal>
      {/*<VirtualBox className="list" height={200} width={200} itemSize={50}*/}
      {/*            itemCount={100000}></VirtualBox>*/}
      <Dumtist/>
    </div>
  );
};

export default Collection;
