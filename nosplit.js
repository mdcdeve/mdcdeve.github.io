function noSplit() {
  const input = document.getElementById("input").value;
  const affiliateLinks = {
    "hottopic.com": "https://www.dpbolvw.net/click-8310556-12641438?url=",
    "boxlunch.com": "https://www.tkqlhce.com/click-8310556-12695057?url=",
    "shopdisney.com": "https://www.tkqlhce.com/click-8310556-13227368?url=",
    "gamestop.com": "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=24348&murl=",
    "walgreens.com": "https://www.jdoqocy.com/click-8310556-11553095?url=",
    "lego.com": "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=13923&murl=",
    "booksamillion.com": "https://www.tkqlhce.com/click-8310556-11552245?url=",
    "walmart.com": "https://goto.walmart.com/c/899674/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=",
    "target.com": "https://www.ojrq.net/p/?return=https://goto.target.com/c/373031/81938/2092?u=",
    "bestbuy.com": "https://bestbuy.7tiv.net/c/373031/614286/10014?u="
  };

  const domain = Object.keys(affiliateLinks).find((domain) => input.includes(domain));
  const part1 = domain ? affiliateLinks[domain] + input : "No Split";
  
  document.getElementById("output").value = part1;
  copyToClipboard(part1);
}
