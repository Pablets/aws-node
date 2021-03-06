'use strict';

module.exports.hello = async event => {
	// console.log(event.pathParameters.name);
	const replyTo =
		event.pathParameters.name;
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: `Hello there ${replyTo}!`
			},
			null,
			2
		)
	};

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
