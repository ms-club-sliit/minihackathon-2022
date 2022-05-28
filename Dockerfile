FROM node:14.18-alpine AS BUILD_IMAGE 
RUN apk add --no-cache nodejs npm
WORKDIR /mini-hackathon-v2
COPY ["yarn.lock", "package.json", "./"]
RUN yarn install --check-files --non-interactive --ignore-optional --frozen-lockfile
COPY . .
RUN yarn build 

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /mini-hackathon-v2 /app/
EXPOSE 3000
ENTRYPOINT [ "yarn" ] 
CMD [ "start" ]