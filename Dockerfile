# pull official base image
FROM node:18.16.0-alpine as builder

# Build arguments for user/group configurations
ARG USER_ID=10001
ARG USER_GROUP_ID=10001
ARG USER_HOME=/home/app

# Create app directory
WORKDIR ${USER_HOME}

# Copy the rest of the application code to the container
COPY --chown=${USER_ID}:${USER_GROUP_ID} . .

# Install dependencies
# RUN npm install --save --legacy-peer-deps 
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install --save --legacy-peer-deps

USER 10001

EXPOSE 80

# Start the application
CMD ["npm", "start", "--cache", "/tmp", "--force"]
