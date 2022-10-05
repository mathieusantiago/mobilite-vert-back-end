# Introduction

Download the project and follow the instructions to start the stack 

### Download github project 
```bash
git clone https://github.com/mathieusantiago/mobilite-vert-back-end.git
cd mobilite-vert-back-end
```

### Install dependencies

```bash
$ npm install
```

> Both `package.json` and `package-lock.json` are versioned, as it should be.

### Serve with hot reload at localhost:5000

```bash
$ npm start
```
### if you want to use docker you will have to download the docker_stake following the instructions 

### Download github stack docker 
```bash
git clone https://github.com/mathieusantiago/mobilite-vert-docker.git
cd mobilite-vert-docker
```

### build container and images docker  
```bash
docker-compose --build
```

### Start docker  
```bash
docker-compose up 

 #if you start only contanier `server node` , `back office` and `client`

docker-compose up >`servernode` , `backoffice` Or `mongo`
```