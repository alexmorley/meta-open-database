upstream mod_dev {
    server 127.0.0.1:3005;
    keepalive 8;
}

# the nginx server instance
server {
    listen 80;
    listen [::]:80;
    server_name dev.meta-open-db.com www.dev.meta-open-db.com;
    access_log /var/log/nginx/meta-open-db.com.log;

    # pass the request to the node.js server with the correct headers
    # and much more can be added, see nginx config options
    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://mod_dev/;
      proxy_redirect off;
    }
}
