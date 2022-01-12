function  work(){

    navigator.mediaDevices.getUserMedia({ audio: true });

classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zcGqV0ZGk/model.json" , modelReady)
}


function modelReady(){

  classifier.classify(gotResults)  
}

function gotResults(error,results){
  if (error) {
    console.log(error)

  } else {
    console.log(results)

    document.getElementById("resultlabel").innerHTML=results[0].label
    document.getElementById("resultaccu").innerHTML=(results[0].confidence * 100).toFixed(0)+"%"
image1=document.getElementById ("cat1");
image2=document.getElementById ("2");
image3=document.getElementById ("ali3");
image4=document.getElementById ("ali4");

    if (results[0].label == "clap") {
      image1.src="aliens-01.gif"
      image2.src="aliens-02.png"
      image3.src="aliens-03.png"
      image4.src="aliens-04.png"
      
    } else if (results[0].label == "Snap"){
      image1.src="aliens-01.png"
      image2.src="aliens-02.gif"
      image3.src="aliens-03.png"
      image4.src="aliens-04.png"
    }

    else if (results[0].label == "Bell"){
      image1.src="aliens-01.png"
      image2.src="aliens-02.png"
      image3.src="aliens-03.gif"
      image4.src="aliens-04.png"
    }

    else  if(results[0].label == "Background Noise"){
      image1.src="aliens-01.png"
      image2.src="aliens-02.png"
      image3.src="aliens-03.png"
      image4.src="aliens-04.gif"
    }
  }
}



