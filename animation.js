/* 
 * Train Animation Script.
 *
 * Written by Bryce Summers on 12/13/2016.
 *
 */

var x = window.innerWidth;
var y = 40;
var train_width = 1;
var visible = true;

console.log("Hello")

function animate()
{

    if(!visible)
    {
        return;
    }

    requestAnimationFrame(animate);

    var w = window.innerWidth;

    var train = document.getElementsByClassName("train");
    train = train[0];
    
    train_width = parseInt(train.offsetWidth, 10);

    x += Math.abs(w/2 - train_width/2 - x)/20 + .01

    if(x > w - train_width)
    {
        x = -train_width;
        train.style.visibility = "hidden";
        visible = false;
    }
    else
    {
        train.style.visibility = "visible";
        visible = true;
    }

    train.style.top  = y + 'px';
    train.style.left = x + 'px';
    train.style.position = "absolute";

}

function resetTrain()
{
    // Don't reset the train if it is already visible.
    if(visible)
    {
        return;
    }

    x = -train_width;
    visible = true;
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);