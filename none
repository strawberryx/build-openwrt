# OpenWrt firmware

项目使用 Github Actions 拉取源码仓库进行云编译 OpenWrt

## 平台

- X86-64
- 斐讯 N1
- Rockchip (Orange-Pi-R1-Plus,Nanopi-R4s,Nanopi-R2s)
- Raspberry Pi (4,3,3b+)
- 虚拟机 (vmdk)
- [Docker 镜像](https://hub.docker.com/r/shashiikora/openwrt-redstone)

## 文件列表

```
.github\workflows\build-openwrt.yml 编译流程（Action工作流）
                 |docker-image.yml  提交Docker镜像
configs\*\.config                   相应设备配置
       |app.config                  插件配置
scripts\openwrt\add-package.sh      添加软件包
               |init-settings.sh    修改固件信息
               |rewrite.sh          修改固件信息
               |vektor-exec.sh      编译前最后执行的脚本
       |ssh.sh                      SSH连接
files\*                             替换文件（源码内）
Dockerfile                          制作Docker镜像
```
