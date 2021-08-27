const bcrypt = require('bcrypt-nodejs');
let emails = `alexandria.hermann@yahoo.com
juana_keeling0@hotmail.com
stephen77@yahoo.com
ethan_pacocha81@yahoo.com
jeramie25@hotmail.com
ole.altenwerth@yahoo.com
kurtis4@gmail.com
edward34@yahoo.com
onie_bahringer@hotmail.com
landen17@hotmail.com
jarred.hessel86@hotmail.com
haylee66@gmail.com
jedediah.welch@yahoo.com
mylene4@yahoo.com
ottilie20@gmail.com
maudie_cummerata@yahoo.com
melisa74@gmail.com
candido10@gmail.com
alejandra.will28@hotmail.com
alfredo_littel@gmail.com
ona_halvorson@gmail.com
rowena67@yahoo.com
lillie86@yahoo.com
aileen_leffler94@yahoo.com
christian73@yahoo.com
cortez10@hotmail.com
guadalupe.boyle@yahoo.com
renee8@hotmail.com
justus_will90@yahoo.com
joelle.zboncak@gmail.com
zoie_denesik@hotmail.com
iliana_williamson@gmail.com
carlotta21@hotmail.com
lilla.kassulke@yahoo.com
louvenia.smitham@hotmail.com
elnora_macgyver70@gmail.com
marques.strosin@yahoo.com
tate.stamm85@hotmail.com
ignatius.pollich@yahoo.com
eleonore.hickle@hotmail.com`

