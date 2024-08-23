<img
src="https://gist.githubusercontent.com/viktorbasta/d60b2555b30c415c8da7f4cc91282a7e/raw/84debc03b126793c193f40010388b1855aec1ad4/basta-labs-logo-horizontal.png"
height="120" />

# basta-admin-js

![npm version](https://img.shields.io/npm/v/@bastaai/basta-admin-js?color=%233E69B0)
[![gzip](https://img.shields.io/bundlephobia/minzip/@bastaai/basta-admin-js?label=gzip&color=%233E69B0)](https://bundlephobia.com/result?p=@bastaai/basta-admin-js)
![dependencies](https://img.shields.io/badge/dependencies-0-%233E69B0)

## ⚠️ Important Note ⚠️

**This SDK should ONLY be used server side.**

This package requires a _secret key_. As such, it is intended to be used in a
server-side environment. Exposing your secret key is a security risk.

## Description

**Basta Admin SDK** is a specialized toolkit, designed with the purpose of
facilitating the management and execution of Basta auctions. It allows users to
perform advanced operations with ease, enhancing the efficiency of your
auction-related tasks.

## Installation

`npm install @bastaai/basta-admin-js`

## Usage

```javascript
import { initBasta } from '@bastaai/basta-admin-js';

const basta = initBasta({ accountId: 'accountId', secretKey: 'secretKey' });
```

Navigate to the Basta Admin [portal](https://dashboard.basta.app) to create a
**secret key** and aquire the **account id**.

# Currencies

All currency amounts follow the ISO 4217 standard. See here
https://en.wikipedia.org/wiki/ISO_4217.
