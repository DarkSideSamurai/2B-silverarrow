
// JavaScript Document
//Use for storylines
//Introduction
	
	
	/* OLD CODE	
		
		if(choice == "First door")
			story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. ";
			case "sword":
					document.getElementById("story").innerHTML = "You chose the SWORD. Their eyes follow you with skepticism and caution, but they do not seem to be hostile. Some of them notice the sword in your belt and narrow their eyes, but they continue their work. When the supervisor begins to yell at the quiet young woman next to you, and begins threatening her, what do you do?";
				// change buttons
					btn1 = document.createElement("BUTTON");
					btn1.setAttribute("onClick", "changeDisplay('Stand up for her')");
					btn1.innerHTML = "The supervisor flings his knife at you in anger. Quickly thinking, you dart to the side and catch it. You run to a building in the distance, and foolishly promise to come back for the other workers.";
					btn2 = document.createElement("BUTTON");
					btn2.setAttribute("onClick", "changeDisplay('Keep your head down')");
					btn2.innerHTML = "The supervisor notices the sword you hid in the reeds and pulls out his bow and arrow. He brings back the bowstring and releases before you can react. You're DEAD.";
					// you could add as many buttons as you needed here:
					document.getElementById("buttons").innerHTML = btn1 + btn2;
				break;
			
			case "bread":
				document.getElementById("story").innerHTML = "You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or make friends with him?";
			
					btn1 = document.createElement("BUTTON");
					
						btn1.setAttribute("onClick", "changeDisplay('Stand up to supervisor')");
						btn1.innerHTML = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. For a brief moment, you glare at each other. Suddenly, all you can see is the glint of his sword in the sunlight and then....darkness. sorry, you're DEAD!";
					
					btn2 = document.createElement("BUTTON");
						btn2.setAttribute("onClick", "changeDisplay('Make friends with the supervisor')");
						btn2.innerHTML = "Quickly thinking, you crack a funny joke at the supervisor. He looks at you blankly for a moment, but then his dark bearded face stretches into a smile. He pats your back and tells you that he will help you, sending you to a building in the distance.";
					
			
		
		if(choice == "Second door")
		case "bread":
				document.getElementById("story").innerHTML="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. You try to feed the bread to the wolves but your are in vain. The wolves lunge and pin you to the ground. The last thing you hear before the darkness consumes you is their howls. Sorry, you're DEAD!";
				
		case "sword":
			document.getElementById("story").innerHTML="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. Since you chose the SWORD, you are able to fend off the wolves. However, there are too many of them. You desperately sprint off into the trees and see two options. You can either run for a rusty door covered in ivy, or climb a tree.";
				// change buttons
					btn1 = document.createElement("BUTTON");
					btn1.setAttribute("onClick", "changeDisplay('Climb a tree')");
					btn1.innerHTML = "You foolishly attempt to scramble up a tree but the wolves are close at your heels. They drag you back down.....and pounce. Sorry, you're DEAD!";
					
					btn2 = document.createElement("BUTTON");
					btn2.setAttribute("onClick", "changeDisplay('Run for the door')");
					btn2.innerHTML = "You manage to make it to the door and close it firmly behind you. You are now in a dark building";
					// you could add as many buttons as you needed here:
					document.getElementById("buttons").innerHTML = btn1 + btn2;
				break;
			
		// Alec or Violet
		
		document.getElementById("story").innerHTML = "The building is built like a warehouse, with strange black pipes running along the ceiling and the faint hum of generators in the background. ";
			
		document.getElementById("story").innerHTML = "Suddenly, you hear a sound in the distance: It is like hundreds of footsteps in unison. You begin to run, and come across a hallway in which there are two arguing people standing several yards apart. They seem to not know each other very well. They see you. The raven haired, violet-eyed girl turns and says, 'Come with me if you want to live!' The cocky, brown-haired boy says, 'Don't go with her. She'll kill you before the others do.' The boy wears a strange uniform and the nametag reads 'Alec'. The girl has a necklace with dark gems spelling out 'Violet'.";
		
	function displayStory(choice) {
	switch(choice) {
		
			if(choice == "Alec")
			document.getElementById("story").innerHTML = "Suddenly, you hear a huge crash. The footstepts of the soldiers are getting closer. Alec's eyes widen in fear. He is vulnerable. Do you run away with him or knock him out for the soldiers to find so you can escape?"
						function displayStory(choice) {
								switch(choice) {
											if(choice == "Run together")
			
			if(choice == "Violet")
			document.getElementById("story").innerHTML = ""
			
			
			
			// copy code from above and adjust
		//case "east":
			// copy code from above and adjust
		//case "west":
			// copy code from above and adjust
	}
	*/

