const { default: { stream } } = require("got");
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");
const url = "https://github.com/Snhvn/Fix-Install-distube-in-hosting/raw/main/installyb.sh"; // This will always pull the latest with soundcloud fix ect ect
const start = () => {
    const download = stream(url).pipe(createWriteStream('installyb.sh'));
    download.on("finish", () => {
         execSync("sh installyb.sh", { stdio: "inherit" });
    });
};

start();
