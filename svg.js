const fs = require('fs');
const path = require('path');

// Define the folder where SVG files will be saved
const folderPath = './public/assets/simple-icons'; // You can change this to the folder where you want to save the SVG files

// Create the folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// List of names for the SVG files
const svgFileNames = [
  'angular', 'html5', 'css3', 'sass', 'nodedotjs', 'javascript',
  'express', 'threedotjs', 'tailwindcss', 'bootstrap', 'primeng', 
  'googlecloud', 'amazonwebservices', 'firebase', 'postgresql', 
  'mongodb', 'docker', 'render', 'heroku', 'adobexd', 'figma', 
  'adobeillustrator', 'adobephotoshop'
];

// Function to create an SVG file
function createSvgFile(fileName) {
  // Define a simple SVG structure
  const svgContent = `
  `;

  const filePath = path.join(folderPath, `${fileName}.svg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created file: ${filePath}`);
}

// Create SVG files for each name in the list
svgFileNames.forEach(fileName => {
  createSvgFile(fileName);
});

console.log("SVG files created successfully.");
