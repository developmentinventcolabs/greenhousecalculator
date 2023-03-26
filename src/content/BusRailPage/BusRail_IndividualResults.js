import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowBusResult, 
    resetBusFootprint,
    
    setShowCoachResult,
    resetCoachFootprint,

    setShowLocalTrainResult,
    resetLocalTrainFootprint,

    setShowLongTrainResult,
    resetLongTrainFootprint,

    setShowTramResult,
    resetTramFootprint,

    setShowSubwayResult,
    resetSubwayFootprint,

    setShowTaxiResult,
    resetTaxiFootprint

} from "../../redux/busrail";


import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const BusRailResults = () => {
  const {

    bus,
    unitBus,
    busFootprint,
    showBusResult,
    
    coach,
    unitCoach,
    coachFootprint,
    showCoachResult,

    localTrain,
    unitLocalTrain,
    localTrainFootprint,
    showLocalTrainResult,

    longTrain,
    unitLongTrain,
    longTrainFootprint,
    showLongTrainResult,

    tram,
    unitTram,
    tramFootprint,
    showTramResult,

    subway,
    unitSubway,
    subwayFootprint,
    showSubwayResult,

    taxi,
    unitTaxi,
    taxiFootprint,
    showTaxiResult

    } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const resetFootprintBus = () => {
    dispatch(resetBusFootprint());
    dispatch(setShowBusResult(false))
  };
  const resetFootprintCoach = () => {
    dispatch(resetCoachFootprint());
    dispatch(setShowCoachResult(false))
  };
  const resetFootprintLocalTrain = () => {
    dispatch(resetLocalTrainFootprint());
    dispatch(setShowLocalTrainResult(false))
  };
  const resetFootprintLongTrain = () => {
    dispatch(resetLongTrainFootprint());
    dispatch(setShowLongTrainResult(false))
  };
  const resetFootprintTram = () => {
    dispatch(resetTramFootprint());
    dispatch(setShowTramResult(false))
  };
  const resetFootprintSubway = () => {
    dispatch(resetSubwayFootprint());
    dispatch(setShowSubwayResult(false))
  };
  const resetFootprintTaxi = () => {
    dispatch(resetTaxiFootprint());
    dispatch(setShowTaxiResult(false))
  };

  return <>  

  {showBusResult && bus > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {busFootprint} metric tons:	{bus}   {unitBus} of Bus
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintBus} >
            <TrashCan />
          </Button>
        </section>
      )
    } 
    {showCoachResult && coach > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {coachFootprint} metric tons:	{coach}   {unitCoach} of Coach
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintCoach} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showLocalTrainResult && localTrain > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {localTrainFootprint} metric tons:	{localTrain}   {unitLocalTrain} of Local Train
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintLocalTrain} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showLongTrainResult && longTrain > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {longTrainFootprint} metric tons:	{longTrain}   {unitLongTrain} of Long Train
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintLongTrain} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showTramResult && tram > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {tramFootprint} metric tons:	{tram}   {unitTram} of Tram
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintTram} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showSubwayResult && subway > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {subwayFootprint} metric tons:	{subway}   {unitSubway} of Subway
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintSubway} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showTaxiResult && taxi > 0 &&  (
        <section className='house-result-section'>
          <h5 
            className='house-results-container'>
            {taxiFootprint} metric tons:	{taxi}   {unitTaxi} of Taxi
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintTaxi} >
            <TrashCan />
          </Button>
        </section>
      )
    }
  </>
};

export default BusRailResults;