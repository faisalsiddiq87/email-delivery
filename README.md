<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository for email delivery service.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Implementation

## About The Implementation

* The Implementation is done via `NestJS using TypeScript`.
* Mail [Module](https://github.com/faisalsiddiq87/email-delivery/tree/master/src/mail) is responsible to process the request and send email.
* MailService gets the request data via POST /mail End point and uses DeliverMailService to send email.
* MailService validates the input request data via [DTO](https://github.com/faisalsiddiq87/email-delivery/tree/master/src/mail/dto) before processing with deliverService.
* TransformInterceptor [Middleware](https://github.com/faisalsiddiq87/email-delivery/tree/master/src/middleware) processess the response(success/failure) of send mail method and returns JSON output with status code.
* SMTP creds config can be found [HERE](https://github.com/faisalsiddiq87/email-delivery/tree/master/src/config)
* GMAIL SMTP credentials are used to send email [HOW SETUP GMAIL SMTP?](https://www.youtube.com/watch?v=1YXVdyVuFGA)
* The project uses .env for environment, please copy .env.development to .env and replace SMTP_USER, SMTP_PASSWORD with your own creds.
* E2E test cases are available here [tests](https://github.com/faisalsiddiq87/email-delivery/tree/master/test).

## ScreenShots

* Please review [screenshots](https://github.com/faisalsiddiq87/email-delivery/tree/master/images) of email calls and received emails.