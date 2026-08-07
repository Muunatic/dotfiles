#!/bin/bash

sudo ln -s /etc/nginx/sites-available/folder /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx