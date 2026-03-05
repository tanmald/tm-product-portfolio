

## PM Product Portfolio

A personal portfolio site with a "chaotic aesthetic" inspired by PowerApply — mixing bold serif/display fonts, hand-drawn decorative elements, warm tones, and playful scattered visuals.

### Pages

#### 1. Home / Hero
- Bold serif headline introducing you as a PM
- Subtitle with a short personal pitch
- Decorative scattered elements (flowers, arrows, stickers-style illustrations using emojis/SVGs)
- Navigation to Products and AI Use Cases pages
- Warm color palette (cream/off-white background, earthy accent colors)

#### 2. Products Page
- Grid/masonry layout of product cards
- Each card shows: screenshot/image, product name, your role & description, and external link
- Hover effects with playful micro-interactions
- Products are hardcoded initially (you can add/edit them later)

#### 3. AI Use Cases Page
- Content rendered from a markdown file
- Clean reading experience with good typography
- Sections, headings, lists, and any formatting from your .md file rendered beautifully

#### 4. Admin Panel (accessible via `/admin` route)
- Simple upload area where you can drop/upload a `.md` file
- File is parsed client-side and the AI Use Cases page updates immediately
- Content is saved to localStorage so it persists across sessions
- Preview of the rendered markdown before confirming

### Design Details
- **Fonts**: Serif display font (e.g., Playfair Display) for headings + clean sans-serif (e.g., Inter) for body — similar to PowerApply's pairing
- **Colors**: Off-white/cream background, warm orange/coral accents, dark text
- **Decorative elements**: Emoji-based or SVG stickers scattered around sections (flowers, arrows, stars) for that "chaotic" collage feel
- **Responsive**: Works on mobile and desktop

### Technical Notes
- No backend needed — markdown parsing happens client-side using a markdown renderer
- Product data stored as a simple JSON array in code (easy to update)
- Admin panel uses file upload + localStorage for markdown persistence

