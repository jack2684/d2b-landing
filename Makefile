.PHONY: install dev clean deploy

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

# Deploy to Vercel
deploy:
	vercel deploy