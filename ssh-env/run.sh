#!/bin/sh

# 用于Github-Action

echo "==> 创建.ssh目录"
mkdir -p ~/.ssh

echo "==> 写入公钥"
touch ~/.ssh/authorized_keys
chown runner:runner ~/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7a9wzWBmnjDtO39GZ0Z1wEGMkR1YRxeZkVNvPQ8GkZKHYdtCrqX+SdRBczo2xdJbHM9cDJNtOJKZp1/n4MCuMVMD8ea93npMjIXpt+lP7cGvyEYAhRrzKEiy3+jAVxnK9wDRpAGAI6uL5mLk9TAO3bt42Tzf02GGjgHqPshiVsBee2Y+rNqPWOb1a0gp302DlORo5stW4zLmRgvwEaxbcEr02lct4ly1s0fjjTJIxXHfOcs+tviW77IcXh1BeE+OvKLAHvfCalMnmm8q1WxDHk4feqCt/pq5pMWnvqg+PQlOLFT1Ff7T4Hi22shmy0Jbuor3HksxrdIcpl6hNAzeH" >> ~/.ssh/authorized_keys

echo "==> 复制修改好的ssh配置文件"
sudo cp ./sshd_config.modify /etc/ssh/sshd_config

echo "==> 重载sshd"
sudo systemctl reload sshd

echo "==> 安装starship"
curl -fsSLO https://starship.rs/install.sh  && bash ./install.sh --yes
rm ./install.sh
echo "==> 写入bash配置文件"
echo 'eval "$(starship init bash)"' >> ~/.bashrc
