# Engagement Invitation Website

A beautiful, responsive one-page website for engagement invitations built with HTML, CSS, and vanilla JavaScript.

## Features

- **Romantic & Elegant Design**: Soft pastel colors with beautiful typography
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Interactive Countdown Timer**: Real-time countdown to the engagement date
- **Smooth Scrolling**: Beautiful scroll animations between sections
- **Fade-in Animations**: Sections animate in as they come into view
- **Modern UI/UX**: Clean, professional design with hover effects

## Sections

1. **Hero Section**: Large couple names with welcome message and scroll arrow
2. **Countdown Timer**: Days, hours, minutes, and seconds until the event
3. **Event Details**: Date, time, venue, and map placeholder
4. **Our Story**: Couple's story with placeholder images
5. **RSVP Section**: Form placeholder with call-to-action button
6. **Footer**: Thank you message and social media links

## Customization Guide

### 1. Update Couple Information
- Edit the couple names in `index.html` (line 25)
- Change the engagement date in `script.js` (line 3)
- Update the venue details in `index.html` (lines 58-62)

### 2. Replace Placeholder Content
- **Images**: Replace placeholder divs with actual images
- **Story Text**: Update the couple's story in `index.html` (lines 75-78)
- **Map**: Replace the map placeholder with Google Maps embed code
- **RSVP Form**: Replace the form placeholder with your Google Form iframe

### 3. Customize Colors
- Main colors are defined in `style.css` using CSS variables
- Primary color: `#8B5A96` (purple)
- Background gradients can be adjusted in the CSS file

### 4. Update Dates and Times
- Engagement date: `script.js` line 3
- RSVP deadline: `index.html` line 95
- Event time: `index.html` line 58

## How to Use

1. **Open the website**: Simply open `index.html` in a web browser
2. **Test responsiveness**: Resize your browser window to see mobile layout
3. **Customize content**: Edit the HTML, CSS, and JavaScript files as needed
4. **Deploy**: Upload all files to your web hosting service

## File Structure

```
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Dependencies

- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **Icons**: Font Awesome 6.0.0
- **No external JavaScript libraries required**

## Tips for Customization

1. **Images**: Use high-quality images (recommended: 1920x1080 for hero, 800x600 for story)
2. **Colors**: Keep the romantic theme with soft, warm colors
3. **Typography**: The current fonts create an elegant, romantic feel
4. **Content**: Keep text concise and engaging
5. **Testing**: Test on multiple devices and screen sizes

## Adding Google Maps

To embed a Google Map:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue location
3. Click "Share" and select "Embed a map"
4. Copy the iframe code
5. Replace the map placeholder in `index.html` (around line 66)

## Adding Google Forms

To embed a Google Form:

1. Create your form in [Google Forms](https://forms.google.com)
2. Click "Send" and select the embed tab
3. Copy the iframe code
4. Replace the form placeholder in `index.html` (around line 97)

## Support

This website is built with vanilla web technologies, so it should work in all modern browsers. If you need help with customization, the code is well-commented and organized for easy modification.

---

**Made with ❤️ for your special day!** 