const fs = require('fs');
const path = require('path');

function vitePluginIIFELibrary(libraryFileName) {
  return {
    name: 'vite-plugin-iife-library',
    writeBundle(options, bundle) {
      const fileName = libraryFileName;
      if (bundle[fileName]) {
        const filePath = path.join(options.dir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const wrappedContent = `(function() {\n${fileContent}\n})();`;

        fs.writeFileSync(filePath, wrappedContent);
      }
    },
  };
}

module.exports = vitePluginIIFELibrary;