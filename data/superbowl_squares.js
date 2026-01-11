// Super Bowl LX Squares Data
// Update this file when payments come in

const SUPERBOWL_CONFIG = {
    event: "Super Bowl LX",
    team1: "AFC Champion (TBD)",
    team2: "NFC Champion (TBD)",
    date: "February 2026",
    pricePerSquare: 20
};

// Squares array: null = available, "Name" = taken
// Index 0-99 maps to the grid (row * 10 + col)
const SUPERBOWL_SQUARES = [
    null, null, null, null, null, null, null, null, null, null,  // Row 0
    null, null, null, null, null, null, null, null, null, null,  // Row 1
    null, null, null, null, null, null, null, null, null, null,  // Row 2
    null, null, null, null, null, null, null, null, null, null,  // Row 3
    null, null, null, null, null, null, null, null, null, null,  // Row 4
    null, null, null, null, null, null, null, null, null, null,  // Row 5
    null, null, null, null, null, null, null, null, null, null,  // Row 6
    null, null, null, null, null, null, null, null, null, null,  // Row 7
    null, null, null, null, null, null, null, null, null, null,  // Row 8
    null, null, null, null, null, null, null, null, null, null   // Row 9
];

// Random numbers assigned after all squares sold (null until drawn)
const SUPERBOWL_NUMBERS = {
    team1: [null, null, null, null, null, null, null, null, null, null], // columns 0-9
    team2: [null, null, null, null, null, null, null, null, null, null]  // rows 0-9
};
