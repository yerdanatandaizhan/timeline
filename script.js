// 1) Your post data array
const posts = [
  {
    id: 1,
    title: "Первый диалог!💬",
    description: "Первое сообщение и первый диалог, кстати, тоже 14 числа :)",
    imageUrl: "images/01.jpeg",
    timestamp: "2024-07-14T14:34:00", // ISO format
  },
  {
    id: 2,
    title: '"Привет!👋"',
    description: ' Наша первая встреча и легендарный "Привет!"',
    imageUrl: "images/02.jpeg",
    timestamp: "2024-08-21T16:00:00",
  },
  {
    id: 3,
    title: "Мафия🕵️‍♂️",
    description: "Первые сборы и игры)",
    imageUrl: "images/03.jpg",
    timestamp: "2024-08-24T22:00:00",
  },
  {
    id: 4,
    title: "Корнииш🌆",
    description:
      "Одно из первых совместных воспоминаний. Кстати, Астана или Абу Даби?)",
    imageUrl: "images/04.jpeg",
    timestamp: "2024-09-20T21:20:13",
  },
  {
    id: 5,
    title: "Первый Стади Рум📚",
    description:
      "В тот день мы впервые сели вместе в стади рум после глобал едукейшна",
    imageUrl: "images/05.jpg",
    timestamp: "2024-09-26T15:34:43",
  },
  {
    id: 6,
    title: "Дубай Трип",
    description: "Какой же классный трип: Глобал Вилладж, Мадинат и Яхта🛥️",
    imageUrl: "images/06.jpeg",
    timestamp: "2024-10-16T11:11:42",
  },
  {
    id: 7,
    title: "Роон🐈",
    description: "В тот день мы в первый раз встретили рона на споте",
    imageUrl: "images/07.jpeg",
    timestamp: "2024-11-07T23:20:00",
  },
  {
    id: 8,
    title: "Рассвет на великах🌅",
    description: "Этот хайлайт я никогдаа не забуду))",
    imageUrl: "images/08.jpeg",
    timestamp: "2024-11-11T06:00:30",
  },
  {
    id: 9,
    title: "Арт выставка🏛️",
    description:
      "Как же мы потратили несколько часов на первых секциях чтоб потом перебежать остальные за полчаса.",
    imageUrl: "images/09.jpeg",
    timestamp: "2024-11-24T19:49:32",
  },
  {
    id: 10.5,
    title: "UAE day🇦🇪",
    description: "Тоже очеень запоминающийся день, особенно салют🤩🤩",
    imageUrl: "images/10.5.jpeg",
    timestamp: "2024-12-02T21:14:42",
  },
  {
    id: 13,
    title: "Второй семестр🎓",
    description:
      "Никогда не забуду слова Николеты, 'думаешь она поймет от кого цветы?)'",
    imageUrl: "images/13.jpg",
    timestamp: "2025-01-20T16:44:12",
  },
  {
    id: 13,
    title: "Первый Boozaji🍨",
    description: "Отпраздновали начало второго семестра)'",
    imageUrl: "images/13.jpg",
    timestamp: "2025-01-21T21:00:12",
  },
  {
    id: 15,
    title: "Первый триип🌴",
    description:
      "Первый совместный трип!! И, кстати, первая совместная фотка)'",
    imageUrl: "images/15.jpeg",
    timestamp: "2025-01-25T16:24:48",
  },
  {
    id: 16,
    title: "Твое День Рождение🎉",
    description:
      "Все еще помню как я чуть-чуть не рассчитал со временем и мы опоздали, как мы поели чизкейк и как гуляли возле трех башен)",
    imageUrl: "images/16.jpg",
    timestamp: "2025-02-11T00:00:00",
  },
  {
    id: 16.5,
    title: "SeaWorld🐬",
    description:
      "Кто-то очеень давноо хотел туда сходить) Потрогать ската и увидеть дельфинов✅",
    imageUrl: "images/16.5.jpeg",
    timestamp: "2025-03-23T14:16:33",
  },
  {
    id: 17,
    title: "Seoul Tower ❤️🔒",
    description:
      "Мой самый любимый день за второй семестр: Йонсей, Роллинг Паста, Старфилд, Ганнам Стайл и Сеул Тауэр🤩",
    imageUrl: "images/17.jpeg",
    timestamp: "2025-03-31T23:11:00",
  },
  {
    id: 18,
    title: "Пусан🦊",
    description:
      "Тоже очеень интересный день) Стояли в очереди за фоном маленького принца, гуляли по биффу, а затем увидели каист🤩",
    imageUrl: "images/18.jpg",
    timestamp: "2025-04-02T08:30:11",
  },
  {
    id: 19,
    title: "Дэйт у Хан Ривера🌉",
    description: "Крайний день в Корее тоже был очень интересным)",
    imageUrl: "images/19.jpeg",
    timestamp: "2025-04-04T19:34:15",
  },
  {
    id: 20,
    title: "Первый Концерт🎤🎸",
    description:
      "Perfect, Shape of you, Apologise & Counting Stars🔝 (P/S: ну и Алабай тоже)",
    imageUrl: "images/20.jpg",
    timestamp: "2025-04-26T23:16:38",
  },
  {
    id: 21,
    title: "Последний день второго семестра :(",
    description:
      "Как же мне понравилось завершение второго семестра: Маркетплейс, Миск и Антонио, и два целых дня с тобой - самый лучший дистрэссер после файналов",
    imageUrl: "images/21.jpg",
    timestamp: "2025-05-17T18:00:00",
  },
  {
    id: 22,
    title: "Астана🇰🇿",
    description:
      "Ботанический, Экспо, Хан Шатыр и Колесо Обозрения, первый дождь и еще столько всего нас ждет за следующие 2 месяца.... ",
    imageUrl: "images/23.jpg",
    timestamp: "2025-06-01T21:00:00",
  },
  {
    id: 23,
    title: "🇰🇿Казахстан-Македония",
    description: "Наш Первый Футбольный матч :)",
    imageUrl: "images/match.jpg",
    timestamp: "2025-06-01T21:00:00",
  },
];

