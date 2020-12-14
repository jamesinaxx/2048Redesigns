chrome.runtime.onInstalled.addListener(function () {
    console.log("Extension installed and activated!");
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                hostContains: ''
            },
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});