import React, {useState, useEffect} from 'react';
import { Dimensions, View } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

const InterestBarChart = (props) => {
  const [principal, setPrincipal] = useState(0)
  const [interest, setInterest] = useState(0)

  useEffect(() => {
    console.log(props.interest)
    console.log(props.principal)
    setPrincipal(Math.round(props.principal))
    setInterest(Math.round(props.interest))
  }, [props]);
  
  const fill = 'rgb(134, 65, 244)'
  const data = [
    {
        value: interest,
        label:'Original Interest',
        svg: {
          strokeWidth: .75,
          stroke: '#f75555',
            fill: '#f75555',
        },
    },
    {
      value: principal,
      label: 'Interest With Extra Payments',
      svg: {
        strokeWidth: .75,
          stroke: '#73c5f4',
          fill: '#73c5f4',
      },
  },

]
  return (
    <View>
      <BarChart style={{ height: 140 }} data={data} svg={{ fill }} gridMin={0} contentInset={{ top: 30, bottom: 10 }} yAccessor={({ item }) => item.value}/>
      <XAxis
        style={{ marginTop: 4 }}
        data={ data }
        scale={scale.scaleBand}
        formatLabel={(_, index) => data[ index ].label}
        labelStyle={ { color: 'black', } }
    />
    </View>
  );
}

export default InterestBarChart;
