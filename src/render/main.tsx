import { MainContainer } from '@/render/style';
import Header from '@/render/Header';
import SliderBar from '@/render/Slider';
import { useState } from 'react';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import ThemeChange from '@/render/theme';
const Main = () => {
  const [theme, setTheme] = useState('dark-mode');
  const changeTheme = (value:string):void =>{
    setTheme(value)
    window.system.changeTheme(value)
  }
  return (
    <MainContainer>
      <div className={classNames([theme])}>
        <Header />
        <div className="inner">
          <SliderBar />
          <div className="main">
            <Outlet/>
          </div>
        </div>
        <ThemeChange callBack={changeTheme}/>
      </div>

    </MainContainer>
  );
};

export default Main;
