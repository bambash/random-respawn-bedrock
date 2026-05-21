# Contributing

## Getting Started

1. Fork the repository
2. Clone your fork
3. Make your changes
4. Test in Minecraft Bedrock Edition
5. Submit a pull request

## Pack Structure

```
random-respawn-bedrock/
├── manifest.json       # Behavior pack manifest
├── pack_icon.png       # 256x256 pack icon
└── scripts/
    └── main.js         # Entry point — respawn event handler
```

## Release Process

Releases are automated via GitHub Actions. To create a release:

1. Tag the commit: `git tag v0.1.0`
2. Push the tag: `git push origin v0.1.0`
3. The release workflow builds the `.mcpack` and attaches it to a GitHub release

## API Documentation

This pack uses the `@minecraft/server` module. See the [Microsoft Learn documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server) for API details.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
