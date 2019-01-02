


### Start command
```sh start.sh```
or
```sudo docker-compose up```

then start node-nginx-1, node-nginx-2, nginx-app, mongodb containers

### Remove all docker container
```sh rmdocker.sh```

### Execute mongodb shell (When running)
```sh mongo.sh```

### Execute nginx-app shell (When running)
```sh app.sh```


### ~~docker build~~ (Not required)
~~```build.sh```~~ (each directory)
or

~~```sudo docker build --tag node-nginx:latest .```~~ (root diredtory)

~~```cd nginx```~~

~~```sudo docker build --tag nginx-app:latest .```~~ (nginx directory)
