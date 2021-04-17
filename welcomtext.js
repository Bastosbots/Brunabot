const welcome = (number, groupname) => {
    return `*Oii @${number}. Seja bem-vindo(a) ao ${groupname}*`
}
exports.welcome = welcome

const bye = (number) => {
    return `*Adeus @${number}. Já vai tarde 👋*`
}
exports.bye = bye
