// Each name should be in the format "Stu1, Stu2, and Stu3" with a URL for the student's Google slides
var projects = [
    ["Student 1", 
     "https://docs.google.com/presentation/d/e/2PACX-1vQ3am9IzsdhSoA0o8wRVU9b-5tRMiGWcib2-odPmYpTlsJppfUW_DeMaWvgQ3gv1tsX6w_pfF_4BnIv/pubembed?start=false&loop=false&delayms=5000"],
    ["Student 2 and Student 3", 
     "https://docs.google.com/presentation/d/another-slide-id/embed"]
];

function generateCard(title, slidesUrl, filePrefix) {
    const encodedSlides = encodeURIComponent(slidesUrl);
    const encodedNotebook = encodeURIComponent("notebooks/" + filePrefix + ".pdf");
	const image = "images/" + filePrefix + ".png"

    return `
    <div class="col-md-4 mb-4">
        <div class="card h-100">
        	<div class="card-body">
                <h5 class="card-title text-center">${title}</h5>
            </div>
            <a href="project.html?slides=${encodedSlides}&notebook=${encodedNotebook}" target="_blank">
                <img src="${image}" class="card-img-top" alt="First slide preview for ${title}" style="object-fit:cover; aspect-ratio:16/9;">
            </a>
        </div>
    </div>`;
}

function renderProjects() {
    const grid = document.getElementById('grid');
    let html = '<div class="row">';
    
    projects.forEach(project => {
        var name = project[0];
        var slidesUrl = project[1];
        var filePrefix = name.replace(" and ","").replaceAll(" ","").replaceAll(",","");
        html += generateCard(name, slidesUrl, filePrefix);
    });
    
    html += '</div>';
    grid.innerHTML = html;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', renderProjects);