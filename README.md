# OpenWrt

一个 OpenWrt 固件仓库，使用 Github Action 自动编译各类实用的[插件](#插件)，生成对应[设备](#设备)的固件。

## 快速入门

1. **下载固件**：固件可在 [Releases](https://github.com/c3p7f2/build-openwrt/releases) 页面下载。

2. **安装固件**：安装 OpenWrt 固件的过程可能因设备而异。通常，你需要了解你设备的型号，以便选择正确的固件。此外，你还需要了解如何刷写新固件。请注意，在安装过程中，你的互联网访问可能会中断几分钟。请确保你已离线拥有所有必需的信息，或者有备用的网络连接来访问互联网。

3. **配置固件**：固件使用的默认 IP 地址是 **192.168.1.1**，默认账号是 **root**，默认密码是 **password**。你可以连接设备来配置后台。

## 插件

<details><summary><b>插件列表</b> （展开/收起）</summary>

- luci-app-accesscontrol
- luci-app-adguardhome
- luci-app-aliyundrive-webdav
- luci-app-arpbind
- luci-app-autoreboot
- luci-app-cifs-mount
- luci-app-commands
- luci-app-ddns
- luci-app-design-config
- luci-app-diskman
- luci-app-filebrowser
- luci-app-filetransfer
- luci-app-firewall
- luci-app-frpc
- luci-app-ipsec-vpnd
- luci-app-mwan3
- luci-app-n2n
- luci-app-netdata
- luci-app-nfs
- luci-app-nlbwmon
- luci-app-nps
- luci-app-openclash
- luci-app-openvpn
- luci-app-pushbot
- luci-app-qbittorrent
- luci-app-qos
- luci-app-samba4
- luci-app-serverchan
- luci-app-smartdns
- luci-app-softethervpn
- luci-app-ssr-plus
- luci-app-syncdial
- luci-app-ttyd
- luci-app-turboacc
- luci-app-unblockmusic
- luci-app-upnp
- luci-app-usb-printer
- luci-app-vlmcsd
- luci-app-vsftpd
- luci-app-wireguard
- luci-app-wol
- luci-app-xlnetacc
- luci-app-zerotier
- luci-theme-argon
- luci-theme-bootstrap
- luci-theme-design
- luci-theme-material
- luci-theme-netgear

</details>

## 设备

- X86
- N1
- Rockchip
- Raspberry Pi (4)
- 虚拟机

## 常见问题解答

**Q: 如何安装固件？**

A: 安装固件的过程可能因设备而异，你可以在视频网站或搜索引擎中查找相应设备的安装教程。

**Q:如何升级固件？**

A: 你可以在我们的 [Releases](https://github.com/moemoe-orange/openwrt-redstone/releases) 页面下载最新版本的固件，然后按照设备文档中的说明刷写新固件。

**Q:支持 IPv6 吗？**

A: 支持。

## 使用到的开源项目：

OpenWrt 源码：

- [openwrt/openwrt](https://github.com/openwrt/openwrt)
- [coolsnowwolf/lede](https://github.com/coolsnowwolf/lede)

OpenWrt 软件包：

- [kenzok8/openwrt-packages](https://github.com/kenzok8/openwrt-packages)
- [kenzok8/small](https://github.com/kenzok8/small)
- [ophub/luci-app-amlogic](https://github.com/ophub/luci-app-amlogic)

Amlogic 打包：

- [ophub/flippy-openwrt-actions](https://github.com/ophub/flippy-openwrt-actions)

## 贡献

欢迎为本项目做出贡献。

## 许可证

本项目采用[MIT 许可证](LICENSE)。

<hr/>
<br/>

<svg  xmlns="http://www.w3.org/2000/svg"  width=auto height="45" viewBox="0 0 162.96 30.08"><defs><style>.cls-1{fill:#fff;}.cls-2{mask:url(#mask);}.cls-3{stroke-miterlimit:10;fill:url(#橙色*黄色);stroke:url(#未命名的渐变\_6);}</style><mask id="mask" x="0" y="0" maskUnits="userSpaceOnUse"><g transform="translate(-662.13 -79.06)"><path class="cls-1" d="M676.93,82s0-3.16,3.05-2.59l6.21,2.7a2.72,2.72,0,0,1,1.35,3.62L680,91.23s-1.13.9-2.26-.68Z"/><path class="cls-1" d="M667.2,88.37s-2.73-1.58-.72-3.94l5.45-4a2.71,2.71,0,0,1,3.8.64l1,9.31S677,91.79,675,92Z"/><path class="cls-1" d="M667.88,100s-2.74,1.58-3.77-1.34l-.76-6.73a2.71,2.71,0,0,1,2.45-3l8.57,3.78s1.35.53.54,2.29Z"/><path class="cls-1" d="M678.29,105.22s0,3.16-3,2.6L669,105.11a2.7,2.7,0,0,1-1.35-3.61L675.24,96s1.13-.9,2.26.68Z"/><path class="cls-1" d="M688,98.82s2.73,1.58.72,3.94l-5.45,4a2.7,2.7,0,0,1-3.8-.63l-1-9.31s-.22-1.43,1.71-1.62Z"/><path class="cls-1" d="M687.34,87.2s2.74-1.58,3.77,1.34l.76,6.73a2.71,2.71,0,0,1-2.45,3l-8.57-3.78s-1.35-.53-.54-2.3Z"/></g></mask><linearGradient id="橙色*黄色" x1="254.94" y1="150.06" x2="285.03" y2="150.06" gradientTransform="translate(-69.76 -281.97) rotate(45)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff21f"/><stop offset="0.01" stop-color="#ffef1c"/><stop offset="0.1" stop-color="#fddc0d"/><stop offset="0.19" stop-color="#fcd103"/><stop offset="0.28" stop-color="#fccd00"/><stop offset="0.67" stop-color="#f1942e"/><stop offset="0.89" stop-color="#ea652d"/><stop offset="1" stop-color="#e5352b"/></linearGradient><linearGradient id="未命名的渐变_6" x1="254.44" y1="150.06" x2="285.53" y2="150.06" xlink:href="#橙色_黄色"/></defs><g class="cls-2"><circle class="cls-3" cx="15.04" cy="15.04" r="15.04"/></g><path d="M706.91,88.08h1.55v.84h2.95v1.34h-2.95v.8h-1.55v-.8h-2.48v.8h-1.55v-.8h-3V88.92h3v-.84h1.55v.84h2.48Zm-6.48,3.33h4v6.42h-2.66v.87h-1.36Zm2.66,1.31h-1.3V94h1.3Zm0,3.8V95.28h-1.3v1.24Zm2,3.27a14.59,14.59,0,0,0-1.33-1,5.51,5.51,0,0,0,1.51-4v-3.5h5.42V97.7q0,1.88-1.47,2l-2,0c-.08-.51-.17-1-.27-1.47h1.41c.56,0,.84-.21.84-.64v-.83H706.5A6.66,6.66,0,0,1,705.06,99.79Zm1.63-5.12c0,.27,0,.57,0,.9h2.54v-.9Zm2.52-2h-2.52v.9h2.52Z" transform="translate(-662.13 -79.06)"/><path d="M713.22,95a14.17,14.17,0,0,0,1.18-3.34h-1V90.26h1.13V88.1h1.26v2.16h.85V91.7h-.85v1c.34.26.69.54,1,.86L716.4,95l-.66-.76v5.4h-1.26V94.89a14.09,14.09,0,0,1-.86,2.19C713.52,96.52,713.39,95.84,713.22,95Zm11.48-4.52v.92L724,93.1l-1.15-.43.52-1.17h-1.17v.75c0,.71-.31,1.1-.93,1.15-.4,0-.93,0-1.58.06a8.94,8.94,0,0,0-.29-1l1.09,0c.26,0,.4-.16.4-.5V91.5h-.52a9.78,9.78,0,0,1-3,2.14,12.74,12.74,0,0,0-.85-1.08A7.41,7.41,0,0,0,719,91.5h-2.17v-1h2.43l-1-.49.42-.5h-1.44v-1h6.91v1l-1.62,1Zm-6.35,9.07H717V93.67h7.34v4.57c0,.82-.33,1.26-1,1.33-.37,0-.88,0-1.54.05-.07-.3-.14-.58-.21-.83h-1.47v.31h-1V96.78l-.14.11-.61-.54Zm1.34-4.82h-1.34V96C718.83,95.61,719.28,95.19,719.69,94.77Zm2.6-5.24H719.4l1.48.86C721.32,90.13,721.79,89.85,722.29,89.53Zm-1.41,5.79.69-.55h-1.74l.78.52c-.27.29-.56.58-.85.87h2Q721.25,95.67,720.88,95.32Zm.26,2.53v-.76h-1v.76Zm1.91-2v-1.1h-1.3C722.26,95.19,722.69,95.55,723.05,95.87Zm-.86.74v1.81h.48c.25,0,.38-.16.38-.48V96.37l-.61.49Z" transform="translate(-662.13 -79.06)"/><path d="M740.9,98.07V92.56c0-.5,0-1.14.08-1.91h-.05a10.4,10.4,0,0,1-.28,1.16l-2.24,6.26h-1.54l-2.27-6.2c-.05-.15-.15-.55-.29-1.22h0c0,.76.08,1.52.08,2.29v5.13h-1.75V89h2.81l2,5.48a6.26,6.26,0,0,1,.34,1.28h0a12.39,12.39,0,0,1,.37-1.29l2-5.47h2.74v9.07Z" transform="translate(-662.13 -79.06)"/><path d="M745.8,93.65a4.89,4.89,0,0,1,1.25-3.47,4.28,4.28,0,0,1,3.29-1.34,4,4,0,0,1,3.13,1.3,4.73,4.73,0,0,1,1.19,3.33,4.81,4.81,0,0,1-1.24,3.44,4.59,4.59,0,0,1-6.4,0A4.59,4.59,0,0,1,745.8,93.65Zm2-.1a3.5,3.5,0,0,0,.63,2.16,2.09,2.09,0,0,0,1.76.84,2.13,2.13,0,0,0,1.77-.8,3.44,3.44,0,0,0,.63-2.17,3.68,3.68,0,0,0-.62-2.24,2,2,0,0,0-1.73-.82,2.13,2.13,0,0,0-1.79.84A3.44,3.44,0,0,0,747.84,93.55Z" transform="translate(-662.13 -79.06)"/><path d="M763,98.07h-5.37V89h5.16v1.58h-3.22v2.14h3v1.57h-3v2.2H763Z" transform="translate(-662.13 -79.06)"/><path d="M765.37,93.65a4.89,4.89,0,0,1,1.24-3.47,4.3,4.3,0,0,1,3.29-1.34,4,4,0,0,1,3.13,1.3,4.73,4.73,0,0,1,1.19,3.33A4.81,4.81,0,0,1,773,96.91a4.59,4.59,0,0,1-6.4,0A4.58,4.58,0,0,1,765.37,93.65Zm2-.1a3.44,3.44,0,0,0,.64,2.16,2.07,2.07,0,0,0,1.75.84,2.11,2.11,0,0,0,1.77-.8,3.44,3.44,0,0,0,.63-2.17,3.67,3.67,0,0,0-.61-2.24,2,2,0,0,0-1.74-.82,2.15,2.15,0,0,0-1.79.84A3.5,3.5,0,0,0,767.4,93.55Z" transform="translate(-662.13 -79.06)"/><path d="M784.68,98.07h-2.22L781,95.71a3.37,3.37,0,0,0-.72-.94,1,1,0,0,0-.6-.21h-.58v3.51h-1.94V89h3.19q3.24,0,3.24,2.46a2.43,2.43,0,0,1-.55,1.58,2.84,2.84,0,0,1-1.49.94v0A3.22,3.22,0,0,1,783,95.38Zm-5.55-7.6v2.61h1a1.5,1.5,0,0,0,1.09-.4,1.31,1.31,0,0,0,.41-1q0-1.23-1.47-1.23Z" transform="translate(-662.13 -79.06)"/><path d="M794.89,98.07h-2.11L792.1,96h-3.3l-.67,2.08H786L789.36,89h2.27Zm-3.25-3.57-1-3.15a3.42,3.42,0,0,1-.14-.79h-.05a3.9,3.9,0,0,1-.16.77l-1,3.17Z" transform="translate(-662.13 -79.06)"/><path d="M805.54,98.07h-2l-3.84-5.87a6,6,0,0,1-.43-.74h0c0,.31,0,.8,0,1.45v5.16h-1.83V89h2.1l3.71,5.7.45.72h0a8.34,8.34,0,0,1-.06-1.25V89h1.83Z" transform="translate(-662.13 -79.06)"/><path d="M816.47,97.46a6.48,6.48,0,0,1-3.27.77A4.72,4.72,0,0,1,809.78,97a4.4,4.4,0,0,1-1.25-3.33,4.64,4.64,0,0,1,1.37-3.49,5,5,0,0,1,3.64-1.35,7.23,7.23,0,0,1,2.54.41v1.84a5,5,0,0,0-2.58-.62,2.82,2.82,0,0,0-2.13.86,3.63,3.63,0,0,0-.08,4.47,2.61,2.61,0,0,0,2,.8,3,3,0,0,0,1.24-.23V94.5H812.7V93h3.77Z" transform="translate(-662.13 -79.06)"/><path d="M825.09,98.07h-5.38V89h5.17v1.58h-3.23v2.14h3v1.57h-3v2.2h3.44Z" transform="translate(-662.13 -79.06)"/></svg>

