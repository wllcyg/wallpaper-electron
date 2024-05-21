import React, { useState } from 'react';

interface VirtualBoxProps {
  height: number,
  width: number,
  itemSize: number,
  itemCount: number,
  children?: React.ComponentType,
  className?: string
}

const VirtualBox = (props: VirtualBoxProps) => {
  const { height, width, itemSize, itemCount} = props;
  const [scrollOffset, setScrollOffset] = useState(0);
  // 外部容器高度
  const containerStyle = {
    position: 'relative',
    width,
    height,
    overflow: 'auto'
  };
  // 1000个元素撑起盒子的实际高度
  const contentStyle = {
    height: itemSize * itemCount,
    width: '100%'
  };
  const getCurrentChildren = () => {
    // 可视区起始索引
    const startIndex = Math.floor(scrollOffset / itemSize);
    // 上缓冲区域索引
    const finialStartIndex = Math.max(0, startIndex - 2);
    // 可视区域最大个数
    const numVisibleItems = Math.ceil(height / itemSize);
    const endIndex = Math.min(itemCount, startIndex + numVisibleItems + 2);
    const items = [];
    for (let i = finialStartIndex; i < endIndex; i++) {
      const itemStyle = {
        position: 'absolute',
        height: itemSize,
        width: '100%',
        // 计算每个元素在container中的top值
        top: itemSize * i
      };
      items.push(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <div style={itemStyle} key={i}>
          第 {i} 个
        </div>
      );
    }
    return items;
  };
  // 当触发滚动就重新计算
  const scrollHandle = (event: { currentTarget: { scrollTop: any; }; }) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
  };
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <div style={containerStyle} onScroll={scrollHandle}>
      <div style={contentStyle}>
        {getCurrentChildren()}
      </div>
    </div>
  );
};

export default VirtualBox;
