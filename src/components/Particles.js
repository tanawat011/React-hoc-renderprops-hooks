import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Canvas extends Component {
  render() {
    return (
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 100
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              }
            }
          }
        }}
      />
    );
  }
}

export default Canvas;
