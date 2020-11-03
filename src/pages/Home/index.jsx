import HeaderLayout from '../../layouts/HeaderLayout';
import MainLayout from '../../layouts/MainLayout';
import { Calculator } from '../../components/Calculator';

const Home = () => {
  return (
    <>
      <HeaderLayout />
      <MainLayout>
        <Calculator />
      </MainLayout>
    </>
  );
};

export default Home;
