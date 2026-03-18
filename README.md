# MARSK Growth Partners — Website

A static HTML/CSS/JS website. No build step required — deploy directly.

## File Structure

```
marsk-html/
├── index.html          ← Homepage
├── about.html          ← About page
├── services.html       ← Services page
├── contact.html        ← Contact page
├── css/
│   └── styles.css      ← All styles (brand colors at top)
├── js/
│   └── main.js         ← Nav toggle + scroll animations
└── images/             ← Put your images here
```

## Deploy to GitHub Pages

1. Create a new repo on github.com (e.g. `marsk-site`)
2. Upload all the files (keep the folder structure)
3. Go to Settings → Pages
4. Under "Source", select `main` branch, folder `/ (root)`
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/marsk-site/`

That's it. No build step. No npm. No terminal commands.

## How to Edit

- **Change text**: Open the relevant `.html` file and edit the text
- **Change colors**: Edit the CSS variables at the top of `css/styles.css`
- **Add images**: Put them in `images/` and replace the "Image Placeholder" divs with `<img>` tags
- **Add a page**: Copy any `.html` file, edit it, add a nav link in every page's nav section
- **Connect the form**: Replace the form handler in `contact.html` with your form service (Formspree, Netlify Forms, etc.)

## Brand Colors

| Color       | Hex       | CSS Variable   |
|-------------|-----------|----------------|
| Orange      | #F07030   | --orange       |
| Steel Blue  | #5B8EC7   | --blue         |
| Dark Navy   | #111827   | --navy         |
| Near Black  | #1A1A1A   | --near-black   |
| Off-White   | #F8F7F5   | --off-white    |
| White       | #FFFFFF   | --white        |
| Light Gray  | #EEECEB   | --light-gray   |
| Mid Gray    | #AAAAAA   | --mid-gray     |

## Contact

- Email: info@marskgp.com
- Phone: 055 744 7392