let dump = []
emails.split("\n").map(e => {
    dump.push({
        "email" : e,
        "password" :  bcrypt.hashSync(e, bcrypt.genSaltSync(8), null),
        "tasks" : e.split("")
    })
})
console.log(dump);


  db.users.insertMany( [
    {
      email: 'alexandria.hermann@yahoo.com',
      password: '$2a$08$MN082YcFqx/aa8XckAHM7eaNb661syHhH27B4cfzbvQwwoMC2Z7nu',
      tasks: [
        'a', 'l', 'e', 'x', 'a', 'n',
        'd', 'r', 'i', 'a', '.', 'h',
        'e', 'r', 'm', 'a', 'n', 'n',
        '@', 'y', 'a', 'h', 'o', 'o',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'juana_keeling0@hotmail.com',
      password: '$2a$08$kElkUdweSCVoT24Bad3drea6A2y11P2mckn2l.i.Cn4qCWlzEJMZW',
      tasks: [
        'j', 'u', 'a', 'n', 'a', '_',
        'k', 'e', 'e', 'l', 'i', 'n',
        'g', '0', '@', 'h', 'o', 't',
        'm', 'a', 'i', 'l', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'stephen77@yahoo.com',
      password: '$2a$08$aAjHXHxKppm3BidaOhrZUOw9OhT4.UBY01WZ5fGxpYNrivA7fXSyi',
      tasks: [
        's', 't', 'e', 'p', 'h',
        'e', 'n', '7', '7', '@',
        'y', 'a', 'h', 'o', 'o',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'ethan_pacocha81@yahoo.com',
      password: '$2a$08$0r5dhiIotuBdqFoA5nAwGeVMiYuN3xPL24sjoBlfAOXyyaOVjBK0q',
      tasks: [
        'e', 't', 'h', 'a', 'n', '_',
        'p', 'a', 'c', 'o', 'c', 'h',
        'a', '8', '1', '@', 'y', 'a',
        'h', 'o', 'o', '.', 'c', 'o',
        'm'
      ]
    },
    {
      email: 'jeramie25@hotmail.com',
      password: '$2a$08$DOCQHcUDgQoMXsvFMUd74OFqQv4ExgOY4DIzZpPHecWSLMwJ/93DG',
      tasks: [
        'j', 'e', 'r', 'a', 'm',
        'i', 'e', '2', '5', '@',
        'h', 'o', 't', 'm', 'a',
        'i', 'l', '.', 'c', 'o',
        'm'
      ]
    },
    {
      email: 'ole.altenwerth@yahoo.com',
      password: '$2a$08$HKTLD56Hvh6Il6oCU4KpoOMCCRBXcOo3II8S4PvyIKWryMIQPXFH.',
      tasks: [
        'o', 'l', 'e', '.', 'a',
        'l', 't', 'e', 'n', 'w',
        'e', 'r', 't', 'h', '@',
        'y', 'a', 'h', 'o', 'o',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'kurtis4@gmail.com',
      password: '$2a$08$E/dqaCIJWkOHBl3kkx7vBeiDWpKjlYjyf7H9tgcrwj6WjuXJQxMIC',
      tasks: [
        'k', 'u', 'r', 't', 'i',
        's', '4', '@', 'g', 'm',
        'a', 'i', 'l', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'edward34@yahoo.com',
      password: '$2a$08$NdgAm3KtaaaYZz8RhQgYkuh4gO1EfkSnNtvefXhKiI6xyOabDhhcq',
      tasks: [
        'e', 'd', 'w', 'a', 'r',
        'd', '3', '4', '@', 'y',
        'a', 'h', 'o', 'o', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'onie_bahringer@hotmail.com',
      password: '$2a$08$0z1i7vB7yuEptPqsewQ2PO3d3n.woPZ8qjcW8wM97QqCuewSCXKFK',
      tasks: [
        'o', 'n', 'i', 'e', '_', 'b',
        'a', 'h', 'r', 'i', 'n', 'g',
        'e', 'r', '@', 'h', 'o', 't',
        'm', 'a', 'i', 'l', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'landen17@hotmail.com',
      password: '$2a$08$ju90HOl6Wzyn3T/4dAfIMuej8Q.WJuKeUuWOeohEb29nK1xpx0DU2',
      tasks: [
        'l', 'a', 'n', 'd', 'e',
        'n', '1', '7', '@', 'h',
        'o', 't', 'm', 'a', 'i',
        'l', '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'jarred.hessel86@hotmail.com',
      password: '$2a$08$L1sUr/nGFtO7KN464oQ/YeM6y0GBelmXJFv98NqnLusSW7XaDd2H6',
      tasks: [
        'j', 'a', 'r', 'r', 'e', 'd',
        '.', 'h', 'e', 's', 's', 'e',
        'l', '8', '6', '@', 'h', 'o',
        't', 'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'haylee66@gmail.com',
      password: '$2a$08$TaIZHLUBQf5Id3eLJIEYCO4JbIKAum0OxQLwFOHjMVu7ldi/IIlnC',
      tasks: [
        'h', 'a', 'y', 'l', 'e',
        'e', '6', '6', '@', 'g',
        'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'jedediah.welch@yahoo.com',
      password: '$2a$08$5MZ6XPWENGNIEmwXforesOuBs45Cz8zCYuuK3FBASD59T5Y6A7B9a',
      tasks: [
        'j', 'e', 'd', 'e', 'd',
        'i', 'a', 'h', '.', 'w',
        'e', 'l', 'c', 'h', '@',
        'y', 'a', 'h', 'o', 'o',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'mylene4@yahoo.com',
      password: '$2a$08$NN8jp8ZKu7HxYUMOGXuaEOGJ2Xgc9Yh0DRv4E.C4YNIhx4cXkQ0w.',
      tasks: [
        'm', 'y', 'l', 'e', 'n',
        'e', '4', '@', 'y', 'a',
        'h', 'o', 'o', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'ottilie20@gmail.com',
      password: '$2a$08$v045cnRakYNXrViJ3Aflt.dldJTnIzwQlhqZnlYNbnZh3zyEJS.Ay',
      tasks: [
        'o', 't', 't', 'i', 'l',
        'i', 'e', '2', '0', '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'maudie_cummerata@yahoo.com',
      password: '$2a$08$oufSlSFpL59tMa9Ri.SxeuAo13CJE7lw9rdL9tO3sNRedL7Us82Rq',
      tasks: [
        'm', 'a', 'u', 'd', 'i', 'e',
        '_', 'c', 'u', 'm', 'm', 'e',
        'r', 'a', 't', 'a', '@', 'y',
        'a', 'h', 'o', 'o', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'melisa74@gmail.com',
      password: '$2a$08$w/lIbGDgkPBcuuDt8a4by.DfSIhU/lGKI5tKBnzq830C/aSHSg75q',
      tasks: [
        'm', 'e', 'l', 'i', 's',
        'a', '7', '4', '@', 'g',
        'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'candido10@gmail.com',
      password: '$2a$08$JqxBhKeRz1CIYb67GAtILeYi0hA8r.KJ6IpVwgJEUoaH.aiYNbQsm',
      tasks: [
        'c', 'a', 'n', 'd', 'i',
        'd', 'o', '1', '0', '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'alejandra.will28@hotmail.com',
      password: '$2a$08$JUNo.3hVSnM7UNCkOpVxM.RKSO5.yq8G1FaWm.KGetRhjc0m14tie',
      tasks: [
        'a', 'l', 'e', 'j', 'a', 'n',
        'd', 'r', 'a', '.', 'w', 'i',
        'l', 'l', '2', '8', '@', 'h',
        'o', 't', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'alfredo_littel@gmail.com',
      password: '$2a$08$dFBWEhiThu4HY8ON53PBL.tLv.Cz8D1vdLdqOnlxtdlT4WVYd/tue',
      tasks: [
        'a', 'l', 'f', 'r', 'e',
        'd', 'o', '_', 'l', 'i',
        't', 't', 'e', 'l', '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'ona_halvorson@gmail.com',
      password: '$2a$08$PDRKrlnkJwkXSusQR6twq.j/1RUFDvc33Gjqav10kQVXiGm2aNew6',
      tasks: [
        'o', 'n', 'a', '_', 'h',
        'a', 'l', 'v', 'o', 'r',
        's', 'o', 'n', '@', 'g',
        'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'rowena67@yahoo.com',
      password: '$2a$08$W2U7YNOqXh7XmqOCyrxxO.Bqjv0XQDun16T30Ucrex0Bz/HHTmf/G',
      tasks: [
        'r', 'o', 'w', 'e', 'n',
        'a', '6', '7', '@', 'y',
        'a', 'h', 'o', 'o', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'lillie86@yahoo.com',
      password: '$2a$08$qA2RX79APz6byuHFGgPp7e7gMTubNKuYChatFjz2dqnHiOUGBfRRu',
      tasks: [
        'l', 'i', 'l', 'l', 'i',
        'e', '8', '6', '@', 'y',
        'a', 'h', 'o', 'o', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'aileen_leffler94@yahoo.com',
      password: '$2a$08$4mNd1CPpfbKKXNc.TIe0pu8X2peeAB.KXtAqDCHB0gNcQiXVQSLWS',
      tasks: [
        'a', 'i', 'l', 'e', 'e', 'n',
        '_', 'l', 'e', 'f', 'f', 'l',
        'e', 'r', '9', '4', '@', 'y',
        'a', 'h', 'o', 'o', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'christian73@yahoo.com',
      password: '$2a$08$g3cGgODaf5.51zUvXPoro.sL2xcUf5ipbosD/6BAaYQ1fPRv4/CJ.',
      tasks: [
        'c', 'h', 'r', 'i', 's',
        't', 'i', 'a', 'n', '7',
        '3', '@', 'y', 'a', 'h',
        'o', 'o', '.', 'c', 'o',
        'm'
      ]
    },
    {
      email: 'cortez10@hotmail.com',
      password: '$2a$08$fEbN/2qiU6ymiOQ6AYPg4ul7dumidHQpMg.uMNjT8/wv5k10LrQhG',
      tasks: [
        'c', 'o', 'r', 't', 'e',
        'z', '1', '0', '@', 'h',
        'o', 't', 'm', 'a', 'i',
        'l', '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'guadalupe.boyle@yahoo.com',
      password: '$2a$08$BQc1vl68uwtXLUzIqWhSVurHltVqnJAmapfWi86c1KVRzcW.KyLSu',
      tasks: [
        'g', 'u', 'a', 'd', 'a', 'l',
        'u', 'p', 'e', '.', 'b', 'o',
        'y', 'l', 'e', '@', 'y', 'a',
        'h', 'o', 'o', '.', 'c', 'o',
        'm'
      ]
    },
    {
      email: 'renee8@hotmail.com',
      password: '$2a$08$SUlrtzm7VpdtdNbZBIvR/ugt7muVNwF0r67g./iyUOYE9mzQaSGmq',
      tasks: [
        'r', 'e', 'n', 'e', 'e',
        '8', '@', 'h', 'o', 't',
        'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'justus_will90@yahoo.com',
      password: '$2a$08$qzIt5T.yo8y7XkxuAGZ/4.U7fg3jgu8y/3gHPvHtEbiRYjB0SFHim',
      tasks: [
        'j', 'u', 's', 't', 'u',
        's', '_', 'w', 'i', 'l',
        'l', '9', '0', '@', 'y',
        'a', 'h', 'o', 'o', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'joelle.zboncak@gmail.com',
      password: '$2a$08$dOvYZ5rh.2rj265ZU9dcjuNcdicoeI2dghURVL7ekoSsX.5uDwqtO',
      tasks: [
        'j', 'o', 'e', 'l', 'l',
        'e', '.', 'z', 'b', 'o',
        'n', 'c', 'a', 'k', '@',
        'g', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'zoie_denesik@hotmail.com',
      password: '$2a$08$pUO5P1cNv3N.82a/uWX80eU7VqoaNhqk0ccUj/Au5sJ3hFKgNhg1i',
      tasks: [
        'z', 'o', 'i', 'e', '_',
        'd', 'e', 'n', 'e', 's',
        'i', 'k', '@', 'h', 'o',
        't', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'iliana_williamson@gmail.com',
      password: '$2a$08$tmJ9dC15PaJPDHe.IimbP.BLxXcVg5rIHMM.wPrIdItZ55Ijtnqde',
      tasks: [
        'i', 'l', 'i', 'a', 'n', 'a',
        '_', 'w', 'i', 'l', 'l', 'i',
        'a', 'm', 's', 'o', 'n', '@',
        'g', 'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'carlotta21@hotmail.com',
      password: '$2a$08$QaEicgK0VCbWG.vekYzScuH0RYYPk2EF0kRTbRYcUXiScht4SC88K',
      tasks: [
        'c', 'a', 'r', 'l', 'o',
        't', 't', 'a', '2', '1',
        '@', 'h', 'o', 't', 'm',
        'a', 'i', 'l', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'lilla.kassulke@yahoo.com',
      password: '$2a$08$ykNLS8IY5kD8OK8Np2DbkOsrikG0xQ4Bg2rEKL2rjdxCxZHVWGL1K',
      tasks: [
        'l', 'i', 'l', 'l', 'a',
        '.', 'k', 'a', 's', 's',
        'u', 'l', 'k', 'e', '@',
        'y', 'a', 'h', 'o', 'o',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'louvenia.smitham@hotmail.com',
      password: '$2a$08$nnboWvEmZgNsmpiN5QQ0BukuHH6xXdLYLkNcWunzbEWJ.qPV/oaQ6',
      tasks: [
        'l', 'o', 'u', 'v', 'e', 'n',
        'i', 'a', '.', 's', 'm', 'i',
        't', 'h', 'a', 'm', '@', 'h',
        'o', 't', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'elnora_macgyver70@gmail.com',
      password: '$2a$08$bwMq1oqJGunA7YfZKPOj3ewpcRIWRsqYe4qNdsI4W4M6nph49SuNm',
      tasks: [
        'e', 'l', 'n', 'o', 'r', 'a',
        '_', 'm', 'a', 'c', 'g', 'y',
        'v', 'e', 'r', '7', '0', '@',
        'g', 'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    },
    {
      email: 'marques.strosin@yahoo.com',
      password: '$2a$08$PiwrzTqVwP8BaKI88BwRJu7Itl4GhO2s6emfrQk9QQnB.zAUyf7nq',
      tasks: [
        'm', 'a', 'r', 'q', 'u', 'e',
        's', '.', 's', 't', 'r', 'o',
        's', 'i', 'n', '@', 'y', 'a',
        'h', 'o', 'o', '.', 'c', 'o',
        'm'
      ]
    },
    {
      email: 'tate.stamm85@hotmail.com',
      password: '$2a$08$gtd7ai2Q7rVVabaUtAwz1eAxFuPTAaCW2zLVpS3XWyAL1lZ18yr.e',
      tasks: [
        't', 'a', 't', 'e', '.',
        's', 't', 'a', 'm', 'm',
        '8', '5', '@', 'h', 'o',
        't', 'm', 'a', 'i', 'l',
        '.', 'c', 'o', 'm'
      ]
    },
    {
      email: 'ignatius.pollich@yahoo.com',
      password: '$2a$08$x6n3nwBXOaJqbvlWj9G2guufJ.la6DzlmYzmuyd17i/mfDUqtm7e.',
      tasks: [
        'i', 'g', 'n', 'a', 't', 'i',
        'u', 's', '.', 'p', 'o', 'l',
        'l', 'i', 'c', 'h', '@', 'y',
        'a', 'h', 'o', 'o', '.', 'c',
        'o', 'm'
      ]
    },
    {
      email: 'eleonore.hickle@hotmail.com',
      password: '$2a$08$pt0iRSxWszapmh/OgrAUlOvG4o/dBsUVC9C3pDKNSeTNBcAMUQ8/6',
      tasks: [
        'e', 'l', 'e', 'o', 'n', 'o',
        'r', 'e', '.', 'h', 'i', 'c',
        'k', 'l', 'e', '@', 'h', 'o',
        't', 'm', 'a', 'i', 'l', '.',
        'c', 'o', 'm'
      ]
    }
  ] );
