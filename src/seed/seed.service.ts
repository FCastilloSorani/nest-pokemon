import { Injectable, Logger } from '@nestjs/common';

// Axios
import axios, { AxiosInstance } from 'axios';

// Interfaces
import { PokeResponse, Result } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private logger = new Logger('SeedService');

  private readonly axios: AxiosInstance = axios;

  async execute(): Promise<Result[]> {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    const mappedPokemons = [];

    for (const { name, url } of data.results) {
      const id: number = +url.split('/').at(-2);
      mappedPokemons.push({ name, id });
    }

    console.log(mappedPokemons);

    return data.results;
  }
}
