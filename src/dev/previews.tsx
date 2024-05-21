import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import VirtualList from '@/render/components/VList/VList';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/VirtualList">
        <VirtualList />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;