FROM node:8.11.2
MAINTAINER assmdx183

RUN mkdir -p /opt/code/mail/mail
RUN mkdir -p /opt/code2
WORKDIR /opt/code

# INSTALL NPM PACKAGES
COPY package.json /opt/code/mail/mail/package.json
RUN cd mail \
&& cd mail \
&& npm i --registry=https://registry.npm.taobao.org

#COPY CODE
ADD https://github.com/assmdx/mail/archive/master.tar.gz /opt/code2/master.tar.gz

RUN cd /opt/code2 \
&& tar -xzvf master.tar.gz \
&&  cp -a /opt/code2/mail-master/mail/ /opt/code/mail

#SET PORT AND START CMD
EXPOSE 7001
WORKDIR /opt/code/mail/mail
CMD ["npm","run","dev"]
