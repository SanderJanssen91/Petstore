import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:8080/';
    public ApiUrl: string = 'Back-end-1.0/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}