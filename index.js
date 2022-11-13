const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  
});


let url = './resume.json';

async function myResume() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    console.log(data);

    // container 
    const jobExperiance = document.createElement("div");
    const education = document.createElement("div");
    jobExperiance.classList = "work";
    education.classList = "study";
    document.querySelector(".work-resume").append(jobExperiance);
    document.querySelector(".education-resume").append(education);

    // Names for my titels
    const jobTitel = document.createElement("h3");
    const educationTitel = document.createElement("h3");
    jobTitel.classList = "job-titel";
    educationTitel.classList = "education-titel";
    jobTitel.textContent = data.jobex;
    educationTitel.textContent = data.eduex;
    document.querySelector(".work").append(jobTitel);
    document.querySelector(".study").append(educationTitel);

    // text

    const jobNote = document.createElement("p")
    const educationNote = document.createElement("p");
    jobNote.classList = "job-note";
    educationNote.classList = "education-note";
    document.querySelector(".work").append(jobNote);
    document.querySelector(".study").append(educationNote);

    //import text from JSON
    
    

          for (let i = 0; i < data.jobexperience.length; i++) {
            const workRole = document.createElement("i");
            const workTitel = document.createElement("i");
            const workDesc = document.createElement("i");
            workRole.classList = "workRole";
            workTitel.classList = "workTitel";
            workDesc.classList = "workDesc";
            document.querySelector(".job-note").append(workRole);
            document.querySelector(".job-note").append(workTitel);
            document.querySelector(".job-note").append(workDesc);
            workRole.innerHTML = data.jobexperience[i].titel + "<br><br>";
            workTitel.innerHTML = data.jobexperience[i].enterprise +"<br><br>";
            workDesc.innerHTML = data.jobexperience[i].desc + "";
          
          }
    
    

        for (let i = 0; i < data.education.length; i++) {
          const educationalRole = document.createElement("i");
          const educationTitel = document.createElement("i");
          const educationDesc = document.createElement("i");
          educationalRole.classList = "educationalRole";
          educationTitel.classList = "educationTitel";
          educationDesc.classList = "educationDesc";
          document.querySelector(".education-note").append(educationalRole);
          document.querySelector(".education-note").append(educationTitel);
          document.querySelector(".education-note").append(educationDesc);
          educationalRole.innerHTML = data.education[i].titel + "<br>";
          educationTitel.innerHTML = data.education[i].enterprise + "<br><br>";
          educationDesc.innerHTML = data.education[i].desc + "<br><br>";
        }

  } else {
    console.log("HTTP-Error: " + response.status);
  }
}


myResume();


