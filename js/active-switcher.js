/* This file is responsible for changing with header button has the active class */

(function () {
    //get navbar by id
    let navbar = document.getElementById("header-nav");
    //get the child link attributes from the navbar
    let buttons = navbar.getElementsByTagName("a");

    //add a click event listener to each button
    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener("click", function () {
            //get all the link tags that have the active class name
            let active = navbar.getElementsByClassName("active");

            //remove the active class from each element that has it
            for (let y = 0; y < active.length; y++) {
                //set the new class name attribute to the value with active removed
                active[y].className = active[y].className.replace(" active", "");
            }

            //add the active class name to the clicked element
            this.className += " active";
        });
    }
})();