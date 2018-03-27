export const sensitiveWOrds = (content, words) => content.replace(new RegExp(words.join('|'), 'ig'), '*****');
