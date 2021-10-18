
GitHubActivity.feed({
    username: "Sprudeel",
    selector: "#feed",
    limit: 10,
  });


GitHubCalendar(".calendar", "Sprudeel");
    
// or enable responsive functionality:
GitHubCalendar(".calendar", "Sprudeel", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "Sprudeel", {
    proxy (username) {
    return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => r.text());