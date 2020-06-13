function changePage() {
    document.getElementById("togglee").style.visibility = "hidden";
    document.getElementById("red").style.cssText = "height:50px; width: 100%";
    document.getElementById("blue").style.cssText = "position: absolute; height:48px; width: 48px; border-radius: 50%; right: 40px; top: 20px; text-align:center; color:white; vertical-align:middle";
    const paragraph = document.createElement('p');
    paragraph.innerHTML = "+";
    document.getElementById("blue").appendChild(paragraph)



}