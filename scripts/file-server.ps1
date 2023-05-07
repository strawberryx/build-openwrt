# 定义下载的URL
$url = "https://github.com/caddyserver/caddy/releases/download/v2.4.6/caddy_2.4.6_windows_amd64.zip"
# 定义下载的文件名
$filename = "caddy.zip"
# 定义解压的目标文件夹
$folder = "caddyserver"
# 使用Invoke-WebRequest命令来下载文件
Invoke-WebRequest -Uri $url -OutFile $filename
# 使用Expand-Archive命令来解压文件
Expand-Archive -Path $filename -DestinationPath $folder
# 使用Start-Process命令来运行caddy_windows_amd64.exe file-server --listen :2015 --browse
Start-Process -FilePath "$folder\caddy" -ArgumentList "file-server --listen :2015 --browse"