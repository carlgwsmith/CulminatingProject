import React from 'react';
import { View } from 'react-native'
import Svg, {Path} from 'react-native-svg'

const wavyHeader = ({ customStyles}) => {
  return (
    <View style={customStyles}>
      <View style={{backgroundColor:'#41CC89', height:160}}>
        <Svg
        height="60%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{position:'absolute', top:155, paddingBottom:50}}
        >
          <Path
          fill="#41CC89"
          d="M0,64L80,64C160,64,320,64,480,85.3C640,107,800,149,960,138.7C1120,128,1280,64,1360,32L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}

export default wavyHeader;
