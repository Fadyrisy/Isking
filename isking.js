const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`

    ██╗░██████╗  ██╗░░██╗██╗███╗░░██╗░██████╗░
    ██║██╔════╝  ██║░██╔╝██║████╗░██║██╔════╝░
    ██║╚█████╗░  █████═╝░██║██╔██╗██║██║░░██╗░
    ██║░╚═══██╗  ██╔═██╗░██║██║╚████║██║░░╚██╗
    ██║██████╔╝  ██║░╚██╗██║██║░╚███║╚██████╔╝
    ╚═╝╚═════╝░  ╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░  
                                                    
Round :
1. ${chalk.green('Round 3 (WIN)')}
2. ${chalk.green('Round 3')}
3. ${chalk.green('Round 2')}
4. ${chalk.green('Round 1')}
`);

    const feature = rs.question('[+] Round berapa lu : ');

    if (feature == '1') {

        const auth = rs.question('[+] Masukin auth bang : ');
        const time = rs.question('[+] Masukin delay : ');
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                const region = data.User.Region;
                
                console.log(`\r
${chalk.red('Made By XcSc')}
->  [${moment().format('HH:mm:ss')}] 
->  ${chalk.blueBright(`Region  : ${region}`)}
->  ${chalk.blueBright(`Name  : ${username}`)} 
->  ${chalk.blueBright(`Trophy  : ${trophy}`)}  
->  ${chalk.blueBright(`Crowns : ${crown}`)}
->  ${chalk.red('Subscribe ItzHexayan')}`);
await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] KENA BAN LU GOBLOK ! !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[+] Masukin auth bang : ');
        const time = rs.question('[+] Masukin delay : ');
        console.log('');

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(`\r
${chalk.red('Made By XcSc')}
->  [${moment().format('HH:mm:ss')}] 
->  ${chalk.blueBright(`Region  : ${region}`)}
->  ${chalk.blueBright(`Name  : ${username}`)} 
->  ${chalk.blueBright(`Trophy  : ${trophy}`)}  
->  ${chalk.red('Subscribe ItzHexayan')}`);
await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Aowkwok Kena Banned ! !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[+] Masukin auth bang : ');
        const time = rs.question('[+] Masukin delay : ');
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(`\r
${chalk.red('Made By XcSc')}
->  [${moment().format('HH:mm:ss')}] 
->  ${chalk.blueBright(`Region  : ${region}`)}
->  ${chalk.blueBright(`Name  : ${username}`)} 
->  ${chalk.blueBright(`Trophy  : ${trophy}`)}  
->  ${chalk.red('Subscribe ItzHexayan')}`);
await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Aowkwok Kena Banned ! !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[+] Masukin auth bang : ');
        const time = rs.question('[+] Masukin delay : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(`\r
${chalk.red('Made By XcSc')}
->  [${moment().format('HH:mm:ss')}] 
->  ${chalk.blueBright(`Region  : ${region}`)}
->  ${chalk.blueBright(`Name  : ${username}`)} 
->  ${chalk.blueBright(`Trophy  : ${trophy}`)}  
->  ${chalk.red('Subscribe ItzHexayan')}`);
await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Akun lu ke ban kontol ! !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Wrong feature !`));

    }
    

})();