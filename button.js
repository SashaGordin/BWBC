const btn = document.getElementById("createbtn");

const buttons = [];
const launchbtn = document.getElementById('launchbtn');
buttons.push(launchbtn);
launchbtn.disabled = true;
const startbtn = document.getElementById('startbtn');
buttons.push(startbtn);
startbtn.disabled = true;
const mountbtn = document.getElementById('mountbtn');
buttons.push(mountbtn);
mountbtn.disabled = true;
const uploadbtn = document.getElementById('uploadbtn');
buttons.push(uploadbtn);
uploadbtn.disabled = true;
btn.addEventListener("click", ()=>{
    buttons.forEach(element => {
        if (element.disabled) {
            element.style.background = "#0eff00";
        } else {
            element.style.background = "gray";
        }
    });
    if(btn.innerText === "CREATE") {
        launchbtn.disabled = false;
        startbtn.disabled = false;
        mountbtn.disabled = false;
        uploadbtn.disabled = false;

        var img =document.createElement("img");
        //btn.classList.remove();
        //btn.className = "";
        console.log(btn.style.background);

        //btn.parentNode.classList.remove("dropdown");
        btn.classList.add("termbtn");
        console.log(btn.style.background);
        img.src = "images/grayStop.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "10px";
        //btn.style.background = "red";
        btn.innerHTML="";
        btn.appendChild(img);
        btn.append(" TERMINATE");
    } else {
        launchbtn.disabled = true;
        startbtn.disabled = true;
        mountbtn.disabled = true;
        uploadbtn.disabled = true;

        var img =document.createElement("img");
        btn.className="createbtn";
        btn.parentNode.classList.add("dropdown");
        img.src = "images/plusReal.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "15px";
        btn.style.background = "#0eff00";
        btn.innerHTML="";
        btn.appendChild(img);
        btn.append("CREATE");
    }
});

startbtn.addEventListener("click", ()=>{
    if(startbtn.innerText === "START") {
        var img =document.createElement("img");
        img.src = "images/grayStop.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "10px";
        startbtn.style.background = "red";
        startbtn.innerHTML="";
        startbtn.appendChild(img);
        startbtn.append(" STOP");
    } else{
        var img =document.createElement("img");
        startbtn.className="createbtn";
        img.src = "images/playButton.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "15px";
        startbtn.style.background = "#0eff00";
        startbtn.innerHTML="";
        startbtn.appendChild(img);
        startbtn.append("START");
    }
});

mountbtn.addEventListener("click", ()=>{
    if(mountbtn.innerText === "MOUNT") {
        var img =document.createElement("img");
        img.src = "images/unmount.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "10px";
        mountbtn.style.background = "red";
        mountbtn.innerHTML="";
        mountbtn.appendChild(img);
        mountbtn.append(" UNMOUNT");
    } else{
        // mountbtn.setAttribute('id',"");
        // mountbtn.setAttribute('id',"mountbtn");
        // mountbtn.className="";
        // mountbtn.className="createbtn";
        var img =document.createElement("img");
        mountbtn.className="createbtn";
        img.src = "images/playButton.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "15px";
        mountbtn.style.background = "#0eff00";
        mountbtn.innerHTML="";
        mountbtn.appendChild(img);
        mountbtn.append("MOUNT");
    }
});

uploadbtn.addEventListener("click", ()=>{
    if(uploadbtn.innerText === "UPLOAD") {
        var img =document.createElement("img");
        img.src = "images/download.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "10px";
        uploadbtn.style.background = "red";
        uploadbtn.innerHTML="";
        uploadbtn.appendChild(img);
        uploadbtn.append(" DOWNLOAD");
    } else{
        var img =document.createElement("img");
        uploadbtn.className="createbtn";
        img.src = "images/upload.png";
        img.width = "25";
        img.height = "25";
        img.style.paddingRight = "15px";
        uploadbtn.style.background = "#0eff00";
        uploadbtn.innerHTML="";
        uploadbtn.appendChild(img);
        uploadbtn.append("UPLOAD");
    }
});
