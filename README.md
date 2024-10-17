# Frontend Mentor - Interactive Pricing Component Solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

[![mydesktop-Img.png](https://i.postimg.cc/0y7Gy5wc/mydesktop-Img.png)](https://postimg.cc/pmX50HkF)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling

### What I learned

Throughout this project, I learned how to:

- Implement responsive design techniques to ensure the layout adapts well across different screen sizes.
- Use the Framer Motion library to create smooth animations for the user interface.
- Manage component states effectively in React using hooks like `useState`.

Here’s a code snippet demonstrating the dynamic pricing calculation based on user-selected page views:

```javascript
const calculatePrice = (views) => {
  if (views < 100) return 8;
  if (views >= 100 && views < 500) return 12;
  if (views >= 500 && views < 1000) return 24;
  if (views === 1000) return 36;
  return 16; // Fallback price
};
