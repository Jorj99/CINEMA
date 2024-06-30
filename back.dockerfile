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


# Install app dependencies using the frozen lockfile approach
RUN npm install -g

# Copy the rest of the application code
COPY back .

# Build the TypeScript code
RUN npm run build

# Expose the application port
EXPOSE 5050

# Set the environment to development
ENV NODE_ENV=development
ENV PORT=5050
ENV NODE_ENV=development
ENV MONGO_URI=mongodb://localhost:27017/cinema_STDEV

# Run the application
CMD ["npm","run", "dev"]
