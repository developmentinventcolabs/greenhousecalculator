import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import { setHouseFootprint } from "../../redux/house";


const HouseTotalResult = () => {
  const dispatch = useDispatch();

  const { electricityFootprint, naturalGasFootprint,heatingOilFootprint, coalFootprint,LPGFootprint, propaneFootprint, woodenPelletsFootprint } = useSelector(
    (state) => state.house
  );
  const totalHouseFootprint = (parseFloat(electricityFootprint) + parseFloat(naturalGasFootprint)+ parseFloat(heatingOilFootprint)+ parseFloat(coalFootprint)+ parseFloat(LPGFootprint)+ parseFloat(propaneFootprint)+ parseFloat(woodenPelletsFootprint) ||  0);

  useEffect(() => {
    dispatch(setHouseFootprint(totalHouseFootprint));
  }, [totalHouseFootprint]);


  return <>
           <div className='house-results'>Total House Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalHouseFootprint.toFixed(2))}</span> metric tons of CO2e</div>
  </>;
};

export default HouseTotalResult;