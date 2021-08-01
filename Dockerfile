FROM alpine:3.11 as build

ARG HUGO_VERSION=0.86.0
ARG HUGO_TYPE=_extended

RUN apk upgrade &&\
    apk add --update wget libc6-compat libstdc++ nodejs npm &&\
    wget -O hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo${HUGO_TYPE}_${HUGO_VERSION}_Linux-64bit.tar.gz &&\
    tar xvf hugo.tar.gz &&\
    mv hugo /usr/bin &&\
    rm hugo.tar.gz &&\
    npm install workbox-build gulp gulp-uglify readable-stream uglify-es --global &&\
    hugo version

COPY ./ /site
WORKDIR /site
RUN hugo -D &&\
    npm link install workbox-build gulp gulp-uglify readable-stream uglify-es &&\
    /usr/lib/node_modules/gulp/bin/gulp.js build

FROM alpine:3.11
COPY --from=build /site/public /site