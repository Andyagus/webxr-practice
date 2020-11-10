// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('webxr_practice', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToLocation(
    r360.createRoot('Stillettos',{ }),
    r360.getDefaultLocation(),
  );

  const myCylinderSurface = new Surface(
    1000, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  const location = new Location([0, -1, -2]);


  vr.renderToLocation(
    vr.createRoot('Stillettos'),
    location,
  );

  // Load the initial environment
}

window.React360 = {init};
