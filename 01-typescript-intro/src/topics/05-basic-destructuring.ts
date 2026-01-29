interface AudioPlayer {
  AudioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  AudioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const { AudioVolume, songDuration: duration, song, details } = audioPlayer;
const { author } = details;

// console.log("Audio Volume:", AudioVolume);
// console.log("Song Duration:", duration);
// console.log("Song:", song);
// console.log("Author:", author);

export {};
