
function selectelement()
{
    var a = document.getElementById('one').size;
    console.log(a);
    console.log(typeof(a));
    var allp = document.querySelectorAll("p");
    console.log(allp);

    allp[4].innerHTML=a;
}

selectelement();