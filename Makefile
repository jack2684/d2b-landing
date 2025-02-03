.PHONY: install dev clean

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