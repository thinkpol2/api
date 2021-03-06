import { Request } from 'express';

import { LogLevel } from '../core/server';

// Base class for data service implementations
// Implements the functionality executed when calling a route
export default class BaseService<T> {
  protected log: (level: LogLevel, message: string, req?: Request, err?: Error) => void;
  protected service: T;

  constructor(service: T, log: (level: LogLevel, message: string, req?: Request, err?: Error) => void) {
    this.service = service;
    this.log = log;
  }
}