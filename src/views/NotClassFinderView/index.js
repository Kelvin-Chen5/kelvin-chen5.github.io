import {notClassFinderImg} from "../../images"

const NotClassFinder = ({}) => {
    return (
        <>
            <div class="row">
                <div class="center col-5">
                    <h1><b>!ClassFinder</b> <i>(a.k.a. "Not ClassFinder")</i></h1>
                    <body>
                        This was year-long project collaborating in a team of 6 to create a new app to replace Western Washington University’s course lookup app: “ClassFinder”. !ClassFinder greatly improves the user interface and relieves the unnecessary cognitive overhead away from building schedules by hand (a feature ClassFinder lacked). We created Vision & Scope and Software Requirements Specifications (SRS) documents, and delivered progress on regular milestones and weekly reports. As part of the backend team, I helped with user research, worked on creating our API, SQL database, and load and unit testing; used Git as source control.
                    </body>

                    <br/>
                    <a href="https://admin.wwu.edu/pls/wwis/wwsktime.SelClass"><button class="btn btn-primary">WWU ClassFinder Link</button></a></div>
                    
                <div class="col-6">
                    <a href="https://www.canva.com/design/DAFDtUxXwY8/BYhMIM8dh9iCIwT8RIeeIw/view?utm_content=DAFDtUxXwY8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
                        <h3><b>!ClassFinder Presentation and Demo</b></h3></a>
                    <a href="https://www.canva.com/design/DAFDtUxXwY8/BYhMIM8dh9iCIwT8RIeeIw/view?utm_content=DAFDtUxXwY8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank">
                        <img src={notClassFinderImg} height="400px"/></a>
                </div>
            </div>
        </>
    );
}

export default NotClassFinder;