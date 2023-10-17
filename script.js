function iconClickHandler(url) {
    window.open(url, '_blank');
}


let words = ["Android App Development","Web Development","Front-End Development","Back-End Development"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = false,
    skip_count = 0,
    skip_delay = 15,
    speed = 80;

let wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                if (++skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset <= 0) {
                forwards = true;
                i = (++i) % len;
            }
        }
        part = words[i].substring(0, offset);
        if (forwards) {
            offset++;
        }
        else {
            offset--;
        }
        $('#technology').text(part);
    },speed);
};

$(document).ready(function () {
    wordflick();
});
