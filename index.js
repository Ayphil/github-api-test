        // Function to make a request to GitHub API
        window.addEventListener("change", () => {
            fetchGitHubUser(event.target.value);
        });

        const fetchGitHubUser = async (username) => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const userData = await response.json();

                showUserInfo(userData);
            } catch (error) {
                console.error('Error fetching GitHub user:', error);
            }
        };

        const showUserInfo = (userData) => {
            if(userData.url != null){
                document.getElementById("UserURL").setAttribute("href", `https://github.com/${userData.login}?tab=repositories`);
            }
            if(userData.name != null){
                document.getElementById("UserNAME").innerHTML = `Full name : ${userData.name}`;
            }
            if(userData.bio != null){
                document.getElementById("UserBIO").innerHTML = `Bio : ${userData.bio}`;
            }


        }