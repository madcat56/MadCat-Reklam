const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'p+wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/QbvDN7s7wr`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("755636700482633791").send(
`> <:By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`MAD CAT UP BY JUST STAF`) 
});




client.login("ODMzMTE0MTg3Mzc4NzIwODQ4.YHtoDA.FSUvNQzBhNMDKeiUrJ6rVgqvcN4");//تۆکین لێرە دانێ
