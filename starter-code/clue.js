var game = {
  suspects: [
    {firstName: "Jacob",
    lastName:  "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"},
  
    {firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"},
  
    {firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"},
  
    {firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"},
  
    {firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"},
    
    {firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"},
    ],
  
    weapons: [
    {type: "rope", weight: 10},
    {type: "knife", weight: 8},
    {type: "candlestick", weight: 2},
    {type: "Dumbbell", weight: 30},
    {type: "Poison", weight: 2},
    {type: "Axe", weight: 15},
    {type: "Bat", weight: 13},
    {type: "Trophy", weight: 25},
    {type: "Pistol", weight: 20},
    ],
  
    rooms: ["Dinning Room", "Conservatory", "Kitchen", "Study Library", "Billiard Room", "Lounge Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater",
    "Guest House", "Patio"],
  
    caseFileConfidential: {}
    }
  
  
  function random_selector(array) {
    var randomCardIndex = Math.floor(Math.random() * array.length);
    return array[randomCardIndex]
  }
  
  
  function pick_mistery() {
    var randomlySelectedSuspect = random_selector(game.suspects);
    var randomlySelectedWeapon = random_selector(game.weapons);
    var randomlySelectedRoom = random_selector(game.rooms);
    game.caseFileConfidential = { who: randomlySelectedSuspect.firstName, what: randomlySelectedWeapon.type, where: randomlySelectedRoom}     
  }
  
  function reveal_mistery(mistery) {
    console.log("The character is: " + game.caseFileConfidential.who)
    console.log("The weapon is: " + game.caseFileConfidential.what)
    console.log("The room is: " + game.caseFileConfidential.where)
  }
  
  var mistery_envelope = pick_mistery();
  reveal_mistery(mistery_envelope);
  
  