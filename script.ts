// listing element

document.getElementById("resume-form")?.addEventListener("submit",function(event) {

    event.preventDefault();
    
    
    const profilePicture = document.getElementById("profile-picture") as HTMLInputElement;
    
    // type assertion 
    
    const nameElement =document.getElementById("name") as HTMLInputElement;
    
    const emailElement =document.getElementById("email") as HTMLInputElement;
    
    const phoneElement =document.getElementById("phone") as HTMLInputElement;
    
    const educationElement =document.getElementById("education") as HTMLInputElement;
    
    const experienceElement =document.getElementById("experience") as HTMLInputElement;
    
    const skillsElement =document.getElementById("skills") as HTMLInputElement;
    
    if(profilePicture && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;
    
    
    
        // picture elements
    
        const profilePictureFile = profilePicture.files?.[0];
        const profilePictureUrl = profilePictureFile?URL.createObjectURL(profilePictureFile) : "";
    
    
    // create resume output
    
    const resumeOutput = `<h2>Resume</h2>
    
    ${profilePictureUrl?`<img src = "${profilePictureUrl}" alt ="ProfilePicture" class = "profilePicture">`:''}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone:</strong> ${phone} </p>
    
    <h3>Education</h3>
    <p>${education}</p> 
    
    <h3>Experience</h3>
    <p> ${experience} </p>
    
    <h3>Skills</h3>
    <p> ${skills} </p>
    
    
    `;
    
    
    // display resume output
    
    const resumeOutputElement = document.getElementById("resume-output")
    if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
    
    }else{
        console.error("The resume output elements are missing");
        
    }
     } else{
    
        console.error("One or more output elements are missing")
    }
    
    }
    );








