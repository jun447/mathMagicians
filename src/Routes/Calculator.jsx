import React, { useState,useEffect } from 'react';
import RowCalculator from '../components/Calculator/RowCalculator.jsx';
import ResultScreen from '../components/Calculator/ResultScreen.jsx';
import EndRow from '../components/Calculator/EndRow.jsx';
import AOS from "aos";

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const updateState = (newState) => {
    setCalculatorData(newState);
  };
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
  return (
    <div data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000" className="row justify-content-center">
      <div className="col-lg-6 col-md-6 col-6 mt-5 ">
        <ResultScreen
          next={calculatorData.next}
          operation={calculatorData.operation}
          total={calculatorData.total}
        />
          <RowCalculator items={['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+']} state={calculatorData} updateState={updateState} />
          <EndRow items={['0', '.', '=']} state={calculatorData} updateState={updateState} />
      </div>
    </div>
  );
};

export default Calculator;
