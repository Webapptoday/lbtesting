# Liquid Biopsy Research Portfolio Website

## Overview

This is a professional, evidence-based research portfolio website exploring liquid biopsy and blood-based biomarkers for early cancer detection. The site is designed for high school students, researchers, educators, and professionals interested in precision oncology and emerging diagnostic technologies.

**Created:** April 2026  
**Topic:** Liquid Biopsy and Early Cancer Detection  
**Audience:** Researchers, physicians, students, admissions readers, and science mentors

---

## Site Structure

The website consists of six main pages:

### 1. **Home (index.html)**
- Hero section with compelling headline and description
- Research highlights callout strip
- Three feature cards explaining key concepts
- How liquid biopsy works (timeline)
- Key insight callout box
- Current research landscape snapshot
- Call-to-action section directing to deeper content

### 2. **Overview (overview.html)**
- Comprehensive introduction to liquid biopsy
- Explanation of biomarkers (ctDNA, CTCs, exosomes)
- Why early cancer detection matters
- Comparison table: tissue biopsy vs. liquid biopsy
- Cancer types studied in liquid biopsy research
- Summary of promising aspects

### 3. **Research Analysis (research-analysis.html)**
- Deep analysis of biomarker abundance challenges
- Sensitivity vs. specificity trade-off discussion
- False positives and false negatives problems
- Technical barriers in detection
- Cost, infrastructure, and accessibility issues
- Clinical validation challenges
- Author's interpretation of the evidence
- Clinical vs. screening vs. monitoring applications
- Future research directions

### 4. **Key Studies (key-studies.html)**
- Modular study cards for major research
- Organized by cancer type and research focus
- Sections for colorectal, breast, lung, ovarian cancers
- Multi-cancer early detection (MCED) trials
- Technical methods development studies
- Clinical validation research
- Instructions for adding new studies
- Research themes and gaps summary

### 5. **Sources (sources.html)**
- Bibliography organized by research focus
- Active PubMed search links
- NIH and NCI resource links
- Clinical trials database references
- Journal article templates
- Major clinical trials collection
- Citation guidelines
- Statistics on sources reviewed
- Professional organization links

### 6. **About (about.html)**
- Project overview and mission
- Why this topic was chosen
- Research and learning approach
- Personal interest in medical research
- Project goals (educational, intellectual, professional, aspirational)
- Important disclaimers
- Author information template
- Ways to get in touch
- Future directions for the portfolio

---

## Design Features

