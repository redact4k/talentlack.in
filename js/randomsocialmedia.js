/* exported cl */
var lastsocial = 0
function clickLogo() {
	// make random num between 1 and 4 //
	var totalsocials = 6
	var socialnum = Math.floor(Math.random() * totalsocials + 1);
	
	/* check if rand was same as last */
	if (socialnum == lastsocial) {
		do {
		socialnum = Math.floor(Math.random() * totalsocials + 1);
		} while (socialnum == lastsocial)
	}
	lastsocial = socialnum
		
	/* link socials depending on number */
	switch(socialnum) {
		case 1:
			window.open("https://twitter.com/TalentLacking");
			break;
		case 2:
			window.open("https://www.youtube.com/c/LarryTL");
			break;
			
		case 3:
			window.open("https://www.twitch.tv/talentlacking");
			break;
		case 4:
			window.open("https://www.tiktok.com/@talentlacking");
			break;
		case 5:
			window.open("https://talentlacking.tumblr.com/");
			break;
		case 6:
			window.open("https://youtu.be/dQw4w9WgXcQ");
			break;
	}
}