var pending_hides = {};

function finish_hides() {
    for (var hide in pending_hides) {
        document.getElementById(hide).style.display = "none";
    }
    if (self["reposition_all_validator_imgs"]) {
        reposition_all_validator_imgs();
    }
}

function hiderow(rid, skipdisable, animtime) {
    var El = document.getElementById(rid);
    if (!El) {
        return;
    }
    var inputEls = El.getElementsByTagName("input");
    if (!skipdisable) {
        for (var i = 0; i <= inputEls.length; i++) {
            if (inputEls[0]) {
                inputEls[0].disabled = true;
            }
        }
    }
    if (!animtime) {
        animtime = 1;
    }
    var anim = new YAHOO.util.Anim(rid, {
        opacity: {
            to: 0
        }
    }, animtime, YAHOO.util.Easing.easeOut);

    pending_hides[El.id] = 1;

    anim.onComplete.subscribe(finish_hides);
    anim.animate();
}

function showrow(rid, unused, animtime) {
    var El = document.getElementById(rid);
    if (!El) {
        return;
    }

    delete pending_hides[El.id];


    El.style.opacity = 0;
    if (El.tagName.toLowerCase() == "div") {
        El.style.display = "block";
    } else {
        El.style.display = "";
    }
    var inputEls = El.getElementsByTagName("input");
    for (var i = 0; i <= inputEls.length; i++) {
        if (inputEls[0]) {
            inputEls[0].disabled = false;
        }
    }

    if (!animtime) {
        animtime = 1;
    }
    var anim = new YAHOO.util.Anim(rid, {
        opacity: {
            to: 1
        }
    }, animtime, YAHOO.util.Easing.easeOut);

    if (self["reposition_all_validator_imgs"]) {
        anim.onComplete.subscribe(reposition_all_validator_imgs);
    }
    anim.animate();
}