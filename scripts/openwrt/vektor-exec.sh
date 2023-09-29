#!/bin/bash
set -uo pipefail

rustup update
sed -i 's/option lang auto/option lang zh_cn/' feeds/luci/modules/luci-base/root/etc/config/luci
