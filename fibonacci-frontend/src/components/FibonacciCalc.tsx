import React, { useState } from "react";
import { CalculatorCont, Card, Container, ResultCont, ResultSpan, Input, Button } from './styles';

const FibonacciCalc: React.FC = () => {

    const [inpNumb, setInpNumb] = useState<number>(0);
    const [resNumb, setResNumb] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const onChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        const { value } = event.target;
        if (value) setInpNumb(parseInt(value));
    };

    const onCalculate = (): void => {
        setLoading(true);

        fetch(`http://localhost:8080/api/fibonacci/${inpNumb}`)
            .then( response => response.json() )
            .then( ( data: number ) => setResNumb( data ) )
            .finally( () => setLoading( false ) );
    };

    return (
        <Container data-testid="FibonacciCalcTest">
            <Card>
                <h2>Calculate Fibonacci!</h2>

                <CalculatorCont>
                    <Input
                        disabled={ loading } 
                        min="0"
                        type="number"
                        data-testid="InputTest"
                        value={ inpNumb } 
                        onChange={ onChange } 
                    />
                    <Button 
                        data-testid="ButtonTest" 
                        disabled={ loading } 
                        onClick={ onCalculate } 
                    >
                        Calculate
                    </Button>
                </CalculatorCont>

                <ResultCont >
                    <span>Fibonacci Result: </span>
                    <ResultSpan data-testid="SpanResultTest">{ resNumb }</ResultSpan>
                </ResultCont>
            </Card>
        </Container>
    )
}


export default FibonacciCalc;