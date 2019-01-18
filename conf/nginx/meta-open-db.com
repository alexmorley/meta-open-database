upstream mod_main {
    server 127.0.0.1:3000;
    keepalive 8;
}

# the nginx server instance
server {
    listen 80;
    listen [::]:80;
    server_name meta-open-db.com www.meta-open-db.com;
    access_log /var/log/nginx/meta-open-db.com.log;

    # pass the request to the node.js server with the correct headers
    # and much more can be added, see nginx config options
    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://mod_main/;
      proxy_redirect off;
    }
}
