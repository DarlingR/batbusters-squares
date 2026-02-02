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
    "Will G", null, "Monica B", "Shannon D", "Pauly P", null, "Susan M", "Pauly P", "Kathy V", "Cassie S",  // Row 0
    "Liz M", "Vivian D", "Paul L", "Josh B", "Derek S", "Selina S", "Derek S", "Gail B", "Vivian D", "Will G",  // Row 1
    "Patricia B", "Will G", "Ryann B", "Crystal V", "Brittany Q", "Clinton S", "Ryann B", "David P", "Emily M", "Monica B",  // Row 2
    "Alyssa A", "Brandon E", "Vivian D", null, "David P", "Michelle L", null, "Pauly P", "Patricia B", "Anthony F",  // Row 3
    "Brittany Q", "Dayna K", "Gail B", "Michelle C", null, "Brad A", "Paul L", null, "Vivian D", "Brad P",  // Row 4
    null, "Liz M", "Christine C", "Selina S", "Dakota N", null, "Patrick W", null, "Christy Q", "Vivian D",  // Row 5
    "David P", "Brandon E", null, null, "Cassie S", "David P", "Terri D", "Steve M", null, "Patricia B",  // Row 6
    "Dawn H", null, null, null, "Patricia B", "Vivian D", "Michelle C", "Christine C", "Michelle L", "Will G",  // Row 7
    "Cassidy V", null, null, "Terri D", "Michelle L", "David P", null, "Shannon D", "Dakota N", null,  // Row 8
    "Matt M", null, null, null, null, null, null, "Will G", "Crystal V", "Michelle C"   // Row 9
];

// Random numbers assigned after all squares sold (null until drawn)
const SUPERBOWL_NUMBERS = {
    team1: [null, null, null, null, null, null, null, null, null, null], // columns 0-9
    team2: [null, null, null, null, null, null, null, null, null, null]  // rows 0-9
};
