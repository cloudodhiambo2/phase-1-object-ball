function gameObject(){
    const object = {
        home:{
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            },
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
            },
        },
    }
    return object
}
console.log(gameObject());
//step 2: building functions

//first: Function
function numPointsScored(playerName){
    let object = gameObject()
    let homePlayersObject = object['home']['players']
    if (playerName in homePlayersObject){
        return object['home']['players'][playerName]['points']
    }else{
        return object['away']['players'][playerName]['points']
    }
  
}
console.log(numPointsScored('Jeff Adrien'))

//second: Function 
function shoeSize(playerName){
let object = gameObject()
let homePlayersObject = object['home']['players']
if(playerName in homePlayersObject){
    return object['home']['players'][playerName]['shoe']
}else{
    return object['away']['players'][playerName]['shoe']
}
}
console.log(shoeSize('Brendan Haywood'))

//Third: Function
function teamColors (teamName){
    let object = gameObject()
    let teamNameObject = object['home']['teamName']
    if(teamName === teamNameObject){
        return object['home']['colors']
    }else{
        return object['away']['colors']
    }
}
console.log(teamColors('Charlotte Hornets'))

//Fourth: Function
function teamNames(){
    let object = gameObject()
    let teams = []
    for(let key in object){
        teams.push(object[key]['teamName'])
    }
    return teams
}
console.log(teamNames())

//Fifth: Function
function playerNumbers(teamName){
    let object = gameObject()
    let jerseyNumbers = []
    if(teamName === 'Brooklyn Nets'){
        for(let key in object['home']['players']){
            jerseyNumbers.push(object['home']['players'][key]['number'])
        }
    }
    else if(teamName === 'Charlotte Hornets'){
        for(let key in object['away']['players']){
            jerseyNumbers.push(object['away']['players'][key]['number'])
        }
    }
    return jerseyNumbers
}
console.log(playerNumbers('Charlotte Hornets'))

//Sixth: Function
function playerStats(playerName){
    let object = gameObject()
    let playerStatsObject = ''
    for(let key in object){
        if(playerName in object[key]['players']){
            playerStatsObject = object[key]['players'][playerName]
        }

    }
    return playerStatsObject
}
console.log(playerStats('Bismak Biyombo'))

//Seventh: Function
function bigShoeRebounds(){
    let object = gameObject()
    let playerShoe = 0
    let playerShoeRebound = 0
    let mergedObject = Object.assign({}, object['home']['players'], object['away']['players'])
    for(let key in mergedObject){
        if(playerShoe < mergedObject[key]['shoe']){
            playerShoeRebound = mergedObject[key]['rebounds']
        }
    }
    return playerShoeRebound
}
console.log(bigShoeRebounds())