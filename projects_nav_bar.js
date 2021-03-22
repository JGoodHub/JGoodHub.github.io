var prevPageRef = $("#projects-nav-bar").attr("data-prev-page");
var nextPageRef = $("#projects-nav-bar").attr("data-next-page");
var displayArrows = $("#projects-nav-bar").attr("data-display-prev-next");

var homePageRef = $("#projects-nav-bar").attr("data-home-page");
var projectsPageRef = $("#projects-nav-bar").attr("data-projects-page");
var contactPageRef = $("#projects-nav-bar").attr("data-contact-page");

$("#projects-nav-bar").html(/*html*/`
    <div class="container">
        <div class="row">
            <a class="col-2" href=${prevPageRef}>&larr; Prev</a>

            <div class="col-8 text-center">
                <a href=${homePageRef}>Home</a>
                |
                <a href=${projectsPageRef}>Browse Projects</a>
                |
                <a href=${contactPageRef}>Contact Me</a>
            </div>

            <a class="col-2" href=${nextPageRef}>Next &rarr;</a>
        </div>
    </div>
`);