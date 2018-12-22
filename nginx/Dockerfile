FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
#RUN rm /etc/nginx/conf.d/example_ssl.conf
#COPY /usr/share/nginx/html /usr/share/nginx/html

#/etc/nginx/sites-available
#/etc/nginx/sites-enabled
ADD conf/sites-available /etc/nginx/sites-available 
ADD conf/sites-enabled /etc/nginx/sites-enabled
#/var/www/leekt.page
ADD conf/var/www/leekt.page /var/www/leekt.page

COPY conf/nginx1.conf /etc/nginx/nginx.conf
