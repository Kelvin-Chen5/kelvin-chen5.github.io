import { Nav } from "react-bootstrap";

const AboutMe = ({}) => {
    return (
        <>
            <h2><b>About Me:</b></h2>
            <body>
                Hello there! My name is Kelvin Chen. I’m an aspiring software engineer that enjoys solving problems and cooperating with others to make processes more efficient. I’m currently a senior attending <b>Western Washington University</b> for my Bachelor’s degree in Computer Science, with plans to graduate on June 2022.
                <br/><br/>
                Throughout my computer science education so far, I’ve learned specific code algorithms (ex. search and sorting ones), data structures, the importance runtime and space complexity, object-oriented code designs, cohesion and coupling, how the computer and operating systems work, threads and processes, and computer networks. I’m currently in the process of learning how to use the Unity game engine.
            </body>
            
            <br/>
            <h5><b>Main Coding Languages I Have Experience With:</b></h5>
            <ul>
                <li>Java (2 years)</li>
                <li>Python (2 years)</li>
                <li>C (2 years)</li>
                <li>C# (1 year)</li>
                <li>HTML (basic)</li>
            </ul>

            <br/>
            <body>
                Also, a few of the hobbies I really enjoy are playing video games, watching anime, and dancing! ^_^ Recently, my favorite game to play is Genshin Impact, and I’m currently trying to catch up on One Piece (I started back in June 2021). At my university, I participate in a couple dance clubs: SINI-HHA (an all-inclusive Hip-Hop dance club) and High Intensity (a K-pop dance cover club, and I’m also the president of this club for this 2021-2022 school year).
            </body>

            <br/>
            <h2><b>Projects I’ve Worked On:</b></h2>
            <ul>
                <li><Nav.Link href="MangaMangaApp">
                    <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" height="40px" alt="img"/>
                    MangaManga App</Nav.Link></li>
                <li><Nav.Link href="NotClassFinder">
                    !ClassFinder</Nav.Link></li>
                <li><Nav.Link href="OnlineBookStore">
                    Online Book Store</Nav.Link></li>
                <li><Nav.Link href="HauntingOfWilsonGame">
                    The Haunting Of Wilson Game</Nav.Link></li>
                <li><Nav.Link href="UshMicroshellProject">
                    Ush Microshell Project</Nav.Link></li>
                <li><Nav.Link href="DeadwoodGame">
                    Deadwood Game</Nav.Link></li>
            </ul>
        </>
    );
}

export default AboutMe;