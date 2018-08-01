function drop(thingToDrop) {
    //create the title and body name to be dropped
    var title = thingToDrop + "Title";
    var body = thingToDrop + "Body";
   
    
    var currentTabContent = document.getElementById(body);
    var oldTabContent = document.getElementsByClassName("text");
    var currentTitle = document.getElementById(title);
    var oldTitles = document.getElementsByClassName("subtitle");
    var newTitle;
    
    
    if (currentTabContent.style.display === 'none') { //if the current tab is not showing
        for (var i = 0; i < oldTabContent.length; i++) {
            oldTabContent[i].style.display = "none"; //clear other tab contents
            oldTitles[i].innerHTML = "[+]  " + oldTitles[i].innerHTML.substr(5); //and update old titles
        }
        currentTabContent.style.display = 'block'; //show the current tab content
        currentTitle.innerHTML = "[ -] " + currentTitle.innerHTML.substr(5); //and update current title
    } else { //if the current tab is showing
        currentTabContent.style.display = 'none'; //clear the current tab content
        currentTitle.innerHTML = "[+]  " + currentTitle.innerHTML.substr(5); //and update current title
        for(var j = 0; i < oldTitles.length; i++) { //update old titles
            oldTitles[j].innerHTML = "[ -] " + oldTitles[j].innerHTML.substr(5);
        }            
    }
}



