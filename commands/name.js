module.exports.run = async (bot, message, args) => {
	//pedir admin privilegio para este comando
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Este comando sólo está disponible para Administradores.');

bot.user.setUsername(args[0])
.then(user => message.channel.send(`Nombre cambiado a :${user.username}`))
.catch(message.channel.send('Para volver a cambiar el nombre debes esperar 2 horas'));

};

module.exports.help = {
	name:"Nombre",
	type:'ADM',
	Description:'Cambiar el nombre del BOT.'
}