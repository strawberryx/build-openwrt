#!/bin/bash

# 用于Github-Action

echo "==> 放入.ssh目录"
sudo rm -rf /root/.ssh
cp -r ./ssh-env/.ssh /root

sudo chmod 700 /root/.ssh
sudo chmod 600 /root/.ssh
sudo chown -R root:root /root/.ssh


#echo "==> 复制修改好的ssh配置文件"
#sudo cp ./sshd_config.modify /etc/ssh/sshd_config
#echo "==> 重载sshd"
#sudo systemctl reload sshd

echo "==> 安装starship"
curl -fsSLO https://starship.rs/install.sh  && bash ./install.sh --yes
rm ./install.sh
echo "==> 写入bash配置文件"
echo 'eval "$(starship init bash)"' >> ~/.bashrc
