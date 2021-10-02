{/* <footer>
        <div class=" text-center fixed-bottom mb-5">
          <h5>Cooked By Chef 🧑‍🍳 - <a href="./dist/index.html">github/C19H3R</a></h3>
        </div>
      </footer> */}

const Footer=()=>{
    const FooterTag=document.createElement("footer")
    const FooterDiv=document.createElement("div")
    FooterDiv.classList.add("text-center","fixed-bottom","mb-5");
    const headingFive=document.createElement("h5")
    const headingContent=document.createTextNode("Cooked By Chef 🧑‍🍳 - ");
    headingFive.appendChild(headingContent);
    const link=document.createElement("a")
    link.href="https://github.com/C19H3R";
    link.textContent="github/C19H3R";
    headingFive.appendChild(link);
    FooterDiv.appendChild(headingFive);
    FooterTag.appendChild(FooterDiv);
    return FooterTag;
}

export default Footer;