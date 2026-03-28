#!/bin/bash

# Define the source directory
SOURCE_DIR="$(pwd)"

# Define the destination directory for Mac Apache
DEST_DIR="/Library/WebServer/Documents/career-quiz"

echo "Copying files to Apache DocumentRoot..."
sudo mkdir -p "$DEST_DIR"
sudo cp -r "$SOURCE_DIR/"* "$DEST_DIR/"

echo "Starting Apache server..."
sudo apachectl start

# Get the current IP address (en0 is typically Wi-Fi on Mac)
IP_ADDR=$(ipconfig getifaddr en0)

if [ -z "$IP_ADDR" ]; then
    # Fallback if en0 is not active
    IP_ADDR=$(ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}' | head -n 1)
fi

echo "=================================================="
echo "Career Quiz has been deployed to the local Apache server!"
echo "You can access it at:"
echo "http://$IP_ADDR/career-quiz/"
echo "or"
echo "http://localhost/career-quiz/"
echo "=================================================="
