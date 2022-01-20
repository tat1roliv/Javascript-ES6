var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

////////////////////////////////////////////////////////////////

for (var i = 0; i < 10; i++) {
  console.log(i);
 }

var j = 0;
while (j < 10) {
  console.log(j);
  j++; 
}

//////////////////////////////////////////////////////

var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var k = 0; k < videoGames2.length; k++) {
    console.log(videoGames2[k]);

    if(videoGames2[k] === 'PS4') {
        break;
    }

}

//////////////////////////////////////////////////////////

var videoGames3 = ['Switch3', 'PS43', 'XBox3', '3DS3'];
videoGames3.forEach(function(item) {
  console.log(item);
});


