var type = 0;

window.onload = function(){
    document.querySelector('#sub1').onmouseover = function () {changeMain(1, type)};
    document.querySelector('#sub2').onmouseover = function () {changeMain(2, type)};
    document.querySelector('#sub3').onmouseover = function () {changeMain(3, type)};

}

var changeMain = function(no, ty){
    if(no == 1){
        if(ty == 0){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/201270/ss_61205ebc6931862bd2d92aaa209dc19b8603c602.600x338.jpg?t=1545231268";
        } else if(ty == 1) {
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_b923ac3082d777893dfd5594f338b2c7dada5133.600x338.jpg?t=1558606539";
        } else if(ty == 2) {
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/412020/ss_4613c0b4d861ac5dbbac9a1e06a8abecfa3b34d5.600x338.jpg?t=1551447663";
        } else if(ty == 3){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/414700/ss_d190ff947f5529d6e47c918afe7e6ee4fbccbce3.600x338.jpg?t=1494442005";
        } else if(ty == 4){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.600x338.jpg?t=1558652556";
        }

    } else if(no == 2){
        if(ty == 0){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/201270/ss_8a753539083efc83c824e28e1d6619b2928cbed4.600x338.jpg?t=1545231268";
        } else if(ty == 1) {
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_3d0d325e6f3f3378d04fb7f45fb2e0a0e9fbaa1e.600x338.jpg?t=1558606539";
        } else if(ty == 2) {
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/412020/ss_f0297eacbfb4266f311a8cb4137e4ef8b7cdd00b.600x338.jpg?t=1551447663";
        } else if(ty == 3){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/414700/ss_69427df3942114a8e0c598e03fc88112f65f7fdc.600x338.jpg?t=1494442005";
        } else if(ty == 4){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.600x338.jpg?t=1558652556";
        }

    } else if(no == 3){
        if(ty == 0){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/201270/ss_2bea34ef7b93555dba96cc1febaf3f752aa3274f.600x338.jpg?t=1545231268";
        } else if(ty == 1) {
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_c3d9fbe72d9681dafb8903af50580dbaa75e9da7.600x338.jpg?t=1558606539";
        } else if(ty == 2) {
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/412020/ss_f7d9823413127514fd0515f6082db3ef55f2cf07.600x338.jpg?t=1551447663";
        } else if(ty == 3){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/414700/ss_e4790456e152b9db2aa1b8e4918a83748a68e3a0.600x338.jpg?t=1494442005";
        } else if(ty == 4){
            document.querySelector('#mainImg').src = "https://steamcdn-a.akamaihd.net/steam/apps/550/ss_73ad69168a263ce585e4823d9607d901719ca3c5.600x338.jpg?t=1558652556";
        }

    }
}

var changeGame = function(imgsrc, num){
        
    document.querySelector('#mainImg').src = imgsrc;

    if(num == 1){
        document.querySelector('#sub1').src = "https://steamcdn-a.akamaihd.net/steam/apps/201270/ss_61205ebc6931862bd2d92aaa209dc19b8603c602.600x338.jpg?t=1545231268";
        
        document.querySelector('#sub2').src = "https://steamcdn-a.akamaihd.net/steam/apps/201270/ss_8a753539083efc83c824e28e1d6619b2928cbed4.600x338.jpg?t=1545231268";
        
        document.querySelector('#sub3').src = "https://steamcdn-a.akamaihd.net/steam/apps/201270/ss_2bea34ef7b93555dba96cc1febaf3f752aa3274f.600x338.jpg?t=1545231268";
        
        document.querySelector('.description').innerHTML = "Total War: SHOGUN 2 is the perfect mix of real-time and turn-based strategy gaming for newcomers and veterans alike. <br> Price: $54.99(Steam)";
        type = 0;

    } else if(num ==2){
        document.querySelector('#sub1').src = "https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_b923ac3082d777893dfd5594f338b2c7dada5133.600x338.jpg?t=1558606539";
        
        document.querySelector('#sub2').src = "https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_3d0d325e6f3f3378d04fb7f45fb2e0a0e9fbaa1e.600x338.jpg?t=1558606539";
        
        document.querySelector('#sub3').src = "https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_c3d9fbe72d9681dafb8903af50580dbaa75e9da7.600x338.jpg?t=1558606539";
        
        document.querySelector('.description').innerHTML = "Strategy gaming perfected. A breath-taking campaign of exploration, expansion and conquest across a fantasy world. Turn-based civilisation management and real-time epic strategy battles with thousands of troops and monsters at your command. <br> Price: $71.89(Steam) ";
        type = 1;

    }else if(num ==3){
        document.querySelector('#sub1').src = "https://steamcdn-a.akamaihd.net/steam/apps/412020/ss_4613c0b4d861ac5dbbac9a1e06a8abecfa3b34d5.600x338.jpg?t=1551447663";
        
        document.querySelector('#sub2').src = "https://steamcdn-a.akamaihd.net/steam/apps/412020/ss_f0297eacbfb4266f311a8cb4137e4ef8b7cdd00b.600x338.jpg?t=1551447663";
        
        document.querySelector('#sub3').src = "https://steamcdn-a.akamaihd.net/steam/apps/412020/ss_f7d9823413127514fd0515f6082db3ef55f2cf07.600x338.jpg?t=1551447663";
        
        document.querySelector('.description').innerHTML = "Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness. Explore vast, non-linear levels, lose yourself in an immersive, sandbox survival experience, and follow a thrilling story-line that spans an entire year in the  <br> Price: $30.49(Steam) ";
        type = 2;

    }else if(num ==4){
        document.querySelector('#sub1').src = "https://steamcdn-a.akamaihd.net/steam/apps/414700/ss_d190ff947f5529d6e47c918afe7e6ee4fbccbce3.600x338.jpg?t=1494442005";
        
        document.querySelector('#sub2').src = "https://steamcdn-a.akamaihd.net/steam/apps/414700/ss_69427df3942114a8e0c598e03fc88112f65f7fdc.600x338.jpg?t=1494442005";
        
        document.querySelector('#sub3').src = "https://steamcdn-a.akamaihd.net/steam/apps/414700/ss_e4790456e152b9db2aa1b8e4918a83748a68e3a0.600x338.jpg?t=1494442005";
        
        document.querySelector('.description').innerHTML = "Outlast 2 introduces you to Sullivan Knoth and his followers, who left our wicked world behind to give birth to Temple Gate, a town, deep in the wilderness and hidden from civilization. Knoth and his flock are preparing for the tribulations of the end of times and you’re right in the thick of it. <br> Price: $33.99(Steam) ";
        type = 3;

    }else if(num == 5){
        document.querySelector('#sub1').src = "https://steamcdn-a.akamaihd.net/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.600x338.jpg?t=1558652556";
        
        document.querySelector('#sub2').src = "https://steamcdn-a.akamaihd.net/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.600x338.jpg?t=1558652556";

        document.querySelector('#sub3').src = "https://steamcdn-a.akamaihd.net/steam/apps/550/ss_73ad69168a263ce585e4823d9607d901719ca3c5.600x338.jpg?t=1558652556";

        document.querySelector('.description').innerHTML = "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans<br> Price: $11.49(Steam) ";
        type = 4;

    }
}