var bread = true;
var sword = true;
function displayStory(choice) {
	var story = "";
	var btn1 = "";
	var btn2 = "";
	switch(choice) {
		
//Door 1 or 2

case "bread/sword":
			story = "You wake up in a dark, dreary cave. You have no memory of your previous life, and the only thing in your mind is the echo of water dripping from the ceiling. You grab a backpack that sits in front of you on the cave floor. You have a pocket knife, some rope, dried fruit that won't last long, a water bottle half-full, and a jagged rock. You see two things in the cave: A sword and a package of bread. Which do you take? Only one will fit in your backpack.";
 			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('bread')");
			btn1.innerHTML = ("continue your journey.....");
			break;


case "Checkpoint1":
case "bread":
case "sword":
			story = "You notice a long hallway leading out of the cave. When you reach the end of the hallway, you are met with two doors. One is bright green and earthy, surrounded by vines. A cool breeze wafts from the crack beneath it. The other is black as coal, and is strangled with dried, withering tree branches. Intense heat flames from it. Which door will you choose?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('door1')");
			btn1.innerHTML = "Door 1";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('door2')");
			btn2.innerHTML = "Door 2";
			//image = "";
			break;
		
		
//door 1	
case "door1":
			if (bread) {
				story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or make friends with him";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('makeFriends')");
				btn1.innerHTML = "Make friends";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('standUpToSupervisor')");
				btn2.innerHTML = "Stand up to the supervisor";
				//image = "";
			}
			if(sword) {
				story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or keep your head down and continue working?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('keepHeadDown')");
				btn1.innerHTML = "Keep Head Down";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('standUp')");
				btn2.innerHTML = "Stand up to the supervisor";
				//image = "";
			}
			break;
			
//(bread) stand up/make friends
		
case "makeFriends":
			story = "You crack a funny joke at the supervisor. He looks at you blankly for a moment, but then his dark bearded face stretches into a smile. He pats your back and tells you that he will help you, sending you to a building in the distance.";
			break;
			//ACHIEVEMENT: BUILDING
			
case "standUpToSupervisor":
			story = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. For a brief moment, you glare at each other. Suddenly, all you can see is the glint of his sword in the sunlight and then....darkness. sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
			btn1.innerHTML = "Try again from the last CHECKPOINT :)";
			break;
		//RETURN TO CHECKPOINT//
		
//(sword) standUp/keep head down
			
case "keepHeadDown":
			story = "Though you stay well hidden among the group of laborers, you notice the supervisor is eyeing you strangely. You realize that he sees the sword hidden in your belt. You look back at him, hoping he will do nothing. Suddenly, he nocks an arrow in the bow on his back. Before you can react, he has released the bowstring. Sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
			btn1.innerHTML = "Try again from the last CHECKPOINT :)";
			break;
		//RETURN TO CHECKPOINT
		
case "standUp":
			story = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. The supervisor flings his knife at you in anger. Quickly thinking, you dart to the side and catch it. You run to a building in the distance, and foolishly promise to come back for the other workers.";
			break;
		//ACHIEMENT: BUILDING
		
		
		
//Door 2	
case "door2":

//door 2 (bread)
if( bread ) {
			story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. You try to feed the bread to the wolves but your are in vain. The wolves lunge and pin you to the ground. The last thing you hear before the darkness consumes you is their howls. Sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
			btn1.innerHTML = "Try again from the last CHECKPOINT :)";
			}
//door 2 (sword)
else {
			story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('runForDoor/climbTree')");
			btn1.innerHTML = "Continue your journey...";		
			}
			break;
			
case "runForDoor/climbTree":
			story = "Since you chose the SWORD, you are able to fend off the wolves. However, there are too many of them. You desperately sprint off into the trees and see two options. You can either run for a rusty door covered in ivy, or climb a tree";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('climbTree')");
			btn1.innerHTML = "Climb the tree";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('runForDoor')");
			btn2.innerHTML = "Run for the door";
			break;
			
case "climbTree": 
			story = "You attempt to scramble up the tree, and feel the wolves' hot breath on your heels. You grab at a branch, but it breaks in your hand. You fall to the ground and are winded as your back crashes into the leaves. The wolves growl and pounce at you. Sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
			btn1.innerHTML = "Try again from the last CHECKPOINT :)";
			break;
			
case "runForDoor":
			story = "You sprint towards the door as fast as your feet can go and manage to lever the door open with your sword. You quickly close the door behind you and barely escape the razor sharp teeth of the wild-eyed wolves. You are now in a dark, empty-halled building.";
			break;
			
			
			
	
	} // end switch
	
	// change content on page
	document.getElementById("story").innerHTML = story;
    var buttons = document.getElementById("buttons");
    while (buttons.firstChild) {
      buttons.removeChild(buttons.firstChild);
    }
	document.getElementById("buttons").appendChild(btn1);
    document.getElementById("buttons").appendChild(btn2);
}