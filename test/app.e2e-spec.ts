import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SendMailDTOStub } from './stubs/send-mail.dto.stub';
import { SendErrorDTOStub } from './stubs/send-error.dto.stub';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  })

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
    .get('/')
    .expect(200)
    .expect('Hello World!');
  })

  it(`should send the email`, async () => {
    const resp = await request(app.getHttpServer())
    .post('/mail')
    .send(SendMailDTOStub())
    .expect(201);
  })

  it(`should not send the email`, async () => {
    const resp = await request(app.getHttpServer())
    .post('/mail')
    .send(SendErrorDTOStub());

    expect(resp.accepted).toBe(false);
  })

});
