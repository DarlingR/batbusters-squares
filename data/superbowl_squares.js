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
    null, null, "Monica B", "Shannon D", "Pauly P", null, "Susan M", "Pauly P", "Kathy V", "Cassie S",  // Row 0
    "Liz M", "Vivian D", "Paul L", "Josh B", null, "Selina S", "Derek S", "Gail B", "Vivian D", "Will G",  // Row 1
    "Patricia B", "Will G", "Ryann B", "Crystal V", "Brittany Q", null, "Ryann B", null, "Emily M", "Monica B",  // Row 2
    "Alyssa A", "Brandon E", null, null, null, null, null, "Pauly P", null, "Anthony F",  // Row 3
    "Brittany Q", "Dayna K", "Gail B", null, null, null, "Paul L", null, null, null,  // Row 4
    null, "Liz M", null, "Selina S", null, null, null, null, null, "Vivian D",  // Row 5
    null, "Brandon E", null, null, "Cassie S", null, "Terri D", null, null, null,  // Row 6
    null, null, null, null, "Patricia B", null, null, null, null, null,  // Row 7
    "Cassidy V", null, null, "Terri D", null, null, null, "Shannon D", null, null,  // Row 8
    null, null, null, null, null, null, null, null, "Crystal V", null   // Row 9
];

// Random numbers assigned after all squares sold (null until drawn)
const SUPERBOWL_NUMBERS = {
    team1: [null, null, null, null, null, null, null, null, null, null], // columns 0-9
    team2: [null, null, null, null, null, null, null, null, null, null]  // rows 0-9
};
