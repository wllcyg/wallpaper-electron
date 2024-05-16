import { HeaderContainer } from '@/render/Header/style';
const Header = () => {
  const dragAreaHandle = () =>{

  }
  return (
    <HeaderContainer>
      <div className='logo'>
        <svg d="1715844828809" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="4369" width="24" height="24">
          <path
            d="M143.730932 493.357364H492.844714V31.92621c0-21.296612-24.268551-44.483212-41.511273-23.967248L153.263049 431.891644c-20.77618 33.26654-27.692443 61.465719-9.532117 61.46572z"
            fill="#33D413" p-id="4370"></path>
          <path
            d="M530.274708 144.21619v349.141174h461.431154c21.310307 0 44.496908-24.254855 23.967248-41.511274L591.754123 153.734612c-33.26654-20.77618-61.479415-27.678748-61.479415-9.518422z"
            fill="#fe8119" p-id="4371"></path>
          <path
            d="M879.128274 530.636706H529.973406v461.431154c0 21.296612 24.268551 44.496908 41.511273 23.967248l298.111479-423.932682c20.789876-33.26654 27.692443-61.465719 9.532116-61.46572z"
            fill="#f96c66" p-id="4372"></path>
          <path
            d="M493.707535 881.517217V532.362348H32.276381c-21.296612 0-44.483212 24.268551-23.967248 41.511273l423.932683 298.111479c33.211758 20.789876 61.465719 27.692443 61.465719 9.532117z"
            fill="#18ABFF" p-id="4373"></path>
        </svg>
        <span>一刻app</span>
      </div>

      <div className='drag-area'></div>

    </HeaderContainer>
  );
};

export default Header;
