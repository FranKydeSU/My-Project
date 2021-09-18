import YoutubeIcon from '../pictures/youtube_icon.png'

function Header() {
    return (
        <header>
            <h1>The<strong>Anime</strong>Database</h1>
            <h2>By 
                    <a 
						href="https://www.youtube.com/channel/UCBBGM84ZOs7z5jpTQAaZ_Hg" 
						target="_blank"
						rel="noreferrer">
                        Tyler Potts 
                    <span> </span>
                <img src={YoutubeIcon} alt="YoutubeIcon"/>
                </a>
                </h2>
        </header>
    )
}

export default Header
