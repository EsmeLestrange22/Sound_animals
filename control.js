function record_now() {
    navigator.mediaDevices.getUserMedia({audio: true});

    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/R2lHPGn08/model.json', modelReady)
}
function modelReady() {
    console.log("Your model has been loaded successfully")
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("hear").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("acc").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
random_r= Math.floor(Math.random() * 255) + 1;
random_g= Math.floor(Math.random() * 255) + 1;
random_b= Math.floor(Math.random() * 255) + 1;

document.getElementById("hear").style.color= "rgb("
+random_r+ "," +random_g+ "," +random_b+ ")"
document.getElementById("acc").style.color= "rgb("
+random_r+ "," +random_g+ "," +random_b+ ")"


        img1 = document.getElementById("animal");
       

        if (results[0].label == "Kitten") {
            img1.src = "Cat.gif"
            
        }
        if (results[0].label == "Monkey") {
            img1.src = "Monkey.gif"
        }
        if (results[0].label == "Rabbit") {
            img1.src = "Rabbit.gif"
            
        }

    }
}