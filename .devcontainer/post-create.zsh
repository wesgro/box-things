#!/bin/zsh
echo "Looks like everything works as expected!"

curl https://get.volta.sh | bash
source ~/.zshrc
volta install node
npm i