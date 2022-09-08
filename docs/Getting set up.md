# Getting set up
Welcome to the project! This is a _very cursory_ list of things to help you get set up on Windows. I'm aiming to update it soon.
In the meantime, [here's a tutorial](https://www.youtube.com/watch?v=ByuS1UjsqbU) that might be of use. The tutorial takes a while to follow but it's mostly fluff. It should actually be pretty fast to get everything working. 
Note: make sure you have version 16 or higher of nodejs!

Download & install Node.js
https://nodejs.org/en/

Download & install Git for Windows
https://gitforwindows.org/

Visual Studio Code (totally optional)
https://code.visualstudio.com/

Clone the Taproot repository from GitHub
https://github.com/VikeLabs/Taproot

How to show hidden files on Windows 10 (optional)
https://support.microsoft.com/en-us/w...

Git bash into the Taproot folder and type:
cd frontend
npm install

To verify frontend installation type:
npm run dev
(ctrl+c to exit server)

Navigate to backend folder from terminal, type:
cd ..
cd backend

Download sample_data.db and place it in the backend folder
https://drive.google.com/file/d/1NQAS...
Rename it to keystone.db

Back in the terminal, type:
npm install
npm run postinstall
npm install next

To verify backend installation type:
npm run dev
(ctrl+c to exit server)