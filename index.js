const path = window.location.href;//stores the first link we open on Instagram, maybe its HOME or MESSAGES or REELS page.



console.log(path);




function blocker() {
    const screen_lay = document.createElement("div");
    screen_lay.textContent = " Content Blocked ";


    screen_lay.style.top = "0";

    screen_lay.style.left = "0";

    screen_lay.style.width = "100vw";

    screen_lay.style.height = "100vh";

    screen_lay.style.position = "fixed";
    screen_lay.style.backgroundColor = "grey";
    screen_lay.style.color = "white";
    screen_lay.style.fontFamily = "verdana";
    screen_lay.style.fontSize = "500%";

    screen_lay.style.display = "flex";

    screen_lay.style.alignItems = "center";

    screen_lay.style.justifyContent = "center"

    screen_lay.style.zIndex = "2147483647";//to have our overlay as 100% above the instagram UI.

    document.body.prepend(screen_lay);



}

function check_path() {
    const current_path = window.location.href;
    let this_path = current_path;

    if (this_path != path && (this_path.includes("reel")) || (this_path.includes("reels"))) {
        blocker();
    }

}
setInterval(check_path, 2000);



if (path.includes("reels") || path.includes("reel")) {
    blocker();

}
