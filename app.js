var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var checkicon = document.querySelector("#checkicon");
var xicon = document.querySelector("#xicon");
var i=0;

xicon.addEventListener("click", function()
{
    typenote();
});


checkicon.addEventListener("click",function()
{
    createnote();
});


function typenote()
{
    if(container3.style.display == "none")
    {
        container3.style.display = "block";
    }
    else
    {
        container3.style.display="none";
    }
}

function createnote()
{

    var notetext = document.querySelector("#notetext").value;

    var node0 = document.createElement('div');
    var node1 = document.createElement("h1");

    node1.innerHTML = notetext;
    node1.setAttribute("style","width:250px;height:250px;font-size:25px;padding:25px;margin-top:10px;overflow:hidden;box-shadow:10px 10px 25px 0px rgba(0,0,0,0.75");

    node1.style.margin=margin();
    node1.style.transform=rotate();
    node1.style.background=color();

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend",node0);
    node0.addEventListener("mouseenter",function()
    {
        node0.style.transform="scale(1.1)";
    });
     
    node0.addEventListener("mouseleave",function()
    {
        node0.style.transform="scale(1)";
    });


    node0.addEventListener("dblclick",function()
    {
        node0.remove();
    })


    document.getElementById("notetext").value=" ";

}

function margin()
{
    var randommargin=["-5px","1px","5px","10px","15px","20px"];
    return randommargin[Math.floor(Math.random()*randommargin.length)];
}

function rotate()
{
    var randomrotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(10deg)"];
    return randomrotate[Math.floor(Math.random()*randomrotate.length)];

}

function color()
{
    var randomcolor=["#47f7fa", "#dba2a0","#8354bf","#6c80b8","#8aebb7","#d8d025","#e92165","#928385","#016b73"] ;
    if(i>randomcolor.length -1)
    {
        i = 0;
    }
    return randomcolor[i++];

}
