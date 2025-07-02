import styled from 'styled-components';
import { Container } from '../Container.styles';

export const HomeWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  z-index: -1;
`;

export const MainContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  align-items: start;
`;

export const WeatherSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
`;

export const ForecastSection = styled(Container)`
  margin-bottom: 40px;
`;
