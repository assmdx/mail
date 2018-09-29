#!/bin/bash
docker build -t "mail/assmdx11" .
echo "build mail images success!"
docker run -p 7001:7001 mail/assmdx11
