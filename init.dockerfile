# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY init/package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY init .

# Run the initialization script
CMD ["npx", "ts-node", "initCinemaData.ts"]
