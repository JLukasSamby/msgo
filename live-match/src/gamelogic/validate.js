module.exports = (match, move) => {
    /* Invalid move coordinates */
    if (move.x < 0 || move.y < 0) return false; 
    if (move.x >= match.size) return false;
    if (move.y >= match.size) return false;

    /* Occupied position */
    // TODO

    /* KO */
    // TODO

    return true;
}