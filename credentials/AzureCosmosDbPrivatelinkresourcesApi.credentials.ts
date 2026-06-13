import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureCosmosDbPrivatelinkresourcesApi implements ICredentialType {
        name = 'N8nDevAzureCosmosDbPrivatelinkresourcesApi';

        displayName = 'Azure Cosmos DB Privatelinkresources API';

        icon: Icon = { light: 'file:../nodes/AzureCosmosDbPrivatelinkresources/azure-cosmos-db-privatelinkresources.png', dark: 'file:../nodes/AzureCosmosDbPrivatelinkresources/azure-cosmos-db-privatelinkresources.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Cosmos DB Privatelinkresources API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
