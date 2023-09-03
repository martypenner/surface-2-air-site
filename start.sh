#!/bin/sh -ex

# This file is how Fly starts the server (configured in fly.toml).
# Learn more: https://community.fly.io/t/sqlite-not-getting-setup-properly/4386

# allocate swap space
fallocate -l 512M /swapfile
chmod 0600 /swapfile
mkswap /swapfile
echo 10 >/proc/sys/vm/swappiness
swapon /swapfile
echo 1 >/proc/sys/vm/overcommit_memory

npm run start
