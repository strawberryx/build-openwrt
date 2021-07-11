#!/bin/sh

# 用于Github-Action

echo "==> 放入.ssh目录"
rm -rf ~/.ssh
cp ./ssh-env/.ssh ~

chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
sudo chown -R runner:runner ~/.ssh


#echo "==> 复制修改好的ssh配置文件"
#sudo cp ./sshd_config.modify /etc/ssh/sshd_config
#echo "==> 重载sshd"
#sudo systemctl reload sshd

echo "==> 安装starship"
curl -fsSLO https://starship.rs/install.sh  && bash ./install.sh --yes
rm ./install.sh
echo "==> 写入bash配置文件"
echo 'eval "$(starship init bash)"' >> ~/.bashrc
