import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
// import "../src/style.css"

const contentDiv=document.getElementById("content");
contentDiv.appendChild(Header("The Fake Motel",1));
contentDiv.appendChild(MainContent("One","ASDFASDF asdfasd fas","asdf","asdf"));
const footer=Footer();
contentDiv.appendChild(footer)

const mainOne=MainContent("One","ASDFASDF asdfasd fas","asdf","asdf");
const mainTwo=MainContent("Two","ASDFASDF asdfasd fas","asdf","asdf");
const mainThree=MainContent("Three","ASDFASDF asdfasd fas","asdf","asdf");

const refresh=()=>{
    const getAllButtons=[...document.getElementsByTagName("button")]

getAllButtons.forEach((item,idx)=>{
    item.addEventListener("click",()=>{
        contentDiv.removeChild(contentDiv.childNodes[0]);
        contentDiv.removeChild(contentDiv.childNodes[0]);

        if(idx==0){
            contentDiv.insertBefore(mainOne,contentDiv.firstChild);
            contentDiv.insertBefore(Header("The Fake Motel",1),contentDiv.firstChild);
            refresh();
        }else if(idx==1){
            contentDiv.insertBefore(mainTwo,contentDiv.firstChild);
            contentDiv.insertBefore(Header("The Fake Motel",2),contentDiv.firstChild);
            refresh();
        }else if(idx==2){
            contentDiv.insertBefore(mainThree,contentDiv.firstChild);
            contentDiv.insertBefore(Header("The Fake Motel",3),contentDiv.firstChild);
            refresh();
        }
    })
})
}
refresh();

