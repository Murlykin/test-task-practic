import GoIT from '../../images/GoIT_baner.jpg';
import { GoItWrap, GoIt } from './Home.styled';

export const Home = () => {
  return (
    <GoItWrap>
      <GoIt src={GoIT} alt="picture" />
    </GoItWrap>
  );
};