// 2) Utility to compute "ago"
function getRelativeTime(ts) {
  const now = new Date();
  const then = new Date(ts);
  let delta = Math.floor((now - then) / 1000); // total seconds

  const days = Math.floor(delta / 86400);
  delta %= 86400;
  const hours = Math.floor(delta / 3600);
  delta %= 3600;
  const minutes = Math.floor(delta / 60);
  const seconds = delta % 60;

  const parts = [];
  if (days) parts.push(`${days} дней`);
  if (hours) parts.push(`${hours} часов`);
  if (minutes) parts.push(`${minutes} минут`);
  parts.push(`${seconds} секунд`);

  return parts.join(" ");
}

// 3) Render posts and start interval
function renderPosts() {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "post";
    card.innerHTML = `
        <div class="post-image">
          <img src="${post.imageUrl}" alt="${post.title}">
        </div>
        <div class="post-details">
          <div class="relative-time" data-ts="${post.timestamp}"></div>
          <h2 class="post-title">${post.title}</h2>
          <p class="description">${post.description}</p>

        </div>
      `;
    container.appendChild(card);
  });
  const infinityCard = document.createElement("div");
  infinityCard.className = "post";
  infinityCard.innerHTML = `
    <div class="post-image">
      <img src="images/next.jpg" alt="Coming soon...">
    </div>
    <div class="post-details">
      <div class="relative-time infinite">∞</div>
      <h2 class="post-title">Coming soon...</h2>
      <p class="description">Архив будет еще долго пополняться)</p>
    </div>
  `;
  container.appendChild(infinityCard);
  updateRelativeTimes();
}

function updateRelativeTimes() {
  document.querySelectorAll(".relative-time[data-ts]").forEach((el) => {
    const ts = el.getAttribute("data-ts");
    el.textContent = getRelativeTime(ts) + " назад был...";
  });
}
// 1) Define your playlist:
const tracks = [
  {
    title: "Every breath you take",
    artist: "The Police",
    src: "music/everybreath.mp3",
    cover: "music/everybreath.jpeg",
  },
  {
    title: "I just called to say",
    artist: "Stevie Wonder",
    src: "music/Ijustcalled.mp3",
    cover: "music/Ijustcalled.jpg",
  },
  {
    title: "Thinking out Loud",
    artist: "Ed Sheeran",
    src: "music/thinking.mp3",
    cover: "music/thinking.jpeg",
  },
  {
    title: "Sunday Morning",
    artist: "Maroon 5",
    src: "music/sunday.mp3",
    cover: "music/sunday.jpeg",
  },
  {
    title: "Вахтерам",
    artist: "Бумбокс",
    src: "music/vahteram.mp3",
    cover: "music/vahteram.jpg",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "music/perfect.mp3",
    cover: "music/perfect.jpeg",
  },
];

let current = 0;
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("track-title");
const artist = document.getElementById("track-artist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const btnToggle = document.getElementById("toggle");
const btnNext = document.getElementById("next");

// 2) Load a track by index
function loadTrack(i) {
  const t = tracks[i];
  audio.src = t.src;
  cover.src = t.cover;
  title.textContent = t.title;
  artist.textContent = t.artist;
  audio.load();
  audio.addEventListener("loadedmetadata", () => {
    const d = audio.duration;
    durationEl.textContent = formatTime(d);
  });
}

// 3) Format seconds → M:SS
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// 4) Update progress bar & time
audio.addEventListener("timeupdate", () => {
  const pct = (audio.currentTime / audio.duration) * 100;
  progress.style.width = pct + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// 5) Play / Pause toggle
btnToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnToggle.textContent = "❚❚";
  } else {
    audio.pause();
    btnToggle.textContent = "▶︎";
  }
});

// 6) Next track
btnNext.addEventListener("click", () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
  audio.play();
  btnToggle.textContent = "❚❚";
});

// 7) Kick things off
document.addEventListener("DOMContentLoaded", () => {
  loadTrack(current);

  // the autoplay attribute should trigger playback,
  // but let's also call play() in case:
  audio
    .play()
    .then(() => {
      btnToggle.textContent = "❚❚";
    })
    .catch((err) => {
      console.warn("Autoplay blocked by browser:", err);
    });

  // only init posts on the timeline page
  const container = document.getElementById("posts-container");
  if (container) {
    renderPosts();
    setInterval(updateRelativeTimes, 1000);
  }
});
// initial render
renderPosts();
// update every second
setInterval(updateRelativeTimes, 1000);
(function () {
  const container = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    // random horizontal start
    heart.style.left = Math.random() * 100 + "vw";

    // random size between 12px–32px
    const size = Math.random() * 20 + 12;
    heart.style.fontSize = size + "px";

    // random fall duration between 3–6 seconds
    heart.style.animationDuration = Math.random() * 3 + 25 + "s";

    container.appendChild(heart);

    // remove from DOM once the animation is over
    setTimeout(
      () => container.removeChild(heart),
      parseFloat(heart.style.animationDuration) * 1000
    );
  }

  // spawn a new heart every 200ms (adjust rate to taste)
  setInterval(createHeart, 3500);
})();
