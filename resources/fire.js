$(document).ready(function(){
   $('#audio-placeholder').hover(
       function(){
         //runs on mouseover
         $('#audio-controls').fadeIn();
       },
       function(){
         //runs on mouseout
         hideAudioControls(); 
       }
   );
  hideAudioControls(); //runs at startup
});

function hideAudioControls(){
   setTimeout(function(){
     $('#audio-controls').fadeOut();
   },3000);
}
