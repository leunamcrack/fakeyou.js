const baseURL = 'https://api.fakeyou.com';

module.exports.URL = {
    base: baseURL,
    webPage: 'https://fakeyou.com',
    gravatar: 'https://www.gravatar.com/avatar/',
    cdn: 'https://storage.googleapis.com/vocodes-public',
    models: baseURL + '/tts/list',
    categories: baseURL + '/category/list/tts',
    login: baseURL + '/login',
    session: baseURL + '/session',
    queue: baseURL + '/tts/queue_length',
    inference: baseURL + '/tts/inference',
    job: (token) => { return `${baseURL}/tts/job/${token}` },
    model: (token) => { return `${baseURL}/tts/model/${token}`},
    category: (token) => { return `${baseURL}/category/view/${token}` },
    assignments: (token) => { return `${baseURL}/category/assignments/tts/${token}` },
    result: (token) => { return `${baseURL}/tts/result/${token}`}, 
    profile: (user) => { return `${baseURL}/user/${user}/profile` },
    editProfile: (user) => { return `${baseURL}/user/${user}/edit_profile` },
    ttsResults: (user) => { return `${baseURL}/user/${user}/tts_results` },
    ttsModels: (user) => { return `${baseURL}/user/${user}/tts_models` }
};
module.exports.Error = {
    webUnavailable: 'The FakeYouAPI is not available',
    alreadyLogged: 'You have already logged in',
    notModel: 'The voice option is missing',
    notText: 'The text option is missing',
    invalidToken: 'Invalid token',
    noAudioPath: 'The poll has not been finished',
    failureResult: (token) => { return `The "${token}" request is a completed failure` },
    optionNotFound: (option) => { return `Required option "${option}" re is missing` },
    invalidType: (value, type) => { return `"${value}" option must be a${/^[aieou].*/i.test(type) ? 'n' : ''} ${type}` },
    invalidOption: (option) => { return `The provided option "${option}" is invalid or not matches the verification` },
    modelNotFound: (data) => `"${data}" model not found`,
    notCredentials: (option) => { return `The ${option} credential is missing` }
};
module.exports.RegExp = {
    user: /^(?:U:(?:[A-Z0-9]){13})$/,
    model: /^(?:TM:(?:[a-z0-9]){12})$/,
    ttsResult: /^(?:TR:(?:[a-z0-9]){29})$/,
    job: /^(?:JTINF:(?:[a-z0-9]){26})$/,
    category: /^(?:CAT:(?:[a-z0-9]){11})$/,
    twitter: /(?:^[A-Za-z0-9_]{4,15})$/,
    discord: /^.{2,32}\#\d{4}$/,
    twitch: /^[a-zA-Z0-9](?:[a-zA-Z0-9_]){3,25}$/,
    cashapp: /^.{1,20}$/,
    github: /^[A-Za-z0-9](?:[A-za-z0-9]|-(?=[a-z\d])){0,38}$/,
    website: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
};