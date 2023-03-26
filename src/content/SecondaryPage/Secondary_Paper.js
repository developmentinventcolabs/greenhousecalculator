import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setPaper, setRangePaperFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const SecondaryPaper = () => {
  const {paper, rangePaper, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].paperRange);

  const handlePaperChange = (e) => {
    dispatch(setPaper(parseFloat(e.target.value)));
  };

  const handleRangeChange = (e) => {
    dispatch(setRangePaperFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Paper based products:</h5>
          <TextInput
            id="paper-amount"
            value={paper || ""}
            onChange={handlePaperChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          />
          <Select
            id="range-paper-select"
            defaultValue={rangePaper}
            onChange={handleRangeChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          >
            {rangeOptions.map((range) => (
              <SelectItem key={range} value={range} text={range} />
            ))}
          </Select>
  
        </section>
    </>
  );
};

export default SecondaryPaper;
