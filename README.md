# Discord Bot - README

## Introduction

Welcome to the Discord Bot! This bot is built using Node.js and provides various features to enhance your Discord server experience. One of the primary features of this bot is the ability to shorten URLs using the "create [link]" command. This README will guide you through the setup and usage of the bot.

## Features

- **Create Link**: Shorten long URLs into manageable links.
- *(adding other services soon)*

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A [Discord account](https://discord.com/)



## Setup

1. Clone the Repository

```bash
  git clone https://github.com/aashinak/discord-bot.git
  cd discord-bot
```
2. Install Dependencies:
```bash
  npm install
```
3. Create a Discord Bot:

- Go to the Discord Developer Portal.
- Click on "New Application" and give it a name.
- Go to the "Bot" section and click "Add Bot".
- Copy the bot token. You will need this for the configuration.
4. Configure the Bot:

- Create a .env file in the root directory of your project.
- Add the following lines to the .env file:
```bash
  DISCORD_TOKEN=your-bot-token
  URL_SHORTENER_API_KEY=your-url-shortener-api-key
```
