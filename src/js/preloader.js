/**
 * Created by bw on 25.08.2016.
 */
var preloader = new Preloader();

function Preloader(){
    var PRELOADER_BACK_DIV_ID = "preloader_background";
    var LOADING_TEXT = "Loading";
    var ANIMATION_TEXT = " . . . ";

    var span = document.createElement("span");
    var backDiv = createBackDiv();
    backDiv.appendChild(span);

    var frame = 0;

    this.show = function (){
        document.body.appendChild(backDiv);
        this.timerId = setInterval(animate,300);

    }
    this.hide = function (){
        document.body.removeChild(backDiv);
        clearInterval(this.timerId)
    }

    function animate(){
        setTextToSpan();
        frame++;
        if (frame > ANIMATION_TEXT.length)
            frame = 0;

    }
    function createBackDiv (){
        var div = document.createElement("div");
        div.id = PRELOADER_BACK_DIV_ID;
        div.textContent = LOADING_TEXT;
        return div;
    }

    function setTextToSpan (){
        span.textContent = ANIMATION_TEXT.slice(0, frame);
    }
}
