import { Client , Databases  } from "appwrite";
const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65ddd864afdecbb2c913");

export const databases =  new Databases(client);