#!/bin/bash
#rmdocker.sh

sudo docker stop `sudo docker ps -aq`
sudo docker rm `sudo docker ps -aq`
