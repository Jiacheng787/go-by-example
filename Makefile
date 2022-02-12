VERSION = v1.0.0
DATE = `date +%Y-%m-%d_%H:%M:%S`

version:
	@echo version: ${VERSION} date: ${DATE} os: win

build : version
	@echo building go file...
