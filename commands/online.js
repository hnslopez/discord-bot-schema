module.exports.run = async (bot, message, args) =>{
const LimitTime =  new Date(bot.expire);
let Time = + new Date();
TimeTotal = ((LimitTime-Time) / 1000).toFixed(0);;
Minutes = (TimeTotal - (TimeTotal %=60))/60;
Hours = (Minutes-(Minutes %= 60))/60;
Days = (Hours - (Hours %= 24))/24
DDay = LimitTime.getDate();
DMonth = LimitTime.getMonth()+1;
DYear = LimitTime.getFullYear();

message.channel.send({embed:{
    color: 3333333,
    title: 'Tiempo de funcionamiento',
    description: `**${bot.user.username}** estará en linea hasta el **${(9<DDay?'':'0')+DDay}/${(9 < DMonth? '':'0')+DMonth}/${DYear}**.\n
    Puedes pedir expandir el tiempo límite comunicándote con el administrador.`,
        fields: [{
            name: 'Tiempo Restante',
            value: `${(9 < Days?'':'0') + Days+(2 < Days || 1 > Days ?' Dias':' Dia')}, ${(9 < Hours?'':'0')+Hours+(2 < Hours || 1 > Hours ?' Horas':' Hora')}, ${(9 < Minutes?'':'0')+Minutes+(2 < Minutes || 1 > Minutes ?' Minutos':' Minuto')} y ${(9 < TimeTotal?'':'0')+TimeTotal+(2 < TimeTotal || 1 > TimeTotal ?' Segundos':' Segundo')}.`
        }]
}

});

}

module.exports.help = {
    name: 'server',
    type: 'other',
    description:'Tiempo restante para finalizar el BOT'
}