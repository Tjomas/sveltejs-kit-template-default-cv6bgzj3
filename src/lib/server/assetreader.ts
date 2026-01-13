import { read } from "$app/server";

export async function readTestAsset(url:string){
    console.log('Trying to read the file', url);

    const data = await read(url).arrayBuffer();
    console.log(`Loaded file with size: ${data.byteLength} bytes`);
}