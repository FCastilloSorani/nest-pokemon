import { Injectable, Logger } from '@nestjs/common';

// Axios
import axios, { AxiosInstance } from 'axios';

// Interfaces
import { HttpAdapter } from '@common/interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;
  private logger = new Logger('AxiosAdapter');

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
