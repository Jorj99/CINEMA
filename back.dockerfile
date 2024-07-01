# # Use the official Node.js image as the base image
# FROM node:16

# # Set working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY back/package*.json ./back/

# # Copy the tsconfig.json and .eslintrc files from the configs/back directory
# COPY configs/back/tsconfig.json /usr/src/app/back
# COPY configs/back/.eslintrc ./back/.eslintrc

# # Change working directory to back and install app dependencies
# WORKDIR /usr/src/app/back
# RUN npm install

# # Copy the rest of the application code
# COPY back/ /usr/src/app/back

# # Build the TypeScript code
# RUN npm run build

# # Expose the application port
# EXPOSE 5050

# # Set the environment to development
# ENV NODE_ENV=development
# ENV PORT=5050
# ENV MONGO_URI=mongodb://localhost:27017/cinema_STDEV

# # Run the application
# CMD ["npm", "start"]


# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Set the environment
ENV NODE_ENV=development
ENV PORT=5050
ENV MONGO_URI=mongodb://localhost:27017/cinema_STDEV

# Serve the app using a static file server
RUN npm install -g serve
CMD ["npm", "run", "start"]

# Expose the port the app runs on
EXPOSE 3000
