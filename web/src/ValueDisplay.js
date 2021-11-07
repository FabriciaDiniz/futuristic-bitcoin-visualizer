import React from 'react';
import {
  ArwesThemeProvider,
  FrameLines,
  StylesBaseline,
  Text,
} from '@arwes/core';
import { Animator } from '@arwes/animation';

function ValueDisplay(props) {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
  const { currency, value } = props;
  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{
        body: { fontFamily: FONT_FAMILY_ROOT },
        button: { margin: '0 20px 20px 0' }
      }} />
      <div className='d-flex flex-column'>
        <Animator animator={{ animate: false }}>
          <Text className='py-2 h2'>{currency}</Text>
          <FrameLines className='box'>
            <Text className='display-number'>{value}</Text>
          </FrameLines>
        </Animator>
      </div>
    </ArwesThemeProvider>
  )
}

export default ValueDisplay;
