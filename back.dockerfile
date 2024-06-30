# Use the official Node.js image as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY back/package*.json ./

# Copy the tsconfig.json file
COPY configs/back/tsconfig.json ./tsconfig.json
COPY configs/back/tsconfig.json  /usr/src/configs/back/tsconfig.json

# Copy the tsconfig.json file
COPY configs/back/.eslintrc ./.eslintrc


# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY back .

# Build the TypeScript code
RUN npm run build

# Expose the application port
EXPOSE 5050

# Set the environment to development
ENV NODE_ENV=development

# Run the application
CMD ["npm", "start"]
