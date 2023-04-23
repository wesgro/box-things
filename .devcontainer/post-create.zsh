#!/bin/zsh
echo "Looks like everything works as expected!"

curl https://get.volta.sh | bash
volta install node
npm i