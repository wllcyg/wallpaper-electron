import { options } from '@/render/pages/home/config';
import { HomeWrapper } from '@/render/pages/home/style';
import Draw from '@/render/pages/components/draw';
import { useState } from 'react';
const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <HomeWrapper>
      {
        options.map(item => {
          return (
            <div className="app-card" key={item.value}>
              <div className="title">{item.label}</div>
              <div className='img-dsc'>
                <img src={item.img} alt="" />
                <div className="option-btn">
                  <button className="content-button status-button" onClick={() => setDrawerOpen(false)}>随机图片</button>
                  <button className="content-button status-button" onClick={() => setDrawerOpen(true)}>本地图片</button>
                </div>
              </div>
            </div>
          );
        })
      }
      <Draw open={drawerOpen} position='right' width={800} close={closeDrawer}>

      </Draw>
    </HomeWrapper>
  );
};

export default Home;
