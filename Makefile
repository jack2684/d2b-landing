.PHONY: install dev clean deploy build build-n-deploy lint lint-fix

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

# Lint check
lint:
	pnpm eslint "src/**/*.{ts,tsx}" --ignore-pattern ".next/*"

# Auto-fix lint errors where possible
lint-fix:
	pnpm eslint "src/**/*.{ts,tsx}" --ignore-pattern ".next/*" --fix

# Build the project
build: lint-fix
	pnpm build

# Deploy to Vercel
deploy:
	vercel deploy

# Build and deploy in one command
build-n-deploy: build
	vercel deploy