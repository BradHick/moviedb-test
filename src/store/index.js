import { init } from '@rematch/core';
import models from '../model';


const store = init( {
  models
} );
window.store = store;

export default store;