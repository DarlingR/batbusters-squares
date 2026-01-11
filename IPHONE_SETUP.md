# Managing Squares from Your iPhone

## One-Time Setup (5 minutes on computer)

### 1. Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click the **+** button → **New repository**
3. Name it: `superbowl-squares`
4. Check **Public** (required for free hosting)
5. Click **Create repository**

### 2. Upload Your Files
1. On the new repo page, click **uploading an existing file**
2. Drag ALL files from this folder into the browser:
   - `cfp_championship_flyer.html`
   - `superbowl_squares_flyer.html`
   - `admin.html`
   - `BBLogo.png`
   - `BBLogo2.png`
   - `data/cfp_squares.js`
   - `data/superbowl_squares.js`
3. Click **Commit changes**

### 3. Enable GitHub Pages (Free Hosting)
1. Go to your repo → **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes, then your site is live at:
   ```
   https://YOUR-USERNAME.github.io/superbowl-squares/cfp_championship_flyer.html
   ```

---

## Daily Management from iPhone

### Download the GitHub App
1. Install **GitHub** app from App Store (free)
2. Sign in with your account

### When Someone Buys Squares

**Option A: Quick Edit (Recommended)**
1. Open GitHub app → Your repo → `data` folder
2. Tap `cfp_squares.js` (or `superbowl_squares.js`)
3. Tap the **pencil icon** to edit
4. Find the square number and replace `null` with `"Name"`
   ```
   Example: Square 15 is row 1, position 5
   Before: null, null, null, null, null, null, ...
   After:  null, null, null, null, "John Smith", null, ...
   ```
5. Tap **Commit changes**
6. Site updates automatically in ~1 minute!

**Option B: Use Admin Page**
1. Open `admin.html` in Safari on your phone
2. Enter buyer name, tap their squares
3. Copy the export code
4. Paste into GitHub file (Option A steps 1-5)

### Square Number → Array Position Cheat Sheet
```
Squares 1-10   = Row 0 (positions 0-9)
Squares 11-20  = Row 1 (positions 0-9)
Squares 21-30  = Row 2 (positions 0-9)
... and so on

Formula: Row = (square# - 1) ÷ 10 (round down)
         Position in row = (square# - 1) % 10
```

---

## Sharing the Flyer

### Share as Image (Best for Facebook Posts)
1. Open your flyer link in Safari
2. Tap **Download for Facebook** button
3. Image saves to your Photos
4. Post to Facebook, text to friends, etc.

### Share as Link (Shows Live Grid)
Just copy and share your GitHub Pages URL:
```
https://YOUR-USERNAME.github.io/superbowl-squares/cfp_championship_flyer.html
```

### Ask Others to Share
Send them the link! They can:
1. Open it on their phone
2. Tap "Download for Facebook"
3. Post to their own Facebook/groups

---

## Quick Reference

| Task | Where to Do It |
|------|----------------|
| Someone buys squares | Edit `data/cfp_squares.js` in GitHub app |
| Download flyer image | Open flyer link → tap Download button |
| Check current sales | Open flyer link (shows live grid) |
| Share with families | Send them the flyer link |

---

## CFP Championship Pricing
- **$10 per square**
- Total pot: $1,000
- Prize pool: $500 (50%)
- Team fundraiser: $500 (50%)
- Payouts: Q1 $50 | Half $100 | Q3 $100 | Final $250

## Super Bowl Pricing
- **$20 per square**
- Total pot: $2,000
- Prize pool: $1,000 (50%)
- Team fundraiser: $1,000 (50%)
- Payouts: Q1 $100 | Half $200 | Q3 $200 | Final $500
