function load_1() {
	return `
            <div class="navi-bar">
                <div id="center-navi">
                    <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                    <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                    <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                    <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
                </div>
            </div>
            <!--NOT AI BTW-->
            <h1 id="logo">Brewtendo</h1>
            <p>Site soon to be finished, look at <a href="#top" onclick="changeContent('progress'); swapStyleSheet('meta/css/guide.css');">progress page</a> to find out what's to be done</p>
            <div id="center-div">
                <div class="column">
                    <div class="style-center-div-nocolor" id="float">
                        <h4>View the guide to learn how to install Brewtendo on your 3DS!</h4>
                        <div id="bottom-pill-button" class="pill-button" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
                            <u>Installation guide</u>
                        </div>
                        <h4></h4>
                    </div>
                    <div class="style-center-div-nocolor" id="float">
                        <h4>Wanna learn how to install Badge Arcade on your 3DS, look at  this guide to find out!</h4>
                        <div id="bottom-pill-button" class="pill-button" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
                            <u>Badge Arcade guide</u>
                        </div>
                        <h4>If you don't really know the badge arcade is, neither do i lol so i cant do much, devs, change this lmao</h4>
                    </div>
                </div>
                <div class="style-center-div-black" id="float"><u>Brewtendo Description:</u><br />Brewtendo is a Nintendo Network revival for the 3DS, it's not really trying to be a potential Pretendo rival, however. Instead it revives the things that they wouldn't add such as the eShop, Badge Arcade, Theme Shop, and Nintendo Video.<br />(devs lmk if i missed anything or you want me to add / change to this.)<img width="70" src="https://brewtendonetwork.github.io/meta/images/eShop.png" /><br />If you live under a rock and want insight to why the eShop <br />shut down in 2023 then look <span onclick="location.href='https://en-americas-support.nintendo.com/app/answers/detail/a_id/57847/~/wii-u-%26-nintendo-3ds-eshop-discontinuation-q%26a'"><u>here</u></span></div>
            </div>
    `;
}
