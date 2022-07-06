const DeadwoodGame = () => {
    return (
        <>
            <div class="row">
                <div class="center col-5">
                    <h1><b>Deadwood Game</b></h1>
                    <body>
                        With one other person (Adrian) and myself, we collaborated to implement the Deadwood Card Game into a playable program with a graphical user interface. While working on the project, I learned and applied object-oriented code designs such as Model-View-Controller (MVC) and Singleton. Additionally, I learned the importance of high cohesion and low coupling in coding a project. This project was mainly coded with Java and JavaFX.
                    </body>

                    <br/>
                    <a href="https://en.wikipedia.org/wiki/Deadwood_(game)" target="_blank"><button class="btn btn-primary">Reference Link to the Game</button></a></div>

                <div class="col-6">
                    <h3><b>Gameplay Demo</b></h3>
                    <iframe class="container-fluid" width="768" height="432" src="https://www.youtube.com/embed/0PelAMuw_Gs" title="Deadwood Gameplay Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </>
        
    );
}

export default DeadwoodGame;