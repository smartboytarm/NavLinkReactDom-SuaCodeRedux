import {PLAY_GAME, DAT_CUOC} from '../types/TypeGameBauCua';
export const datCuoc = (ma) => {
    return {
        type: DAT_CUOC,
        ma
    }
}
export const playGame = () => {
    return {
        type: PLAY_GAME
    }
}