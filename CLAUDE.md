# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript application for managing football squares fundraisers for the Batbusters 2015 10U softball team. It supports two concurrent pools: CFP National Championship and Super Bowl LX.

## Architecture

### Data Layer (`data/`)
- `cfp_squares.js` - CFP Championship square ownership and configuration
- `superbowl_squares.js` - Super Bowl square ownership and configuration

Each data file exports:
- `*_CONFIG` object with event name, teams, date, and price per square
- `*_SQUARES` array (100 elements, index = row * 10 + col, null = available, string = owner name)
- `*_NUMBERS` object with team1/team2 arrays for random number assignment after all squares sold

### Public-Facing Pages
- `cfp_championship_flyer.html` - CFP promotional flyer with live grid status
- `superbowl_squares_flyer.html` - Super Bowl promotional flyer with live grid status
- `superbowl_squares.html` - Detailed Super Bowl squares page with rules explanation

### Admin Interface
- `admin.html` - Tabbed interface for managing both CFP and Super Bowl grids
  - Click squares to assign/remove owners (requires name input first)
  - Exports updated `*_SQUARES` array for manual copy to data files
  - Tracks sold count and collected revenue

## Workflow for Updating Squares

1. Open `admin.html` in browser
2. Enter buyer's name, click square(s) to assign
3. Copy exported JavaScript from textarea
4. Replace the corresponding array in `data/cfp_squares.js` or `data/superbowl_squares.js`
5. Deploy updated files to static hosting

## Key Constants

- Price per square: $20
- Total pot: $2,000 (when fully sold)
- Prize pool: $1,000 (50% to team fundraiser)
- Payouts: Q1 $100, Halftime $200, Q3 $200, Final $500
