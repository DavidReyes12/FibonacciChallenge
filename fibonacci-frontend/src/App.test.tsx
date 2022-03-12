import { render, screen } from '@testing-library/react';
import App from './App';

const { getByTestId } = screen;

describe("App", () => {
    beforeAll(() => {
        render(<App />);
    });

    test("should render FibonacciCalc", () => {
        
        expect(getByTestId("FibonacciCalcTest")).toBeInTheDocument();

    });

});