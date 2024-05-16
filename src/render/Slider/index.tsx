import { SliderWrapper } from '@/render/Slider/style';
import { urlConfig } from '@/render/router';
import { useNavigate } from 'react-router-dom';
const SliderBar = () => {
  const  navigate = useNavigate()
  const toOtherPage = (path:string) => {
    console.log(path);
    navigate(path)
  }
  return (
    <SliderWrapper>
      <div className='side-wrappe'>
        <div className="side-menu">
          {
            urlConfig.map(item => {
              return (
                <a  key={item.path} onClick={() => toOtherPage(item.path)}>
                  {item.icon}
                  {item.title}
                </a>
              )
            })
          }
        </div>
      </div>
    </SliderWrapper>
  );
};

export default SliderBar;
