# 定义uupdump的ID
$id = $env:UUPDUMP_ID


# 定义下载的URL
$url = "https://uupdump.net/get.php?id=$id&pack=zh-cn&edition=professional"
# 定义下载的文件名
$filename = "uupdump.zip"
# 定义解压的目标文件夹
$folder = "uupdump-convert"
# 创建一个WebRequestSession对象，并设置UserAgent和Cookie
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
$session.Cookies.Add((New-Object System.Net.Cookie("Page-Language", "zh-cn", "/", ".uupdump.net")))
# 使用Invoke-WebRequest命令来下载文件，并指定Method，WebSession，Headers，ContentType和Body
Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $filename -Method "POST" -WebSession $session -Headers @{
  "authority"                 = "uupdump.net"
  "method"                    = "POST"
  "path"                      = "/get.php?id=$id&pack=zh-cn&edition=professional"
  "scheme"                    = "https"
  "accept"                    = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
  "accept-encoding"           = "gzip, deflate, br"
  "accept-language"           = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  "cache-control"             = "max-age=0"
  "origin"                    = "https://uupdump.net"
  "referer"                   = "https://uupdump.net/download.php?id=$id&pack=zh-cn&edition=professional"
  "sec-ch-ua"                 = "`" Not A;Brand`";v=`"99`", `"Chromium`";v=`"102`""
  "sec-ch-ua-mobile"          = "?0"
  "sec-ch-ua-platform"        = "`"Windows`""
  "sec-fetch-dest"            = "document"
  "sec-fetch-mode"            = "navigate"
  "sec-fetch-site"            = "same-origin"
  "sec-fetch-user"            = "?1"
  "upgrade-insecure-requests" = "1"
} -ContentType "application/x-www-form-urlencoded" -Body "autodl=2&updates=1"
# 使用Expand-Archive命令来解压文件
Expand-Archive -Path $filename -DestinationPath $folder
# 使用Start-Process命令来运行uup_download_windows.cmd
cmd.exe /c "$folder\uup_download_windows.cmd"