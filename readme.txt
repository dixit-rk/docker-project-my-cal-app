steps:
1.download docker
2.run following commands:
 docker pull dixitnakhva/my-cal-app-repo:my-cal-app
 docker run -p 8000:3000 --name my-cal-app-container -d dixitnakhva/my-cal-app-repo:my-cal-app

-this will run a conatiner on your host machine's port 8000 named "my-cal-app-container" in detached mode
-this conatiner will be running image dixitnakhva/my-cal-app-repo:my-cal-app image
