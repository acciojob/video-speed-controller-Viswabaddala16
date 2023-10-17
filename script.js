const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

// Add your existing event listeners here (e.g., togglePlay, updateButton, skip, handleRangeUpdate, handleProgress, and scrub functions)

const inputs = document.querySelectorAll('.player__slider');

function handleUpdate() {
  if (this.name === 'volume') {
    video.volume = this.value;
  }
  if (this.name === 'playbackRate') {
    video.playbackRate = this.value;
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
