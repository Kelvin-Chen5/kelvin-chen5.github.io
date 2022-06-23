const DeadwoodGame = ({}) => {
    return (
        <>
            <div class="row">
                <div class="col-left col-5">
                    <h1><b>Deadwood Game</b></h1>
                    <body>
                        With one other person (Adrian) and myself, we collaborated to implement the Deadwood Card Game into a playable program with a graphical user interface. While working on the project, I learned and applied object-oriented code designs such as Model-View-Controller (MVC) and Singleton. Additionally, I learned the importance of high cohesion and low coupling in coding a project. This project was mainly coded with Java and JavaFX.
                    </body>

                    <br/>
                    <a href="https://www.hercampus.com/school/wwu/ghost-stacks/"><button class="btn btn-primary">Reference Link to the Haunted Stories at the Wilson Library</button></a>
                    
                    <br/><br/>
                    <img src="https://library.wwu.edu/files/resize/Northwest%20Collection-300x225.JPG" alt="libraryImg"/></div>

                <div class="col-6">
                    <h3><b>Gameplay Demo</b></h3>
                    <iframe width="768" height="432" src="https://youtu.be/0PelAMuw_Gs" allowfullscreen/></div>
            </div>
        </>
        
    );
}

export default DeadwoodGame;