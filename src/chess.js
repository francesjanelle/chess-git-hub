

        function clickButton() {

            let firstName = prompt("What is your name?");
            let currentAge = prompt("How old are you?");

            if (currentAge < 13) {
                alert(`Ask your parents first for permission to join, ${firstName}. ♟`);
            } /// end bracket for if
            else {
                let personEmail = prompt("What is your email?")
                alert(`Welcome, ${firstName}! I'll be in touch with you. ♟`)
            } /// end bracket for else
        } /// end bracket for function

        let playButton = document.querySelector("button");
        playButton.addEventListener("click", clickButton);