### Visual Design
- **Color Palette:** Primary blue (#0066cc), secondary teal (#00a8a8), slate gray, light backgrounds
- **Typography:** Clean sans-serif fonts with strong hierarchy
- **Layout:** Grid-based, responsive design
- **Components:** Feature cards, study cards, tables, callout boxes, timeline
- **Shadows & Spacing:** Subtle depth with generous whitespace

### Interactive Features
- **Sticky Navigation:** Always-accessible menu with active page highlighting
- **Smooth Scrolling:** Elegant transitions between sections
- **Responsive Design:** Optimized for desktop, tablet, and mobile
- **Scroll Animations:** Cards fade in as user scrolls
- **Scroll-to-Top Button:** Quick navigation to page top
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation support

### Content Features
- **Expandable Sections:** Study cards with collapsible details
- **Data Tables:** Comparison and reference tables with professional styling
- **Visual Hierarchy:** Clear section organization with multiple heading levels
- **Citation Support:** Easy-to-edit citation templates for future updates
- **Placeholder Text:** Clear labels for where to insert real studies and data

---

## File Structure

```
lbtesting/
├── index.html              # Home page
├── overview.html           # Overview of liquid biopsy
├── research-analysis.html  # Critical analysis and limitations
├── key-studies.html        # Research studies and trials
├── sources.html            # Bibliography and resources
├── about.html              # About the project and author
├── style.css               # Complete stylesheet (3000+ lines)
├── script.js               # JavaScript functionality
└── README.md               # This file
```

---

## Color Scheme

| Element | Color | Hex | Use |
|---------|-------|-----|-----|
| Primary | Deep Blue | #0066cc | Headlines, buttons, links |
| Primary Dark | Navy | #003d7a | Hover states, emphasis |
| Secondary | Teal | #00a8a8 | Accents, callouts, secondary elements |
| Slate | Gray | #475569 | Footer, medium text |
| Light Gray | Off-white | #f5f7fa | Card backgrounds, sections |
| Border | Light Gray | #e2e8f0 | Dividers, table borders |
| White | Pure White | #ffffff | Main background, cards |

---

## Typography

- **Headers:** Medium to bold weights (500–700)
- **Body Text:** Regular weight (400), 16px base size
- **Font Stack:** System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- **Line Height:** 1.6–1.8 for readability

---

## How to Use & Customize

### Adding New Studies to "Key Studies" Page

1. Open `key-studies.html`
2. Find the appropriate category or create a new section
3. Copy the study card template:
```html
<div class="study-card">
    <div class="study-header">
        <h4>Study Title</h4>
        <span class="study-year">Year</span>
    </div>
    <div class="study-content">
        <div class="study-detail">
            <strong>Research Question:</strong>
            <p>[Your text]</p>
        </div>
        <div class="study-detail">
            <strong>Citation:</strong>
            <p><a href="#" target="_blank">PubMed Link</a> | Full citation</p>
        </div>
    </div>
</div>
```
4. Fill in your study details
5. Add PubMed URL

### Adding Sources to Bibliography

1. Open `sources.html`
2. Find the relevant category (PubMed, NIH, Journals, etc.)
3. Use the provided citation template
4. Include full citation and PubMed ID

### Customizing Author Information

1. Open `about.html`
2. Find the "Author Information" section
3. Update placeholder text with actual name, school, grade level
4. Add relevant coursework and experience
5. Add contact email and social media links

### Changing Colors

All colors are defined as CSS variables in `style.css` in the `:root` selector:
```css
:root {
    --color-primary: #0066cc;      /* Change this to update primary color */
    --color-secondary: #00a8a8;    /* Change for secondary color */
    /* ... other variables ... */
}
```

Change any hex value to update the entire site's color scheme.

---

## Responsive Breakpoints

- **Desktop:** 1200px and above (full multi-column layouts)
- **Tablet:** 768px–900px (2-column grids adapt to 1)
- **Mobile:** Below 768px (single column, optimized spacing)
- **Small Mobile:** 480px and below (minimal spacing, simplified layouts)

---

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome/Firefox

The site uses modern CSS and JavaScript but includes fallbacks for older browsers.

---

## Accessibility Features

- **ARIA Labels:** Proper labeling for screen readers
- **Semantic HTML:** Correct heading hierarchy (h1, h2, h3, etc.)
- **Color Contrast:** Text meets WCAG AA standards
- **Keyboard Navigation:** All interactive elements are keyboard accessible
- **Focus Indicators:** Clear visual indicators for keyboard focus
- **Alt Text Support:** Ready for image alt attributes
- **Readable Typography:** Good font sizes and line heights

---

## SEO & Meta Information

Each page includes:
- Unique `<title>` tags
- Descriptive `<meta name="description">` tags
- Relevant keywords
- Open Graph support (ready to add)
- Canonical URL support (ready to add)

---

## Performance Optimizations

- **CSS:** Single stylesheet, organized with variables, minimal selectors
- **JavaScript:** Vanilla JS (no dependencies), debounced events, lazy loading support
- **Images:** SVG illustrations used in hero (scalable, small file size)
- **Animations:** GPU-accelerated transforms
- **Loading:** Deferred script loading, efficient DOM queries

---

## Future Enhancement Opportunities

1. **Interactive Elements:**
   - Expandable/collapsible study cards
   - Interactive sensitivity/specificity calculator
   - Biomarker detection simulator

2. **Data Visualization:**
   - Charts showing biomarker abundance over disease progression
   - Timeline of liquid biopsy patent/product launches
   - Comparison charts of detection methods

3. **Content Expansion:**
   - Video explanations of complex concepts
   - Downloadable PDFs of literature synthesis
   - Interactive biomarker detection timeline
   - Cost-effectiveness analysis tools

4. **Community Features:**
   - Feedback form for suggestions
   - Contact form for mentorship inquiries
   - Social media integration
   - Email newsletter signup

5. **Advanced Features:**
   - Dark mode toggle
   - Multiple language support
   - Export to PDF functionality
   - Search functionality across pages
   - Citation management integration (BibTeX, RIS)

---

## Disclaimers & Legal

**This website is an educational resource and student research portfolio.**

- **Not Medical Advice:** This site does not provide diagnoses, medical recommendations, or clinical guidance.
- **Educational Use Only:** Content is synthesized from peer-reviewed literature but is not a substitute for professional medical consultation.
- **Student Project:** This is an independent research project created for educational and portfolio purposes.
- **No Commercial Affiliation:** The author has no financial relationships with companies mentioned or referenced.

---

## How to Deploy

### Local Testing
1. Open `index.html` in a web browser
2. Navigate using the menu
3. All links should work locally

### Web Hosting Options
- GitHub Pages (free, good for portfolios)
- Netlify (free tier available)
- Vercel (optimized for static sites)
- Traditional web hosting (any provider)

### Deployment Steps (Example: GitHub Pages)
1. Create a GitHub repository
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Choose the `main` branch as the source
5. Site will be available at `https://yourusername.github.io/lbtesting/`

---

## Support & Customization

### To Customize Text
- All text is in HTML files; edit directly in any text editor
- No database or backend required

### To Customize Styling
- Edit `style.css` for design changes
- CSS uses variables for easy color/spacing adjustments
- All styles are commented and organized

### To Add Functionality
- Edit `script.js` for JavaScript enhancements
- Current features: smooth scrolling, animations, accessibility features
- Easy to expand with new functions

---

## Credits & Resources

**Design Inspiration:**
- Modern academic websites
- Professional research portfolios
- Science communication best practices

**Technologies Used:**
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (no frameworks)
- SVG graphics

**Fonts & Icons:**
- System font stack for optimization
- SVG icons for graphics

---

## License & Attribution

This portfolio template is created for educational purposes. When using or adapting this content:

1. **Cite Scientific Sources:** All scientific claims should reference peer-reviewed literature
2. **Personalize Content:** Adapt author information, research interests, and contact details
3. **Maintain Disclaimers:** Keep educational and medical disclaimers clearly visible
4. **Update Regularly:** Refresh content as new research is published

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 2026 | Initial release with all 6 pages, full styling, and JavaScript |

---

## Getting Started Checklist

- [ ] Review all content for accuracy and relevance
- [ ] Update author name and contact information on About page
- [ ] Add real PubMed links and citations to Key Studies and Sources pages
- [ ] Customize colors if desired (edit CSS variables)
- [ ] Test on multiple devices and browsers
- [ ] Add favicon (optional: small image that appears in browser tab)
- [ ] Consider enabling analytics (optional: Google Analytics, etc.)
- [ ] Deploy to web hosting platform
- [ ] Share with mentors, teachers, and potential admissions readers

---

## Contact & Questions

For questions about using or customizing this portfolio:
- Refer to the inline code comments in HTML, CSS, and JavaScript
- Review the About page customization instructions
- Consult web development resources for additional features

---

**Last Updated:** April 2026  
**Status:** Complete and production-ready  
**Difficulty Level:** Intermediate (suitable for advanced high school students)

---

Welcome to your professional research portfolio! Make it your own. 🚀
