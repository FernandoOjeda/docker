# docker
1.- Create Image from the app

docker build -t mynodetest:v0.1 .

2.- List images

docker image ls

3.- Create Container

docker run -d --name nodeapp -p 8080:8080 mynodetest
