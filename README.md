### Build docker image 
Before start, you must build docker image.

```sh build.sh```
or

```sudo docker build --tag node-nginx:latest .```

```cd nginx```

```sudo docker build --tag nginx-app:latest .```


### Start

If you change something related node-nginx:latest image, you must rebuild the image again.
(Use ```sudo docker build --tag node-nginx:latest .```)

All image is ready, use the command below to start.

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


