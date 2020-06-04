import { combineReducers } from 'redux';
import CarReduceers from './CarReduceers';
import TamdnaBauCuaReducer from './TamdnaBauCuaReducer';

//custom rootRduces
 const rootReduces = combineReducers({
    stateModal: CarReduceers,
    TamdnaBauCuaReducer, //tao ra TamdnaBauCuaReducer: TamdnaBauCuaReducer
 });
 export default rootReduces;