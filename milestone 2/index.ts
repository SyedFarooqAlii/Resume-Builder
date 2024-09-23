document
  .getElementById("resume form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion
    const nameel = document.getElementById("name") as HTMLInputElement;
    const emailel = document.getElementById("email") as HTMLInputElement;
    const phoneel = document.getElementById("Contact") as HTMLInputElement;
    const eduel = document.getElementById("Education") as HTMLInputElement;
    const expel = document.getElementById("Experience") as HTMLInputElement;
    const skillel = document.getElementById("Skills") as HTMLInputElement;

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
    } else {
      console.error("One or more element are missing");
    }
  });
function makeeditable() {
  const edit = document.querySelectorAll(".editable");
  edit.forEach((element) => {
    element.addEventListener("click", function () {
      const currtext = element as HTMLElement;
      const currval = currtext.textContent || "";

      if ((currtext.tagName === "p", currtext.tagName === "span")) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currval;
        input.classList.add("editing-input");

        currtext.style.display = "none";
        currtext.parentNode?.insertBefore(input, currtext);
        input.focus();
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
