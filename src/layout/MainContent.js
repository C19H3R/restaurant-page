{/* <main class="border rounded mt-5">
          <h3 class="mx-3">Heading one</h1>
            <br>
            <p class="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure natus eveniet quisquam rem neque reprehenderit enim, repellendus facere modi et dolorem fugiat quas ipsum animi, ab harum. Architecto, voluptate.</p>
            <ul>
                <li>asdf</li>
                <li>asdf</li>
                <li>asdf</li>
                <li>asdf</li>
            </ul>
</main> */}

const MainContent=(contentHeading,contentParagraph,...listContent)=>{
    console.log("Hello");
    const mainTag=document.createElement("main");
    mainTag.classList.add("border","rounded","mt-5");
        const headingTag=document.createElement("h3")
        headingTag.textContent=contentHeading;
        headingTag.classList.add("mx-3")
        const lineBreak=document.createElement("br")
        const paragraphTag=document.createElement("p")
        paragraphTag.textContent=contentParagraph;
        paragraphTag.classList.add("mx-3");
   
        const unorderedList=document.createElement("ul");

        listContent.forEach((item)=>{
            const listItem=document.createElement("li");
            listItem.textContent=item;
            unorderedList.appendChild(listItem);
        })
    mainTag.appendChild(headingTag);
    mainTag.appendChild(lineBreak)
    mainTag.appendChild(paragraphTag);
    mainTag.appendChild(unorderedList);
    
    
    return mainTag;
}

export default MainContent;