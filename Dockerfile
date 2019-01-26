FROM node:carbon
MAINTAINER Jinyoung Yoo y@ujinyoung.com

#nodejs app folder
#RUN mkdir -p /app
WORKDIR ./app
ADD ./app /app

#docker-compse app에 volume 추가하면서 제거
#RUN cd /app
#RUN npm install

EXPOSE 4000
#3000

ENV NODE_ENV=production
CMD npm start
