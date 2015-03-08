import http = require('browser-http');


/**
 * @author David Kudera
 */
class Http
{


	static setup()
	{
		http.addExtension('loading', new http.Extensions['Loading']);
		http.addExtension('redirect', new http.Extensions['Redirect']);
	}

}

export = Http;
