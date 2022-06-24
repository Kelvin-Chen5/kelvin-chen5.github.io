const MangaMangaApp = () => {
    return (
        <>
            <div class="row">
                <div class="center col-5">
                    <h1><b>MangaManga App</b></h1>
                    <body>
                        I collaborated in a team of 3 to create a visually pleasing android app that helps users easily and conveniently find manga they want to read. Users can search by title or author, and save the recommendations to specified lists. We implemented power saving features such as dark mode, caching, and batch loading. The app was built through Kotlin and Android Studio, it accesses a public API (Kitsu.io), utilizes a SQL database, and uses Git as source control.
                    </body>
                    <br/>
                    <a href="https://kitsu.docs.apiary.io" target="_blank" rel="noreferrer"> 
                        <img width="300px" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1483996064/bry24vyez4pkm83sojkl.png" alt="kitsuImg"/></a></div>
                    
                <div class="col-6">
                    <h3><b>App Demo</b></h3>
                    <iframe class="container-fluid" width="768" height="432" src="https://www.youtube.com/embed/cL_po6AwFgo" title="MangaManga App Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </>
    );
}

export default MangaMangaApp;