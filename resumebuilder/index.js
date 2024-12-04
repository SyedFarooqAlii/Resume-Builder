"use strict";
var _a;
(_a = document.getElementById("resume form")) === null || _a === void 0
    ? void 0
    : _a.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        // type assertion
        var urlele = document.getElementById("username");
        var firstnameel = document.getElementById("name");
        var lastnameel = document.getElementById("lastname");
        var designameel = document.getElementById("designation");
        var addressnameel = document.getElementById("address");
        var emailel = document.getElementById("email");
        var phoneel = document.getElementById("contact");
        var summaryel = document.getElementById("summary");
        var schoolel = document.getElementById("school");
        var degreeel = document.getElementById("degree");
        var educityel = document.getElementById("edu-city");
        var edustartdateel = document.getElementById("edu-startdate");
        var eduenddateel = document.getElementById("edu-enddate");
        var edudiscriptionel = document.getElementById("edu-discription");
        var secschoolel = document.getElementById("sec-school");
        var secdegreeel = document.getElementById("sec-degree");
        var seceducityel = document.getElementById("sec-edu-city");
        var secedustartdateel = document.getElementById("sec-edu-startdate");
        var seceduenddateel = document.getElementById("sec-edu-enddate");
        var secedudiscriptionel = document.getElementById("sec-edu-discription");
        var thirdschoolel = document.getElementById("third-school");
        var thirddegreeel = document.getElementById("third-degree");
        var thirdeducityel = document.getElementById("third-edu-city");
        var thirdedustartdateel = document.getElementById("third-edu-startdate");
        var thirdeduenddateel = document.getElementById("third-edu-enddate");
        var thirdedudiscriptionel = document.getElementById("third-edu-discription");
        var expel = document.getElementById("exp-title");
        var companyel = document.getElementById("company");
        var explocationel = document.getElementById("exp-location");
        var expstartdateel = document.getElementById("exp-startdate");
        var firstexpdesel = document.getElementById("first-exp-description");
        var secexpdiscriptionel = document.getElementById("sec-exp-description");
        var secexpel = document.getElementById("sec-exp-title");
        var seccompanyel = document.getElementById("sec-company");
        var secexplocationel = document.getElementById("sec-exp-location");
        var secexpstartdateel = document.getElementById("sec-exp-startdate");
        var thirdexpdesel = document.getElementById("third-exp-description");
        var fourexpdiscriptionel = document.getElementById("four-exp-description");
        var achieve_titleel = document.getElementById("achieve_title");
        var achieve_descriptionel = document.getElementById("achieve_description");
        var secachieve_titleel = document.getElementById("sec-achieve_title");
        var secachieve_descriptionel = document.getElementById("sec-achieve_description");
        var pronameel = document.getElementById("proname");
        var projdescriptionel = document.getElementById("proj-description");
        var secpronameel = document.getElementById("sec-proname");
        var secprojdateel = document.getElementById("sec-proj-date");
        var projdateel = document.getElementById("proj-date");
        var secprojdescriptionel = document.getElementById("sec-proj-description");
        var skillel = document.getElementById("skill");
        var twoskillel = document.getElementById("skilltwo");
        var thirdskillel = document.getElementById("skillthree");
        var fourskillel = document.getElementById("skillfour");
        var fiveskillel = document.getElementById("skillfive");
        var sixskillel = document.getElementById("skillsix");
        var sevenskillel = document.getElementById("skillseven");
        var eightskillel = document.getElementById("skilleight");
        var nineskillel = document.getElementById("skillnine");
        var linkedinel = document.getElementById("linkedin");
        var githubel = document.getElementById("github");
        var pfel = document.getElementById("profilepicture");
        if (pfel &&
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
            nineskillel) {
            var first = firstnameel.value;
            var lastname = lastnameel.value;
            var email = emailel.value;
            var phone = phoneel.value;
            var summary = summaryel.value;
            var designation = designameel.value;
            var address = addressnameel.value;
            var edu = schoolel.value;
            var degree = degreeel.value;
            var city = educityel.value;
            var edustartdate = edustartdateel.value;
            var eduenddate = eduenddateel.value;
            var edudiscription = edudiscriptionel.value;
            var secedu = secschoolel.value;
            var secdegree = secdegreeel.value;
            var seccity = seceducityel.value;
            var secedustartdate = secedustartdateel.value;
            var seceduenddate = seceduenddateel.value;
            var secedudiscription = secedudiscriptionel.value;
            var thirdedu = thirdschoolel.value;
            var thirddegree = thirddegreeel.value;
            var thirdcity = thirdeducityel.value;
            var thirdedustartdate = thirdedustartdateel.value;
            var thirdeduenddate = thirdeduenddateel.value;
            var thirdedudiscription = thirdedudiscriptionel.value;
            var exp = expel.value;
            var com = companyel.value;
            var location_1 = explocationel.value;
            var expstartdate = expstartdateel.value;
            var firstexpdes = firstexpdesel.value;
            var secexpdiscription = secexpdiscriptionel.value;
            var secexp = secexpel.value;
            var seccom = seccompanyel.value;
            var seclocation = secexplocationel.value;
            var secexpstartdate = secexpstartdateel.value;
            var thirdexpdes = thirdexpdesel.value;
            var fourexpdes = fourexpdiscriptionel.value;
            var achieve_title = achieve_titleel.value;
            var achieve_description = achieve_descriptionel.value;
            var secachieve_title = secachieve_titleel.value;
            var secachieve_description = secachieve_descriptionel.value;
            var projname = pronameel.value;
            var projdescription = projdescriptionel.value;
            var projdate = projdateel.value;
            var secprojdate = secprojdateel.value;
            var secprojname = secpronameel.value;
            var secprojdescription = secprojdescriptionel.value;
            var skill = skillel.value;
            var secskill = twoskillel.value;
            var thirdskill = thirdskillel.value;
            var fourskill = fourskillel.value;
            var fiveskill = fiveskillel.value;
            var sixskill = sixskillel.value;
            var sevenskill = sevenskillel.value;
            var eightskill = eightskillel.value;
            var nineskill = nineskillel.value;
            var linkedin = linkedinel.value;
            var github = githubel.value;
            // const pf = pfel.value;
            // unique path
            var username = urlele.value;
            var uniquepath = "resume".concat(username.replace(/\s + /g, "_"), "_cv.html");
            // profile picture
            // Profile picture (if available)
            var pfel_1 = document.getElementById("profilepicture");
            var profileURL = (pfel_1 === null || pfel_1 === void 0 ? void 0 : pfel_1.files) ? URL.createObjectURL(pfel_1.files[0]) : "";
            //    output
            var output = "<div class=\"container\">\n      \n        <div class=\"top-sec\">\n        <div class=\"head-sec\">\n        <div class=\"name-sec\">\n            <h1>".concat(first, " <span> ").concat(lastname, "</span></h1>\n            <p class=\"sub-h\">").concat(designation, "</p>\n            \n            <div class=\"contact\">\n                \n                    <div class=\"num\"><i class=\"fa-solid fa-phone\"></i> <span> ").concat(phone, "</span></div>\n\n                    <div class=\"num\"><i class=\"fa-solid fa-envelope\"></i> <span>").concat(email, "</span></div>\n                    </div>\n                    <div class=\"sec-contact\">\n                    <div class=\"num\"><i class=\"fa-solid fa-location-dot\"></i> <span> ").concat(address, "</span></div>\n                    </div>\n                \n            </div>\n            \n            \n            </div>\n            \n<div class=\"image-sec\">  \n").concat(profileURL
                ? "<img src=\"".concat(profileURL, "\" alt=\"Profile Picture\" class=\"profilepicture\" >")
                : "", "\n\n            </div>\n                       </div> \n            \n        \n\n<div class=\"main-sec\">\n<div class=\"first-container\">\n\n<section class=\"career-objective\">\n           <div class=\"heading\"><h2>CAREER OBJECTIVE</h2></div>\n\n\n            <p>").concat(summary, "<br>\n       \n        </p>\n        </section>\n\n        <section class=\"experience\">\n          <div class=\"heading\">  <h2>Experience</h2></div>\n            <h3>").concat(exp, "</h3>\n            <h4>").concat(com, "</h4>\n            <p><strong><a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(expstartdate, "   <i class=\"fa-solid fa-location-dot\"></i> ").concat(location_1, " </strong></p>\n            <ul>\n                <li>").concat(firstexpdes, "</li>\n            \n                \n            </ul>\n            <ul>\n                <li>").concat(secexpdiscription, "</li>\n            \n                \n            </ul>\n          \n        </section>\n        <section class=\"experience\">\n       \n            <h3>").concat(secexp, "</h3>\n            <h4>").concat(seccom, "</h4>\n            <p><strong><a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(secexpstartdate, "  <i class=\"fa-solid fa-location-dot\"></i>  ").concat(seclocation, " </strong></p>\n            <ul>\n                <li>").concat(thirdexpdes, "</li>\n            \n                \n            </ul>\n            <ul>\n                <li>").concat(fourexpdes, "</li>\n            \n                \n            </ul>\n          \n        </section>\n\n        <section class=\"education\">\n            <div class=\"heading\"><h2>Education</h2></div>\n\n            <div class=\"education-item\">\n            <h3>").concat(degree, "</h3>    \n            <h4>").concat(edu, "</h4>\n                \n                <p><strong>\n                    <a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(edustartdate, " - ").concat(eduenddate, "  <i class=\"fa-solid fa-location-dot\"></i> ").concat(city, "</strong></p>\n                <ul><li>").concat(edudiscription, "</li></ul>\n            </div>\n            \n        </section>\n        <section class=\"education\">\n            <div class=\"education-item\">\n            <h3>").concat(secdegree, "</h3>    \n            <h4>").concat(secedu, "</h4>\n                \n                <p><strong>\n                    <a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(secedustartdate, " - ").concat(seceduenddate, "  <i class=\"fa-solid fa-location-dot\"></i> ").concat(seccity, "</strong></p>\n                <ul><li>").concat(secedudiscription, "</li></ul>\n            </div>\n            \n        </section>\n        <section class=\"education\">\n            <div class=\"education-item\">\n            <h3>").concat(thirddegree, "</h3>    \n            <h4>").concat(thirdedu, "</h4>\n                \n                <p><strong>\n                    <a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(thirdedustartdate, " - ").concat(thirdeduenddate, "  <i class=\"fa-solid fa-location-dot\"></i> ").concat(thirdcity, "</strong></p>\n                <ul><li>").concat(thirdedudiscription, "</li></ul>\n            </div>\n            \n        </section>\n\n\n\n\n\n        </div>\n<div class=\"sec-container\">\n\n\n<section class=\"training\">\n            <div class=\"heading\"><h2>Achievements / Courses</h2></div>\n\n            <h4>").concat(achieve_title, "</h4>\n            \n                <p>").concat(achieve_description, "</p>\n            \n            \n            \n        </section>\n        <section class=\"training\">\n            <h4>").concat(secachieve_title, "</h4>\n            \n                <p>").concat(secachieve_description, "</p>\n            \n            \n            \n        </section>\n\n<section class=\"skills\">\n            <div class=\"heading\"><h2>Skills</h2></div>\n\n        <div class=\"skill-sec\">\n            \n            \n\n            \n                    <p>").concat(skill, " <p class=\"skill-span\">-</p></p> \n                    <p>").concat(secskill, " <p class=\"skill-span\">-</p></p>\n                    <p>").concat(thirdskill, " <p class=\"skill-span\">-</p></p>\n                    <p>").concat(fourskill, " <p class=\"skill-span\">-</p></p> \n\n                    <p>").concat(fiveskill, " <p class=\"skill-span\">-</p></p> \n                    <p>").concat(sixskill, " <p class=\"skill-span\">-</p></p>\n                    <p>").concat(sevenskill, " <p class=\"skill-span\">-</p></p> \n                    <p>").concat(eightskill, " <p class=\"skill-span\">-</p></p>\n                    <p>").concat(nineskill, " </p>\n               \n       </div\n    \n        </section>\n\n\n\n\n<section class=\"projects\">\n<div class=\"heading\"><h2>Projects</h2></div>\n\n<div class=\"project-item\">\n    <h3>").concat(projname, "</h3>\n      <p><strong><a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(projdate, "   <i class=\"fa-solid fa-location-dot\"></i> ").concat(city, " </strong></p>\n    \n    <h4>Project Description</h4>\n    <ul><li>").concat(projdescription, "</li></ul>\n    \n</div>\n\n</section>\n<section class=\"projects\">\n<div class=\"project-item\">\n    <h3>").concat(secprojname, "</h3>\n      <p><strong><a href=\"\"><i class='bx bxs-calendar'></i></a> ").concat(secprojdate, "   <i class=\"fa-solid fa-location-dot\"></i> ").concat(city, " </strong></p>\n    \n    <h4>Project Description</h4>\n <ul>   <li>").concat(secprojdescription, "</li></ul>\n    \n   \n</div>\n\n</section>\n            <section class=\"profile-section\">\n            <div class=\"heading\"><h2>Profile</h2></div>\n\n            <h4><i class=\"bx bxl-linkedin\"></i></h4>\n            \n           \n <p>").concat(linkedin, "</p>\n            \n            <h4><i class=\"bx bxl-github\"></i></h4>\n            \n \n  <p>").concat(github, "</p>\n            \n            \n            \n        </section>\n        \n\n        \n</div>");
            // download link
            var downlink = document.createElement('a');
            downlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(output);
            downlink.download = uniquepath;
            downlink.textContent = "Download Your Resume";
            downlink.id = "down-btn";
            downlink.className = "down-btns";
            var resoutel = document.getElementById("output");
            if (resoutel) {
                resoutel.innerHTML = output;
                makeeditable();
                resoutel.appendChild(downlink);
                resoutel.style.display = 'block';
            }
        }
        else {
            console.error("One or more element are missing");
        }
    });
function makeeditable() {
    var edit = document.querySelectorAll(".editable");
    edit.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currtext = element;
            var currval = currtext.textContent || "";
            if ((currtext.tagName === "p", currtext.tagName === "span")) {
                var input = document.createElement("input");
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
