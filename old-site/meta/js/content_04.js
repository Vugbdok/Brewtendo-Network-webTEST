function load_04() {
	return `
		<div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('old-site/meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
            	<h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('old-site/meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
    	</div>
			<img src="old-site/meta/images/MiiTeamData/FounderTeam.png" width="250" alt="Founder"/>
			<img src="old-site/meta/images/MiiTeamData/OwnerTeam.png" width="200" alt="Owner"/>
			<img src="old-site/meta/images/MiiTeamData/AdminTeam.png" width="800" alt="Administrators"/>
		</div>
		</div>
    `;
}
