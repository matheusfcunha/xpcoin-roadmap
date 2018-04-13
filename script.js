const ITEMS = {
  title: "Items",
  icon: "items.png",
  item1: {
    title: "Education",
    text: "There is a lot of information when it comes to gaming and cryptocurrency. In order to keep people informed and up todate, XP will be aggregating gaming and gaming related news along with general cryptocurrency information to help people make a smooth transition from fiat to cryptocurrency.",
    icon: "education.png"
    },
  item2: {
    title: "Internationalization",
    text: "XP is used all over the world and to make sure people in differen countries have an easy time inthe XP ecosystem, we must make sure the our apps are translated properly and that each community has the support of the XP team.",
    icon: "internationalization.png"
  },
  item3: {
    title: "LevelUp Tutorials",
    text: "These are being created in order to help gamers increase their skills and even obtain other real world skills that are seen in games.",
    icon: "levelup.png"
  },
  item4: {
    title: "Apps",
    text: "Gaming and cryptocurrency both live in the digital world and through apps we can improve the exprience of each through the development of great apps.",
    icon: "apps.png"
  }
}

const QUESTS = {
  title: "Quests",
  icon: "quests.png",
  item1: {
    title: "Rebranding",
    text: "Our effort is to make sure we have a consistent brand message and look across all platforms. With a strong brand, we are more affective it all other efforts in attracting great partnerships, having strong community and influence over improving the gaming experience.",
    icon: "rebranding.png"
    },
  item2: {
    title: "Exchanges",
    text: "The more exchanges XP is on, the more exposure XP has. This is vital to growing and strengthening the XP community. We plan on attracting exchanges to us verus going to them by creating a stronger community and brand.",
    icon: "exchanges.png"
  },
  item3: {
    title: "Multicurrency Wallet",
    text: "Inclusion in multicurrency wallets will increase visibility, utility, ease of use and value of XP for the community.",
    icon: "multicurrency.png"
  },
  item4: {
    title: "Strategic Partnerships",
    text: "By partnering with local groups and events of all sizes, XP can be at the root level to improve the gaming experience.",
    icon: "partnership.png"
  }
}

const STATS = {
  title: "Stats",
  icon: "stats.png",
  item1: {
    title: "HP",
    text: "XP's overall health points. Unlike traditional games where this starts at 100%, crypto coins start at 0% and go up.",
    icon: "hp.png"
    },
  item2: {
    title: "Liquidity",
    text: "Liquidity is a measure of XP's market share, maturity and accecptance. The more exchanges XP is on, the stronger this will be.",
    icon: "liquidity.png"
  },
  item3: {
    title: "Development",
    text: "Development activity shows where XP is with major project completion. For example, if there are 10 projects and we're currently working on 3, we'd be at 30%.",
    icon: "development.png"
  },
  item4: {
    title: "Community",
    text: "Gaming and cryptocurrency both live in the digital world and through apps we can improve the exprience of each through the development of great apps.",
    icon: "community.png"
  }
}
// Icons Hover/Active Effect //
// Get the container element
var btnContainer = document.getElementById("central-icons-div");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("icon-box");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ------------------- //
const CONTENT = [ITEMS, QUESTS, STATS];
var contentFlag = 0;
var contentFlagLimiter = CONTENT.length -1;
const SOCIAL_CONTENT = "<a href=\"#\"><img class=\"social-links\" src=\"imgs/like.png\"></a><a href=\"#\"><img class=\"social-links\" src=\"imgs/facebook.png\"></a><a href=\"#\"><img class=\"social-links\" src=\"imgs/google.png\"></a><a href=\"#\"><img class=\"social-links\" src=\"imgs/youtube.png\"></a><a href=\"#\"><img class=\"social-links\" src=\"imgs/twitter.png\"></a><a href=\"#\"><img class=\"social-links\" src=\"imgs/rss.png\"></a>"

const INFO_TITLE = document.getElementById('info-title');
const INFO_ICON  = document.getElementById('info-icon');
const INFO_BOX = document.getElementById('info-box');
const INFO_BOX_TITLE = document.getElementById('info-box-title');
const INFO_BOX_CONTENT = document.getElementById('info-box-content');
const CONTENT_ICON_ALL = document.getElementsByClassName('icon-box');
const CONTENT_ICON_1 = document.getElementById('item1');
const CONTENT_ICON_2 = document.getElementById('item2');
const CONTENT_ICON_3 = document.getElementById('item3');
const CONTENT_ICON_4 = document.getElementById('item4');
const CONTENT_BTN_1 = document.getElementById('content-btn-1');
const CONTENT_BTN_2 = document.getElementById('content-btn-2');
const CONTENT_BTN_3 = document.getElementById('content-btn-3');
const CONTENT_BTN_4 = document.getElementById('content-btn-4');

document.getElementById('next').onclick = function() {next()};
document.getElementById('previous').onclick = function() {previous()};
document.getElementById('item1').onclick = function() {changeInfoText('item1')};
document.getElementById('item2').onclick = function() {changeInfoText('item2')};
document.getElementById('item3').onclick = function() {changeInfoText('item3')};
document.getElementById('item4').onclick = function() {changeInfoText('item4')};
document.getElementsByClassName('social-icons')[0].onclick = function() {showSocialLinks()};
document.getElementsByClassName('social-icons')[1].onclick = function() {showSocialLinks()};

function changeInfoText(item) {
  INFO_BOX_TITLE.innerHTML = CONTENT[contentFlag][item].title;
  INFO_BOX_CONTENT.innerHTML = CONTENT[contentFlag][item].text;
}

function flagIsAtLimit(flag) {
  if (flag === contentFlagLimiter) {
    return true;
  } else {
    return false;
  }
}

function flagIsAtBeginning(flag) {
  if (flag === 0) {
    return true;
  } else {
    return false;
  }
}

function next() {
  if (flagIsAtLimit(contentFlag)) {
    return undefined;
  } else {
    contentFlag += 1;
    changeContent(contentFlag);
  }
}

function previous() {
  if (flagIsAtBeginning(contentFlag)) {
    return undefined;
  } else {
    contentFlag -= 1;
    changeContent(contentFlag);
  }
}

function changeContent(flag) {
  removeElementsByClass('social-links');
  INFO_TITLE.innerHTML = CONTENT[flag].title;
  INFO_ICON.src = "imgs/" + CONTENT[flag].icon;
  INFO_BOX_TITLE.innerHTML = CONTENT[flag].item1.title;
  INFO_BOX_CONTENT.innerHTML = CONTENT[flag].item1.text;
  CONTENT_BTN_1.src = "imgs/" + CONTENT[flag].item1.icon;
  CONTENT_BTN_2.src = "imgs/" + CONTENT[flag].item2.icon;
  CONTENT_BTN_3.src = "imgs/" + CONTENT[flag].item3.icon;
  CONTENT_BTN_4.src = "imgs/" + CONTENT[flag].item4.icon;
  for (i=0; i < CONTENT_ICON_ALL.length; i++) {
    CONTENT_ICON_ALL[i].classList.remove("active");
  }
  CONTENT_ICON_1.classList.add("active");
}

function showSocialLinks() {
  INFO_BOX_TITLE.innerHTML = "Get in Touch";
  INFO_BOX_CONTENT.innerHTML = "";
  INFO_BOX_CONTENT.innerHTML = SOCIAL_CONTENT;

}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
