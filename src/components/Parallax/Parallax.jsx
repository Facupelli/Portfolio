import React from 'react';
import { Parallax } from 'react-parallax';
import Name from '../Name/Name';

const image1 =
  "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80";


const inlineStyle = {
  background: '',
}


export default function ParallaxComponent() {
  return (
    <div style={{ height: 550, marginBottom:'3%'}}>
      <Parallax bgImage={ image1 } strength={-200}>
        <div style={{ height: 550, }}>
          <div style={inlineStyle}>
              <Name />
          </div>
        </div>
      </Parallax>
      {/* <h1>| | |</h1>
      <Parallax bgImage={ image2 } blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Dinamic blur</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={ image3 } strength={-200} >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Reverse direction</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax 
        bgImage={ image4 }
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Render prop</div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div> */}
    </div>
  );
}
