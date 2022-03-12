import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import FibonacciCalc from './FibonacciCalc';


const { getByTestId } = screen;


describe("FibonacciCalc", () => {

    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(8)
        })) as jest.Mock;

        render(<FibonacciCalc />);
    });

    afterEach( cleanup );

    test("should render FibonacciCalc", () => {
        
        expect(getByTestId("FibonacciCalcTest")).toBeInTheDocument();

    });

    test("should render InputTest", () => {

        expect(getByTestId("InputTest")).toBeInTheDocument();

    });

    test("InputTest value should have '0'", () => {

        expect(getByTestId("InputTest")).toHaveValue(0);

    });

    test("InputTest value should have '5'", () => {

        fireEvent.change(getByTestId("InputTest"), {
            target: { value: 5 },
        });

        expect(getByTestId("InputTest")).toHaveValue(5);
    });

    test("InputTest value must not change from '0'", () => {

        fireEvent.change(getByTestId("InputTest"), {
            target: { value: "" },
        });

        expect(getByTestId("InputTest")).toHaveValue(0);
    });

    test("InputTest value should have '8'", async() => {

        fireEvent.change(getByTestId("InputTest"), {
            target: { value: 6 },
        });

        fireEvent.click(getByTestId("ButtonTest"));

        await waitFor( () => {
            expect(getByTestId("SpanResultTest")).toHaveTextContent("8");
        });

    });

});
