import './App.css';
import { BarLoader, BeatLoader, BounceLoader } from 'react-spinners';
import {css} from '@emotion/react'
function LoadingSpinners() {
  const cssLoader=css`
  margin:55px 0
  `
  return (
    <div className="App">
      <BounceLoader css={cssLoader} color='red' size={25} loading />
      <BarLoader css={cssLoader} color='orange' size={50} loading/>
      <BeatLoader css={cssLoader} color='yellow' size={74} loading/>
    </div>
  );
}

export default LoadingSpinners;




