Welcome to VueJS Stack by CodeMobiles
- Create github account
- Download Full workshop and sourcecode : https://drive.google.com/file/d/17m6lagcr56i9yMlXTFPEtple4JOy3qDz/view?usp=sharing
- Install and Pull Git : https://github.com/codemobiles/cm_vuejs_swu.git
- Install GoogleChrome, VSCode, NodeJS-LTS (node --version)
- Go to : https://github.com/codemobiles/cm_vuejs_swu.git 
- Install Octotree : octotree chrome extension
- npm i -g yarn
- yarn --version 
- yarn global add @vue/cli
- cd Desktop, mkdir swu_vuejs_students 
- Create Project : vue create demo0
- test with : yarn serve
 C:\Users{YourAccount}\AppData\Local\Yarn\bin

# Setting VSCode for Development
-------------------------
- Extension : [vscode-icon, vetur, prettier,]
- Create .vscode -> settings.json 
{
    "editor.formatOnSave": true,
    "files.autoSaveDelay": 3000
}

# Run Project as (JIT - Just in time - Debug Mode)
--------------------------
 yarn serve


# Entry Flow of VueJS
---------------------
index.html -> <div id="app"></div> -> main.js -> App.js

sudo npm i -g nodemon 
npx nodemon server.js
npm init -y
yarn add express