const backgroundMusic = new Audio(
  "https://t.sawczak.com/misc_assets/ics-hosting/jc-001.mp3"
); // Music by Krzysztof Szymanski sourced from Pixaby

backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

//Opens the menu with things such as settings and instructions 
const openMenu = () => {
  $('#helpMenu').removeClass('hide');
  $('#welcomeScreen').addClass('hide');
};
const closeMenu = () => {
  $('#helpMenu').addClass('hide');
  $('#welcomeScreen').removeClass('hide');
};

//Opens the instructions screen
const openInstructions = () => {
  $('#instructions').removeClass('hide');
  $('#helpMenu').addClass('hide');
};
const closeInstructions = () => {
  $('#instructions').addClass('hide');
  $('#helpMenu').removeClass('hide');
};

//Open the load game screen
const openLoadScreen = () => {
  $('#loadGame').addClass('hide');
  $('#welcomeScreen').addClass('hide');

}; 

//Plays the music by looping things around. 8 bit sound
const useMusic = () => {
  console.log("Sound Succesfull");
  backgroundMusic.play();
};

//Runs the code
$("#play-button").click(useMusic);

$('#menu-button').click(openMenu);
$('#menu-close').click(closeMenu);


$('#instructions-button').click(openInstructions);
$('#returnButton').click(closeInstructions);

$('#play-button').click(openLoadScreen);