function splitString() {
  const input = document.getElementById("input").value;
  const stores = {
    "hottopic.com": "https://www.dpbolvw.net/click-8310556-12641438?url=",
    "boxlunch.com": "https://www.tkqlhce.com/click-8310556-12695057?url=",
    "shopdisney.com": "https://www.tkqlhce.com/click-8310556-13227368?url=",
    "gamestop.com": "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=24348&murl=",
    "walgreens.com": "https://www.jdoqocy.com/click-8310556-11553095?url=",
    "lego.com": "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=13923&murl=",
    "booksamillion.com": "https://www.tkqlhce.com/click-8310556-11552245?url=",
    "walmart.com": "https://goto.walmart.com/c/899674/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=",
    "target.com": "https://goto.target.com/c/373031/81938/2092?u=",
    "bestbuy.com": "https://bestbuy.7tiv.net/c/373031/614286/10014?u=",
    "amazon.com": "?&linkCode=ll1&tag=fupone-20&linkId=7fd95c65fd643211a87550fcef50c597&language=en_US&ref_=as_li_ss_tl"
  };

  let part1 = "Nope";
  if (input.includes("?")) {
    const [url, queryString] = input.split("?");
    for (const storeUrl of Object.keys(stores)) {
      if (url.includes(storeUrl)) {
        if (storeUrl === "amazon.com") {
          part1 = url + stores[storeUrl]; // Append "hello" to the URL for amazon.com
        } else {
          part1 = stores[storeUrl] + url;
        }
        break;
      }
    }
  }

  document.getElementById("output").value = part1;
  copyToClipboard(part1);
}
