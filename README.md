# nec-new-site
Creating tests for new NEC site



I have added in a custom script copyfile.js which is set up to copy all the font files from ./assets/fonts/work-sans into the build folder (only after running npm run build (or snowpack build)) so that the site has all the font files it needs.

This is because right now snowpack doesn't seem to handle font files properly and doesnt point to them, so it is easier to just copy them over.

to run the command you just have to run "node copyfile.js" and then you should get a message saying it has run. You will need to edit the script if the fonts change.

as this site is currently set to work with netlify I had to add this to the build command to get both commands to run: "npm run build && node copyfile.js"