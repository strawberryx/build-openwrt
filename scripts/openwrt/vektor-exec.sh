#!/bin/bash
set -uo pipefail

# 返回到能编译阿里云webdav的makefile
curl -o ./feeds/packages/multimedia/aliyundrive-webdav/Makefile https://raw.githubusercontent.com/coolsnowwolf/packages/aea60b5432fad984c0a4013bad0f0c5e00dcd115/multimedia/aliyundrive-webdav/Makefile