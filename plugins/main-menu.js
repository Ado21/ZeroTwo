import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let mentionedJid = await m.mentionedJid
let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

let txt = `̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮
︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ❀ ¡Hola! @${userId.split('@')[0]}, Soy ${botname}, Aquí tienes la lista de comandos.

╭┈ࠢ͜┅ࠦ͜͜╾݊͜─ؕ͜─ׄ͜─֬͜─֟͜─֫͜─ׄ͜─ؕ͜─݊͜┈ࠦ͜┅ࠡ͜͜┈࠭͜͜۰۰͜۰
│✦ *Tipo* » ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}
│✰ *Usuarios* » ${totalreg.toLocaleString()}
│⚘ *Versión* » ${vs}
│ꕥ *Plugins* » ${totalCommands}
│🜸 *Librería* » ${libreria}
╰ׅ┈ࠢ͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴ ⋱࣭ ᩴ  ⋮֔   ᩴ ⋰╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *ECONOMÍA* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Economía* para ganar dinero.
┃
┃ ✦ *#w • #work • #trabajar*
┃ › Ganar coins trabajando.
┃
┃ ✦ *#slut • #prostitución*
┃ › Ganar coins prostituyéndote.
┃
┃ ✦ *#coinflip • #flip • #cf* [cantidad] <cara/cruz>
┃ › Apostar coins en un cara o cruz.
┃
┃ ✦ *#crime • #crimen*
┃ › Ganar coins rápido.
┃
┃ ✦ *#roulette • #rt* [red/black] [cantidad]
┃ › Apostar coins en una ruleta.
┃
┃ ✦ *#casino • #apostar • #slot* [cantidad]
┃ › Apuestas coins en el casino.
┃
┃ ✦ *#balance • #bal • #bank* <usuario>
┃ › Ver cuantos coins tienes en el banco.
┃
┃ ✦ *#deposit • #dep • #depositar • #d* [cantidad] | all
┃ › Depositar tus coins en el banco.
┃
┃ ✦ *#withdraw • #with • #retirar* [cantidad] | all
┃ › Retirar tus coins del banco.
┃
┃ ✦ *#economyinfo • #einfo*
┃ › Ver tu información de economía en el grupo.
┃
┃ ✦ *#givecoins • #pay • #coinsgive* [usuario] [cantidad]
┃ › Dar coins a un usuario.
┃
┃ ✦ *#miming • #minar • #mine*
┃ › Realizar trabajos de minería y ganar coins.
┃
┃ ✦ *#daily • #diario*
┃ › Reclamar tu recompensa diaria.
┃
┃ ✦ *#cofre • #coffer*
┃ › Reclamar tu cofre diario.
┃
┃ ✦ *#weekly • #semanal*
┃ › Reclamar tu recompensa semanal.
┃
┃ ✦ *#monthly • #mensual*
┃ › Reclamar tu recompensa mensual.
┃
┃ ✦ *#steal • #robar • #rob* [@mencion]
┃ › Intentar robar coins a un usuario.
┃
┃ ✦ *#economyboard • #eboard • #baltop* <página>
┃ › Ver el ranking de economía en el grupo.
┃
┃ ✦ *#aventura • #adventure*
┃ › Aventuras para ganar coins y exp.
┃
┃ ✦ *#curar • #heal*
┃ › Curar salud para salir de aventuras.
┃
┃ ✦ *#cazar • #hunt*
┃ › Cazar animales para ganar coins y exp.
┃
┃ ✦ *#fish • #pescar*
┃ › Ganar coins y exp pescando.
┃
┃ ✦ *#mazmorra • #dungeon*
┃ › Explorar mazmorras para ganar coins y exp.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *DESCARGAS* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Descargas* para descargar archivos de varias fuentes.
┃
┃ ✦ *#tiktok • #tt* [Link] / [búsqueda]
┃ › Descargar un video de TikTok.
┃
┃ ✦ *#wagroups • #wpgroups* [búsqueda]
┃ › Buscar grupos de WhatsApp.
┃
┃ ✦ *#mediafire • #mf* [Link]
┃ › Descargar un archivo de MediaFire.
┃
┃ ✦ *#mega • #mg* [Link]
┃ › Descargar un archivo de MEGA.
┃
┃ ✦ *#play • #play2 • #ytmp3 • #ytmp4* [Canción] / [Link]
┃ › Descargar una canción o vídeo de YouTube.
┃
┃ ✦ *#facebook • #fb* [Link]
┃ › Descargar un video de Facebook.
┃
┃ ✦ *#twitter • #x* [Link]
┃ › Descargar un video de Twitter/X.
┃
┃ ✦ *#ig • #instagram* [Link]
┃ › Descargar un reel de Instagram.
┃
┃ ✦ *#pinterest • #pin* [búsqueda] / [Link]
┃ › Buscar y descargar imágenes de Pinterest.
┃
┃ ✦ *#image • #imagen* [búsqueda]
┃ › Buscar y descargar imágenes de Google.
┃
┃ ✦ *#apk • #modapk* [búsqueda]
┃ › Descargar un apk de Aptoide.
┃
┃ ✦ *#ytsearch • #search* [búsqueda]
┃ › Buscar videos de YouTube.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *GACHA* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Gacha* para reclamar y coleccionar personajes.
┃
┃ ✦ *#buycharacter • #buychar • #buyc* [nombre]
┃ › Comprar un personaje en venta.
┃
┃ ✦ *#charimage • #waifuimage • #cimage • #wimage* [nombre]
┃ › Ver una imagen aleatoria de un personaje.
┃
┃ ✦ *#charinfo • #winfo • #waifuinfo* [nombre]
┃ › Ver información de un personaje.
┃
┃ ✦ *#claim • #c • #reclamar* {citar personaje}
┃ › Reclamar un personaje.
┃
┃ ✦ *#delclaimmsg*
┃ › Restablecer el mensaje al reclamar un personaje.
┃
┃ ✦ *#deletewaifu • #delwaifu • #delchar* [nombre]
┃ › Eliminar un personaje reclamado.
┃
┃ ✦ *#favoritetop • #favtop*
┃ › Ver el top de personajes favoritos.
┃
┃ ✦ *#gachainfo • #ginfo • #infogacha*
┃ › Ver tu información de gacha.
┃
┃ ✦ *#giveallharem* [@usuario]
┃ › Regalar todos tus personajes a otro usuario.
┃
┃ ✦ *#givechar • #givewaifu • #regalar* [@usuario] [nombre]
┃ › Regalar un personaje a otro usuario.
┃
┃ ✦ *#robwaifu • #robarwaifu* [@usuario]
┃ › Robar un personaje a otro usuario.
┃
┃ ✦ *#harem • #waifus • #claims* <@usuario>
┃ › Ver tus personajes reclamados.
┃
┃ ✦ *#haremshop • #tiendawaifus • #wshop* <página>
┃ › Ver los personajes en venta.
┃
┃ ✦ *#removesale • #removerventa* [precio] [nombre]
┃ › Eliminar un personaje en venta.
┃
┃ ✦ *#rollwaifu • #rw • #roll*
┃ › Waifu o husbando aleatorio.
┃
┃ ✦ *#sell • #vender* [precio] [nombre]
┃ › Poner un personaje a la venta.
┃
┃ ✦ *#serieinfo • #ainfo • #animeinfo* [nombre]
┃ › Información de un anime.
┃
┃ ✦ *#serielist • #slist • #animelist*
┃ › Listar series del bot.
┃
┃ ✦ *#setclaimmsg • #setclaim* [mensaje]
┃ › Modificar el mensaje al reclamar un personaje.
┃
┃ ✦ *#trade • #intercambiar* [Tu personaje] / [Personaje 2]
┃ › Intercambiar un personaje con otro usuario.
┃
┃ ✦ *#vote • #votar* [nombre]
┃ › Votar por un personaje para subir su valor.
┃
┃ ✦ *#waifusboard • #waifustop • #topwaifus • #wtop* [número]
┃ › Ver el top de personajes con mayor valor.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *SOCKETS* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos para registrar tu propio Bot.
┃
┃ ✦ *#qr • #code*
┃ › Crear un Sub-Bot con un código QR/Code.
┃
┃ ✦ *#bots • #botlist*
┃ › Ver el número de bots activos.
┃
┃ ✦ *#status • #estado*
┃ › Ver estado del bot.
┃
┃ ✦ *#p • #ping*
┃ › Medir tiempo de respuesta.
┃
┃ ✦ *#join* [Invitación]
┃ › Unir al bot a un grupo.
┃
┃ ✦ *#leave • #salir*
┃ › Salir de un grupo.
┃
┃ ✦ *#logout*
┃ › Cerrar sesión del bot.
┃
┃ ✦ *#setpfp • #setimage*
┃ › Cambiar la imagen de perfil.
┃
┃ ✦ *#setstatus* [estado]
┃ › Cambiar el estado del bot.
┃
┃ ✦ *#setusername* [nombre]
┃ › Cambiar el nombre de usuario.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *UTILIDADES* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Utilidades*.
┃
┃ ✦ *#help • #menu*
┃ › Ver el menú de comandos.
┃
┃ ✦ *#sc • #script*
┃ › Link del repositorio oficial del Bot.
┃
┃ ✦ *#sug • #suggest*
┃ › Sugerir nuevas funciones al desarrollador.
┃
┃ ✦ *#reporte • #reportar*
┃ › Reportar fallas o problemas del bot.
┃
┃ ✦ *#calcular • #cal*
┃ › Calcular tipos de ecuaciones.
┃
┃ ✦ *#delmeta*
┃ › Restablecer el pack y autor por defecto para tus stickers.
┃
┃ ✦ *#getpic • #pfp* [@usuario]
┃ › Ver la foto de perfil de un usuario.
┃
┃ ✦ *#say* [texto]
┃ › Repetir un mensaje.
┃
┃ ✦ *#setmeta* [autor] | [pack]
┃ › Establecer el pack y autor por defecto para tus stickers.
┃
┃ ✦ *#sticker • #s • #wm* {citar una imagen/video}
┃ › Convertir una imagen/video a sticker.
┃
┃ ✦ *#toimg • #img* {citar sticker}
┃ › Convertir un sticker/imagen de una vista a imagen.
┃
┃ ✦ *#brat • #bratv • #qc • #emojimix*
┃ › Crear stickers con texto.
┃
┃ ✦ *#gitclone* [Link]
┃ › Descargar un repositorio de Github.
┃
┃ ✦ *#enhance • #remini • #hd*
┃ › Mejorar calidad de una imagen.
┃
┃ ✦ *#letra • #style*
┃ › Cambiar la fuente de las letras.
┃
┃ ✦ *#read • #readviewonce*
┃ › Ver imágenes viewonce.
┃
┃ ✦ *#ss • #ssweb*
┃ › Ver el estado de una página web.
┃
┃ ✦ *#translate • #traducir • #trad*
┃ › Traducir palabras en otros idiomas.
┃
┃ ✦ *#ia • #gemini*
┃ › Preguntar a Chatgpt.
┃
┃ ✦ *#iavoz • #aivoz*
┃ › Hablar o preguntar a chatgpt mexicano modo voz.
┃
┃ ✦ *#tourl • #catbox*
┃ › Convertidor de imagen/video en urls.
┃
┃ ✦ *#wiki • #wikipedia*
┃ › Investigar temas a través de Wikipedia.
┃
┃ ✦ *#dalle • #flux*
┃ › Crear imágenes con texto mediante IA.
┃
┃ ✦ *#npmdl • #npmjs*
┃ › Descargar paquetes de NPMJS.
┃
┃ ✦ *#google*
┃ › Realizar búsquedas por Google.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *PERFILES* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Perfil* para ver y configurar tu perfil.
┃
┃ ✦ *#leaderboard • #lboard • #top* <página>
┃ › Top de usuarios con más experiencia.
┃
┃ ✦ *#level • #lvl* <@mención>
┃ › Ver tu nivel y experiencia actual.
┃
┃ ✦ *#marry • #casarse* <@mención>
┃ › Casarte con alguien.
┃
┃ ✦ *#profile* <@mención>
┃ › Ver tu perfil.
┃
┃ ✦ *#setbirth* [fecha]
┃ › Establecer tu fecha de cumpleaños.
┃
┃ ✦ *#setdescription • #setdesc* [descripción]
┃ › Establecer tu descripción.
┃
┃ ✦ *#setgenre* Hombre | Mujer
┃ › Establecer tu género.
┃
┃ ✦ *#delgenre • #delgenero*
┃ › Eliminar tu género.
┃
┃ ✦ *#delbirth* [fecha]
┃ › Borrar tu fecha de cumpleaños.
┃
┃ ✦ *#divorce*
┃ › Divorciarte de tu pareja.
┃
┃ ✦ *#setfavourite • #setfav* [personaje]
┃ › Establecer tu claim favorito.
┃
┃ ✦ *#deldescription • #deldesc*
┃ › Eliminar tu descripción.
┃
┃ ✦ *#prem • #vip*
┃ › Comprar membresía premium.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *GRUPOS* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos para *Administradores* de grupos.
┃
┃ ✦ *#tag • #hidetag • #invocar • #tagall* [mensaje]
┃ › Envía un mensaje mencionando a todos los usuarios del grupo.
┃
┃ ✦ *#detect • #alertas* [enable/disable]
┃ › Activar/desactivar las alertas de promote/demote.
┃
┃ ✦ *#antilink • #antienlace* [enable/disable]
┃ › Activar/desactivar el antienlace.
┃
┃ ✦ *#bot* [enable/disable]
┃ › Activar/desactivar al bot.
┃
┃ ✦ *#close • #cerrar*
┃ › Cerrar el grupo para que solo los administradores puedan enviar mensajes.
┃
┃ ✦ *#demote* <@usuario> | {mención}
┃ › Descender a un usuario de administrador.
┃
┃ ✦ *#economy* [enable/disable]
┃ › Activar/desactivar los comandos de economía.
┃
┃ ✦ *#gacha* [enable/disable]
┃ › Activar/desactivar los comandos de Gacha y Games.
┃
┃ ✦ *#welcome • #bienvenida* [enable/disable]
┃ › Activar/desactivar la bienvenida y despedida.
┃
┃ ✦ *#setbye* [texto]
┃ › Establecer un mensaje de despedida personalizado.
┃
┃ ✦ *#setprimary* [@bot]
┃ › Establece un bot como primario del grupo.
┃
┃ ✦ *#setwelcome* [texto]
┃ › Establecer un mensaje de bienvenida personalizado.
┃
┃ ✦ *#kick* <@usuario> | {mención}
┃ › Expulsar a un usuario del grupo.
┃
┃ ✦ *#nsfw* [enable/disable]
┃ › Activar/desactivar los comandos NSFW.
┃
┃ ✦ *#onlyadmin* [enable/disable]
┃ › Permitir que solo los administradores puedan utilizar los comandos.
┃
┃ ✦ *#open • #abrir*
┃ › Abrir el grupo para que todos los usuarios puedan enviar mensajes.
┃
┃ ✦ *#promote* <@usuario> | {mención}
┃ › Ascender a un usuario a administrador.
┃
┃ ✦ *#add • #añadir • #agregar* {número}
┃ › Invita a un usuario a tu grupo.
┃
┃ ✦ *admins • admin* [texto]
┃ › Mencionar a los admins para solicitar ayuda.
┃
┃ ✦ *#restablecer • #revoke*
┃ › Restablecer enlace del grupo.
┃
┃ ✦ *#addwarn • #warn* <@usuario> | {mención}
┃ › Advertir a un usuario.
┃
┃ ✦ *#unwarn • #delwarn* <@usuario> | {mención}
┃ › Quitar advertencias de un usuario.
┃
┃ ✦ *#advlist • #listadv*
┃ › Ver lista de usuarios advertidos.
┃
┃ ✦ *#inactivos • #kickinactivos*
┃ › Ver y eliminar a usuarios inactivos.
┃
┃ ✦ *#listnum • #kicknum* [texto]
┃ › Eliminar usuarios con prefijo de país.
┃
┃ ✦ *#gpbanner • #groupimg*
┃ › Cambiar la imagen del grupo.
┃
┃ ✦ *#gpname • #groupname* [texto]
┃ › Cambiar el nombre del grupo.
┃
┃ ✦ *#gpdesc • #groupdesc* [texto]
┃ › Cambiar la descripción del grupo.
┃
┃ ✦ *#del • #delete* {citar un mensaje}
┃ › Eliminar un mensaje.
┃
┃ ✦ *#linea • #listonline*
┃ › Ver lista de usuarios en línea.
┃
┃ ✦ *#gp • #infogrupo*
┃ › Ver la información del grupo.
┃
┃ ✦ *#link*
┃ › Ver enlace de invitación del grupo.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *REACCIONES ANIME* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de reacciones de anime.
┃
┃ ✦ *#angry • #enojado* <mención>
┃ › Estar enojado.
┃
┃ ✦ *#bath • #bañarse* <mención>
┃ › Bañarse.
┃
┃ ✦ *#bite • #morder* <mención>
┃ › Muerde a alguien.
┃
┃ ✦ *#bleh • #lengua* <mención>
┃ › Sacar la lengua.
┃
┃ ✦ *#blush • #sonrojarse* <mención>
┃ › Sonrojarte.
┃
┃ ✦ *#bored • #aburrido* <mención>
┃ › Estar aburrido.
┃
┃ ✦ *#clap • #aplaudir* <mención>
┃ › Aplaudir.
┃
┃ ✦ *#coffee • #cafe • #café* <mención>
┃ › Tomar café.
┃
┃ ✦ *#cry • #llorar* <mención>
┃ › Llorar por algo o alguien.
┃
┃ ✦ *#cuddle • #acurrucarse* <mención>
┃ › Acurrucarse.
┃
┃ ✦ *#dance • #bailar* <mención>
┃ › Sácate los pasitos prohibidos.
┃
┃ ✦ *#dramatic • #drama* <mención>
┃ › Drama.
┃
┃ ✦ *#drunk • #borracho* <mención>
┃ › Estar borracho.
┃
┃ ✦ *#eat • #comer* <mención>
┃ › Comer algo delicioso.
┃
┃ ✦ *#facepalm • #palmada* <mención>
┃ › Darte una palmada en la cara.
┃
┃ ✦ *#happy • #feliz* <mención>
┃ › Salta de felicidad.
┃
┃ ✦ *#hug • #abrazar* <mención>
┃ › Dar un abrazo.
┃
┃ ✦ *#impregnate • #preg • #preñar • #embarazar* <mención>
┃ › Embarazar a alguien.
┃
┃ ✦ *#kill • #matar* <mención>
┃ › Toma tu arma y mata a alguien.
┃
┃ ✦ *#kiss • #muak* <mención>
┃ › Dar un beso.
┃
┃ ✦ *#kisscheek • #beso* <mención>
┃ › Beso en la mejilla.
┃
┃ ✦ *#laugh • #reirse* <mención>
┃ › Reírte de algo o alguien.
┃
┃ ✦ *#lick • #lamer* <mención>
┃ › Lamer a alguien.
┃
┃ ✦ *#love • #amor • #enamorado • #enamorada* <mención>
┃ › Sentirse enamorado.
┃
┃ ✦ *#pat • #palmadita • #palmada* <mención>
┃ › Acaricia a alguien.
┃
┃ ✦ *#poke • #picar* <mención>
┃ › Picar a alguien.
┃
┃ ✦ *#pout • #pucheros* <mención>
┃ › Hacer pucheros.
┃
┃ ✦ *#punch • #pegar • #golpear* <mención>
┃ › Dar un puñetazo.
┃
┃ ✦ *#run • #correr* <mención>
┃ › Correr.
┃
┃ ✦ *#sad • #triste* <mención>
┃ › Expresar tristeza.
┃
┃ ✦ *#scared • #asustado • #asustada* <mención>
┃ › Estar asustado.
┃
┃ ✦ *#seduce • #seducir* <mención>
┃ › Seducir a alguien.
┃
┃ ✦ *#shy • #tímido • #tímida* <mención>
┃ › Sentir timidez.
┃
┃ ✦ *#slap • #bofetada* <mención>
┃ › Dar una bofetada.
┃
┃ ✦ *#sleep • #dormir* <mención>
┃ › Tumbarte a dormir.
┃
┃ ✦ *#smoke • #fumar* <mención>
┃ › Fumar.
┃
┃ ✦ *#spit • #escupir* <mención>
┃ › Escupir.
┃
┃ ✦ *#step • #pisar* <mención>
┃ › Pisar a alguien.
┃
┃ ✦ *#think • #pensar* <mención>
┃ › Pensar en algo.
┃
┃ ✦ *#walk • #caminar* <mención>
┃ › Caminar.
┃
┃ ✦ *#wink • #guiñar* <mención>
┃ › Guiñar el ojo.
┃
┃ ✦ *#cringe • #avergonzarse* <mención>
┃ › Sentir vergüenza ajena.
┃
┃ ✦ *#smug • #presumir* <mención>
┃ › Presumir con estilo.
┃
┃ ✦ *#smile • #sonreír* <mención>
┃ › Sonreír con ternura.
┃
┃ ✦ *#highfive • #5* <mención>
┃ › Chocar los cinco.
┃
┃ ✦ *#bully • #bullying* <mención>
┃ › Molestar a alguien.
┃
┃ ✦ *#handhold • #mano* <mención>
┃ › Tomarse de la mano.
┃
┃ ✦ *#wave • #ola • #hola* <mención>
┃ › Saludar con la mano.
┃
┃ ✦ *#waifu*
┃ › Buscar una waifu aleatoria.
┃
┃ ✦ *#ppcouple • #ppcp*
┃ › Genera imágenes para amistades o parejas.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *NSFW* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos *NSFW* (contenido adulto).
┃
┃ ✦ *#danbooru • #dbooru* [tags]
┃ › Buscar imágenes en Danbooru.
┃
┃ ✦ *#gelbooru • #gbooru* [tags]
┃ › Buscar imágenes en Gelbooru.
┃
┃ ✦ *#rule34 • #r34* [tags]
┃ › Buscar imágenes en Rule34.
┃
┃ ✦ *#xvideos • #xvideosdl* [link]
┃ › Descargar un video Xvideos.
┃
┃ ✦ *#xnxx • #xnxxdl* [link]
┃ › Descargar un video Xnxx.
┃
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ`.trim()

await conn.sendMessage(m.chat, { 
  text: txt,
  contextInfo: {
    mentionedJid: [userId],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: channelRD.id,
      serverMessageId: '',
      newsletterName: channelRD.name
    },
    externalAdReply: {
      title: botname,
      body: textbot,
      mediaType: 1,
      mediaUrl: redes,
      sourceUrl: redes,
      thumbnail: await (await fetch(banner)).buffer(),
      showAdAttribution: false,
      containsAutoReply: true,
      renderLargerThumbnail: true
    }
  }
}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
