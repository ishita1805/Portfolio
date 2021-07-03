import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.register(
  {
    onUpdate: registration => {
      registration.unregister().then(() => {
      window.location.reload()
    })
   },
   onSuccess: registration => {
     console.info('service worker on success state')
     console.log(registration)
    }
  }
//   {
//   onUpdate: registration => {
//     const waitingServiceWorker = registration.waiting
//     if (waitingServiceWorker) {
//       waitingServiceWorker.addEventListener("statechange", event => {
//         if (event.target.state === "activated") {
//           window.location.reload()
//         }
//       });
//       waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
//     }
//   }
// }
);