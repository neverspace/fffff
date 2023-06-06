let tracklist = [
	{ "name": "Freddie Gibbs - Thuggin",
	  "time": "00:00 - 01:11",
	},
	{ "name": "Your Old Droog - Good Times",
	  "time": "01:12 - 02:15",
	},
	{ "name": "Deftones - Be Quiet and Drive (Far Away)",
	  "time": "02:16 - 03:09",
	},
	{ "name": "Suicide - Touch Me",
	  "time": "03:10 - 03:50",
	},
	{ "name": "Mass of the Fermenting Dregs - I F A SURFER",
	  "time": "03:51 - 05:12",
	},
	{ "name": "ZelooperZ - Arugula",
	  "time": "05:13 - 06:02",
	},
	{ "name": "The Weeknd - Gasoline",
	  "time": "06:15 - 07:27",
	},
	{ "name": "Skrillex - Doompy Poomp",
	  "time": "07:28 - 08:12",
	},
	{ "name": "oqbqbo - Airdrops",
	  "time": "08:13 - 09:35",
	},
	{ "name": "James Ferraro - Nushawn",
	  "time": "09:36 - 10:17",
	},
	{ "name": "Oneohtrix Point Never - We'll Take It",
	  "time": "10:18 - 11:20",
	},
	{ "name": "Triad God - Babe Don't Go",
	  "time": "11:21 - 11:51",
	},
	{ "name": "Thaiboy Digital - Nervous",
	  "time": "11:52 - 12:39",
	},
	{ "name": "Wifigawd - Scope",
	  "time": "12:40 - 13:25",
	},
	{ "name": "Suicide - Frankie Teardrop",
	  "time": "13:26 - 14:18",
	},
	{ "name": "DJ Rashad - I'm Gone",
	  "time": "14:19 - 15:18",
	},
	{ "name": "μ-Ziq - Catkin and Teasel",
	  "time": "15:19 - 16:56",
	},
	{ "name": "John Maus - My Whole World's Coming Apart",
	  "time": "16:57 - 18:08",
	},
	{ "name": "Living Life In The Night (DreiToenig Bootleg)",
	  "time": "18:09 - 19:34",
	},
	{ "name": "Angel Rada - Panico A Las 5am",
	  "time": "19:35 - 21:03",
	},
	{ "name": "Fishmans - Long Season",
	  "time": "21:05 - 22:28",
	},
	{ "name": "Weatherday - My Sputnik Sweetheart",
	  "time": "22:29 - 23:45",
	},
	{ "name": "Cities Aviv - Express Your Love",
	  "time": "23:46 - 25:21",
	},
	{ "name": "Black Kray - Yung 6 Speed",
	  "time": "25:22 - 26:53",
	},
	{ "name": "YAYAYI - /////// 6",
	  "time": "26:54 - 29:19",
	},
	{ "name": "Lil Ugly Mane - Achilles Foot",
	  "time": "29:20 - 31:29",
	},
	{ "name": "Death's Dynamic Shroud - Judgement Bolt",
	  "time": "31:33 - 33:31",
	},
	{ "name": "Boards of Canada - Corsair",
	  "time": "33:32 - 34:25",
	},
	{ "name": "Oneohtrix Point Never - Betrayed In The Octagon",
	  "time": "34:26 - 36:44",
	},
	{ "name": "Skrillex - Good Space",
	  "time": "36:45 - 37:48",
	},
	{ "name": "Dean Blunt - Galice",
	  "time": "37:49 - 39:04",
	},
	{ "name": "Full Body 2 - ador // ation",
	  "time": "39:05 - 40:51",
	},
	{ "name": "Aphrodite's Child - Aegian Sea",
	  "time": "40:53 - 43:18",
	},
	{ "name": "Gigi Mason - Call Me",
	  "time": "43:19 - 45:35",
	},
	{ "name": "Oneohtrix Point Never - Memory Vague",
	  "time": "45:39 - 48:01",
	},
];

document.body.onload = function() {
	fill_tracklist();
	spin();
}

function fill_tracklist() {
	let tracklist_div = document.getElementById("tracklist");
	for(let i = 0; i < tracklist.length; ++i) {
		let track = tracklist[i];
		let div= document.createElement("div");

		let p = document.createElement("p");
		p.innerHTML = track["time"];
		p.className = "track_time";
		p.onclick = function() {
			seek(track["time"]);
		}
		div.appendChild(p);

		p = document.createElement("p");
		p.innerHTML = track["name"];
		p.className = "track_name";
		div.appendChild(p);

		tracklist_div.appendChild(div);
	}
}

function spin() {
	let audio = document.querySelector("audio");
	let disc = document.getElementById("disc");
	disc.style.animationPlayState="paused"
	audio.onplay = function() {
		disc.style.animationPlayState="running"
	}
	audio.onpause = function() {
		disc.style.animationPlayState="paused"
	}
}

function seek(time) {
	let audio = document.querySelector("audio");
	let [start, stop] = time.split(" - ");
	let [m, s] = start.split(":");
	let timestamp_in_seconds = (parseInt(m) * 60) + parseInt(s);
	audio.currentTime = timestamp_in_seconds;
}
