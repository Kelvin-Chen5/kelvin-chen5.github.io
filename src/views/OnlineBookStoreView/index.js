const OnlineBookStore = () => {
    return (
        <>
            <div class="row">
                <div class="center col-5">
                    <h1><b>Online Book Store</b></h1>
                    <body>
                        I remotely collaborated in a team of 2 (with Katie) to create an online book store website that supports online transactions. The website allows users to register and login as clients; authenticated users can then select and purchase provided books with a shopping cart on the side. Built through JavaScript, utilizes Firebase for authentication and the database, and uses Git as source control.
                        <br/>
                        <br/>
                        Try out the website here! --&gt; <a href="https://project-92580.web.app" target="_blank" rel="noreferrer"><button class="btn btn-success">https://project-92580.web.app</button></a>
                        <br/>
                        (Please avoid using real credit card information. Use test cards from here instead: <a href="https://stripe.com/docs/testing">https://stripe.com/docs/testing</a>)
                    </body></div>

                <div class="col-6">
                    <h3><b>Website Demo</b></h3>
                    <iframe class="container-fluid" width="768" height="432" src="https://www.youtube.com/embed/RwEbRfLfw_c" title="Online Book Store Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </>
    );
}

export default OnlineBookStore;