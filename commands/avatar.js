module.exports.run = async (bot, message, args) => {
	//pedir admin privilegio para este comando
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Este comando sólo está disponible para Administradores.');

let attachment = message.attachments;
if(attachment.map(g=>g).length <= 0)return message.channel.send("Debes tener una imagen adjuntada.")
bot.user.setAvatar(attachment.map(g=>g.proxyURL)[0]).then(user =>
message.channel.send('Avatar Actualizado.')
).catch(
message.channel.send('Se ha producido un error al intentar cambiar de imagen, intentelo mas tarde.')
)
};

module.exports.help = {
	name:"Avatar",
	type:'ADM',
	Description:'Cambiar de avatar del BOT.'
}