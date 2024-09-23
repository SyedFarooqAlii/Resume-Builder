"use strict";
var _a;
(_a = document
    .getElementById("resume form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    const nameel = document.getElementById("name");
    const emailel = document.getElementById("email");
    const phoneel = document.getElementById("Contact");
    const eduel = document.getElementById("Education");
    const expel = document.getElementById("Experience");
    const skillel = document.getElementById("Skills");
    if (nameel && emailel && phoneel && eduel && expel && skillel) {
        const name = nameel.value;
        const email = emailel.value;
        const phone = phoneel.value;
        const edu = eduel.value;
        const exp = expel.value;
        const skill = skillel.value;
        const output = ` <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </spna>  </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Contact No:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

<h3>Education</h3>
<p> <span id="edit-edu" class="editable"> ${edu} </span></p>
<h3>Work Experience</h3>
<p> <span id="edit-exp" class="editable"> ${exp} </span></p>
<h3>Skills</h3>
<p> <span id="edit-skill" class="editable"> ${skill} </span> </p>


    `;
        const resoutel = document.getElementById("output");
        if (resoutel) {
            resoutel.innerHTML = output;
            makeeditable();
        }
    }
    else {
        console.error("One or more element are missing");
    }
});
function makeeditable() {
    const edit = document.querySelectorAll('.editable');
    edit.forEach(element => {
        element.addEventListener('click', function () {
            const currtext = element;
            const currval = currtext.textContent || "";
            if (currtext.tagName === "p", currtext.tagName === "span") {
                const input = document.createElement("input");
                input.type = 'text';
                input.value = currval;
                input.classList.add('editing-input');
                currtext.style.display = 'none';
                // currtext.parentNode
            }
        });
    });
}
// function makeeditable() {
//   const edit = document.querySelectorAll(".editable");
//   edit.forEach((element) => {
//     element.addEventListener("click", function () {
//       const currtext = element as HTMLElement;
//       const currval = currtext.textContent || "";
//       if ((currtext.tagName === "p", currtext.tagName === "span")) {
//         const input = document.createElement("input");
//         input.type = "Text";
//         input.value = currval;
//         input.classList.add("editing-input");
//         currtext.style.display = "none";
//         currtext.parentNode?.insertBefore(input, currtext);
//         input.focus();
//       }
//     });
//   });
// }
