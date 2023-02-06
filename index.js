const Discord = require('discord.js');
const bot = new Discord.Client();
const Settings = require('./Settings.json');
const fs = require('fs');
const prefix = '-';
bot.commands = new Discord.Collection();
bot.expire = '';
console.log(+new Date())
// let FechaLimite = 30 *24*60*60*1000;
// let CountLimit = parseInt(FechaLimite) + + new Date();
//console.log(CountLimit)
//./BOTS/NAME/
fs.readdir(__dirname+"/commands/", (err, files) => {
    if(err) console.error(err);
    
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0){
        console.log("Comandos no Cargados");
       
    }else{
        console.log(`Cargando ${jsfiles.length} Comandos`)
    };
       jsfiles.forEach((f,i) => {
           let busq = require(`./commands/${f}`);
           console.log(`${i + 1}: ${f} Cargado`);
           bot.commands.set(busq.help.name.toLowerCase(), busq);
       });
   
   console.log();
   bot.on("ready", async () => {

   fs.readdir(__dirname+"/commands/run/", (err, files) => {
    if(err) console.error(err);
    
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0){
        console.log("No hay comandos automaticos");
        
    }else{
        console.log(`Iniciando ${jsfiles.length} Comandos Automaticos`)
    };
  
       jsfiles.forEach((f,x) => {
           let starts = require(`./commands/run/${f}`);
           console.log(`${x + 1}: ${f} Cargado`);
           starts.run(bot);
               });
               console.log();
   console.log("En Linea");
           });	
       });
   });

bot.on('error', err =>{
console.log(err.message)
});

setInterval(()=>{
    let time = + new Date()
    if(bot.expire < time){
        bot.destroy().then(() => {
            process.exit();
        });
    };
},30000);

bot.on('message', async message =>{
    if(message.author.bot)return;
    if(message.channel.type === "dm") return; 
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!command.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length))
    if(cmd) cmd.run(bot, message, args);
})

    if(bot.expire > + new Date()){
    bot.login(Settings.token);
    };

