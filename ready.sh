#! /bin/bash
pip3 install -r backend/requirements
cd frontend
npm config set registry "http://registry.npm.taobao.org/"
npm install
exit 0