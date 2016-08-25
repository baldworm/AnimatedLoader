/**
 * Created by bw on 25.08.2016.
 */
function showPreloader (sec) {
    var body = document.body;

        //adding background
    var backDiv = document.createElement("div");
    backDiv.id = "preloader_background";
    body.appendChild(backDiv);

    setTimeout(hidePreloader,3000);

}
function hidePreloader(){
    var backDiv = document.getElementById("preloader_background");
    backDiv.parentNode.removeChild(backDiv);
}