function noSplit() {
  const input = document.getElementById("input").value;
  const affiliateLinks = {
    "hottopic.com": "https://www.tkqlhce.com/click-8310556-12641438?url=",
    "boxlunch.com": "https://www.tkqlhce.com/click-8310556-12695057?url=",
    "disneystore.com": "https://www.anrdoezrs.net/click-8310556-11554175?url=",
    "walgreens.com": "https://www.anrdoezrs.net/click-8310556-11553095?url=",
    "booksamillion.com": "https://www.anrdoezrs.net/click-8310556-11552245?url=",
    "funko.com": "https://www.dpbolvw.net/click-8310556-15251747?url=",
    "barnesandnoble.com": "https://www.kqzyfj.com/click-8310556-12366831?url=",
    "2ndandcharles.com": "https://www.jdoqocy.com/click-8310556-15494442?url=",
    "fye.com": "https://www.kqzyfj.com/click-8310556-15558078?url=",
    "amazon.com": "&linkCode=ll2&tag=fupone-20&linkId=b368190afcd29e05f4e85f63a9579031&language=en_US&ref_=as_li_ss_tl",
    "gamestop.com": "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=24348&murl=",
    "lego.com": "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=13923&murl=",
    "wwe.com": "https://wwe-shop.sjv.io/c/899674/1371040/16449?u=",
    "walmart.com": "https://goto.walmart.com/c/899674/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=",
    "target.com": "https://goto.target.com/c/373031/81938/2092?u=",
    "bestbuy.com": "https://bestbuy.7tiv.net/c/373031/614286/10014?u="
  };

  const domain = Object.keys(affiliateLinks).find((domain) =>
    input.includes(domain)
  );

  let part1;
  if (domain) {
    part1 =
      domain === "amazon.com"
        ? input + affiliateLinks[domain]
        : affiliateLinks[domain] + input;
  } else {
    part1 = "No Split";
  }

  document.getElementById("output").value = part1;
  copyToClipboard(part1);
}
