AFRAME.registerComponent("buttons",{

    init:function(){
    var button1=document.createElement("button")
    button1.innerHTML="ORDER NOW"
    button1.setAttribute("id","ordering-button")
    button1.setAttribute("class","btn btn-warning")

    var button2=document.createElement("button")
    button2.innerHTML="ORDER INFO"
    button2.setAttribute("id","order-summary-button")
    button2.setAttribute("class","btn btn-warning")

    var buttonDiv=document.getElementById("button-div")
    buttonDiv.appendChild(button1)
    buttonDiv.appendChild(button2)
    }
})