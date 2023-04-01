import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './_results-page.scss';
import "@carbon/charts/styles.css";

import ResultsHeader from './Results_Header';
import ResultsHeaderVisualization from './Results_HeaderVisualization';

import ResultsFootprintsButton from './Results_FootprintsButton'
import ResultTotalResults from './Results_TotalResults'
import IconsNavigation from '../IconsNavigation/IconsNavigation';

import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';
import { NextOutline, PreviousOutline } from '@carbon/react/icons';
import { DonutChart } from "@carbon/charts-react";
import { Checkbox } from '@carbon/react';
import { setTotalSelectedFootprint } from "../../redux/totalfootprint";

import Waves from '../Waves'

const ResultsPage = () => {
  const dispatch = useDispatch();

  const { houseFootprint } = useSelector(
    (state) => state.house
  );
  const { flightFootprint } = useSelector(
    (state) => state.flights
  );
  const { motorbikeFootprint } = useSelector(
    (state) => state.motorbike
  );
  const { carFootprint } = useSelector(
    (state) => state.car
  );
  const { busrailFootprint } = useSelector(
    (state) => state.busrail
  );
  const { secondaryFootprint } = useSelector(
    (state) => state.secondary
  );
  const totalHouseFootprint = (parseFloat(houseFootprint) || 0);
  const totalFlightFootprint = (parseFloat(flightFootprint) || 0);
  const totalCarFootprint = (parseFloat(carFootprint) || 0);
  const totalMotorbikeFootprint = (parseFloat(motorbikeFootprint) || 0);
  const totalBusRailFootprint = (parseFloat(busrailFootprint) || 0);
  const totalSecondaryFootprint = (parseFloat(secondaryFootprint) || 0);

  
  const [checkboxState, setCheckboxState] = React.useState({
    house: true,
    flights: true,
    car: true,
    motorbike: true,
    busrail: true,
    secondary: true,
  });

  const totalSelectedFootprint = (
    (checkboxState.house ? totalHouseFootprint : 0) +
    (checkboxState.flights ? totalFlightFootprint : 0) +
    (checkboxState.car ? totalCarFootprint : 0) +
    (checkboxState.motorbike ? totalMotorbikeFootprint : 0) +
    (checkboxState.busrail ? totalBusRailFootprint : 0) +
    (checkboxState.secondary ? totalSecondaryFootprint : 0)
  ).toFixed(4);
  
  useEffect(() => {
    dispatch(setTotalSelectedFootprint(totalSelectedFootprint));
  }, [totalSelectedFootprint]);
  
const data = [
  {
    group: "House",
    value: checkboxState.house ? totalHouseFootprint : 0,
  },
  {
    group: "Flights",
    value: checkboxState.flights ? totalFlightFootprint : 0,
  },
  {
    group: "Car",
    value: checkboxState.car ? totalCarFootprint : 0,
  },
  {
    group: "Motorbike",
    value: checkboxState.motorbike ? totalMotorbikeFootprint : 0,
  },
  {
    group: "Bus & Rail",
    value: checkboxState.busrail ? totalBusRailFootprint : 0,
  },
  {
    group: "Secondary",
    value: checkboxState.secondary ? totalSecondaryFootprint : 0,
  },
];
const options = {
  "title": "",
  "resizable": true,
  "legend": {
    "alignment": "center"
  },
  "donut": {
    "center": {
      "label": "Kg of CO2e"
    },
    "precision": 2,
    "alignment": "center"
  },
  "height": "390px",
}
  return ( <>
  <IconsNavigation />
    <section className='global-frame-calculator'>
      <div className='global-block-top'>
          <h4>Results Total Footprint</h4>
      </div>
   
          <div className='results-main-container'>

            <div className='results-checkmark-block'>
              <ResultsHeader/>
              <fieldset className='results-checkmark-container'>
                  <Checkbox
                    labelText={`Household Energy (${totalHouseFootprint.toFixed(
                      2
                    )} Kg of CO2e)`}
                    id="checkbox-label-1"
                    className="cbx"
                    checked={totalHouseFootprint > 0 && checkboxState.house}
                    onChange={() =>
                      setCheckboxState({
                        ...checkboxState,
                        house: !checkboxState.house,
                      })
                    }
                  />
                  <Checkbox
                    labelText={`Flights (${totalFlightFootprint.toFixed(
                      2
                    )} Kg of CO2e)`}
                    id="checkbox-label-2"
                    className="cbx"
                    checked={totalFlightFootprint > 0 && checkboxState.house}
                    onChange={() =>
                      setCheckboxState({
                        ...checkboxState,
                        flights: !checkboxState.flights,
                      })
                    }
                  />
                  <Checkbox
                      labelText={`Car (${totalCarFootprint.toFixed(
                        2
                      )} Kg of CO2e)`}
                    id="checkbox-label-3"
                    className="cbx"
                    checked={totalCarFootprint > 0 && checkboxState.car}
                    onChange={() =>
                      setCheckboxState({
                        ...checkboxState,
                        car: !checkboxState.car,
                      })
                    }
                  />
                  <Checkbox
                    labelText={`Motorbike (${totalMotorbikeFootprint.toFixed(
                      2
                    )} Kg of CO2e)`}
                    id="checkbox-label-4"
                    className="cbx"
                    checked={totalMotorbikeFootprint > 0 && checkboxState.motorbike}
                    onChange={() =>
                      setCheckboxState({
                        ...checkboxState,
                        motorbike: !checkboxState.motorbike,
                      })
                    }
                  />
                  <Checkbox
                    labelText={`Bus & Rail (${totalBusRailFootprint.toFixed(
                      2
                    )} Kg of CO2e)`}
                    id="checkbox-label-5"
                    className="cbx"
                    checked={totalBusRailFootprint > 0 && checkboxState.busrail}
                    onChange={() =>
                      setCheckboxState({
                        ...checkboxState,
                        busrail: !checkboxState.busrail,
                      })
                    }
                  />
                  <Checkbox
                    labelText={`Secondary (${totalSecondaryFootprint.toFixed(
                      2
                    )} Kg of CO2e)`}
                    id="checkbox-label-6"
                    className="cbx"
                    checked={totalSecondaryFootprint > 0 && checkboxState.secondary}
                    onChange={() =>
                      setCheckboxState({
                        ...checkboxState,
                        secondary: !checkboxState.secondary,
                      })
                    }
                />
              </fieldset>
              <div className='results-button-container'>
                <ResultTotalResults />
              </div>
            </div>

            <div className='results-visualization-block'>
              <ResultsHeaderVisualization/>
              <DonutChart
                data={data}
                options={options}
                className='donut-chart'
              />
              <div >
                <ResultsFootprintsButton />
              </div>
            </div>
        </div>
  </section>
<Waves />
<div className='global-block-bottom'>
  <Link className='global-buttons-link-back-and-forth' to="/secondary">
    <Button 
      className="global-re-styled-button-back-and-forth"
      renderIcon={PreviousOutline}
      kind='tertiary'
      >Secondary
    </Button>
  </Link>
  <Link className='global-buttons-link-back-and-forth' to="/welcome">
    <Button 
      renderIcon={NextOutline}
      className="global-re-styled-button-back-and-forth"
      kind='tertiary'
      >Start Again
    </Button>
  </Link>
</div>
    </>
  );
};

export default ResultsPage;
