# DockerFile
# 
# Create IMG-Container for app training api-rest
# Ademar Tellecher

# Origem image container
FROM node:15-alpine

# Folder and files origin, for folder destination
ADD . app/

# Folder run project/app
WORKDIR /app

# Command for install dependencies
RUN npm install

# Command for init aplication api
CMD npm start