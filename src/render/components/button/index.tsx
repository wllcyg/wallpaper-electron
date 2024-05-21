import { ButtonWrapper } from '@/render/components/button/style';
interface ButtonProps {
  text: string;
}


const Button = ({text}:ButtonProps) => {
  return (
    <ButtonWrapper>
      <button className="custom-btn btn-1">{text}</button>
      <button className="custom-btn btn-2">{text}</button>
    </ButtonWrapper>
  );
};

export default Button;
