import React from 'react';
import { Dimensions, } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Text, G, Line, Circle } from 'react-native-svg'

const Piechart = (props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const data = [
    {
        key: 1,
        amount: props.principal,
        name:'Principal',
        svg: { fill: '#5b9dfb' }
    },
    {
        key: 2,
        amount: props.interest,
        name:'Interest',
        svg: { fill: '#00ffa7' },
    },
    {
        key: 3,
        amount: props.taxes,
        name:'Taxes',
        svg: { fill: '#ff9996' }
    },
]

const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
            <G key={ index }>
                <Line
                    x1={ labelCentroid[ 0 ] }
                    y1={ labelCentroid[ 1 ] }
                    x2={ pieCentroid[ 0 ] }
                    y2={ pieCentroid[ 1 ] }
                    stroke={ data.svg.fill }
                />
                <Circle
                    cx={ labelCentroid[ 0 ] }
                    cy={ labelCentroid[ 1 ] }
                    r={ 10 }
                    fill={ "white" }
                />
                <Text
                x={labelCentroid[ 0 ]}
                y={labelCentroid[ 1 ]}
                x2={ pieCentroid[ 0 ] }
                y2={ pieCentroid[ 1 ] }
                fill={'#444'}
                textAnchor={'end'}
                alignmentBaseline={'central'}
                fontSize={16}
                fontWeight={700}
            >
                {data.name}
            </Text>
            <Text
                x={pieCentroid[ 0 ]}
                y={pieCentroid[ 1 ]}
                x2={labelCentroid[ 0 ]}
                y2={labelCentroid[ 1 ]}
                fill={'#444'}
                textAnchor={'end'}
                alignmentBaseline={'text-bottom'}
                fontSize={14}
                fontWeight={700}
            >
                {"$" + data.amount}
            </Text>
            </G>
        )
    })
}


  return (
    <PieChart
    style={{ height: 300 }}
    valueAccessor={({ item }) => item.amount}
    data={data}
    spacing={0}
    outerRadius={'55%'}
    innerRadius={'70%'}
    labelRadius={'85%'}
>
    <Labels/>
</PieChart>
  );
}

export default Piechart;
