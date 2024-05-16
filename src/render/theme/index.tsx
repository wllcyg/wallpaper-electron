import React, { useEffect } from 'react';
import { ThemeChangeWraper } from '@/render/theme/style';
interface Props  {
  callBack:(value:string)=>void
}
const ThemeChange = (props:Props) => {
  // 初始化先就判断当前的主题
  const setTheme = () => {
    const currentTheme = window.localStorage.getItem('theme') === 'dark-mode' ? 'light-mode' : 'dark-mode';
    window.localStorage.setItem('theme', currentTheme);
    props.callBack(currentTheme);
  };
  useEffect(() => {
    const theme = window.localStorage.getItem('theme') ?? 'dark-mode'
    window.localStorage.setItem('theme',theme)
    props.callBack(theme)
  },[])
  return (
    <ThemeChangeWraper>
      <svg onClick={setTheme} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
           strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </ThemeChangeWraper>
  );
};

export default ThemeChange;
