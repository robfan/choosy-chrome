var Choosy = {
  promptAll: function(url) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "x-choosy://prompt.all/" + escape(url));
    document.body.appendChild(iframe);
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  Choosy.promptAll(tab.url);
});

chrome.contextMenus.create({
  title: "Open with Choosy",
  contexts: ["link"],
  onclick: function(info, tab) {
    Choosy.promptAll(info.linkUrl);
  }
});
