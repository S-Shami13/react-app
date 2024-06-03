import createApiClient, { AxiosInstance } from "./api-client";

class HttpService {
    endpoint: string;
    apiClient: AxiosInstance;

    constructor(endpoint: string, baseUrl: string) {
        this.endpoint = endpoint;
        this.apiClient = createApiClient(baseUrl);
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = this.apiClient.get<T[]>(this.endpoint, { signal: controller.signal});
        return { request, cancel: () => controller.abort() }
    }

    delete(id: Number) {
        return this.apiClient.delete(this.endpoint + '/' + id);
    }
    
    create<T>(entity: T) {
        return this.apiClient.post(this.endpoint, entity);
    }

    update<T>(entity: T) {
        return this.apiClient.patch(this.endpoint, entity);
    }
}

const create = (endpoint: string, baseUrl: string) => new HttpService(endpoint, baseUrl);


export default create;