function drop(thingToDrop) {
    //create the title and body name to be dropped
    var title = getTitle(thingToDrop);
    var body = getBody(thingToDrop);
   
    var currentTitle = document.getElementById(title);
    var oldTitles = document.getElementsByClassName("subtitle");
    var currentTabContent = document.getElementById(body);
    var oldTabContent = document.getElementsByClassName("text");
    
    
    if (currentTabContent.style.display === 'none') { //if the current tab is not showing
        for (var i = 0; i < oldTabContent.length; i++) {
            oldTabContent[i].style.display = "none"; //clear other tab contents
            oldTitles[i].innerHTML = "[+]  " + nonToggle(oldTitles[i].innerHTML); //and update old titles
        }
        currentTabContent.style.display = 'block'; //show the current tab content
        currentTitle.innerHTML = "[ -] " + nonToggle(currentTitle.innerHTML); //and update current title
        
    } else { //if the current tab is showing
        currentTabContent.style.display = 'none'; //clear the current tab content
        currentTitle.innerHTML = "[+]  " + nonToggle(currentTitle.innerHTML); //and update current title
        for(var j = 0; i < oldTitles.length; i++) { //update old titles
            oldTitles[j].innerHTML = "[ -] " + nonToggle(oldTitles[j].innerHTML);
        }            
    }
}


function getTitle(title) { //returns the title in HTML format
    return title + "Title";
}


function getBody(body) { //returns the body in HTML format
    return body + "Body";
}


function nonToggle(title) { //returns the part of the title without [+] or [ -]
    return title.substr(5);
}
