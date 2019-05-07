module.exports = routes = [
  {
    method: '*',
    path: '/{path*}',
    handler: {
      proxy: {
        passThrough: true,
        mapUri: request => {
          const slicedUrl = request.url.href
            .split('')
            .slice(request.url.origin.length)
            .join('');
          return {
            uri: `https://www.walmart.com/${slicedUrl}`
          };
        },
        onResponse: (err, res) => {
          err ? console.error('Error from stream response', err) : null;
          return res;
        }
      }
    }
  }
];
