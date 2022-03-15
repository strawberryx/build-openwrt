#!/bin/bash

# 通用
sed -i '$a src-git kenzo https://github.com/kenzok8/openwrt-packages' feeds.conf.default
sed -i '$a src-git small https://github.com/kenzok8/small' feeds.conf.default
echo "src-git cdnspeedtest https://github.com/immortalwrt-collections/openwrt-cdnspeedtest.git" >> "feeds.conf.default"

git pull

#
cd package

# N1
svn co https://github.com/ophub/luci-app-amlogic/trunk/luci-app-amlogic luci-app-amlogic

# 另外增加
git clone https://github.com/mingxiaoyu/luci-app-cloudflarespeedtest.git

# rm -rf luci-app-openclash
# git clone https://github.com/vernesong/OpenClash.git