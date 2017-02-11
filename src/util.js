function unifyParams(request)
{
	// To-Do: Implement
	return {name: 3};
}

function isValidRequest(request, requiredParams, response)
{
	// To-Do: Debug
	const params = unifyParams(request);
	var messages = [];
	for (var i = 0; i < requiredParams.length; i++)
	{
		const requiredParam = params[requiredParams[i]];
		if (requiredParam === undefined || requiredParam === null)
		{
			messages.push(`${requiredParams[i]} is required`);
		}
	}
	if (messages.length > 0)
	{
		res = {
			status: 400,
			messages: messages
		}
		response.status(res.status).json(res);
		return false;	
	}
	return true;
}

module.exports.unifyParams = unifyParams;
module.exports.isValidRequest = isValidRequest;
