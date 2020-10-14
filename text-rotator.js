$(document).ready(function (){
    var currentPos = 0;
    var steps = [
        "1. Move slider to the left end. Place your hand over the yellow spot.",
        "2. Click “Capture training image” multiple times.",
        "3. Move slider bit to the right. Place your hand over the yellow spot.",
        "4. Click “Capture training image” multiple times.",
        "5. Repeat until you reach the right end of the slider.",
        "6. Click “Capture training image” multiple times.",
        "7. Click “Train” once."
    ];
    $("#prev").click(function (){
        if (currentPos == 0) {
            currentPos = 7;
        } else currentPos--;
        console.log(steps[currentPos]);
        $("#slide").html(steps[currentPos]);
    });
    $("#next").click(function (){
        if (currentPos == 7) {
            currentPos = 0;
        } else currentPos++;
        console.log(steps[currentPos]);
        $("#slide").html(steps[currentPos]);
    });
    $("#slide").html(steps[currentPos]);
});