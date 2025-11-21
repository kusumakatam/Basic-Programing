# Katam Kusuma - Personal Portfolio

A modern, responsive personal portfolio website built with pure HTML5 and CSS3. This project was developed using AI-assisted tools and refined manually for performance and customization.

## AI Tool Usage
This project utilized **Replit Agent** (powered by Large Language Models) to accelerate the initial development phase:
- **Drafting Structure**: Generated the initial semantic HTML5 boilerplate.
- **Design System**: Created the "Dark Minimalist" aesthetic and color palette.
- **Content Parsing**: Extracted key professional details (Skills, Education, Certifications) from the provided resume text.
- **Asset Generation**: Created the abstract geometric hero background image.

## 🛠️ Manual Refinements & Improvements
Following the AI generation, significant manual engineering was applied to ensure code quality and independence:

1. **Framework Removal**: 
   - Removed the **Tailwind CSS** dependency, converting all utility classes to custom, semantic CSS variables.
   - Removed **Lucide Icons** script, replacing dynamic icons with optimized inline SVGs for zero-latency loading.
   
2. **Code Architecture**:
   - Separated the monolithic file into `portfolio.html` and `style.css` for better maintainability.
   - Implemented a robust CSS Variable system (`:root`) for easy theming.

3. **Responsive Tuning**:
   - Manually adjusted Grid breakpoints to ensure perfect alignment on Tablets (2-column) and Desktops (3-column).
   - Refined the Mobile Navigation menu animation and touch targets.

4. **Content Integration**:
   - Mapped specific resume details (CGPA, Certification names) to the UI components.
   - Verified and formatted contact links (`mailto:` and `tel:`) for functionality.

## 📂 Files Included
- **`portfolio.html`**: The main structure and content.
- **`portfolio.css`**: All visual styling, animations, and layout rules.

## 🚀 How to Run
1. **Download** both `portfolio.html` and `portfolio.css`.
2. **Place them** in the same folder.
3. **Open** `portfolio.html` in any browser. No server or installation required.

