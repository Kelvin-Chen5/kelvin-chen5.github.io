import { Nav } from "react-bootstrap";
import {
    kelvinImg,
    wwuImg,
    hi10Img,
    sinihhaImg
} from "../../images"

const AboutMe = () => {
    return (
        <div class="row">
            <div class="col-sm-5 col-md-4 col-lg-3">
                <img src={kelvinImg} width="250px" alt="img"/>
                <br/>
                <h2><b>Projects I’ve Worked On:</b></h2>
                <ul>
                    <li><Nav.Link href="/#/MangaMangaApp">
                        {/* <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" height="40px" alt="img"/> */}
                        <button class="btn btn-primary">MangaManga App</button></Nav.Link></li>
                    <li><Nav.Link href="/#/NotClassFinder">
                        <button class="btn btn-primary">!ClassFinder</button></Nav.Link></li>
                    <li><Nav.Link href="/#/OnlineBookStore">
                        <button class="btn btn-primary">Online Book Store</button></Nav.Link></li>
                    <li><Nav.Link href="/#/HauntingOfWilsonGame">
                        <button class="btn btn-primary">The Haunting Of Wilson Game</button></Nav.Link></li>
                    <li><Nav.Link href="/#/UshMicroshellProject">
                        <button class="btn btn-primary">Ush Microshell Project</button></Nav.Link></li>
                    <li><Nav.Link href="/#/DeadwoodGame">
                        <button class="btn btn-primary">Deadwood Game</button></Nav.Link></li>
                </ul>
            </div>

            <div class="col-right col-11 col-sm-4">
                <h2><b>About Me:</b></h2>
                    <div class="row">
                        <div class="col-8 col-sm-10 col-lg-8">
                            <body>
                                Hello! My name is Kelvin Chen. I’m an aspiring software engineer that enjoys solving problems and cooperating with others to make processes more efficient. Currently, I graduated from <b>Western Washington University</b> with a Bachelor’s degree in Computer Science and a Minor in Chinese. At the moment, I'm actively looking for available jobs as a software engineer or developer.</body></div>
                        <div class="col-4 col-sm-2 col-lg-4">
                            <img class="img-fluid" src={wwuImg} width="150px" alt="wwuImg"></img></div>
                    </div>
                    
                <br/>
                <body>
                    Throughout my computer science education, I’ve learned mobile app development (specifically in Android), web scripting, game development with using the Unity game engine, code algorithms (ex. search and sorting ones), data structures, the importance runtime and space complexity, object-oriented code designs, cohesion and coupling, how the computer and operating systems work, threads and processes, and computer networks.
                </body>
                
                <br/>
                <h5><b>Main Coding Languages I Have Experience With:</b></h5>
                <ul>
                    <li>JavaScript (1 years)</li>
                    <li>Kotlin (1 year)</li>
                    <li>Java (3 years)</li>
                    <li>Python (2 years)</li>
                    <li>C (2 years)</li>
                    <li>HTML (basic)</li>
                    <li>C# (1 year)</li>
                </ul>

                <br/>
                <body>
                    Also, a few of the hobbies I really enjoy are playing video games, watching anime, dancing, and playing volleyball! ^_^ My favorite anime is "Haikyuu!!", and recently my favorite games to play are "The Witcher 3: Wild Hunt" and "Teamfight Tactics". The anime I'm currently watching are One Piece, Dr. Stone, and Jojo's Bizarre Adventure Part 4: Diamond Is Unbreakable. At my university, I participated in a couple dance clubs: SINI-HHA (an all-inclusive Hip-Hop dance club) and High Intensity (a K-pop dance cover club, and I was the president of this club for the 2021-2022 school year). Also, I played in multiple intramural teams for volleyball throughout the school year.
                </body>

                <br/>
                
                
            </div>

            <div class="col-right-right col-sm-2 col=md-3 col-lg-4">
                <center><div class="row">
                    <div class="col-6">
                        <img class="logo" src={hi10Img} width="50px" alt="hi10Img"/>
                        <a href="https://www.youtube.com/channel/UCHKePqvqdErA8V3rKkQqKig" target="_blank" rel="noreferrer">
                            <button class="btn btn-success">High Intensity YouTube</button></a></div>
                    <div class="col-6">
                        <img class="logo" src={sinihhaImg} width="50px" alt="hi10Img"/>
                        <a href="https://www.youtube.com/c/SINIHHA" target="_blank" rel="noreferrer">
                            <button class="btn btn-success">SINI-HHA YouTube</button></a></div>
                </div></center>

                <br />

                <div class="row">
                    <div class="center col-4">
                        <img class="img-fluid" width="300px" src="https://m.media-amazon.com/images/M/MV5BNzQ1MmJjZDUtMmI5OC00ZDk2LThkODQtODgwYmU0MTIzNDhmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_FMjpg_UX1000_.jpg" alt="haikyuuImg"/></div>
                    <div class="center col-4">
                        <img class="img-fluid" width="300px" src="https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64" alt="witcher3Img"/></div>
                    <div class="center col-4">
                        <img class="img-fluid" width="300px" src="https://static-cdn.jtvnw.net/ttv-boxart/513143-272x380.jpg" alt="tftImg"/></div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <img class="img-fluid" src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="onePieceImg"/></div>
                    <div class="col-4">
                        <img class="img-fluid" src="https://m.media-amazon.com/images/M/MV5BOTI4YWNlNzMtNWU3Yi00OTBmLWEyOTYtZjAyYTM5NWZkMWM4XkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_FMjpg_UX1000_.jpg" alt="drStoneImg"/></div>
                    <div class="col-4">
                        <img class="img-fluid" src="https://static.wikia.nocookie.net/ninjajojos-bizarre-adventure/images/1/15/JoJoPart4.jpg" alt="jojoPart4Img"/></div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;