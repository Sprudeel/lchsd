//
// Part of the lchsd.ch Website!
//
// Made by @Sprudeel (GitHub)
//
// Repository: https://github.com/Sprudeel/lchsd
//
// 19.10.2021


// GitHub Activity Feed
GitHubActivity.feed({
    username: "Sprudeel",
    selector: "#feed",
    limit: 10,
  });



// GitHub Calender
GitHubCalendar(".calendar", "Sprudeel");
    
// or enable responsive functionality:
GitHubCalendar(".calendar", "Sprudeel", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "Sprudeel", {
    proxy (username) {
    return fetch(`https://your-proxy.com/github?user=${username}`)
    }
});