
## version 3.0

### Build docker image 
Before start, you should build docker image. (only when first start)

```sh build.sh```
or

```sudo docker build --tag node-nginx:latest .```

```cd nginx```

```sudo docker build --tag nginx-app:latest .```


### Start
``` sh start.sh```
or

```sudo docker-compose up```

then start node-nginx-1, node-nginx-2, nginx-app, mongodb containers

### Remove all docker container
```sh rmdocker.sh```

### Execute mongodb shell (When running)
```sh mongo.sh```

### Execute nginx-app shell (When running)
```sh app.sh```

