{/* <div class="col text-center">
            <button class="btn btn-outline-light">One</button>
          </div> */}


const Button=(buttonName,active=false)=>{
    const buttonDiv=document.createElement("div");
    buttonDiv.classList.add("col","text-center");
        const buttonTag=document.createElement("button")
        buttonTag.textContent=buttonName;

        if(!active)
        buttonTag.classList.add("btn","btn-outline-light");
        else
        buttonTag.classList.add("btn","btn-light");

        buttonDiv.appendChild(buttonTag);
    
    return buttonDiv;
}

export default Button;