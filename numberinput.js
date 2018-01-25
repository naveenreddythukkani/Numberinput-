export numberinput = {
    ctrlDown: false,
    ctrlKey: 17,
    vKey: 86,
    cKey: 67,
    cmdKey: 91,
    keyup: function(event) {
        if ((event.keyCode == ctrlKey) || (event.keyCode == cmdKey)) {
            ctrlDown = false;
        }
    },
    keydown: function(event) {
        if ((event.keyCode == ctrlKey) || (event.keyCode == cmdKey)) {
            ctrlDown = true;
        }
        if ((event.keyCode < 48 || event.keyCode > 57) &&
            (event.keyCode < 96 || event.keyCode > 105) &&
            (event.keyCode != 8) &&
            (event.keyCode != 46) &&
            (event.keyCode != 37) &&
            (event.keyCode != 39) &&
            (event.keyCode != 9) &&
            !(ctrlDown && (event.keyCode == 86 || event.keyCode == 88 || event.keyCode == 67 || event.keyCode == 82))) {
            event.preventDefault();
        }
    }
}