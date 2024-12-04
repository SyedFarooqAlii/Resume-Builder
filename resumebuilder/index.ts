"use strict";
var _a;
(_a = document.getElementById("resume form")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (event) {
      var _a;
      event.preventDefault();
      // type assertion
      const urlele = document.getElementById("username") as HTMLInputElement;

      const firstnameel = document.getElementById("name") as HTMLInputElement;
      const lastnameel = document.getElementById(
        "lastname"
      ) as HTMLInputElement;
      const designameel = document.getElementById(
        "designation"
      ) as HTMLInputElement;
      const addressnameel = document.getElementById(
        "address"
      ) as HTMLInputElement;
      const emailel = document.getElementById("email") as HTMLInputElement;
      const phoneel = document.getElementById("contact") as HTMLInputElement;
      const summaryel = document.getElementById("summary") as HTMLInputElement;

      const schoolel = document.getElementById("school") as HTMLInputElement;
      const degreeel = document.getElementById("degree") as HTMLInputElement;
      const educityel = document.getElementById("edu-city") as HTMLInputElement;
      const edustartdateel = document.getElementById(
        "edu-startdate"
      ) as HTMLInputElement;
      const eduenddateel = document.getElementById(
        "edu-enddate"
      ) as HTMLInputElement;
      const edudiscriptionel = document.getElementById(
        "edu-discription"
      ) as HTMLInputElement;

      const secschoolel = document.getElementById(
        "sec-school"
      ) as HTMLInputElement;
      const secdegreeel = document.getElementById(
        "sec-degree"
      ) as HTMLInputElement;
      const seceducityel = document.getElementById(
        "sec-edu-city"
      ) as HTMLInputElement;
      const secedustartdateel = document.getElementById(
        "sec-edu-startdate"
      ) as HTMLInputElement;
      const seceduenddateel = document.getElementById(
        "sec-edu-enddate"
      ) as HTMLInputElement;
      const secedudiscriptionel = document.getElementById(
        "sec-edu-discription"
      ) as HTMLInputElement;

      const thirdschoolel = document.getElementById(
        "third-school"
      ) as HTMLInputElement;
      const thirddegreeel = document.getElementById(
        "third-degree"
      ) as HTMLInputElement;
      const thirdeducityel = document.getElementById(
        "third-edu-city"
      ) as HTMLInputElement;
      const thirdedustartdateel = document.getElementById(
        "third-edu-startdate"
      ) as HTMLInputElement;
      const thirdeduenddateel = document.getElementById(
        "third-edu-enddate"
      ) as HTMLInputElement;
      const thirdedudiscriptionel = document.getElementById(
        "third-edu-discription"
      ) as HTMLInputElement;

      const expel = document.getElementById("exp-title") as HTMLInputElement;
      const companyel = document.getElementById("company") as HTMLInputElement;
      const explocationel = document.getElementById(
        "exp-location"
      ) as HTMLInputElement;
      const expstartdateel = document.getElementById(
        "exp-startdate"
      ) as HTMLInputElement;
      const firstexpdesel = document.getElementById(
        "first-exp-description"
      ) as HTMLInputElement;
      const secexpdiscriptionel = document.getElementById(
        "sec-exp-description"
      ) as HTMLInputElement;

      const secexpel = document.getElementById(
        "sec-exp-title"
      ) as HTMLInputElement;
      const seccompanyel = document.getElementById(
        "sec-company"
      ) as HTMLInputElement;
      const secexplocationel = document.getElementById(
        "sec-exp-location"
      ) as HTMLInputElement;
      const secexpstartdateel = document.getElementById(
        "sec-exp-startdate"
      ) as HTMLInputElement;
      const thirdexpdesel = document.getElementById(
        "third-exp-description"
      ) as HTMLInputElement;
      const fourexpdiscriptionel = document.getElementById(
        "four-exp-description"
      ) as HTMLInputElement;

      const achieve_titleel = document.getElementById(
        "achieve_title"
      ) as HTMLInputElement;
      const achieve_descriptionel = document.getElementById(
        "achieve_description"
      ) as HTMLInputElement;

      const secachieve_titleel = document.getElementById(
        "sec-achieve_title"
      ) as HTMLInputElement;
      const secachieve_descriptionel = document.getElementById(
        "sec-achieve_description"
      ) as HTMLInputElement;

      const pronameel = document.getElementById("proname") as HTMLInputElement;
      const projdescriptionel = document.getElementById(
        "proj-description"
      ) as HTMLInputElement;

      const secpronameel = document.getElementById(
        "sec-proname"
      ) as HTMLInputElement;
      const secprojdateel = document.getElementById(
        "sec-proj-date"
      ) as HTMLInputElement;
      const projdateel = document.getElementById(
        "proj-date"
      ) as HTMLInputElement;
      const secprojdescriptionel = document.getElementById(
        "sec-proj-description"
      ) as HTMLInputElement;

      const skillel = document.getElementById("skill") as HTMLInputElement;
      const twoskillel = document.getElementById(
        "skilltwo"
      ) as HTMLInputElement;
      const thirdskillel = document.getElementById(
        "skillthree"
      ) as HTMLInputElement;
      const fourskillel = document.getElementById(
        "skillfour"
      ) as HTMLInputElement;
      const fiveskillel = document.getElementById(
        "skillfive"
      ) as HTMLInputElement;
      const sixskillel = document.getElementById(
        "skillsix"
      ) as HTMLInputElement;
      const sevenskillel = document.getElementById(
        "skillseven"
      ) as HTMLInputElement;
      const eightskillel = document.getElementById(
        "skilleight"
      ) as HTMLInputElement;
      const nineskillel = document.getElementById(
        "skillnine"
      ) as HTMLInputElement;

      const linkedinel = document.getElementById(
        "linkedin"
      ) as HTMLInputElement;
      const githubel = document.getElementById("github") as HTMLInputElement;

      const pfel = document.getElementById(
        "profilepicture"
      ) as HTMLInputElement;
      if (
        pfel &&
        urlele &&
        firstnameel &&
        lastnameel &&
        designameel &&
        addressnameel &&
        summaryel &&
        emailel &&
        phoneel &&
        schoolel &&
        degreeel &&
        educityel &&
        edustartdateel &&
        eduenddateel &&
        edudiscriptionel &&
        secschoolel &&
        secdegreeel &&
        seceducityel &&
        secedustartdateel &&
        seceduenddateel &&
        secedudiscriptionel &&
        thirdschoolel &&
        thirddegreeel &&
        thirdeducityel &&
        thirdedustartdateel &&
        thirdeduenddateel &&
        thirdedudiscriptionel &&
        expel &&
        companyel &&
        explocationel &&
        expstartdateel &&
        firstexpdesel &&
        secexpdiscriptionel &&
        secexpel &&
        seccompanyel &&
        secexplocationel &&
        secexpstartdateel &&
        thirdexpdesel &&
        fourexpdiscriptionel &&
        achieve_titleel &&
        achieve_descriptionel &&
        secachieve_titleel &&
        secachieve_descriptionel &&
        pronameel &&
        projdescriptionel &&
        secpronameel &&
        projdateel &&
        secprojdateel &&
        secprojdescriptionel &&
        linkedinel &&
        githubel &&
        skillel &&
        twoskillel &&
        thirdskillel &&
        fourskillel &&
        fiveskillel &&
        sixskillel &&
        sevenskillel &&
        eightskillel &&
        nineskillel
      ) {
        const first = firstnameel.value;
        const lastname = lastnameel.value;
        const email = emailel.value;
        const phone = phoneel.value;
        const summary = summaryel.value;
        const designation = designameel.value;

        const address = addressnameel.value;

        const edu = schoolel.value;
        const degree = degreeel.value;
        const city = educityel.value;
        const edustartdate = edustartdateel.value;
        const eduenddate = eduenddateel.value;
        const edudiscription = edudiscriptionel.value;

        const secedu = secschoolel.value;
        const secdegree = secdegreeel.value;
        const seccity = seceducityel.value;
        const secedustartdate = secedustartdateel.value;
        const seceduenddate = seceduenddateel.value;
        const secedudiscription = secedudiscriptionel.value;

        const thirdedu = thirdschoolel.value;
        const thirddegree = thirddegreeel.value;
        const thirdcity = thirdeducityel.value;
        const thirdedustartdate = thirdedustartdateel.value;
        const thirdeduenddate = thirdeduenddateel.value;
        const thirdedudiscription = thirdedudiscriptionel.value;

        const exp = expel.value;
        const com = companyel.value;
        const location = explocationel.value;
        const expstartdate = expstartdateel.value;
        const firstexpdes = firstexpdesel.value;
        const secexpdiscription = secexpdiscriptionel.value;

        const secexp = secexpel.value;
        const seccom = seccompanyel.value;
        const seclocation = secexplocationel.value;
        const secexpstartdate = secexpstartdateel.value;
        const thirdexpdes = thirdexpdesel.value;
        const fourexpdes = fourexpdiscriptionel.value;

        const achieve_title = achieve_titleel.value;
        const achieve_description = achieve_descriptionel.value;

        const secachieve_title = secachieve_titleel.value;
        const secachieve_description = secachieve_descriptionel.value;

        const projname = pronameel.value;
        const projdescription = projdescriptionel.value;
        const projdate = projdateel.value;
        const secprojdate = secprojdateel.value;

        const secprojname = secpronameel.value;
        const secprojdescription = secprojdescriptionel.value;

        const skill = skillel.value;
        const secskill = twoskillel.value;
        const thirdskill = thirdskillel.value;
        const fourskill = fourskillel.value;
        const fiveskill = fiveskillel.value;
        const sixskill = sixskillel.value;

        const sevenskill = sevenskillel.value;
        const eightskill = eightskillel.value;
        const nineskill = nineskillel.value;

        const linkedin = linkedinel.value;
        const github = githubel.value;

        // const pf = pfel.value;
        // unique path
        const username = urlele.value;
        const uniquepath = `resume${username.replace(/\s + /g, "_")}_cv.html`;
        // profile picture
          // Profile picture (if available)
          const pfel = document.getElementById("profilepicture") as HTMLInputElement;
          const profileURL = pfel?.files ? URL.createObjectURL(pfel.files[0]) : "";
    //    output
          const output = `<div class="container">
      
        <div class="top-sec">
        <div class="head-sec">
        <div class="name-sec">
            <h1>${first} <span> ${lastname}</span></h1>
            <p class="sub-h">${designation}</p>
            
            <div class="contact">
                
                    <div class="num"><i class="fa-solid fa-phone"></i> <span> ${phone}</span></div>

                    <div class="num"><i class="fa-solid fa-envelope"></i> <span>${email}</span></div>
                    </div>
                    <div class="sec-contact">
                    <div class="num"><i class="fa-solid fa-location-dot"></i> <span> ${address}</span></div>
                    </div>
                
            </div>
            
            
            </div>
            
<div class="image-sec">  
${
  profileURL
    ? `<img src="${profileURL}" alt="Profile Picture" class="profilepicture" >`
    : ""
}

            </div>
                       </div> 
            
        

<div class="main-sec">
<div class="first-container">

<section class="career-objective">
           <div class="heading"><h2>CAREER OBJECTIVE</h2></div>


            <p>${summary}<br>
       
        </p>
        </section>

        <section class="experience">
          <div class="heading">  <h2>Experience</h2></div>
            <h3>${exp}</h3>
            <h4>${com}</h4>
            <p><strong><a href=""><i class='bx bxs-calendar'></i></a> ${expstartdate}   <i class="fa-solid fa-location-dot"></i> ${location} </strong></p>
            <ul>
                <li>${firstexpdes}</li>
            
                
            </ul>
            <ul>
                <li>${secexpdiscription}</li>
            
                
            </ul>
          
        </section>
        <section class="experience">
       
            <h3>${secexp}</h3>
            <h4>${seccom}</h4>
            <p><strong><a href=""><i class='bx bxs-calendar'></i></a> ${secexpstartdate}  <i class="fa-solid fa-location-dot"></i>  ${seclocation} </strong></p>
            <ul>
                <li>${thirdexpdes}</li>
            
                
            </ul>
            <ul>
                <li>${fourexpdes}</li>
            
                
            </ul>
          
        </section>

        <section class="education">
            <div class="heading"><h2>Education</h2></div>

            <div class="education-item">
            <h3>${degree}</h3>    
            <h4>${edu}</h4>
                
                <p><strong>
                    <a href=""><i class='bx bxs-calendar'></i></a> ${edustartdate} - ${eduenddate}  <i class="fa-solid fa-location-dot"></i> ${city}</strong></p>
                <ul><li>${edudiscription}</li></ul>
            </div>
            
        </section>
        <section class="education">
            <div class="education-item">
            <h3>${secdegree}</h3>    
            <h4>${secedu}</h4>
                
                <p><strong>
                    <a href=""><i class='bx bxs-calendar'></i></a> ${secedustartdate} - ${seceduenddate}  <i class="fa-solid fa-location-dot"></i> ${seccity}</strong></p>
                <ul><li>${secedudiscription}</li></ul>
            </div>
            
        </section>
        <section class="education">
            <div class="education-item">
            <h3>${thirddegree}</h3>    
            <h4>${thirdedu}</h4>
                
                <p><strong>
                    <a href=""><i class='bx bxs-calendar'></i></a> ${thirdedustartdate} - ${thirdeduenddate}  <i class="fa-solid fa-location-dot"></i> ${thirdcity}</strong></p>
                <ul><li>${thirdedudiscription}</li></ul>
            </div>
            
        </section>





        </div>
<div class="sec-container">


<section class="training">
            <div class="heading"><h2>Achievements / Courses</h2></div>

            <h4>${achieve_title}</h4>
            
                <p>${achieve_description}</p>
            
            
            
        </section>
        <section class="training">
            <h4>${secachieve_title}</h4>
            
                <p>${secachieve_description}</p>
            
            
            
        </section>

<section class="skills">
            <div class="heading"><h2>Skills</h2></div>

        <div class="skill-sec">
            
            

            
                    <p>${skill} <p class="skill-span">-</p></p> 
                    <p>${secskill} <p class="skill-span">-</p></p>
                    <p>${thirdskill} <p class="skill-span">-</p></p>
                    <p>${fourskill} <p class="skill-span">-</p></p> 

                    <p>${fiveskill} <p class="skill-span">-</p></p> 
                    <p>${sixskill} <p class="skill-span">-</p></p>
                    <p>${sevenskill} <p class="skill-span">-</p></p> 
                    <p>${eightskill} <p class="skill-span">-</p></p>
                    <p>${nineskill} </p>
               
       </div
    
        </section>




<section class="projects">
<div class="heading"><h2>Projects</h2></div>

<div class="project-item">
    <h3>${projname}</h3>
      <p><strong><a href=""><i class='bx bxs-calendar'></i></a> ${projdate}   <i class="fa-solid fa-location-dot"></i> ${city} </strong></p>
    
    <h4>Project Description</h4>
    <ul><li>${projdescription}</li></ul>
    
</div>

</section>
<section class="projects">
<div class="project-item">
    <h3>${secprojname}</h3>
      <p><strong><a href=""><i class='bx bxs-calendar'></i></a> ${secprojdate}   <i class="fa-solid fa-location-dot"></i> ${city} </strong></p>
    
    <h4>Project Description</h4>
 <ul>   <li>${secprojdescription}</li></ul>
    
   
</div>

</section>
            <section class="profile-section">
            <div class="heading"><h2>Profile</h2></div>

            <h4><i class="bx bxl-linkedin"></i></h4>
            
           
 <p>${linkedin}</p>
            
            <h4><i class="bx bxl-github"></i></h4>
            
 
  <p>${github}</p>
            
            
            
        </section>
        

        
</div>`
;

     // download link
     const downlink = document.createElement('a');
     downlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(output);
     downlink.download = uniquepath;
     downlink.textContent = "Download Your Resume";
     downlink.id="down-btn"
     downlink.className="down-btns"
     const resoutel = document.getElementById("output");
     if (resoutel) {
         resoutel.innerHTML = output;
         makeeditable();
         resoutel.appendChild(downlink);
         resoutel.style.display = 'block';

    }
      } else {
        console.error("One or more element are missing");
      }
    });
function makeeditable() {
  const edit = document.querySelectorAll(".editable");
  edit.forEach((element) => {
    element.addEventListener("click", function () {
      var _a;
      const currtext = element;
      const currval = currtext.textContent || "";
      if ((currtext.tagName === "p", currtext.tagName === "span")) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currval;
        input.classList.add("editing-input");
        input.style.display = "none";
        (_a = currtext.parentNode) === null || _a === void 0
          ? void 0
          : _a.insertBefore(input, currtext);
        input.focus;
      }
    });
  });
}
