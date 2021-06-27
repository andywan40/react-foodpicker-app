import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

test('should render component', ()=> {
  render(<App/>);
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});
