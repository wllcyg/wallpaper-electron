import { useState } from 'react';

const measureData = {
  measureDataMap: new Map(),
  LastMeasuredItemIndex: -1
};

const estimatedHeight = (defaultEstimatedItemSize = 50, itemCount: number) => {
  let measureHeight = 0;
  const { measureDataMap, LastMeasuredItemIndex } = measureData;
  // 计算已经获取过真实高度的项的高度之和
  if (LastMeasuredItemIndex >= 0) {
    const lastMeasuredItem = measureDataMap.get(LastMeasuredItemIndex);
    measureHeight = lastMeasuredItem.offset + lastMeasuredItem.height;
  }
  // 计算剩余未获取真实高度的项的高度之和
  const unMeasuredItemCount = itemCount - measureData.LastMeasuredItemIndex - 1;
  // 计算总高度
  const totalEstimateHeight = measureHeight + unMeasuredItemCount * defaultEstimatedItemSize;
  return totalEstimateHeight;
};

const getItemMeteata = (props: { itemSize: any; }, index: number) => {
  const { itemSize } = props;
  const { measureDataMap, LastMeasuredItemIndex } = measureData;
  // 如果当前索引比已记录的索引要大，说明要计算当前索引的项的size和offset
  if (index > LastMeasuredItemIndex) {
    let offset = 0;
    if (LastMeasuredItemIndex >= 0) {
      const lastMeasuredItem = measureDataMap.get(LastMeasuredItemIndex);
      offset = lastMeasuredItem.offset + lastMeasuredItem.height;
    }
    // 计算直到index为止，所有未计算过的项
    for (let i = LastMeasuredItemIndex + 1; i <= index; i++) {
      const currentItemSize = itemSize(i);
      measureDataMap.set(i, {
        size: currentItemSize,
        offset
      });
      offset += currentItemSize;
    }
    measureData.LastMeasuredItemIndex = index;
  }
  return measureDataMap.get(index);
};
const getStartIndex = (props: { itemCount?: any; itemSize?: any; }, scrollOffset: number) => {
  const { itemCount } = props;
  let index = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const currentOffset = getItemMeteata(props, index).offset;
    if (currentOffset >= scrollOffset) return index;
    if (index >= itemCount) return itemCount;
    index++
  }
}

const getEdIndex = (props: any, satrtIndex: number) => {
  const { height, itemCount } = props;
  // 获取可视区内开始的项
  const startItem = getItemMeteata(props, satrtIndex);
  // 可视区内最大的offset值
  const maxOffset = startItem.offset + height;
  // 开始项的下一项的offset，之后不断累加此offset，直到等于或超过最大offset，就是找到结束索引了
  let offset = startItem.offset + startItem.size;
  let endIndex = satrtIndex;
  while (offset < maxOffset && endIndex < itemCount - 1) {
    endIndex++;
    const item = getItemMeteata(props, endIndex);
    offset += item.size;
  }
  return endIndex;
};

const getRangeToRender = (props: { itemCount: any; itemSize?: any; }, scrollOffset: number) => {
  const { itemCount } = props
  const startIndex = getStartIndex(props,scrollOffset)
  const endIndex = getEdIndex(props,startIndex)
  return [
    Math.max(0, startIndex - 2),
    Math.min(itemCount - 1, endIndex + 2),
    startIndex,
    endIndex,
  ]
}

const VirtualBox = (props) => {
  const { height, width, itemCount, itemEstimatedSize, children: Child } = props;
  const [scrollOffset, setScrollOffset] = useState(0);
  const [, setState] = useState({});
  const containerStyle = {
    position: 'relative',
    width,
    height,
    overflow: 'auto',
    willChange: 'transform'
  };
  const contentStyle = {
    height: estimatedHeight(itemEstimatedSize, itemCount),
    width: '100%',
  };
  const sizeChangeHandle = (index, domNode) => {
    const height = domNode.offsetHeight;
    const { measuredDataMap, lastMeasuredItemIndex } = measuredData;
    const itemMetaData = measuredDataMap[index];
    itemMetaData.size = height;
    let offset = 0;
    for (let i = 0; i <= lastMeasuredItemIndex; i++) {
      const itemMetaData = measuredDataMap[i];
      itemMetaData.offset = offset;
      offset += itemMetaData.size;
    }
    setState({});
  }
  const getCurrentChildren = () => {
    const [startIndex, endIndex] = getRangeToRender(props, scrollOffset)
    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const item = getItemMetaData(props, i);
      const itemStyle = {
        position: 'absolute',
        height: item.size,
        width: '100%',
        top: item.offset,
      };
      items.push(
        <ListItem key={i} index={i} style={itemStyle} ComponentType={Child} onSizeChange={sizeChangeHandle} />
      );
    }
    return items;
  }
  const scrollHandle = (event) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
  }
  return (
    <div style={containerStyle} onScroll={scrollHandle}>
      <div style={contentStyle}>
        {getCurrentChildren()}
      </div>
    </div>
  );
};

export default VirtualBox;
