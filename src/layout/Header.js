
import Button from "../components/Button";

const Header =(Title,buttonNumber)=>{

    const headerTag=document.createElement("header");
    //hero
    const heroDiv=document.createElement("div");
    heroDiv.classList.add("row");
      //name
      const titleTag=document.createElement("h1");
      titleTag.textContent=Title;
      titleTag.classList.add("col","p-5","mx-2");
      //logoDiv
      const logoDiv=document.createElement("div");
      logoDiv.classList.add("col");
        //logoImg
        const logoImage=document.createElement("img");
        logoImage.setAttribute("src","../src/assets/logo.png");
        logoImage.id="logo"
        logoImage.classList.add("mt-4","float-end","mx-5")
      logoDiv.appendChild(logoImage);
    heroDiv.appendChild(titleTag);
    heroDiv.appendChild(logoDiv);
    //navigationSection
    const navigationDiv=document.createElement("div");
    navigationDiv.classList.add("row","justify-contnt-center","w-50","mx-auto");

    if(buttonNumber==1){
      navigationDiv.appendChild(Button("One",true))
      navigationDiv.appendChild(Button("Two"))
      navigationDiv.appendChild(Button("Three"))
    }
    else if(buttonNumber==2){
      navigationDiv.appendChild(Button("One"))
      navigationDiv.appendChild(Button("Two",true))
      navigationDiv.appendChild(Button("Three"))
    }else if(buttonNumber==3){
      navigationDiv.appendChild(Button("One"))
      navigationDiv.appendChild(Button("Two"))
      navigationDiv.appendChild(Button("Three",true))
    }
    headerTag.appendChild(heroDiv);
    headerTag.appendChild(navigationDiv);

    return headerTag;
}

export default Header;