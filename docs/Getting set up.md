# Getting set up
Welcome to the project! This is a _very cursory_ list of things to help you get set up on Windows. I'm aiming to update it soon.
In the meantime, [here's a tutorial](https://www.youtube.com/watch?v=ByuS1UjsqbU) that might be of use. The tutorial takes a while to follow but it's mostly fluff. It should actually be pretty fast to get everything working. 
Note: make sure you have version 16 or higher of nodejs!

Download & install [Node.js](https://nodejs.org/en/)   
Download & install [Git for Windows](https://gitforwindows.org/)   
[Visual Studio Code](https://code.visualstudio.com/) (totally optional)   
Clone the [Taproot repository](https://github.com/VikeLabs/Taproot) from GitHub   
How to [show hidden files](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5#WindowsVersion=Windows_10) on Windows (optional)   

Git bash into the Taproot folder and type:   
`cd frontend`   
`npm install`

To verify frontend installation type:   
`npm run dev`   
(ctrl+c to exit server)

Navigate to backend folder from terminal, type:   
`cd ..`   
`cd backend`

Download [`sample_data.db`](https://drive.google.com/file/d/1NQASBA5kUZkBDqP3aD5vpP5jibXLyBjE/view?usp=sharing) and place it in the backend folder   
Rename it to `keystone.db`

Back in the terminal, type:   
`npm install`    
`npm run postinstall`   
`npm install next`   

To verify backend installation type:   
`npm run dev`   
(ctrl+c to exit server)   
