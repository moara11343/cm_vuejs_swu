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
yarn add/remove body-parser


# install mongo
https://www.youtube.com/watch?v=EEiIHZt-VaY
macOS - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
xcode-select --install
brew tap mongodb/brew
brew install mongodb-community@4.4

window - https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.6-signed.msi
run exe

brew services start mongodb-community
brew services stop mongodb-community
mongo localhost

https://www.mongodb.com/try/download/compass?tck=docs_compass


# backend
# nodejs
yarn add bcryptjs body-parser cors express formidable fs-extra jsonwebtoken moment mongoose mongoose-sequence onesignal-node

mongo swupos --eval "db.users.find({})"
https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.3.1.zip
brew install rbenv/tap/openssl@1.0
mongorestore -d swupos /Users/chaiyasit/Desktop/cm_vuejs_swu/demo1/backend/dummy_db_cmpos
