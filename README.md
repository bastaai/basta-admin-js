<img src="https://gist.githubusercontent.com/viktorbasta/fd54dee2e192bb6bc235d1c4b47ae2e6/raw/5eedf97d9bcf1711cf2f90b2ad5f54f4bc6d253d/basta-labs-logo.svg" width="160" />

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

const basta = initBasta(secret_key, account_id);
```

Navigate to the Basta Admin [portal](https://admin.basta.ai) to create a
**secret key** and aquire the **account id**.
