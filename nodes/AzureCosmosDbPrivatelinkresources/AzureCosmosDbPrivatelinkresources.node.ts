import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureCosmosDbPrivatelinkresources implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Cosmos DB Privatelinkresources',
                name: 'N8nDevAzureCosmosDbPrivatelinkresources',
                icon: { light: 'file:./azure-cosmos-db-privatelinkresources.png', dark: 'file:./azure-cosmos-db-privatelinkresources.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Cosmos DB Database Service Resource Provider REST API',
                defaults: { name: 'Azure Cosmos DB Privatelinkresources' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureCosmosDbPrivatelinkresourcesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
