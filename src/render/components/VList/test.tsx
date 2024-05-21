import Vlist from "./VList";
import React from 'react';

const data = [];
const dataLength = 10000;
for (let id = 0; id < dataLength; ++id) {
  data.push({
    id,
    value: `item-${id}`,
  });
}

const userVisibleHeight = 800;
const estimateRowHeight = 94;
const bufferSize = 10;

export default function dummyComp() {
  return (
    <Vlist
      height={userVisibleHeight}
      total={dataLength}
      estimateRowHeight={estimateRowHeight}
      bufferSize={bufferSize}
      rowRenderer={(index: number, styleData: any) => {
        const item = index;
        return (
          <div
            key={item}
            style={styleData}
            onClick={() => {
              console.log("item-", index);
            }}
            id={`item-${index}`}
          >
              11111
          </div>
        );
      }}
    />
  );
}
