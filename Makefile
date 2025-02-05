.PHONY: install dev clean deploy build build-n-deploy

# Default target
all: install

# Install dependencies
install:
	pnpm install

# Run development server
dev:
	pnpm dev

# Clean installation
clean:
	rm -rf node_modules
	rm -rf .next
	rm -f pnpm-lock.yaml 

# Build the project
build:
	pnpm build

# Deploy to Vercel
deploy:
	vercel deploy

# Build and deploy in one command
build-n-deploy: build
	vercel deploy