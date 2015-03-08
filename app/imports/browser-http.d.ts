interface HttpBaseExtension
{

}


interface Http
{

	Extensions: Array<HttpBaseExtension>;

	addExtension(name: string, extension: HttpBaseExtension): Http;

}


declare module 'browser-http'
{

	export = __Http;

}

declare var __Http: Http;
