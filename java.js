function splitString() {
  var input = document.getElementById("input").value;
  if (input.includes("hottopic.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("hottopic.com")) {
      part1 = "https://www.dpbolvw.net/click-8310556-12641438?url=" + part1;
    }
  } else if (input.includes("boxlunch.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("boxlunch.com")) {
      part1 = "https://www.tkqlhce.com/click-8310556-12695057?url=" + part1;
    }
  } else if (input.includes("shopdisney.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("shopdisney.com")) {
      part1 = "https://www.tkqlhce.com/click-8310556-13227368?url=" + part1;
    }
  } else if (input.includes("gamestop.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("gamestop.com")) {
      part1 =
        "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=24348&murl=" +
        part1;
    }
  } else if (input.includes("walgreens.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("walgreens.com")) {
      part1 = "https://www.jdoqocy.com/click-8310556-11553095?url=" + part1;
    }
  } else if (input.includes("lego.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("lego.com")) {
      part1 =
        "https://click.linksynergy.com/deeplink?id=IdYcgGrVl44&mid=13923&murl=" +
        part1;
    }
  } else if (input.includes("booksamillion.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("booksamillion.com")) {
      part1 = "https://www.tkqlhce.com/click-8310556-11552245?url=" + part1;
    }
  } else if (input.includes("walmart.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("walmart.com")) {
      part1 =
        "https://goto.walmart.com/c/899674/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=" +
        part1;
    }
  } else if (input.includes("target.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("target.com")) {
      part1 =
        "https://www.ojrq.net/p/?return=https://goto.target.com/c/373031/81938/2092?u=" +
        part1;
    }
  } else if (input.includes("bestbuy.com")) {
    var parts = input.split("?");
    var part1 = parts[0];
    var part2 = parts[1];
    if (part1.includes("bestbuy.com")) {
      part1 = "https://bestbuy.7tiv.net/c/373031/614286/10014?u=" + part1;
    }
  } else {
    part1 = "Nope";
  }
  document.getElementById("output").value = part1;
  copyToClipboard(part1);
}
