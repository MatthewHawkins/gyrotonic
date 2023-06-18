/** @jsxImportSource @emotion/react */
import { jsx, Global, css } from '@emotion/react'

import MenuBar from './components/MenuBar';
import Homepage from './pages/Homepage';

function App() {

  const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  `;
  const contentCss = css`
    margin-top: 78px;
  `
  return (
    <div>
      <Global styles={globalStyles}/>
      <MenuBar />
      <div css={contentCss}>
        <Homepage />
      </div>
    </div>
  );
}

export default App;


/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='gyro'>GYROTONIC®</p>
        <p>Ready to make your Gyrotonic website :)</p>Gyrotonic is a training system that combines fluid movements, breathing control and choreographed sequences to improve strength, flexibility, balance and body awareness.
Developed in the 1980s by Romanian dancer Juliu Horvath, Gyrotonic integrates the principles of dance, yoga, Tai Chi, and swimming to create a unique approach to working out the body.
The Gyrotonic is based on a specific device called the "Gyrotonic Expansion System", made up of pulleys, cables and mobile platforms which provide resistance and support for the body during movements.
The holistic approach of Gyrotonic is one of the main pillars of this discipline which considers the body, mind and spirit as a single interconnected entity, promotes overall well-being and favors a better quality of life.

        <p></p>
        <ul>
          <li>Freedom of Movement</li>
          <li>Deep Breathing</li>
          <li>Adapability</li>
          <li>Healthy Routine</li>
          <li>Global Well-being</li>
        </ul>
      </header>

*/


// ReportVitals?
// No border radius, Fede doesn't like it ;)



/*
 * Title
 *
 * #CEC3B5
 *
 * #E0E0E0
 *
 * #292726
 * 
 * #91A38B
 * 
 * 
 * 
 *
 *
 */


/*
 * Homepage - Brief intro and descrip of the team, the space, the methodology, etc
 *
 * Method - More in-depth description of the various exercises and reasoning - can add a video
 * + 
 * Hours and Price
 *
 * Biography page 
 * +
 * Contact 
 * 
 */

/*
 * Stationary canvas picture background at the bottom like ADP 
 */