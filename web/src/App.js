import {
  ArwesThemeProvider,
  Button,
  FrameCorners,
  StylesBaseline,
  Text,
} from '@arwes/core';
import { Animator } from '@arwes/animation';
import ValueDisplay from './ValueDisplay'
import './App.css'

function App() {
  const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

  return (
    <div className="App">
      <header className="App-header">
        Bitcoin visualizer
      </header>
      <div className='body'>
        <div className='w-25 mx-auto'>
          <ValueDisplay currency='BTC' value={1} />
        </div>
        <div className='d-flex justify-content-center'>
          <div>
            <ValueDisplay currency='USD' value={61440.27} />
          </div>
          <div>
            <ValueDisplay currency='BRL' value={331777.43} />
          </div>
          <div>
            <ValueDisplay currency='EUR' value={56525.04} />
          </div>
          <div>
            <ValueDisplay currency='CAD' value={88473.98} />
          </div>
        </div>
        <ArwesThemeProvider>
          <StylesBaseline styles={{
            body: { fontFamily: FONT_FAMILY_ROOT },
            button: { margin: '0 20px 20px 0' }
          }} />
          <Animator animator={{ animate: false }}>
            <Button FrameComponent={FrameCorners} className='mt-5'>
              <Text>Atualizar valor monetário</Text>
            </Button>
          </Animator>
        </ArwesThemeProvider>
      </div>
    </div>
  );
}

export default App;
