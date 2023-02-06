module.exports.run = async (bot, message, args) => {
    let General, Otros,ADM; General = ADM = Otros = '';
    let command = bot.commands.map(g=>[g.help]);
    for(var i = 0 ; i < command.length;i++){
        for(var x = 0 ; x < command[i].length; x++){
        if(command[i][x].type === 'Other'){
                Otros +=	`-**${command[i][x].name}**\n${command[i][x].Description}\n`
        }else if(command[i][x].type === 'General'){
                General +=	`-**${command[i][x].name}**\n${command[i][x].Description}\n`
            }else if(command[i][x].type === 'ADM'){
                ADM +=	`-**${command[i][x].name}**\n${command[i][x].Description}\n`
            };
        };
    };
    
         message.channel.send({embed:{
             color: 5596852,
                title:'Lista de comandos',
             fields: [{
                 name:'General',
                 value:`${General}`
             },{
                name:'Otros',
                value:`${Otros}`
             },{
                 name:'Unicos(Requiere rol Administrador)',
                 value: ADM
             }]
         }});
    }
    
    module.exports.help = {
        name:"Ayuda"
    }